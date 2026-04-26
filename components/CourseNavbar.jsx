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
        bg-slate-950/60 backdrop-blur-xl border-b border-white/[0.05]
        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Placeholder / Logo */}
        <div className="w-1/3 flex items-center">
          <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 tracking-wider">
            ZGOD.AI
          </span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex justify-center space-x-8 w-1/3">
          <Link
            to="/dashboard"
            className={`font-medium transition-all duration-300 ${
              isActive("/dashboard")
                ? "text-teal-400 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                : "text-slate-400 hover:text-teal-300"
            }`}
          >
            Course Overview
          </Link>

          <Link
            to="/modules"
            className={`font-medium transition-all duration-300 ${
              isActive("/modules")
                ? "text-teal-400 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                : "text-slate-400 hover:text-teal-300"
            }`}
          >
            Modules
          </Link>

          <Link
            to="/about"
            className={`font-medium transition-all duration-300 ${
              isActive("/about")
                ? "text-teal-400 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                : "text-slate-400 hover:text-teal-300"
            }`}
          >
            About
          </Link>
        </div>

        {/* Right: Logout */}
        <div className="hidden md:flex justify-end w-1/3">
          <button
            onClick={handleLogout}
            className="bg-slate-800/50 text-slate-300 px-5 py-2 rounded-full font-semibold text-sm border border-white/[0.1] hover:bg-red-500/80 hover:text-white hover:border-red-400/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300 ease-out"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-end w-1/3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-300 hover:text-teal-400 focus:outline-none transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-white/[0.05] shadow-2xl">
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className={`font-medium text-lg transition-colors ${
                isActive("/dashboard") ? "text-teal-400" : "text-slate-300 hover:text-teal-300"
              }`}
            >
              Course Overview
            </Link>

            <Link
              to="/modules"
              onClick={() => setMenuOpen(false)}
              className={`font-medium text-lg transition-colors ${
                isActive("/modules") ? "text-teal-400" : "text-slate-300 hover:text-teal-300"
              }`}
            >
              Modules
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`font-medium text-lg transition-colors ${
                isActive("/about") ? "text-teal-400" : "text-slate-300 hover:text-teal-300"
              }`}
            >
              About
            </Link>

            <button
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              className="mt-4 bg-slate-800/50 text-slate-300 px-6 py-2 rounded-full font-semibold border border-white/[0.1] hover:bg-red-500/80 hover:text-white transition-all duration-300"
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
