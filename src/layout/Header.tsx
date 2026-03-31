
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <>
      <div className="w-full bg-[#e9e1d6] text-sm py-2 text-gray-700">
        <div className="max-w-7xl mx-auto px-4 relative flex flex-col items-center md:flex-row md:justify-center">

          {/* Offer Text */}
          <p className="text-center">
            Exclusive 20% off in any product
          </p>

          {/* Login / Signup */}
          <a
            href="#"
            className="mt-1 md:mt-0 md:absolute md:right-4 hover:text-purple-900 text-sm"
          >
            Login / Sign up
          </a>

        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;