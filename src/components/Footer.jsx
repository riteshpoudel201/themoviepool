import Logo from './Logo';
const Footer = () => {
    return (
      <footer className="bg-purple-800 text-white py-6 min-h-[30vh] mt-5">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-lg font-semibold">
            <Logo />
          </div>
  
          {/* Navigation Links */}
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/discover" className="hover:text-gray-400">Discover</a>
            <a href="/movies" className="hover:text-gray-400">Movies</a>
            <a href="/series" className="hover:text-gray-400">Series</a>
          </nav>
  
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400 mt-4">
          © 2024 The Movie Pool. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  