import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../utils/movies';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const PopularMovie = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [key, setKey] = useState(0);

    useEffect(() => {
      let isMounted = true;     
        const fetchAllPopularMovies = async () => {
            const movies = await fetchPopularMovies();
            if (isMounted) {
                setPopularMovies(movies);
                setKey(prev => prev + 1);
            }
        };
        fetchAllPopularMovies();
        return () => {
            isMounted = false;
        };
    }, []); 
// console.log("popularMovies: ",popularMovies);
  return (
    popularMovies.length > 0 && <ComponentWithDataAndTitle title="popular" data={popularMovies} key={key} />
  )
}

export default PopularMovie
