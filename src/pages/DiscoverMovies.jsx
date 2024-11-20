/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { fetchDiscoverMovies, searchMovies } from "../utils/movies";
import NavbarSubstutute from "../components/NavbarSubstutute";
import Header from "../components/discover/Header";
import Breadcrumb from "../components/discover/Breadcrumb";
import Filters from "../components/discover/Filters";
import MovieGrid from "../components/discover/ShowGrid";
import ShowGrid from "../components/discover/ShowGrid";
import Pagination from "../components/discover/Pagination";
import Banner from "../components/discover/Banner";
const DiscoverMovies = () => {
  const [filters, setFilters] = useState({
    language: "en",
    region: "US",
    includeAdult: false,
    page: 1
  });
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchDiscoverMovies(filters);
        setMovies(data.results);
      } catch (err) {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4">
      <NavbarSubstutute />
      <Banner title="Movies" fetchSearchShows={searchMovies}/>
      <Header
        title="Discover Movies"
        description="Explore the latest and trending movies from around the world"
      />
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <ShowGrid shows={movies} showType="movie" loading={loading} error={error} />
      <Pagination currentPage={filters.page} totalPages={500} onPageChange={handleFilterChange} pagePerGroup={10}/>
    </div>
  );
};

export default DiscoverMovies;
