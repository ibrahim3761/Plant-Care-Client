import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { googleLogin, createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters, include uppercase, lowercase, and a number.",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        }
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(`${location.state ? location.state : "/"}`);
            toast.success("User registered successfully!", {
              position: "top-right",
              autoClose: 3000,
              theme: "light",
              transition: Bounce,
            });
          })
          .catch((error) => {
            setUser(user);
            toast.error(`Profile update failed: ${error.message}`, {
              position: "top-right",
              autoClose: 3000,
              theme: "light",
              transition: Bounce,
            });
            navigate(`${location.state ? location.state : "/"}`);
          });
      })
      .catch((error) => {
        toast.error(`Registration failed: ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Logged in with Google successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error(`Google login failed: ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="flex justify-center items-center py-10 bg-green-50 px-4 rounded-2xl p-4 m-2 md:m-4">
      <Helmet>
        <title>Register || Plant Care</title>
      </Helmet>
      <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="px-4 py-2 rounded border bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded border bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Profile photo URL"
              className="px-4 py-2 rounded border bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="font-semibold mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              required
              className="px-4 py-2 rounded border bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-600"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FaEye /> : <IoMdEyeOff />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition font-semibold cursor-pointer"
          >
            Register
          </button>

          <div className="mt-4">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-100 transition cursor-pointer"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </div>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 hover:underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
