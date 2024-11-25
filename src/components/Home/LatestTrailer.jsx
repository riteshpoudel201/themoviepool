import { SwiperSlide } from "swiper/react";
import TrailerCard from "../cards/TrailerCard";
import CardSwiperContainer from "../Swiper/CardSwiperContainer";
import ComponentContainerWithTitle from "../ComponentContainerWithTitle";
import { useChip } from "../../context/ChipContext";
import { useEffect, useState, memo, useCallback } from "react";
import { fetchTrailerShows } from "../../utils/axios";

const baseUrl = "https://image.tmdb.org/t/p/original";

const MemoizedTrailerCard = memo(TrailerCard);

const TrailerContent = () => {
  const { selectedChip } = useChip();
  const [trailers, setTrailers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllShows = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchTrailerShows(selectedChip || "movie");
      setTrailers(response);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching trailers:", err);
    } finally {
      setIsLoading(false);
    }
  }, [selectedChip]);

  useEffect(() => {
    fetchAllShows();
  }, [fetchAllShows]);

  if (isLoading) {
    return <div className="w-full h-[50vh] flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="w-full h-[50vh] flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <>
      <CardSwiperContainer>
        {trailers.length > 0 && trailers.map((trailer, index) => (
          <SwiperSlide key={trailer.id || index} className="w-full h-[90vh]">
            <MemoizedTrailerCard
              imgSrc={`${baseUrl}${trailer.poster_path || trailer.backdrop_path}`}
              imgAlt={`${trailer.name || trailer.title}`}
              title={trailer.name || trailer.title}
              rating={trailer.vote_average}
              videoKey={trailer.videoKey[0]}
            />
          </SwiperSlide>
        ))}
      </CardSwiperContainer>
    </>
  );
};

const LatestTrailer = memo(() => {
  return (
    <div className="w-full h-full px-4 py-3 bg-purple-600/40 mt-4 overflow-hidden">
      <ComponentContainerWithTitle 
        title="latest trailers" 
        chips={["movie", "series"]}
      >
        <TrailerContent />
      </ComponentContainerWithTitle>
    </div>
  );
});

LatestTrailer.displayName = 'LatestTrailer';

export default LatestTrailer;
