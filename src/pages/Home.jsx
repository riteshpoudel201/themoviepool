import PageContainer from "../components/Container"
import Hero from "../components/Home/Hero"
import Upcoming from "../components/movies/UpcomingMovie"
import PopularMovies from "../components/Home/PopularMovies"
import TrendingMovies from "../components/Home/TrendingMovies"
import TrendingSeries from "../components/Home/TrendingSeries"
import AiringTodaySeries from "../components/Home/AiringTodaySeries"
import TopratedMovies from "../components/Home/TopratedMovies"
import TopratedSeries from "../components/Home/TopratedSeries"
const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <PopularMovies />
      <TrendingMovies />
      <AiringTodaySeries />
      <TopratedMovies />
      <TopratedSeries />
      <TrendingSeries />
      <Upcoming />
    </PageContainer>
  )
}

export default Home
