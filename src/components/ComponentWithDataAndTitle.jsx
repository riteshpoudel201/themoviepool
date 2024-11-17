/* eslint-disable react/prop-types */
import { SwiperSlide } from "swiper/react";
import Card from "./cards/Card";
import CardSwiperContainer from "./Swiper/CardSwiperContainer";
import ComponentContainerWithTitle from "./ComponentContainerWithTitle";

const base_url = "https://image.tmdb.org/t/p/original/";

const ComponentWithDataAndTitle = ({title, data,key,showType='movie',path=""}) => {
  return (
    <ComponentContainerWithTitle title={title} path = {path}>
      <CardSwiperContainer key={key}>
        {data.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-[90vh]">
            <Card
              imgSrc={`${base_url}${slide.poster_path}`}
              imgAlt={slide.title}
              showTitle={slide.title || slide.name}
              showDesc={slide.overview}
              releaseDate={slide.release_date || slide.first_air_date}
              voteAverage={slide.vote_average}
              showType={showType}
              showId={slide.id}
            />
          </SwiperSlide>
        ))}
      </CardSwiperContainer>
    </ComponentContainerWithTitle>
  )
}

export default ComponentWithDataAndTitle;