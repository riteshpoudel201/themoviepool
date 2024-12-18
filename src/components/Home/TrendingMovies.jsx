import { fetchTrendingMovies } from '../../utils/movies';
import { useEffect, useState } from 'react';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [reRenderKey, setReRenderKey] = useState(0);

  useEffect(() => {
    let isMounted = true;     
      const fetchAllTrendingMovies = async () => {
          const movies = await fetchTrendingMovies();
          if (isMounted) {
              setTrendingMovies(movies);
              setReRenderKey(prev => prev + 1);
          }
      };
      fetchAllTrendingMovies();
      return () => {
          isMounted = false;
      };
  }, []); 

  return (
      trendingMovies.length > 0 && <ComponentWithDataAndTitle title="Movies Trending Today" data={trendingMovies} reRenderKey={reRenderKey} path='/movies'/>
  )
}

export default TrendingMovies
