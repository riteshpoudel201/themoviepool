import { useCallback, useRef, useState } from "react";
import { debounce } from "../../utils/common";
import SearchCard from "../cards/SearchCard";
import useClickOutside from "../../hooks/useClickOutside";

const DEBOUNCE_TIME = 1000; //in milliseconds

/* eslint-disable react/prop-types */
const SearchDiscoverMovies = ({ title, fetchSearchShows }) => {
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const displayRef = useRef(null);
  const searchRef = useRef(null);
  const fetchSearchList = useCallback(
    async (query) => {
      setIsLoading(true);
      const movies = await fetchSearchShows(query);
      setSearchList(movies);
      setIsLoading(false);
    },
    [fetchSearchShows]
  );

  const handleSearchChange = debounce((e) => {
    fetchSearchList(e.target.value);
  }, DEBOUNCE_TIME);

  const handleOutsideClick = () => {
    setSearchList([]);
    searchRef.current.value = "";

  }
  useClickOutside(displayRef, handleOutsideClick);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      {searchList.length === 0 && (
        <h1 className="text-white text-4xl font-bold mb-5">
          Welcome to The Movie Pool
        </h1>
      )}
      <div className="p-3" ref={displayRef}>
        <div className="flex flex-row bg-white rounded-md p-2 ">
          <input
            ref={searchRef}
            type="text"
            placeholder={`Search for a ${title.toLowerCase()}`}
            className="w-[300px] sm:w-[500px] p-2 rounded-md outline-none"
            onChange={handleSearchChange}
          />
          <button className="border-none outline-none text-purple-500" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
          </button>
        </div>
        {searchList.length > 0 && (
          <div className="flex flex-col bg-white/80 rounded-md p-2 mt-5 h-[200px] overflow-y-auto overflow-x-hidden">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                Loading...
              </div>
            ) : (
              searchList.map((movie) => (
                <SearchCard show={movie} key={movie.id} />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDiscoverMovies;
