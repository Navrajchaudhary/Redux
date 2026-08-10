import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
return (
  <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between h-16">

        {/* Logo */}
        <Link to='/' className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-600/30">
            M
          </div>

          <h1 className="text-2xl font-bold text-white">
            Media <span className="text-blue-500">Search</span>
          </h1>
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          <Link to='/' className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-600/30">
            Search
          </Link>

          <Link to='/collections' className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-600/30">
            Collections
          </Link>

        </div>

      </div>
    </div>
  </nav>
);
};

export default Navbar;