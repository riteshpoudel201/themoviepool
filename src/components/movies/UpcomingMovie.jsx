import { fetchUpcomingMovies } from "../../utils/movies";
import { useEffect, useState } from "react";
import ComponentWithDataAndTitle from "../ComponentWithDataAndTitle";


const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchAllUpcomingMovies = async () => {
      const movies = await fetchUpcomingMovies();
      console.log("movies: ", movies);
      if (isMounted) {
        setUpcomingMovies(movies);
        setKey((prev) => prev + 1);
      }
    };
    fetchAllUpcomingMovies();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    upcomingMovies.length > 0 && <ComponentWithDataAndTitle title="upcoming" data={upcomingMovies} key={key} />
  );
};

export default Upcoming;
