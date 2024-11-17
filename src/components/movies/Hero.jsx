import { useState } from "react";
import { fetchMovies, searchMovies } from "../../utils/movies";
import { useEffect } from "react";
import SearchMovies from "./SearchMovies";

const base_url = "https://image.tmdb.org/t/p/original/";
const Hero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      const movies = await fetchMovies();
      setMovies(movies);
    };
    fetchRandomMovies();
  }, []);
  return (
    <div>
      <div className="relative">
        {movies.length > 0 && (
          <img
            src={`${base_url}${movies[0].backdrop_path}`}
            alt="hero"
            className="w-full h-[500px] object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50">
          <SearchMovies fetchSearchShows={searchMovies} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
