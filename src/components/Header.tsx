import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Globe, Menu, User, Heart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDetailsPage = location.pathname.includes('/listings/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isDetailsPage ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <svg 
            className="h-8 w-auto text-primary"
            viewBox="0 0 24 24" 
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.5c-4.6 0-8.4 3.7-8.4 8.3 0 7 7.5 10.7 7.8 10.8.2.1.4.1.6 0 .3-.1 7.8-3.8 7.8-10.8 0-4.6-3.7-8.3-8.4-8.3zm0 12.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
          </svg>
          <span className="ml-2 text-xl font-bold text-primary">airbnb</span>
        </Link>

        {/* Search Bar */}
        <div 
          className={`hidden md:flex items-center rounded-full border border-gray-200 shadow-sm hover:shadow transition px-2 py-2 ${
            isScrolled || isDetailsPage ? 'bg-white' : 'bg-white/90'
          }`}
        >
          <button className="px-4 font-medium text-sm">Anywhere</button>
          <span className="h-4 w-px bg-gray-300"></span>
          <button className="px-4 font-medium text-sm">Any week</button>
          <span className="h-4 w-px bg-gray-300"></span>
          <button className="px-4 text-gray-500 text-sm">Add guests</button>
          <button className="bg-primary rounded-full p-2 text-white">
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* User Nav */}
        <div className="flex items-center">
          <button className="hidden md:flex items-center mr-2 text-sm font-medium px-4 py-3 rounded-full hover:bg-gray-100">
            <span>Become a Host</span>
          </button>
          <button className="hidden md:flex items-center mr-3 p-3 rounded-full hover:bg-gray-100">
            <Globe className="h-5 w-5" />
          </button>
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center border border-gray-200 rounded-full px-3 py-2 shadow-sm hover:shadow transition"
            >
              <Menu className="h-5 w-5 mr-2" />
              <User className="h-7 w-7 rounded-full bg-gray-200 p-1" />
            </button>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-100 z-50 slide-up">
                <div className="py-2">
                  <button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate('/signup');
                    }} 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-50 font-medium"
                  >
                    Sign up
                  </button>
                  <button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate('/login');
                    }} 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Log in
                  </button>
                </div>
                <div className="border-t border-gray-100 py-2">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-50">Host your home</button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-50">Help</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center rounded-full border border-gray-200 shadow-sm px-4 py-2 bg-white">
          <Search className="h-4 w-4 text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Where to?" 
            className="flex-grow bg-transparent text-sm outline-none" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;