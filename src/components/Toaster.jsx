/* eslint-disable react/prop-types */
import {  useEffect } from "react";

const Toaster = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the toaster after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 bg-purple-500 text-white rounded-lg shadow-md">
      {message}
    </div>
  );
};

export default Toaster;
