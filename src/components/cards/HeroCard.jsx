/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchGenreNames } from "../../utils/axios";
import ViewMoreIcon from "../../assets/icons/ViewMoreIcon";

const HeroCard = ({
  imgSrc,
  imgAlt,
  movieTitle,
  movieDesc,
  type,
  showId,
  releasedDate,
  voteCount,
  voteAverage,
}) => {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    const fetchGenreNameList = async () => {
      const genres = await fetchGenreNames(showId, type);
      setGenres(genres);
    };
    fetchGenreNameList();
  }, [showId, type]);

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
      <div className="absolute bottom-0 z-50 px-4 sm:px-12 py-4 flex flex-col gap-3 w-full h-fit bg-gradient-to-t from-black to-transparent">
        {/* Title */}
        <div className="flex flex-row sm:justify-normal gap-3">
          <h1 className="font-bold text-6xl text-purple-500" title={ movieTitle}>
            {movieTitle.length > 10
              ? movieTitle.slice(0, 10) + "..."
              : movieTitle}
          </h1>
          <div className="flex items-center justify-center">
            <span className="bg-purple-800 text-white p-2 rounded-md uppercase">
              {type}
            </span>
          </div>
        </div>

        {/* genre part starts here  */}
        {genres && (
          <div className="genres mt-2 flex flex-col gap-1">
            <div className="flex flex-row flex-wrap gap-1">
              {genres?.map((genre, index) => (
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

        {voteAverage && (
          <div className="flex flex-col gap-0 sm:flex-row sm:gap-3 items-center">
            <span className="text-white">Rating: </span>
            <span className="text-purple-400 text-xl">
              {voteAverage.toFixed(1)} ({voteCount}){" "}
            </span>
          </div>
        )}

        {releasedDate && (
          <div className="flex flex-row justify-between items-center sm:justify-normal sm:gap-8">
            <span className="text-white">Released Year :</span>
            <span className="text-purple-400 text-xl">
              {releasedDate.split("-")[0]}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-white w-full md:w-1/2 line-clamp-2">
          {movieDesc.slice(0, 50) + "..." || "No description available."}
        </p>

        {/* View Details Button */}
        <NavLink
          to={`/show/${type}/${showId}`}
          className="w-full sm:w-fit bg-purple-600 hover:bg-purple-700 hover:scale-[1.1] rounded-md text-white font-bold px-5 py-4 text-center flex flex-row gap-3 justify-center"
        >
          <span className="tracking-wider">View More</span>
          <ViewMoreIcon />
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
