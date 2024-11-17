import { fetchTrendingMovies } from '../../utils/movies';
import { useEffect, useState } from 'react';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const TrendingMovie = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let isMounted = true;     
      const fetchAllTrendingMovies = async () => {
          const movies = await fetchTrendingMovies();
          console.log("movies: ", movies);
          if (isMounted) {
              setTrendingMovies(movies);
              setKey(prev => prev + 1);
          }
      };
      fetchAllTrendingMovies();
      return () => {
          isMounted = false;
      };
  }, []); 

  return (
      trendingMovies.length > 0 && <ComponentWithDataAndTitle title="trending" data={trendingMovies} key={key} />
  )
}

export default TrendingMovie
