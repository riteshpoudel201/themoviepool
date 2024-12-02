/* eslint-disable react-hooks/exhaustive-deps */
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "../Swiper/HeroSwiperContainer";
import HeroCard from "../cards/HeroCard";
import { fetchNowPlaying, fetchShowDetails } from "../../utils/axios";
import { useEffect, useState } from "react";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_PATH;

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Track if component is still mounted

    const fetchAllMovies = async () => {
      try {
        const moviesData = await fetchNowPlaying();
        if (isMounted) {
          setMovies(moviesData);
          console.log(movies);
          // Fetch details for the first movie (optional)
          if (moviesData.length > 0) {
            const showDetails = await fetchShowDetails(
              moviesData[0]?.id,
              moviesData[0]?.type
            );
            console.log("Show details: ", showDetails);
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching movies: ", error);
        if (isMounted) setIsLoading(false);
      }
    };

    fetchAllMovies();

    return () => {
      isMounted = false; // Cleanup on component unmount
    };
  }, []);

  // Show loading or fallback UI if no movies are available
  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center bg-black/70 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (!movies.length) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center bg-black/70 text-white">
        <p>No movies available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] bg-black/70">
      <SwiperContainer
        key={movies.length} // Reinitialize Swiper when movies change
        className="w-full h-full"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <HeroCard
              imgSrc={`${IMAGE_URL}/original/${movie?.poster_path}`}
              imgAlt={movie?.original_title || "Movie Poster"}
              movieTitle={movie?.title || movie?.name || "Untitled"}
              movieDesc={movie?.overview || "No description available."}
              type={movie?.type}
              showId={movie?.id}
              genreIds = {movie?.genre_ids}
              releasedDate = {movie?.released_date}
              voteCount = {movie?.vote_count}
              voteAverage = {movie?.vote_average}
            />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </div>
  );
};

export default Hero;
