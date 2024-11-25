/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { ChipProvider, useChip } from "../context/ChipContext";

const ComponentContainerWithTitle = ({ title, children, path, chips }) => {
  return (
    <ChipProvider>
      <div className="w-[95vw] h-fit mx-auto mt-5 flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3">
            <Title title={title} />
            {chips && (
              <ChipButtons chips={chips} />
            )}
          </div>
          {path && (
            <NavLink
              to={path}
              className="uppercase text-purple-800 tracking-wider text-xs font-bold"
            >
              view all
            </NavLink>
          )}
        </div>
        {children}
      </div>
    </ChipProvider>
  );
};

// Separate component for chip buttons
const ChipButtons = ({ chips }) => {
  const { selectedChip,setSelectedChip } = useChip();
  
  return (
    <div className="flex flex-row items-center border border-purple-600 rounded-2xl">
      {chips.map((chip, index) => (
        <button
          key={index}
          className={`h-full capitalize self-center text-sm px-4 rounded-2xl ${selectedChip === chip || (chip === "movie" && selectedChip === null) ? "bg-purple-600 text-white" : "bg-transparent text-purple-600"}`}
          onClick={() => setSelectedChip(chip)}
        >
          {chip}
        </button>
      ))}
    </div>
  );
};

export default ComponentContainerWithTitle;

const Title = ({ title }) => {
  return (
    <h1 className="text-xl sm:text-3xl font-bold uppercase tracking-wider text-purple-600">
      {title}
    </h1>
  );
};
