/* eslint-disable react/prop-types */
import PageContainer from "../components/Container";
import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Home/Hero";

const Upcoming = lazy(() => import("../components/movies/UpcomingMovie"));
const PopularMovies = lazy(() => import("../components/Home/PopularMovies"));
const TrendingMovies = lazy(() => import("../components/Home/TrendingMovies"));
const TrendingSeries = lazy(() => import("../components/Home/TrendingSeries"));
const AiringTodaySeries = lazy(() =>
  import("../components/Home/AiringTodaySeries")
);
const TopratedMovies = lazy(() => import("../components/Home/TopratedMovies"));
const TopratedSeries = lazy(() => import("../components/Home/TopratedSeries"));
const LatestTrailer = lazy(() => import("../components/Home/LatestTrailer"));
const Feedback = lazy(() => import("../components/Home/Feedback"));

const LazyLoadComponent = ({ Component }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView && (
        <Suspense fallback={"Loading..."}>
          <Component />
        </Suspense>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <LazyLoadComponent Component={TrendingMovies} />
      <LazyLoadComponent Component={AiringTodaySeries} />
      <LazyLoadComponent Component={LatestTrailer} />
      <LazyLoadComponent Component={TopratedMovies} />
      <LazyLoadComponent Component={TopratedSeries} />
      <LazyLoadComponent Component={PopularMovies} />
      <LazyLoadComponent Component={TrendingSeries} />
      <LazyLoadComponent Component={Upcoming} />
      <LazyLoadComponent Component={Feedback} />
    </PageContainer>
  );
};

export default Home;
