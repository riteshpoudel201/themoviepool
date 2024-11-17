/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const MovieCard = ({ id, title, poster_path, release_date, vote_average }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`
  
  const formatYear = (dateString) => {
    if (!dateString) return 'N/A'
    try {
      return new Date(dateString).getFullYear()
    } catch {
      return 'N/A'
    }
  }

  return (
    <Link 
      to={`/movie/${id}`}
      className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:-translate-y-1"
    >
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-[300px] object-cover"
      />
      <div className="p-4">
        <h2 className="text-white text-base mb-2">{title}</h2>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">{formatYear(release_date)}</span>
          <span className="text-yellow-400">★ {vote_average?.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard