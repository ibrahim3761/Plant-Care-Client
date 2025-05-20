import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-green-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-1">Plant Care</h2>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PlantCare. All rights reserved.
          </p>
        </div>

        <div className="text-center md:text-left">
          <p className="font-semibold mb-1">Contact Us</p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:contact@plantcarehub.com"
              className="underline hover:text-green-300"
            >
              contact@plantcare.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="underline hover:text-green-300"
            >
              01887383971
            </a>
          </p>
        </div>

        <div className="flex space-x-6 text-green-200">
          <a
            href="https://www.facebook.com/Ibrahim376146ab/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22 12a10 10 0 10-11.7 9.8v-6.9h-3v-2.9h3v-2.2c0-3 1.8-4.6 4.4-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 1-2 2v2.3h3.4l-.5 2.9h-2.9v6.9A10 10 0 0022 12z" />
            </svg>
          </a>
          <a
            href="https://x.com/ibrahim376146"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.96-2.48 9.14 9.14 0 01-2.88 1.1A4.52 4.52 0 0016.5 2a4.48 4.48 0 00-4.45 5.52 12.94 12.94 0 01-9.4-4.7 4.48 4.48 0 001.38 6A4.48 4.48 0 012 8.7v.06a4.48 4.48 0 003.58 4.4 4.52 4.52 0 01-2.04.08 4.49 4.49 0 004.19 3.12A9.01 9.01 0 012 19.54 12.86 12.86 0 008.29 21c7.55 0 11.68-6.3 11.68-11.76 0-.18 0-.35-.01-.53A8.36 8.36 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
