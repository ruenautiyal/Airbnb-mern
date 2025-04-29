import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Safety information</a></li>
              <li><a href="#" className="hover:underline">Supporting people with disabilities</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Disaster relief housing</a></li>
              <li><a href="#" className="hover:underline">Combating discrimination</a></li>
              <li><a href="#" className="hover:underline">Neighborhood concerns</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Hosting</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Airbnb</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600 mb-4 md:mb-0">
            <span>© 2025 Airbnb Clone</span>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm font-medium">
              <Heart className="h-4 w-4 mr-1" />
              <span>Made with love</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;