import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-bold text-purple-400 m-0 leading-none drop-shadow-lg">
          404
        </h1>
        
        <h2 className="text-3xl text-white my-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-purple-400 text-white px-6 py-3 rounded-lg font-medium transition-colors hover:bg-purple-500"
        >
          <span className="text-xl">🏠</span>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound