import React, { useContext } from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

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
      {user && (
        <>
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
          <li className="lg:mr-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
                  : "text-gray-700 hover:text-green-500 pb-1"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li className="lg:mr-4">
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="lg:mr-4">
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mb-1 navbar bg-base-100 shadow-sm fixed top-0 z-50">
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
            {!user ? (
              <>
                <div className="divider my-2 sm:hidden"></div>
                <li className="sm:hidden">
                  <Link to="/logIn" className="btn bg-green-500 text-white">
                    Log In
                  </Link>
                </li>
                <li className="sm:hidden">
                  <Link to="/register" className="btn bg-green-500 text-white">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li
                onClick={handleLogOut}
                className="sm:hidden btn bg-green-500 text-white"
              >
                Log Out
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-green-500">
          Plant Care
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end md:space-x-4">
        {/* Profile + Tooltip */}
        <Link to={user ? "/my-profile" : "#"}>
          <div className="relative mr-2">
            <img
              src={user?.photoURL || userIcon}
              alt="user"
              className="w-10 h-10 rounded-full cursor-pointer"
              data-tooltip-id="userTooltip"
              data-tooltip-html={`<div style='text-align:center;'>
                <strong>${user?.displayName || "Guest"}</strong><br/>
                ${
                  user
                    ? `<button class='btn bg-green-500 text-white mt-2'>Log Out</button>`
                    : ""
                }
              </div>`}
            />
            <ReactTooltip
              id="userTooltip"
              place="bottom"
              clickable={true}
              afterShow={() => {
                const tooltipEl = document.querySelector('[id^="userTooltip"]');
                const button = tooltipEl?.querySelector("button");
                if (button) button.onclick = handleLogOut;
              }}
            />
          </div>
        </Link>

        {/* Auth buttons (for large screens) */}
        <div className="hidden sm:flex space-x-2 pr-4">
          {!user ? (
            <>
              <Link
                to="/logIn"
                className="btn bg-green-500 text-white cursor-pointer"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="btn bg-green-500 text-white cursor-pointer"
              >
                Register
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
