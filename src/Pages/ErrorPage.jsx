import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

// made with help of AI

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center px-4">
      <Helmet>
              <title>
                Error || Plant Care
              </title>
            </Helmet>
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8">
          <div className="relative">
            <h1 className="text-8xl font-extrabold text-green-600 mb-2">404</h1>
            <div className="absolute inset-0 text-8xl font-extrabold text-green-200 blur-sm -z-10">
              404
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Looks like this page got lost in the garden! 🌺 The page you're
            looking for doesn't exist or has been moved.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-700 text-sm">
              💡 <strong>Tip:</strong> Check the URL or navigate back to our
              plant paradise!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            🏠 Back to Home
          </Link>

          <div className="flex gap-3">
            <Link
              to="/allPlants"
              className="flex-1 bg-white border-2 cursor-pointer border-green-600 text-green-600 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition-all duration-200"
            >
              🌿 Browse Plants
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex-1 bg-white border-2 cursor-pointer border-gray-300 text-gray-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
