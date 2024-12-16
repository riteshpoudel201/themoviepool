import { fetchTopRatedSeries } from "../../utils/series";
import { useEffect, useState } from "react";
import ComponentWithDataAndTitle from "../ComponentWithDataAndTitle";

const TopratedSeries = () => {
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [reRenderKey, setReRenderKey] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchAllTopRatedSeries = async () => {
      const series = await fetchTopRatedSeries();
      if (isMounted) {
        setTopRatedSeries(series);
        setReRenderKey((prev) => prev + 1);
      }
    };
    fetchAllTopRatedSeries();
    return () => {
      isMounted = false;
    };
  }, []);

  return (

    topRatedSeries.length > 0 && <ComponentWithDataAndTitle
      title="top rated series"
      data={topRatedSeries}
      reRenderKey={reRenderKey}
      showType='tv'
      path="/series"
    />
  );
};

export default TopratedSeries;
