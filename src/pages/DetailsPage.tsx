import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Share, Star, MapPin, Medal, Calendar, User, Home, Bath, Bed } from 'lucide-react';
import { format } from 'date-fns';

import ImageGallery from '../components/ImageGallery';
import BookingForm from '../components/BookingForm';
import ReviewSection from '../components/ReviewSection';
import { listings } from '../data/listings';
import { PropertyType } from '../types/property';

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<PropertyType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    const fetchProperty = () => {
      // Scroll to top when page loads
      window.scrollTo(0, 0);
      
      // Simulate loading
      setIsLoading(true);
      
      setTimeout(() => {
        const foundProperty = listings.find(p => p.id === id);
        
        if (foundProperty) {
          setProperty(foundProperty);
        } else {
          // Handle not found
          navigate('/');
        }
        
        setIsLoading(false);
      }, 500);
    };
    
    fetchProperty();
  }, [id, navigate]);
  
  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };
  
  if (isLoading) {
    return (
      <div className="container-custom py-8 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="aspect-[16/9] bg-gray-200 rounded-xl mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-8"></div>
            
            <div className="border-t border-gray-200 py-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-16 bg-gray-200 rounded"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="h-80 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!property) {
    return null;
  }
  
  const joinedDate = new Date(property.host.joinedDate);
  const joinedYear = format(joinedDate, 'yyyy');
  const joinedMonth = format(joinedDate, 'MMMM');
  
  return (
    <div className="container-custom py-8">
      <ImageGallery images={property.images} title={property.title} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-1">{property.title}</h2>
                <p className="flex items-center text-text-secondary">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  aria-label="Share"
                >
                  <Share className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  aria-label={isFavorite ? "Remove from wishlist" : "Save to wishlist"}
                  onClick={toggleFavorite}
                >
                  <Heart 
                    className={`h-5 w-5 ${isFavorite ? 'fill-primary text-primary' : ''}`} 
                  />
                </button>
              </div>
            </div>
          </div>
          
          <div className="py-6 border-b border-gray-200">
            <div className="flex items-start space-x-4">
              <img 
                src={property.host.avatar} 
                alt={property.host.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              
              <div>
                <h3 className="text-lg font-semibold">
                  Hosted by {property.host.name}
                  {property.host.isSuperhost && (
                    <span className="ml-2 text-sm bg-rose-100 text-primary px-2 py-0.5 rounded-full">
                      Superhost
                    </span>
                  )}
                </h3>
                <p className="text-text-secondary text-sm">
                  Joined in {joinedMonth} {joinedYear}
                </p>
              </div>
            </div>
            
            {property.host.isSuperhost && (
              <div className="mt-4 flex items-center text-text-secondary">
                <Medal className="h-5 w-5 mr-2" />
                <p>{property.host.name} is a Superhost with a <span className="font-medium">{property.host.responseRate}% response rate</span> and typically responds <span className="font-medium">{property.host.responseTime}</span>.</p>
              </div>
            )}
          </div>
          
          <div className="py-6 border-b border-gray-200">
            <div className="grid grid-cols-3 mb-6">
              <div className="flex items-center">
                <Home className="h-6 w-6 mr-4 text-text-secondary" />
                <div>
                  <h4 className="font-medium">{property.bedrooms} bedroom{property.bedrooms !== 1 ? 's' : ''}</h4>
                </div>
              </div>
              
              <div className="flex items-center">
                <Bed className="h-6 w-6 mr-4 text-text-secondary" />
                <div>
                  <h4 className="font-medium">{property.beds} bed{property.beds !== 1 ? 's' : ''}</h4>
                </div>
              </div>
              
              <div className="flex items-center">
                <Bath className="h-6 w-6 mr-4 text-text-secondary" />
                <div>
                  <h4 className="font-medium">{property.baths} bath{property.baths !== 1 ? 's' : ''}</h4>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
              <div className="flex items-center py-2">
                <User className="h-6 w-6 mr-4 text-text-secondary" />
                <div>
                  <h4 className="font-medium">Up to {property.maxGuests} guests</h4>
                </div>
              </div>
              
              <div className="flex items-center py-2">
                <Calendar className="h-6 w-6 mr-4 text-text-secondary" />
                <div>
                  <h4 className="font-medium">Free cancellation before check-in</h4>
                </div>
              </div>
              
              {property.checkInTime && property.checkOutTime && (
                <>
                  <div className="flex items-center py-2">
                    <Star className="h-6 w-6 mr-4 text-text-secondary" />
                    <div>
                      <h4 className="font-medium">Self check-in at {property.checkInTime}</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center py-2">
                    <Star className="h-6 w-6 mr-4 text-text-secondary" />
                    <div>
                      <h4 className="font-medium">Check out by {property.checkOutTime}</h4>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="py-6 border-b border-gray-200">
            <p className="whitespace-pre-line text-gray-700">{property.description}</p>
          </div>
          
          <div className="py-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold mb-6">What this place offers</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {property.amenities.map((amenityGroup, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-medium mb-3">{amenityGroup.title}</h4>
                  <ul className="space-y-2">
                    {amenityGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <Star className="h-5 w-5 mr-3 text-text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {property.reviews.length > 0 && (
            <ReviewSection reviews={property.reviews} rating={property.rating || 0} />
          )}
        </div>
        
        <div>
          <BookingForm property={property} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;