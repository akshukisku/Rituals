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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const navItems = ["Home", "About Us", "Shop", "Blog", "Contact"];
const navigate = useNavigate();
  const navItems = [{
    name:"Home",
    path:"/"
  },{
    name:"About Us",
    path:"/aboutus"
  },{
    name:"Shop",
    path:"/shop"
  },{
    name:"Blog",
    path:"/blog"
  },{
    name:"Contact",
    path:"/contact"
  }]

  // const navigate = useNavigate();

  return (
    <header className="w-full bg-[#f3ede4] border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <img src="./Rituals.png" alt="logo" className="h-10" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">

          {/* Nav Links */}
          <nav className="flex items-center gap-6 text-sm text-[#5a0a2a]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-purple-900 font-bold text-[16px]"
                onClick={()=>navigate(item.path)}
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
            <FiUser className="cursor-pointer hover:text-purple-900" />
            <FiHeart className="cursor-pointer hover:text-purple-900" />
            <FiShoppingCart className="cursor-pointer hover:text-purple-900" onClick={()=>navigate("/cart")} />
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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
              <a key={index} href="#" onClick={()=>navigate(item.path)}>
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-6 mt-5">
            <FiUser />
            <FiHeart />
            <FiShoppingCart />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;