/* eslint-disable react/prop-types */
import { getRuntime } from "../../utils/common";
import GradientText from "../GradientText";
import { DateTime } from "luxon";
const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_PATH;

const Banner = ({ show }) => {
  return (
    <div
      className="w-screen h-screen relative flex justify-center items-center"
      id="banner"
    >
      <img
        src={`${IMAGE_URL}original/${show?.backdrop_path || show?.poster_path}`}
        alt=""
        className="object-cover object-center absolute w-full h-full z-[-1] mix-blend-darken bg-purple-200"
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-1 sm:py-8 flex flex-col gap-2 pointer-events-none bg-white/70 w-full sm:w-[98%] mx-auto rounded-t-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-800 ">
          <GradientText className="!bg-gradient-from-t !bg-gradient-to-b !from-purple-800 !from-60% !to-50% !to-blue-800 shadow-white drop-shadow-2xl ">
            {show?.title || show?.name}
          </GradientText>
        </h1>

        {show?.runtime && (
          <div className="flex flex-row gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{getRuntime(show?.runtime)}</span>
          </div>
        )}

        {show?.number_of_seasons && (
          <div className="flex flex-row gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="32"
              height="32"
              fill="currentColor"
            >
              <rect
                x="8"
                y="16"
                width="48"
                height="36"
                rx="4"
                ry="4"
                fill="#9b59b6"
              />
              <path d="M8 20h48v32H8z" fill="#fff" opacity="0.2" />
              <polygon points="28,26 42,32 28,38 28,26" fill="#8e44ad" />
              <rect
                x="12"
                y="10"
                width="40"
                height="6"
                rx="2"
                ry="2"
                fill="#c39bd3"
              />
              <rect
                x="12"
                y="6"
                width="40"
                height="4"
                rx="1"
                ry="1"
                fill="#d7bde2"
              />
            </svg>
            <div className="flex flex-row gap-4">
            <span>{show?.number_of_seasons} Seasons</span>
            <span>{show?.number_of_episodes} Episodes</span>
            </div>
          </div>
        )}
        {show?.release_date && (
          <div className="flex flex-row gap-5 w-full sm:w-[20%] justify-between text-xl">
            Released On{" "}
            <span className="text-gray-800">
              {DateTime.fromISO(show?.release_date).toFormat("LLL dd ,yyyy")}
            </span>
          </div>
        )}
        <div className="genres mt-2 flex flex-col gap-1">
          <strong className="text-purple-800 drop-shadow-md">Genres </strong>
          <div className="flex flex-row flex-wrap gap-1">
            {show?.genres?.map((genre, index) => (
              <span
                key={index}
                className="badge bg-blue-600 text-white mr-2 px-2 py-1 rounded"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        {show?.tagline && (
          <p className="text-blue-800 px-3 py-4 rounded-md font-bold text-xl sm:text-3xl w-full sm:w-1/2  mt-0 sm:mt-3">
            {show?.tagline}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
