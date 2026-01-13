import React from 'react'
import Long_logo from '../../assets/Long_logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={Long_logo} className="h-12 w-auto" alt="CyberThana logo" />
          <span className="font-extrabold text-xl text-gray-800 tracking-wide">
            CyberThana
          </span>
        </div>

        {/* Center Menu */}
        <div className="flex gap-8 text-gray-700 font-semibold">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/awareness" className="hover:text-blue-600 transition">Awareness</Link>
          <Link to="/track" className="hover:text-blue-600 transition">Track Report</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <Link
            to="/citizen/login"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Citizen Portal
          </Link>

          <Link
            to="/official/login"
            className="px-5 py-2 border border-blue-600 text-blue-700 rounded-lg hover:bg-blue-50 transition"
          >
            Official Login
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
