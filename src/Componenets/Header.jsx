import React from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="lg:mr-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="lg:mr-4">
        <NavLink
          to="/allPlants"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          All Plants
        </NavLink>
      </li>
      <li className="lg:mr-4">
        <NavLink
          to="/add-plant"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          Add Plant
        </NavLink>
      </li>
      <li className="lg:mr-4">
        <NavLink
          to="/my-plants"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          My Plants
        </NavLink>
      </li>
    </>
  );

  // Mobile-only auth links for dropdown menu
  const mobileAuthLinks = (
    <>
      <div className="divider my-2 sm:hidden"></div>
      <li className="sm:hidden">
        <Link
          to="/logIn"
          className="text-gray-700 hover:text-green-500 pb-1 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          Log In
        </Link>
      </li>
      <li className="sm:hidden">
        <Link
          to="/register"
          className="text-gray-700 hover:text-green-500 pb-1 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          Register
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
              {mobileAuthLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl text-green-500">
            Plant Care
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {/* Profile icon always visible */}
          <div className="mr-2">
            <Link to="my-profile">
              <img
                src={userIcon}
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer"
                data-tooltip-id="userTooltip"
                data-tooltip-content="Guest"
              />
              <Tooltip id="userTooltip" place="bottom" />
            </Link>
          </div>
          
          {/* Auth buttons - hidden only on very small screens (mobile) */}
          <div className="hidden sm:flex space-x-2 pr-4">
            <Link to="/logIn" className="btn bg-green-500 hover:bg-green-600 text-white">
              Log In
            </Link>
            <Link to="/register" className="btn bg-green-500 hover:bg-green-600 text-white">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;