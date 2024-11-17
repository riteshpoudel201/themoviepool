/* eslint-disable react/prop-types */
import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
const CardSwiperContainer = ({ children, className }) => {
    return (
        <div className={`w-full ${className} group`}>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    navigation: true,
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1
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
                <button className="swiper-button-next !text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></button>
                <button className="swiper-button-prev !text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></button>
            </Swiper>
        </div>
    );
};

export default CardSwiperContainer;
