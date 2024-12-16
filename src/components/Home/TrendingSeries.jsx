import { fetchTrendingSeries } from '../../utils/series';
import { useEffect, useState } from 'react';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const TrendingSeries = () => {
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [reRenderKey, setReRenderKey] = useState(0);

  useEffect(() => {
    let isMounted = true;     
      const fetchAllTrendingSeries = async () => {
          const series = await fetchTrendingSeries();
          if (isMounted) {
              setTrendingSeries(series);
              setReRenderKey(prev => prev + 1);
          }
      };
      fetchAllTrendingSeries();
      return () => {
          isMounted = false;
      };
  }, []); 

  return (
      trendingSeries.length > 0 && <ComponentWithDataAndTitle title="series trending today" data={trendingSeries} reRenderKey={reRenderKey} showType='tv' path='series'/>
  )
}

export default TrendingSeries
