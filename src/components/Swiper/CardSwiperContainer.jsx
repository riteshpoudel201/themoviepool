/* eslint-disable react/prop-types */
import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { useState } from "react";
const CardSwiperContainer = ({ children, className,reRenderKey }) => {
    const [isBeginning, setIsBeginning] = useState(true);
      const [isEnd, setIsEnd] = useState(false);
    return (
        <div className={`w-full ${className} group`} key={reRenderKey}>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    navigation: true,
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                    
                }}
                
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
                spaceBetween={30}
                
                className="w-full h-full"
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
            >
                {children}
                <button
          className={`custom-next absolute -right-5 -bottom-[1.2rem] transform -translate-y-1/2 z-10 bg-purple-300/60 hover:bg-purple-400/60 font-bold text-purple-800 px-3 py-2 rounded-full uppercase ${
            isEnd ? "hidden" : "flex"
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          className={`custom-prev absolute -left-5 -bottom-[1.2rem] transform -translate-y-1/2 z-10 bg-purple-300/60 hover:bg-purple-400/60 px-3 py-2 rounded-full text-purple-800 font-bold uppercase ${
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
        </button>
            </Swiper>
        </div>
    );
};

export default CardSwiperContainer;
