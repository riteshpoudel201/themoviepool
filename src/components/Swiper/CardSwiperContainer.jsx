/* eslint-disable react/prop-types */
import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
const CardSwiperContainer = ({ children, className,reRenderKey }) => {
    return (
        <div className={`w-full ${className} group`} key={reRenderKey}>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    navigation: true,
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    
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
            >
                {children}
                <button className="swiper-button-next !text-gray-300 !drop-shadow-md !bg-purple-800/60 !size-16 !rounded-md opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></button>
                <button className="swiper-button-prev !text-gray-300 !bg-purple-800/60 !size-16 !rounded-md opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></button>
            </Swiper>
        </div>
    );
};

export default CardSwiperContainer;
