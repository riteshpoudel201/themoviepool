import { useEffect, useState } from 'react';
import { fetchPopularSeries } from '../../utils/series';
import ComponentWithDataAndTitle from '../ComponentWithDataAndTitle';

const PopularSeries = () => {
    const [popularSeries, setPopularSeries] = useState([]);
    const [key, setKey] = useState(0);

    useEffect(() => {
      let isMounted = true;     
        const fetchAllPopularSeries = async () => {
                const series = await fetchPopularSeries();
            if (isMounted) {
                setPopularSeries(series);
                setKey(prev => prev + 1);
            }
        };
            fetchAllPopularSeries();
        return () => {
            isMounted = false;
        };
    }, []); 
// console.log("popularMovies: ",popularMovies);
  return (
    <ComponentWithDataAndTitle title="popular" data={popularSeries} key={key} showType='tv' />
  )
}

export default PopularSeries
