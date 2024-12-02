import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeroCard = ({ imgSrc, imgAlt, movieTitle, movieDesc, type, showId }) => {
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
        <h1 className="font-bold text-3xl text-purple-500">{movieTitle}</h1>

        {/* Description */}
        <p className="text-white w-full md:w-1/2 line-clamp-3">
          {movieDesc || "No description available."}
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
