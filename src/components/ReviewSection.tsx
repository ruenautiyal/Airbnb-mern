import { useState } from 'react';
import { Star } from 'lucide-react';
import { ReviewType } from '../types/property';

interface ReviewSectionProps {
  reviews: ReviewType[];
  rating: number;
}

const ReviewSection = ({ reviews, rating }: ReviewSectionProps) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // Calculate the ratings breakdown
  const ratingCounts = {
    cleanliness: 0,
    communication: 0,
    checkIn: 0,
    accuracy: 0,
    location: 0,
    value: 0
  };
  
  reviews.forEach(review => {
    ratingCounts.cleanliness += review.ratings.cleanliness;
    ratingCounts.communication += review.ratings.communication;
    ratingCounts.checkIn += review.ratings.checkIn;
    ratingCounts.accuracy += review.ratings.accuracy;
    ratingCounts.location += review.ratings.location;
    ratingCounts.value += review.ratings.value;
  });
  
  const averageRatings = {
    cleanliness: +(ratingCounts.cleanliness / reviews.length).toFixed(1),
    communication: +(ratingCounts.communication / reviews.length).toFixed(1),
    checkIn: +(ratingCounts.checkIn / reviews.length).toFixed(1),
    accuracy: +(ratingCounts.accuracy / reviews.length).toFixed(1),
    location: +(ratingCounts.location / reviews.length).toFixed(1),
    value: +(ratingCounts.value / reviews.length).toFixed(1)
  };
  
  // Show only 6 reviews initially
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 6);
  
  return (
    <div className="py-8 border-t border-gray-200">
      <h2 className="text-2xl font-semibold flex items-center mb-4">
        <Star className="h-5 w-5 fill-current mr-2" />
        {rating} · {reviews.length} reviews
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
        <div className="flex items-center justify-between">
          <span>Cleanliness</span>
          <div className="flex items-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full mr-2 overflow-hidden">
              <div 
                className="h-full bg-black rounded-full" 
                style={{ width: `${(averageRatings.cleanliness / 5) * 100}%` }}
              ></div>
            </div>
            <span>{averageRatings.cleanliness}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Communication</span>
          <div className="flex items-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full mr-2 overflow-hidden">
              <div 
                className="h-full bg-black rounded-full" 
                style={{ width: `${(averageRatings.communication / 5) * 100}%` }}
              ></div>
            </div>
            <span>{averageRatings.communication}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Check-in</span>
          <div className="flex items-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full mr-2 overflow-hidden">
              <div 
                className="h-full bg-black rounded-full" 
                style={{ width: `${(averageRatings.checkIn / 5) * 100}%` }}
              ></div>
            </div>
            <span>{averageRatings.checkIn}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Accuracy</span>
          <div className="flex items-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full mr-2 overflow-hidden">
              <div 
                className="h-full bg-black rounded-full" 
                style={{ width: `${(averageRatings.accuracy / 5) * 100}%` }}
              ></div>
            </div>
            <span>{averageRatings.accuracy}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Location</span>
          <div className="flex items-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full mr-2 overflow-hidden">
              <div 
                className="h-full bg-black rounded-full" 
                style={{ width: `${(averageRatings.location / 5) * 100}%` }}
              ></div>
            </div>
            <span>{averageRatings.location}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Value</span>
          <div className="flex items-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full mr-2 overflow-hidden">
              <div 
                className="h-full bg-black rounded-full" 
                style={{ width: `${(averageRatings.value / 5) * 100}%` }}
              ></div>
            </div>
            <span>{averageRatings.value}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-8">
        {displayedReviews.map((review, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-3">
                <img 
                  src={review.user.avatar} 
                  alt={review.user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">{review.user.name}</h4>
                <p className="text-text-secondary text-sm">{review.date}</p>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
      
      {reviews.length > 6 && (
        <button 
          onClick={() => setShowAllReviews(!showAllReviews)}
          className="btn-outlined"
        >
          {showAllReviews ? 'Show less reviews' : `Show all ${reviews.length} reviews`}
        </button>
      )}
    </div>
  );
};

export default ReviewSection;