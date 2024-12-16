import { fetchTopRatedMovies } from "../../utils/movies";
import { useEffect, useState } from "react";
import ComponentWithDataAndTitle from "../ComponentWithDataAndTitle";

const TopratedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [reRenderKey, setReRenderKey] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchAllTopRatedMovies = async () => {
      const movies = await fetchTopRatedMovies();
      if (isMounted) {
        setTopRatedMovies(movies);
        setReRenderKey((prev) => prev + 1);
      }
    };
    fetchAllTopRatedMovies();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    topRatedMovies.length > 0 && <ComponentWithDataAndTitle title="top rated movies" data={topRatedMovies} reRenderKey={reRenderKey} path="/movies"/>
  );
};

export default TopratedMovies;
