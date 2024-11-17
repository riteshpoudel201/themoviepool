/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="flex items-center gap-2 p-4">
      <Link
        to="/discover"
        className="text-gray-400 hover:text-white hover:underline text-sm"
      >
        Discover
      </Link>
      <span className="text-gray-600 text-sm">/</span>
      <span className="text-white text-sm">{title}</span>
    </div>
  );
};

export default Breadcrumb;
