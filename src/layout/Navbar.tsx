import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useAppDispatch, useAppSelector } from "../hooks/useredux";
import { useEffect, useRef } from "react";
import { Heart, LogOut, ShoppingBag, User } from "lucide-react";
import { logout } from "../store/slices/auth.slice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const navItems = ["Home", "About Us", "Shop", "Blog", "Contact"];
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/aboutus",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const dispatch = useAppDispatch();

  // const navigate = useNavigate();
  const { isAuthenticate, user } = useAppSelector((state) => state.auth);

  return (
    <header className="w-full bg-[#f3ede4] border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a className="cursor-pointer" onClick={() => navigate("/")}>
          {" "}
          <img src="./Rituals.png" alt="logo" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {/* Nav Links */}
          <nav className="flex items-center gap-6 text-sm text-[#5a0a2a]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-purple-900 font-bold text-[16px]"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search */}
          <div className="relative w-56 xl:w-64">
            <input
              type="text"
              placeholder="What are you looking for"
              className="w-full pl-4 pr-10 py-2 rounded-full bg-white border text-sm focus:outline-none"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {isAuthenticate ? (
              <div className="relative" ref={dropdownRef}>
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onClick={() => setProfileOpen((prev) => !prev)}
                >
                  {user?.name?.charAt(0).toUpperCase()}
                </Avatar>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-4 border-b">
                      <p className="text-sm text-gray-500">Hello,</p>
                      <h3 className="font-semibold">{user?.name}</h3>
                    </div>

                    <button
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                      onClick={() => {
                        navigate("/profile");
                        setProfileOpen(false);
                      }}
                    >
                      <User size={18} />
                      My Profile
                    </button>

                    <button
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                      onClick={() => {
                        navigate("/orders");
                        setProfileOpen(false);
                      }}
                    >
                      <ShoppingBag size={18} />
                      My Orders
                    </button>

                    <button
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                      onClick={() => {
                        navigate("/wishlist");
                        setProfileOpen(false);
                      }}
                    >
                      <Heart size={18} />
                      Wishlist
                    </button>

                    <button
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50"
                      onClick={() => {
                        dispatch(logout());
                        navigate("/");
                        setProfileOpen(false);
                      }}
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <FiUser
                onClick={() => navigate("/login")}
                className="cursor-pointer hover:text-purple-900"
              />
            )}
            <FiHeart
              onClick={() => navigate("/wishlist")}
              className="cursor-pointer hover:text-purple-900"
            />
            <FiShoppingCart
              className="cursor-pointer hover:text-purple-900"
              onClick={() => navigate("/cart")}
            />
          </div>
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f3ede4] border-t px-6 pb-6">
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-10 py-2 rounded-full bg-white border text-sm focus:outline-none"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <nav className="flex flex-col gap-3 mt-5 text-gray-700">
            {navItems.map((item, index) => (
              <a key={index} href="#" onClick={() => navigate(item.path)}>
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-6 mt-5">
            {isAuthenticate ? (
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onClick={() => navigate("/profile")}
              >
                {user?.name?.charAt(0).toUpperCase()}
              </Avatar>
            ) : (
              <FiUser onClick={() => navigate("/login")} />
            )}
            <FiHeart onClick={() => navigate("/wishlist")} />
            <FiShoppingCart onClick={() => navigate("/cart")} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
