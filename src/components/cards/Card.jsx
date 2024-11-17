import { Link } from "react-router-dom";
import { formatYear } from "../../utils/dateUtils";

const base_url = "https://image.tmdb.org/t/p/original/";
/* eslint-disable react/prop-types */
const Card = ({
  imgSrc,
  imgAlt,
  showId,
  showTitle,
  showDesc,
  releaseDate,
  voteAverage,
  showType = "movie",
}) => {
  return (
    <Link to={`/show/${showType}/${showId}`}>
      <div className="relative aspect-video bg-black rounded-lg shadow-lg overflow-hidden group/card">
        {/* Movie Poster */}
        <img
          src={`${base_url}${imgSrc}`}
          alt={imgAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          {/* Movie Title */}
          <h3 className="text-lg text-white font-bold mb-2">{showTitle}</h3>
          {/* Movie Description */}
          <p className="text-sm text-gray-300 mb-4 line-clamp-3">{showDesc}</p>
          {/* Watch Trailer Button */}
          <div className="w-full flex justify-between">
            <span className="text-gray-400">{formatYear(releaseDate)}</span>
            <span className="text-yellow-400">★ {voteAverage?.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
