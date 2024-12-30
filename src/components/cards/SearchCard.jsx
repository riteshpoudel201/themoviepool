import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const base_url = "https://image.tmdb.org/t/p/original/";
const SearchCard = ({ show }) => {
  return (
    <div className="flex flex-row gap-4 items-center rounded-md bg-white px-2 py-3 mt-2 w-[300px] sm:w-[550px] h-[60px]">
      <img
        src={`${base_url}${show?.poster_path}`}
        alt="search"
        className="aspect-square h-full object-cover rounded-full bg-purple-200"
      />
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <h1 className="text-purple-800 text-2xl font-bold line-clamp-1" title={show?.title}>{show?.title}</h1>
          <p className="text-blue-800 text-sm sm:text-base line-clamp-1" title={show?.overview}>{show?.overview.slice(0, 40)}...</p>
        </div>
        <div className="flex flex-row">
          <NavLink
            to={`/show/movie/${show?.id}`}
            className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded-md flex flex-row items-center gap-2 h-12 self-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M4.5 6.75h5.25m7.5-3v6h3.75m-3.75 0h-3.75" />
            </svg>
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
