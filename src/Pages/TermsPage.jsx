import React from "react";
import { Helmet } from "react-helmet-async";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f9f9f6] text-gray-800 px-5 py-10">
      <Helmet>
        <title>Terms&Conditions || Plant Care</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4 text-green-800">
        Terms of Service
      </h1>
      <div className="max-w-3xl text-left space-y-4 text-lg">
        <p>
          Welcome to Plant Care Tracker. By using our website and services, you
          agree to comply with and be bound by the following terms and
          conditions.
        </p>
        <p>
          You must be at least 13 years old to use our service. Users are
          responsible for maintaining the confidentiality of their account and
          password.
        </p>
        <p>
          You may not use the site for any illegal or unauthorized purpose. Any
          breach of these terms will result in immediate termination of your
          account.
        </p>
        <p>
          We reserve the right to modify these terms at any time. Changes will
          be posted on this page and become effective immediately upon posting.
        </p>
        <p>
          If you have any questions about these terms, please contact us at
          support@plantcaretracker.com.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
