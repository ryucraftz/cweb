import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const CourseNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out. Redirecting to login.");
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur-xl border-b border-gray-200
        shadow-sm
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Placeholder / Logo */}
        <div className="w-1/3 flex items-center">
          <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-wider">
            ZGOD.AI
          </span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex justify-center space-x-8 w-1/3">
          <Link
            to="/dashboard"
            className={`font-medium transition-all duration-300 ${
              isActive("/dashboard")
                ? "text-blue-600 drop-shadow-sm"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Course Overview
          </Link>

          <Link
            to="/modules"
            className={`font-medium transition-all duration-300 ${
              isActive("/modules")
                ? "text-blue-600 drop-shadow-sm"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Modules
          </Link>

          <Link
            to="/about"
            className={`font-medium transition-all duration-300 ${
              isActive("/about")
                ? "text-blue-600 drop-shadow-sm"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            About
          </Link>
        </div>

        {/* Right: Logout */}
        <div className="hidden md:flex justify-end w-1/3">
          <button
            onClick={handleLogout}
            className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-semibold text-sm border border-gray-200 hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-md transition-all duration-300 ease-out"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-end w-1/3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-200 shadow-xl">
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className={`font-medium text-lg transition-colors ${
                isActive("/dashboard") ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Course Overview
            </Link>

            <Link
              to="/modules"
              onClick={() => setMenuOpen(false)}
              className={`font-medium text-lg transition-colors ${
                isActive("/modules") ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Modules
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`font-medium text-lg transition-colors ${
                isActive("/about") ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
              }`}
            >
              About
            </Link>

            <button
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              className="mt-4 bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-semibold border border-gray-200 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CourseNavbar;
