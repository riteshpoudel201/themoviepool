/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RecommendedCard from "../cards/RecommendationCard";
import { fetchRecommendedShows } from "../../utils/axios";

const RecommendedShows = ({ showId, type }) => {
  const [shows, setshows] = useState(null);
  useEffect(() => {
    const fetchRelatedShow = async () => {
      const show = await fetchRecommendedShows(showId, type);
      setshows(show.results);
    };
    fetchRelatedShow();
  }, [showId, type]);
  
  return (
    <div className="w-full flex flex-col gap-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl text-purple-800 tracking-wider leading-3 font-bold">
        Recommended
      </h1>
      <div className="flex flex-col gap-3 h-[80vh] overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-800">
        {shows?.length > 0 ?
          shows.map((show) => (
            <RecommendedCard key={show.id} show={show} type={type} />
          )): <p className="text-gray-500 bg-gray-200 text-sm w-full h-full rounded-md flex items-center justify-center">Not available 😓</p>}
      </div>
    </div>
  );
};

export default RecommendedShows;
