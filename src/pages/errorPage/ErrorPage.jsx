import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center max-w-md w-full border border-white/20">
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-white mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-white/80 mb-6 text-sm">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-white text-indigo-600 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300"
        >
          Go Back Home
        </Link>

        {/* Optional Illustration */}
        <div className="mt-6 text-white/60 text-xs">
          Error Code: 404 | Lost in space 🚀
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
