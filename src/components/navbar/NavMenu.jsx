/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CrossIcon from "../../assets/icons/CrossIcon";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";

const menuItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Discover', 
    path: '/discover',
    dropdownItems: [
      { name: 'Movies', path: '/discover/movies' },
      { name: 'Series', path: '/discover/series' }
    ]
  },
  { name: 'Movies', path: '/movies' },
  { name: 'Series', path: '/series' },
];

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row text-xl gap-12">
      {/* Hamburger Icon for Mobile */}
      <div
        className="w-[25px] h-[25px] flex sm:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <HamburgerIcon />
      </div>

      {/* Render Mobile or Tablet Menu */}
      {isMenuOpen ? (
        <MobileMenu
          menuItems={menuItems}
          handleClose={() => setIsMenuOpen(false)}
        />
      ) : (
        <TabletMenu menuItems={menuItems} />
      )}
    </div>
  );
};

export default NavMenu;

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

const TabletMenu = ({ menuItems }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className=" hidden sm:flex flex-row gap-3 md:gap-6 items-center ">
      {menuItems.map((item) => (
        <div key={item.path} className="relative group">
          {item.dropdownItems ? (
            <div
              className="text-white cursor-pointer hover:bg-white/40 px-3 py-2 rounded-md inline-block transition-all duration-200"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="inline-flex items-center gap-1">
                {item.name}
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              {activeDropdown === item.name && (
                <div className="absolute left-0 mt-2 bg-purple-500 rounded-lg py-2 min-w-[150px] z-50 shadow-lg transform opacity-100 scale-100 transition-all duration-200 ease-out">
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-purple-500 transform rotate-45"></div>
                  {item.dropdownItems.map((dropdownItem) => (
                    <NavLink
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className={({ isActive }) =>
                        `block relative transition-all duration-200 ${
                          isActive
                            ? 'text-purple-800 bg-white/40 px-4 py-2'
                            : 'text-white hover:bg-white/40 px-4 py-2 hover:translate-x-1'
                        }`
                      }
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {dropdownItem.name === 'Movies' ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 4h16c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                        {dropdownItem.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `text-purple-800 scale-[1.1] bg-white/40 px-3 py-2 rounded-md`
                  : `text-white scale-[1] hover:bg-white/40 px-3 py-2 rounded-md transition-all duration-200`
              }
            >
              {item.name}
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );
};
