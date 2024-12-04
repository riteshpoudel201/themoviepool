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
      <ComponentWithDataAndTitle title="series trending today" data={trendingSeries} key={key} showType='tv' path='series'/>
  )
}

export default TrendingSeries
