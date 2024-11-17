import { useState } from "react";
import { fetchSeries, searchSeries } from "../../utils/series";
import { useEffect } from "react";
import SearchSeries from "./SearchSeries";

const base_url = "https://image.tmdb.org/t/p/original/";
const Hero = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchRandomSeries = async () => {
      const series = await fetchSeries();
      setSeries(series);
    };
    fetchRandomSeries();
  }, []);
  return (
    <div>
      <div className="relative">
        {series.length > 0 && (
          <img
            src={`${base_url}${series[0].backdrop_path}`}
            alt="hero"
            className="w-full h-[500px] object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50">
          <SearchSeries fetchSearchShows={searchSeries} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
