/* eslint-disable react/prop-types */
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";

const SwiperContainer = ({ children }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          navigation: true,
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          bulletElement: ".swiper-button-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        effect="fade"
        className="h-full"
      >
        {children}
        <button
          className={`custom-next absolute right-0 md:right-4 top-1/4 transform -translate-y-1/2 z-10 bg-purple-300/60 font-bold text-purple-800 px-4 py-2 rounded-full uppercase ${
            isEnd ? "hidden" : "flex"
          } flex-nowrap shadow-md shadow-purple-400`}
        >
          next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          className={`custom-prev absolute left-0 md:left-4 top-1/4 transform -translate-y-1/2 z-10 bg-purple-300/60 px-4 py-2 rounded-full text-purple-800 font-bold uppercase ${
            isBeginning ? "hidden" : "flex"
          } flex-nowrap shadow-md shadow-purple-400`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          prev
        </button>
        <button className="swiper-button-pagination !right-8"></button>
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
