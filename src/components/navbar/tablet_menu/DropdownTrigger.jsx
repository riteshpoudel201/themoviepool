/* eslint-disable react/prop-types */
import ChevronIcon from "./Icons/ChevronIcon";
import NavigationDropdown from "./NavigationDropdown";

const DropdownTrigger = ({ menuItem, isActive, onMouseEnter, onMouseLeave, onClick, isOpen }) => (
  <div
    className="text-white cursor-pointer hover:bg-white/40 px-3 py-2 rounded-md inline-block transition-all duration-200"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    <span className="inline-flex items-center gap-1">
      {menuItem.name}
      <ChevronIcon isOpen={isActive || isOpen} />
    </span>
    {(isActive || isOpen) && <NavigationDropdown menuItem={menuItem} />}
  </div>
);

export default DropdownTrigger; 