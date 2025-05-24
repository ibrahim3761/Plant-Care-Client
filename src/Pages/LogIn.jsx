import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { googleLogin, logIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;

    logIn(email, password)
      .then((result) => {
        toast.success("Login successful", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
        console.log(location.state);
        
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {

        toast.warn("Invalid email or password", {
          position: "top-right",
          autoClose: 2000,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("Logged in with Google!", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        });
        navigate(`${location.state ? location.state : "/"}`);
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
    <div className="flex justify-center items-center py-10 rounded-2xl bg-green-50 p-4 m-2 md:m-4">
      <Helmet>
              <title>
                Log In || Plant Care
              </title>
            </Helmet>
      <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700 dark:text-green-300">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            <label className="font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="px-4 py-2 rounded border bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition font-semibold cursor-pointer"
          >
            Login
          </button>

          <div className="mt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-100 transition cursor-pointer"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </div>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-600 hover:underline cursor-pointer">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
