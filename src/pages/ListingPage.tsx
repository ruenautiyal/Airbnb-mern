import { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import CategoryFilter from '../components/CategoryFilter';
import { listings } from '../data/listings';
import { PropertyType } from '../types/property';

const ListingPage = () => {
  const [filteredListings, setFilteredListings] = useState<PropertyType[]>(listings);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsLoading(true);
    
    // Simulate fetching time
    setTimeout(() => {
      if (categoryId === 'all') {
        setFilteredListings(listings);
      } else {
        const filtered = listings.filter(listing => listing.category === categoryId);
        setFilteredListings(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="container-custom py-8">
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      
      {isLoading ? (
        <div className="py-10">
          <div className="grid property-grid animate-pulse">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-gray-200 rounded-xl aspect-square mb-2"></div>
                <div className="bg-gray-200 h-5 rounded w-3/4 mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-1/2 mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-2/3 mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {filteredListings.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-2">No listings found</h2>
              <p className="text-text-secondary mb-8">
                We couldn't find any properties in the selected category.
              </p>
              <button 
                onClick={() => handleCategoryChange('all')}
                className="btn-outlined"
              >
                View all listings
              </button>
            </div>
          ) : (
            <div className="py-6">
              <div className="grid property-grid">
                {filteredListings.map((property, index) => (
                  <div 
                    key={property.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ListingPage;