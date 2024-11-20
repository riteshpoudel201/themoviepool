/* eslint-disable react/prop-types */
import { useState } from "react";
import CrossIcon from "../../assets/icons/CrossIcon";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ menuItems, handleClose }) => {
    const [expandedItem, setExpandedItem] = useState(null);
  
    return (
      <div className="flex flex-col gap-3 justify-center items-center text-[30px] sm:hidden fixed top-0 right-0 z-50 w-screen h-screen bg-purple-500">
        {/* Close Button */}
        <div
          className="w-[25px] h-[25px] text-white font-bold absolute top-[2rem] right-[3rem] mr-4 mt-4"
          onClick={handleClose}
        >
          <CrossIcon />
        </div>
        <div className="flex flex-col items-center justify-between gap-6 w-[90%]">
          {menuItems.map((item) => (
            <div key={item.path} className="w-full text-center">
              {item.dropdownItems ? (
                <div className="flex flex-col">
                  <div
                    onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                    className="flex items-center justify-center gap-2 text-white cursor-pointer"
                  >
                    {item.name}
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        expandedItem === item.name ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div 
                    className={`flex flex-col gap-3 text-[24px] overflow-hidden transition-all duration-300 ${
                      expandedItem === item.name 
                        ? 'max-h-[500px] opacity-100 mt-3' 
                        : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <NavLink
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        onClick={handleClose}
                        className={({ isActive }) =>
                          isActive
                            ? `text-purple-800 scale-[1.1] w-full h-fit text-center p-2 bg-white rounded-md`
                            : `text-white/80 scale-[1]`
                        }
                      >
                        <span className="flex items-center justify-center gap-2">
                          {dropdownItem.name === 'Movies' ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 4h16c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1z" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                          {dropdownItem.name}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={handleClose}
                  className={({ isActive }) =>
                    isActive
                      ? `text-purple-800 scale-[1.1] w-full h-fit text-center p-2 bg-white rounded-md`
                      : `text-white scale-[1]`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
export default MobileMenu;
