/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// genreIds = {movie?.genre_ids}
// releasedDate = {movie?.released_date}
// voteCount = {movie?.vote_count}
// voteAverage = {movie?.vote_average}

const HeroCard = ({
  imgSrc,
  imgAlt,
  movieTitle,
  movieDesc,
  type,
  showId,
  genreIds,
  releasedDate,
  voteCount,
  voteAverage,
}) => {
  return (
    <div className="relative z-10 w-full h-full bg-black/50">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/70 z-0">
        <img
          src={imgSrc}
          alt={imgAlt || `${movieTitle} Poster`}
          className="w-full h-full object-cover object-center mix-blend-darken"
        />
      </div>

      {/* Foreground Content */}
      <div className="absolute bottom-0 z-50 px-4 py-4 flex flex-col gap-3 w-full h-fit bg-gradient-to-t from-black to-transparent">
        {/* Title */}
        <div className="flex flex-row justify-between sm:justify-normal gap-4">
          <h1 className="font-bold text-3xl text-purple-500">{movieTitle.length > 20 ?movieTitle.slice(0,20) + "..." : movieTitle}</h1>
          <span className="bg-purple-800 text-white p-2 rounded-md uppercase">
            {type}
          </span>
        </div>
        <div className="flex flex-row justify-between text-white w-full sm:w-1/2">
          {voteCount && (
            <div className="flex flex-col">
              <span className="text-sm font-bold">Total Vote</span>
              <span className="text-2xl text-purple-400">{voteCount}</span>
            </div>
          )}

          {voteAverage && (
            <div className="flex flex-col">
              <span className="text-sm font-bold">Average Vote</span>
              <span className="text-2xl text-purple-400">{voteAverage.toFixed(1)}</span>
            </div>
          )}
        </div>
        {releasedDate && (
          <div className="flex flex-row justify-between">
            <span className="text-white">Released Year</span>
            <span className="text-white">{releasedDate?.split("-")[0]}</span>
          </div>
        )}
        {/* genre part starts here  */}
        {genreIds.length > 0 && (
          <div className="genres mt-2 flex flex-col gap-1">
            <strong className="text-purple-800 drop-shadow-md">Genres </strong>
            <div className="flex flex-row flex-wrap gap-1">
              {genreIds?.map((genre, index) => (
                <span
                  key={index}
                  className="badge bg-blue-600 text-white mr-2 px-2 py-1 rounded"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* genre part ends here  */}

        {/* Description */}
        <p className="text-white w-full md:w-1/2 line-clamp-2">
          {movieDesc.slice(0,50) + "..." || "No description available."}
        </p>

        {/* View Details Button */}
        <NavLink
          to={`/show/${type}/${showId}`}
          className="w-full sm:w-fit bg-purple-400 hover:bg-purple-500 rounded-md text-white font-bold px-3 py-2 text-center"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  movieTitle: PropTypes.string,
  movieDesc: PropTypes.string,
  type: PropTypes.string.isRequired,
  showId: PropTypes.number.isRequired,
};

export default HeroCard;
