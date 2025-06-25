import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800 my-16">
      <Helmet>
        <title>About Us || Plant Care</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">About Us</h1>
      <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
        We're passionate about helping you keep your plants healthy and thriving. 🌱
      </p>

      <div className="space-y-6">
        <p>
          <strong>Plant Care</strong> was founded with a simple goal: to make plant care accessible, enjoyable, and effective for everyone.
          Whether you're a seasoned plant parent or just starting out, our platform provides the tools, tips, and tracking to help your green friends flourish.
        </p>

        <p>
          We understand that plant care is both science and art. That's why we combine data-driven reminders with friendly guidance and a community of fellow plant lovers.
        </p>

        <p>
          With features like watering schedules, growth tips, and categorized plant information, we aim to be your go-to plant companion.
        </p>

        <p>
          Have suggestions? We'd love to hear from you. Let’s grow together! 🌿
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
