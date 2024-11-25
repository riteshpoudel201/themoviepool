/* eslint-disable react/prop-types */
import Breadcrumb from "./Breadcrumb";
import SearchDiscoverMovies from "./Search";

const Banner = ({ title, fetchSearchShows }) => {
  return (
    <div className="relative w-full h-[400px] bg-[url('https://st3.depositphotos.com/1064045/15061/i/450/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg')] bg-cover bg-center">
      <Breadcrumb title={title} />
      <div className="w-full h-full flex justify-center items-center">
       <SearchDiscoverMovies title={title} fetchSearchShows={fetchSearchShows} />
      </div>
    </div>
  );
};

export default Banner;
