/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { fetchDiscoverSeries } from "../utils/series";
import NavbarSubstutute from "../components/NavbarSubstutute";
import Breadcrumb from "../components/discover/Breadcrumb";
import Header from "../components/discover/Header";
import Filters from "../components/discover/Filters";
import ShowGrid from "../components/discover/ShowGrid";

const DiscoverSeries = () => {
  const [filters, setFilters] = useState({
    language: "en",
    region: "US",
    includeAdult: false,
  });
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSeries = async () => {
      try {
        setLoading(true);
        const data = await fetchDiscoverSeries(filters);
        setSeries(data.results);
      } catch (err) {
        setError("Failed to load series");
      } finally {
        setLoading(false);
      }
    };

    loadSeries();
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
      <Breadcrumb title="Series" />
      <Header
        title="Discover Series"
        description="Explore the latest and trending series from around the world"
      />
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <ShowGrid shows={series} showType="tv" loading={loading} error={error} />
    </div>
  );
};



export default DiscoverSeries;
