import { fetchOnTheAirSeries } from '../../utils/series';
import { useEffect, useState } from 'react';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const OnTheAirSeries = () => {
  const [onTheAirSeries, setOnTheAirSeries] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let isMounted = true;     
      const fetchAllOnTheAirSeries = async () => {
          const series = await fetchOnTheAirSeries();
          console.log("series: ", series);
          if (isMounted) {
              setOnTheAirSeries(series);
              setKey(prev => prev + 1);
          }
      };
      fetchAllOnTheAirSeries();
      return () => {
          isMounted = false;
      };
  }, []); 

  return (
      <ComponentWithDataAndTitle title="On The Air" data={onTheAirSeries} key={key} showType='tv' />
  )
}

export default OnTheAirSeries
