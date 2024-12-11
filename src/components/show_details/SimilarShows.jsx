/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SimilarCard from "../cards/SimilarCard";
import { fetchSimilarShows } from "../../utils/axios";

const SimilarShows = ({ showId, type }) => {
  const [shows, setshows] = useState(null);
  useEffect(() => {
    const fetchRelatedShow = async () => {
      const show = await fetchSimilarShows(showId, type);
      setshows(show.results);
    };
    fetchRelatedShow();
  }, [showId, type]);
  console.log("Similar show lists: ", shows);
  return (
    <div className="w-full flex flex-col gap-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl text-purple-800 tracking-wider leading-3 font-bold">
        Similar
      </h1>
      <div className="flex flex-col gap-3 h-[80vh] overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-800">
        {shows &&
          shows.map((show) => (
            <SimilarCard key={show.id} show={show} type={type} />
          ))}
      </div>
    </div>
  );
};

export default SimilarShows;
