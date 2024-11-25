/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="flex items-center gap-2 p-4 py-6 ">
      <Link
        to="/"
        className="text-gray-400 hover:text-white hover:underline text-sm"
      >
        Home
      </Link>
      <span className="text-gray-600 text-sm">/</span>
      <span className="text-gray-600 text-sm">Discover</span>
      <span className="text-gray-600 text-sm">/</span>

      <span className="text-white text-sm">{title}</span>
    </div>
  );
};

export default Breadcrumb;
