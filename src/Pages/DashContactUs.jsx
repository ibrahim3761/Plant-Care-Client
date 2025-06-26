import React from 'react';
import { Helmet } from 'react-helmet-async';

const DashContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <Helmet>
        <title>Contact Us || Plant Care</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">Contact Us</h1>
      <p className="text-center max-w-2xl mx-auto mb-2 text-gray-600">
        We’d love to hear from you! Whether it’s a question, suggestion, or just a hello — reach out anytime.
      </p>

      {/* Contact Info */}
      <div className="text-center text-gray-700 mb-8">
        <p><strong>Email:</strong> <a href="mailto:contact@plantcare.com" className="text-green-600 hover:underline">contact@plantcare.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:01887383971" className="text-green-600 hover:underline">01887383971</a></p>
      </div>

      {/* Contact Form */}
      <form className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="5"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default DashContactUs;
