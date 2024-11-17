/* eslint-disable react/prop-types */
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import "swiper/css/effect-fade"; 

const SwiperContainer = ({children}) => {
  return (
    <div className="w-full h-[100vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          navigation: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      
        }}
        pagination={{
          bulletElement:'.swiper-button-pagination',
          clickable:true,
          dynamicBullets:true,
        }}
        autoplay={{
            delay:5000,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        effect="fade"
        className="h-full"
      >
        {children}
        <button className="swiper-button-next !text-white"></button>
        <button className="swiper-button-prev !text-white"></button>
        <button className="swiper-button-pagination"></button>
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
