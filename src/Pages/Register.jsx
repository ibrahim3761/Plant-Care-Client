import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="flex justify-center items-center  rounded-2xl lg:min-h-[500px] bg-green-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Register
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain uppercase, lowercase letters, and at least 6 characters"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
          <div className="mt-4">
            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-50"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </div>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
