/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, label, className = "" }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? `text-purple-800  bg-white/40 px-3 py-2 rounded-md ${className}`
        : `text-white hover:bg-white/40 px-3 py-2 rounded-md transition-all duration-200 ${className}`
    }
  >
    {label}
  </NavLink>
);

export default NavigationLink; 