import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router'; // make sure you're using react-router-dom
import { AuthContext } from '../Provider/AuthProvider';
import { FaBars, FaTimes } from 'react-icons/fa'; // for hamburger icons

const DashAside = () => {
  const { user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-white bg-green-600 font-semibold px-4 py-2 rounded-lg block'
      : 'text-green-700 hover:text-green-800 hover:bg-green-100 px-4 py-2 rounded-lg transition block';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Topbar for small screens */}
      <div className="lg:hidden flex justify-between items-center py-4 px-4 bg-white shadow rounded-xl mb-4">
        <Link to="/" className="text-xl font-bold text-green-600">
          Plant Care
        </Link>
        <button
          onClick={toggleMenu}
          className="text-green-700 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar on large screens or collapsible menu on small screens */}
      <div
        className={`space-y-4 transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        {/* Only show name on large screen */}
        <div className="hidden lg:block mb-4">
          <Link to="/" className="text-xl font-bold text-green-600">
            Plant Care
          </Link>
        </div>

        <ul className="menu space-y-2">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" end className={navLinkStyle}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allPlants" className={navLinkStyle}>
              All Plants
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/dashboard/add-plant" className={navLinkStyle}>
                  Add Plant
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myplants" className={navLinkStyle}>
                  My Plants
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/dashboard/about-us" className={navLinkStyle}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact-us" className={navLinkStyle}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashAside;
