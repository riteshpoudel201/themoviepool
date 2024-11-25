/* eslint-disable react/prop-types */
import { useState } from "react";
import NavigationItem from "./tablet_menu/NavigationItem";

const TabletMenu = ({ menuItems }) => {
  const [activeDropdownName, setActiveDropdownName] = useState(null);

  return (
    <nav className="hidden sm:flex flex-row gap-3 md:gap-6 items-center">
      {menuItems.map((menuItem) => (
        <NavigationItem
          key={menuItem.path}
          menuItem={menuItem}
          activeDropdownName={activeDropdownName}
          onDropdownToggle={setActiveDropdownName}
        />
      ))}
    </nav>
  );
};

export default TabletMenu;
