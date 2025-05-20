import React from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const links = (
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl text-green-500">
            Plant Care
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end space-x-2">
          <div className="flex justify-center gap-2">
            <Link to="my-profile">
              <img
                src={userIcon}
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer"
                data-tooltip-id="userTooltip"
                data-tooltip-content="Guest"
              />
            </Link>
            <Link to="/login" className="btn bg-green-500 text-white">
              Log In / Register
            </Link>
            <Tooltip id="userTooltip" place="bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
