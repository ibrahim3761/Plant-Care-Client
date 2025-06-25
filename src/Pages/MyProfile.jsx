import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="flex justify-center items-center h-[400px] rounded-2xl bg-green-50 px-4 mt-18">
      <Helmet>
        <title>My Profile || Plant Care</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-6">My Profile</h2>

        <img
          src={user?.photoURL}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-200"
        />

        <h3 className="text-xl font-semibold text-green-800">
          {user?.displayName || "Guest User"}
        </h3>

        <p className="text-gray-600 mt-2">{user?.email || "Not signed in"}</p>

        {user && (
          <p className="mt-6 text-green-600 font-medium">
            Thanks for growing with us 🌱
          </p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
