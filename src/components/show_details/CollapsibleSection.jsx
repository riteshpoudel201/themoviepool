import { useState } from "react";

/* eslint-disable react/prop-types */
export default function CollapsibleSection({ label, content }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="space-y-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-lg font-semibold text-purple-800 hover:text-purple-600 text-left"
        >
          <span>{label}</span>
          {/* Chevron SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`} // Rotate when open
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && <div className="text-lg text-gray-700 px-4">{content}</div>}
      </div>
    );
  }