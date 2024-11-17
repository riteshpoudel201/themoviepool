import { fetchTopRatedMovies } from "../../utils/movies";
import { useEffect, useState } from "react";
import ComponentWithDataAndTitle from "../ComponentWithDataAndTitle";

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchAllTopRatedMovies = async () => {
      const movies = await fetchTopRatedMovies();
      console.log("movies: ", movies);
      if (isMounted) {
        setTopRatedMovies(movies);
        setKey((prev) => prev + 1);
      }
    };
    fetchAllTopRatedMovies();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    topRatedMovies.length > 0 && <ComponentWithDataAndTitle title="top rated" data={topRatedMovies} key={key} />
  );
};

export default TopRated;
