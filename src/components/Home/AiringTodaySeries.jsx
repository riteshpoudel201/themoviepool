import { fetchAiringTodaySeries } from '../../utils/series';
import { useEffect, useState } from 'react';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const AiringTodaySeries = () => {
  const [airingTodaySeries, setAiringTodaySeries] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let isMounted = true;     
      const fetchAllAiringTodaySeries = async () => {
          const series = await fetchAiringTodaySeries();
          console.log("series: ", series);
          if (isMounted) {
              setAiringTodaySeries(series);
              setKey(prev => prev + 1);
          }
      };
      fetchAllAiringTodaySeries();
      return () => {
          isMounted = false;
      };
  }, []); 

  return (
      <ComponentWithDataAndTitle title="Series Airing Today" data={airingTodaySeries} key={key} showType='tv' path='/series'/>
  )
}

export default AiringTodaySeries
