import { fetchTopRatedSeries } from "../../utils/series";
import { useEffect, useState } from "react";
import ComponentWithDataAndTitle from "../ComponentWithDataAndTitle";

const TopRatedSeries = () => {
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchAllTopRatedSeries = async () => {
      const series = await fetchTopRatedSeries();
      if (isMounted) {
        setTopRatedSeries(series);
        setKey((prev) => prev + 1);
      }
    };
    fetchAllTopRatedSeries();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ComponentWithDataAndTitle
      title="top rated"
      data={topRatedSeries}
      key={key}
      showType='tv'
    />
  );
};

export default TopRatedSeries;
