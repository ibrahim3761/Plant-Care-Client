import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../../src/assets/360_F_258623607_a31m59gQNxn3lhw7OuuAlJwmqeeEQ90q.jpg";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className="bg-green-800 text-green-100 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo + Copyright */}
        <div className="text-center md:text-left space-y-3">
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start gap-2"
          >
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold">Plant Care</span>
          </Link>
          <Link to="/copyright" className="text-sm underline block">
            &copy; {new Date().getFullYear()} PlantCare. All rights reserved.
          </Link>
        </div>

        <div className="text-center md:text-left space-y-2">
          <p className="font-semibold">Quick Links</p>
          <ul className="space-y-1 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : "hover:text-green-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allPlants"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : "hover:text-green-300"
                }
              >
                All Plants
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/add-plant"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "hover:text-green-300"
                    }
                  >
                    Add Plant
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-plants"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "hover:text-green-300"
                    }
                  >
                    My Plants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-semibold"
                        : "hover:text-green-300"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : "hover:text-green-300"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : "hover:text-green-300"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-left space-y-2">
          <p className="font-semibold">Contact Us</p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:contact@plantcare.com"
              className="underline hover:text-green-300"
            >
              contact@plantcare.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+8801887383971"
              className="underline hover:text-green-300"
            >
              01887383971
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="https://www.facebook.com/Ibrahim376146ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="https://x.com/ibrahim376146"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <i className="fab fa-youtube text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
