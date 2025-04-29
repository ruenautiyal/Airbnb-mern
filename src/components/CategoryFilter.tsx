import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 'all', name: 'All', icon: '🏠' },
  { id: 'beachfront', name: 'Beachfront', icon: '🏖️' },
  { id: 'cabins', name: 'Cabins', icon: '🌲' },
  { id: 'countryside', name: 'Countryside', icon: '🌄' },
  { id: 'design', name: 'Design', icon: '🏛️' },
  { id: 'mansions', name: 'Mansions', icon: '🏰' },
  { id: 'amazing-pools', name: 'Amazing pools', icon: '🏊' },
  { id: 'islands', name: 'Islands', icon: '🌴' },
  { id: 'tiny-homes', name: 'Tiny homes', icon: '🏡' },
  { id: 'lakefront', name: 'Lakefront', icon: '⛵' },
  { id: 'luxury', name: 'Luxury', icon: '💎' },
  { id: 'skiing', name: 'Skiing', icon: '⛷️' },
  { id: 'castles', name: 'Castles', icon: '🏯' },
  { id: 'camping', name: 'Camping', icon: '⛺' },
  { id: 'historic', name: 'Historic', icon: '🏛️' }
];

interface CategoryFilterProps {
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };
  
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 320;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    
    scrollContainerRef.current.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };
  
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  return (
    <div className="relative">
      {showLeftArrow && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      
      <div 
        ref={scrollContainerRef}
        className="flex space-x-8 py-4 overflow-x-scroll scrollbar-hide px-2 relative"
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex flex-col items-center space-y-2 min-w-fit transition-opacity ${
              activeCategory === category.id
                ? 'opacity-100 border-b-2 border-gray-800 pb-2'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span className="text-xs whitespace-nowrap">{category.name}</span>
          </button>
        ))}
      </div>
      
      {showRightArrow && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;