import { Link } from "react-router-dom";
import { formatYear } from "../../utils/dateUtils";

const base_url = "https://image.tmdb.org/t/p/original/";
/* eslint-disable react/prop-types */
const SimilarCard = ({ imgAlt, show, showType = "movie" }) => {
  return (
    <Link to={`/show/${showType}/${show?.id}`}>
      <div className="relative w-full h-[100px] lg:h-[80px] rounded-lg shadow-lg overflow-hidden">
        {/* Movie Poster */}
        {show?.backdrop_path || show?.poster_path ? (
          <img
            src={`${base_url}${show?.backdrop_path || show?.poster_path}`}
            alt={imgAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110 absolute"
          />
        ) : (
          <div className="w-full h-full bg-purple-800/50 transition-transform duration-300 group-hover/card:scale-110 absolute">
            {" "}
          </div>
        )}

        {/* Overlay */}
        <div className="w-full h-full py-2 inset-0 bg-black/60 flex flex-col justify-between p-4 text-white relative z-[10]">
          {/* Movie Title */}
          <h3 className="text-lg text-white font-bold mb-2">
            {show?.title || show?.name}
          </h3>

          {/* Watch Trailer Button */}
          <div className="w-full flex justify-between">
            <span className="text-gray-400">
              {formatYear(
                show?.release_date ||
                  show?.last_air_date ||
                  show?.first_air_date
              )}
            </span>
            <span className="text-yellow-400">
              ★ {show?.vote_average?.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SimilarCard;
