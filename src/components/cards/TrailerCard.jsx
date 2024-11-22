/* eslint-disable react/prop-types */

import Trailer from "../Trailer";

const TrailerCard = ({ imgSrc, imgAlt, title, rating, videoKey }) => {
  return (
    <div className=" w-[95%] h-full flex flex-col gap-2 overflow-hidden rounded-lg">
      <div className="relative aspect-video w-full  object-cover rounded-lg hover:scale-105 transition-all duration-300 flex justify-center items-center">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="rounded-lg w-full h-full object-cover absolute"
        />
        <Trailer videoKey={videoKey} />
      </div>
      <div className="flex justify-between items-center text-black">
        <h1 className=" text-2xl font-bold">{title}</h1>
        <p className=" text-sm flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill text-yellow-500"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>{" "}
          {rating}
        </p>
      </div>
    </div>
  );
};

export default TrailerCard;
