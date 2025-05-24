import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const CopyrightPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f9f9f6] text-gray-800 px-5 py-10">
      <Helmet>
              <title>
                Copyright || Plant Care
              </title>
            </Helmet>
      <h1 className="text-3xl font-bold mb-4 text-green-800">Copyright Notice</h1>
      <p className="text-lg text-center max-w-2xl mb-4">
        © {currentYear} Plant Care Tracker. All rights reserved. The content, design, and visual elements of this application are the property of Plant Care Tracker unless otherwise stated.
      </p>
      <p className="text-sm text-center text-gray-600">
        By using this service, you agree to our{" "}
        <Link to="/terms" className="text-green-700 underline hover:text-green-900">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to="/privacy" className="text-green-700 underline hover:text-green-900">
          Privacy Policy
        </Link>.
      </p>
    </div>
  );
};

export default CopyrightPage;
