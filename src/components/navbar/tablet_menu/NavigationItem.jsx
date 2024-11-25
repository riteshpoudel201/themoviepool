/* eslint-disable react/prop-types */
import NavigationLink from "./NavigationLink";
import DropdownTrigger from "./DropdownTrigger";
import { useState } from "react";

const NavigationItem = ({ menuItem, activeDropdownName, onDropdownToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = Boolean(menuItem.dropdownItems);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    onDropdownToggle(menuItem.name);
  };

  const handleMouseLeave = () => {
    if (!isOpen) {
      onDropdownToggle(null);
    }
  };

  return (
    <div className="relative group">
      {hasDropdown ? (
        <DropdownTrigger
          menuItem={menuItem}
          isActive={activeDropdownName === menuItem.name}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          isOpen={isOpen}
        />
      ) : (
        <NavigationLink to={menuItem.path} label={menuItem.name} />
      )}
    </div>
  );
};

export default NavigationItem; 