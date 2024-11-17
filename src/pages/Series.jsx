import PageContainer from "../components/Container"
import Hero from "../components/series/Hero"
import TrendingSeries from "../components/series/TrendingSeries"
import AiringTodaySeries from "../components/series/AiringToday"
import OnTheAirSeries from "../components/series/OnTheAirSeries"
import TopRatedSeries from "../components/series/TopratedSeries"
import PopularSeries from "../components/series/PopularSeries"
const Series = () => {
  return (
    <PageContainer>
      <Hero />
      <AiringTodaySeries />
      <OnTheAirSeries />
      <TrendingSeries />
      <TopRatedSeries />
      <PopularSeries />
    </PageContainer>
  )
}

export default Series
