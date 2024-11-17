/* eslint-disable react/prop-types */
const Header = ({title,description}) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl text-white mb-4">{title}</h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default Header;
{/* <h1 className="text-4xl text-white mb-4">Discover Movies</h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Explore the latest and trending movies from around the world
      </p> */}