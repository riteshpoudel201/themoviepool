import { useCallback, useEffect, useRef, useState } from "react";
import { randomChar } from "../../utils/axios";
import SearchCard from "../cards/SearchCard";

/* eslint-disable react/prop-types */
const SearchMovies = ({ fetchSearchShows }) => {
    const [searchList, setSearchList] = useState([]);
    const searchRef = useRef(null);

    const fetchSearchList = useCallback(async (query) => {
      const movies = await fetchSearchShows(query);
      setSearchList(movies);
    }, [fetchSearchShows]);
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          fetchSearchList(searchRef.current.value || randomChar());
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [fetchSearchList]);
  
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-center text-2xl lg:text-4xl font-bold mb-5">
          Welcome to The Movie Pool
        </h1>
        <div className="flex flex-row bg-white rounded-md p-2 ">
          <input
            type="text"
            placeholder="Search for a movie"
            className="w-[300px] sm:w-[500px] p-2 rounded-md outline-none"
            ref={searchRef}
          />
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-md"
            onClick={() =>
              fetchSearchList(searchRef.current.value || randomChar())
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
            {searchList.map((movie) => (
              <SearchCard show={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    );
  };

  export default SearchMovies;