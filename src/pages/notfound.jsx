import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-600">
        Oops! Page not found
      </h2>
      <p className="mt-2 text-gray-500">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
