import PageContainer from "../components/Container"
import Hero from "../components/movies/Hero"
import PopularMovie from "../components/movies/PopularMovie"
import TrendingMovie from "../components/movies/TrendingMovie"
import NowPlayingMovies from "../components/movies/NowPlayingMovies"
import TopRated from "../components/movies/TopRated"
import Upcoming from "../components/movies/UpcomingMovie"

const Movies = () => {
  return (
    <PageContainer>
      <Hero />
      <NowPlayingMovies />
      <PopularMovie />
      <TrendingMovie />
      <TopRated />
      <Upcoming />
    </PageContainer>
  )
}

export default Movies
