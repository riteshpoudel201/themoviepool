import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../utils/movies';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [reRenderKey, setReRenderKey] = useState(0);

    useEffect(() => {
      let isMounted = true;     
        const fetchAllPopularMovies = async () => {
            const movies = await fetchPopularMovies();
            if (isMounted) {
                setPopularMovies(movies);
                setReRenderKey(prev => prev + 1);
            }
        };
        fetchAllPopularMovies();
        return () => {
            isMounted = false;
        };
    }, []); 
// console.log("popularMovies: ",popularMovies);
  return (
    popularMovies.length > 0 && <ComponentWithDataAndTitle title="most popular movies" data={popularMovies} reRenderKey={reRenderKey} path="/movies"/>
  )
}

export default PopularMovies
