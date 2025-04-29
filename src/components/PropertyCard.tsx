import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { PropertyType } from '../types/property';

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigating to details page
    setIsFavorite(!isFavorite);
  };
  
  return (
    <Link to={`/listings/${property.id}`} className="block card-hover">
      <div className="relative overflow-hidden rounded-xl aspect-square mb-2">
        <button 
          onClick={toggleFavorite}
          className="absolute right-3 top-3 z-10"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`h-7 w-7 drop-shadow-lg transition ${
              isFavorite ? 'fill-primary text-primary' : 'text-white'
            }`} 
          />
        </button>
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <h3 className="font-semibold text-lg truncate">{property.title}</h3>
          {property.rating && (
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current text-black mr-1" />
              <span>{property.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-text-secondary mb-1 text-sm">
          {property.location}
        </p>
        
        <p className="text-text-secondary mb-2 text-sm">
          {property.available ? `${property.availableDates}` : 'Check availability'}
        </p>
        
        <p>
          <span className="font-semibold">${property.price}</span>
          <span className="text-text-secondary"> night</span>
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;