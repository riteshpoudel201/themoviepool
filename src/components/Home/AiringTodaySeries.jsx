import { fetchAiringTodaySeries } from '../../utils/series';
import { useEffect, useState } from 'react';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const AiringTodaySeries = () => {
  const [airingTodaySeries, setAiringTodaySeries] = useState([]);
  const [reRenderKey, setReRenderKey] = useState(0);

  useEffect(() => {
    let isMounted = true;     
      const fetchAllAiringTodaySeries = async () => {
          const series = await fetchAiringTodaySeries();
          console.log("series: ", series);
          if (isMounted) {
              setAiringTodaySeries(series);
              setReRenderKey(prev => prev + 1);
          }
      };
      fetchAllAiringTodaySeries();
      return () => {
          isMounted = false;
      };
  }, []); 

  return (
    airingTodaySeries.length> 0 && <ComponentWithDataAndTitle title="Series Airing Today" data={airingTodaySeries} reRenderKey={reRenderKey} showType='tv' path='/series'/>
  )
}

export default AiringTodaySeries
