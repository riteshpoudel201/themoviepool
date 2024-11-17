import { useEffect, useState } from 'react';
import { fetchNowPlayingMovies } from '../../utils/movies';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const NowPlayingMovies = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [key, setKey] = useState(0);

    useEffect(() => {
      let isMounted = true;     
        const fetchAllNowPlayingMovies = async () => {
            const movies = await fetchNowPlayingMovies();
            console.log("movies: ", movies);
            if (isMounted) {
                setNowPlayingMovies(movies);
                setKey(prev => prev + 1);
            }
        };
        fetchAllNowPlayingMovies();
        return () => {
            isMounted = false;
        };
    }, []); 
// console.log("popularMovies: ",popularMovies);
  return (
    nowPlayingMovies.length > 0 && <ComponentWithDataAndTitle title="now playing" data={nowPlayingMovies} key={key} />
  )
}

export default NowPlayingMovies;
