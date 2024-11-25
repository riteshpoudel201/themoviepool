/* eslint-disable react/prop-types */
import DropdownItem from "./DropdownItem";

const NavigationDropdown = ({ menuItem }) => (
  <div className="absolute left-0 mt-6 bg-purple-500 rounded-lg px-4 py-2 min-w-[150px] z-50 shadow-lg transform opacity-100 transition-all duration-200 ease-out">
    <div className="absolute -top-2 left-4 w-4 h-4 bg-purple-500 transform rotate-45"></div>
    {menuItem.dropdownItems.map((dropdownItem) => (
      <DropdownItem
        key={dropdownItem.path}
        item={dropdownItem}
      />
    ))}
  </div>
);

export default NavigationDropdown; 