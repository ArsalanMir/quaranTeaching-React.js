import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Search icon import

const Navbar = () => {
  return (
    <nav className="bg-white text-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold text-blue tracking-wide hover:text-yellow-300 transition duration-300">
          Quran Hub
        </Link>

        {/* Navbar Links */}
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-lg font-semibold text-blue-800 hover:text-yellow-400 hover:underline transition duration-300">
            Home
          </Link>
          <Link 
            to="/courses" 
            className="text-lg font-semibold text-blue-800 hover:text-yellow-400 hover:underline transition duration-300">
            Courses
          </Link>
          <Link 
            to="/quranlive" 
            className="text-lg font-semibold text-blue-800 hover:text-yellow-400 hover:underline transition duration-300">
            Quran Live
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-semibold text-blue-800 hover:text-yellow-400 hover:underline transition duration-300">
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-lg font-semibold text-blue-800 hover:text-yellow-400 hover:underline transition duration-300">
            Contact
          </Link>

          {/* Login Link */}
          <Link 
            to="/" 
            className="text-lg font-semibold text-blue-800 hover:text-yellow-400 hover:underline transition duration-300">
            Login
          </Link>

          {/* Get Started Button */}
          <Link 
            to="/" 
            className="bg-yellow-400 text-blue-800 font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300">
            Get Started
          </Link>

          {/* Search Icon */}
          <button className="text-xl p-2 text-blue-800 hover:text-yellow-400">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
