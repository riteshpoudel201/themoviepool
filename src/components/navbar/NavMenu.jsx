import { useState } from "react";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import MobileMenu from "./MobileMenu";
import TabletMenu from "./TabletMenu";
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




