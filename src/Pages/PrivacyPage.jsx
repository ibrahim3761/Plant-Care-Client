import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f9f9f6] text-gray-800 px-5 py-10">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Privacy Policy</h1>
      <div className="max-w-3xl text-left space-y-4 text-lg">
        <p>
          At Plant Care Tracker, we value your privacy. This policy outlines what data we collect, how we use it, and how we protect it.
        </p>
        <p>
          We may collect information such as your name, email address, and usage data to improve our services.
        </p>
        <p>
          We do not sell or share your personal information with third parties without your consent, except as required by law.
        </p>
        <p>
          Cookies may be used to enhance your experience on our platform.
        </p>
        <p>
          You can contact us at support@plantcaretracker.com if you have questions about your data or want it deleted.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
