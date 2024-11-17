import { fetchTrendingSeries } from '../../utils/series';
import { useEffect, useState } from 'react';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const TrendingSeries = () => {
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let isMounted = true;     
      const fetchAllTrendingSeries = async () => {
          const series = await fetchTrendingSeries();
          console.log("series: ", series);
          if (isMounted) {
              setTrendingSeries(series);
              setKey(prev => prev + 1);
          }
      };
      fetchAllTrendingSeries();
      return () => {
          isMounted = false;
      };
  }, []); 

  return (
      <ComponentWithDataAndTitle title="trending" data={trendingSeries} key={key} showType='tv' />
  )
}

export default TrendingSeries
