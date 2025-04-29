import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowAllImages(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeGallery = () => {
    setShowAllImages(false);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };
  
  return (
    <>
      <div className="relative">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 rounded-xl overflow-hidden">
          {/* Main large image */}
          <div 
            className="md:col-span-2 md:row-span-2 cursor-pointer"
            onClick={() => openGallery(0)}
          >
            <img 
              src={images[0]} 
              alt={`${title} - main view`} 
              className="w-full h-full object-cover aspect-square md:aspect-auto"
            />
          </div>
          
          {/* Smaller images - only show the first 4 on small screens */}
          {images.slice(1, 5).map((image, index) => (
            <div 
              key={index} 
              className="cursor-pointer hidden md:block"
              onClick={() => openGallery(index + 1)}
            >
              <img 
                src={image} 
                alt={`${title} - view ${index + 2}`}
                className="w-full h-full object-cover aspect-square" 
              />
            </div>
          ))}
          
          {/* Show more button if there are more than 5 images */}
          {images.length > 5 && (
            <button 
              className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition"
              onClick={() => openGallery(0)}
            >
              Show all photos
            </button>
          )}
        </div>
      </div>
      
      {/* Full image gallery modal */}
      {showAllImages && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="p-4 flex justify-between items-center text-white">
            <button 
              onClick={closeGallery}
              className="hover:bg-white/10 p-2 rounded-full transition"
            >
              <X />
            </button>
            <div className="text-center">
              <span>{currentImageIndex + 1} / {images.length}</span>
            </div>
            <div className="w-8"></div> {/* Spacer for centering */}
          </div>
          
          <div className="flex-grow flex items-center justify-center relative">
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-4 bg-white/90 p-2 rounded-full hover:bg-white transition"
            >
              <ChevronLeft />
            </button>
            
            <img 
              src={images[currentImageIndex]} 
              alt={`${title} - view ${currentImageIndex + 1}`}
              className="max-h-full max-w-full object-contain p-4"
            />
            
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-4 bg-white/90 p-2 rounded-full hover:bg-white transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;