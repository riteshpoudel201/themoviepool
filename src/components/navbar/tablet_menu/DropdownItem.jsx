/* eslint-disable react/prop-types */
import NavigationLink from "./NavigationLink";
import { MovieIcon, VideoIcon } from "./Icons";

const DropdownItem = ({ item }) => (
  <NavigationLink
    to={item.path}
    label={
      <span className="relative z-10 flex items-center gap-2">
        {item.name === "Movies" ? <MovieIcon /> : <VideoIcon />}
        {item.name}
      </span>
    }
    className="block relative"
  />
);

export default DropdownItem; 