/* eslint-disable react/prop-types */
import Card from "../cards/Card";

const ShowGrid = ({ shows, showType='movie', loading, error }) => {
    if (loading) {
      return (
        <div className="text-center text-purple-400 text-lg py-8">
          Loading movies...
        </div>
      );
    }
  
    if (error) {
      return <div className="text-center text-red-400 text-lg py-8">{error}</div>;
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 p-4">
        {shows?.map((show) => (
          // imgSrc, imgAlt, showId, movieTitle, movieDesc, releaseDate, voteAverage,showType='movie'
          <Card
            key={show.id}
            imgSrc={show.poster_path || show.backdrop_path}
            imgAlt={show.title || show.name}
            showId={show.id}
            showTitle={show.title || show.name}
            showDesc={show.overview}
            releaseDate={show.release_date || show.first_air_date}
            voteAverage={show.vote_average}
            showType={showType}
          />
        ))}
      </div>
    );
  };
  
export default ShowGrid;