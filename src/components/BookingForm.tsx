import { useState } from 'react';
import { Calendar, Users, ChevronDown } from 'lucide-react';
import { PropertyType } from '../types/property';

interface BookingFormProps {
  property: PropertyType;
}

const BookingForm = ({ property }: BookingFormProps) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };
  
  const nights = calculateNights();
  const subtotal = property.price * nights;
  const cleaningFee = 80;
  const serviceFee = Math.round(subtotal * 0.17);
  const total = subtotal + cleaningFee + serviceFee;
  
  return (
    <div className="border border-gray-300 rounded-xl p-6 shadow-lg sticky top-28">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="font-bold text-xl">${property.price}</span>
          <span className="text-text-secondary"> night</span>
        </div>
        {property.rating && (
          <div className="flex items-center">
            <span className="flex items-center">
              <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {property.rating}
            </span>
            <span className="mx-1">·</span>
            <span className="text-text-secondary underline">
              {property.reviews.length} reviews
            </span>
          </div>
        )}
      </div>
      
      <div className="border border-gray-300 rounded-t-lg overflow-hidden mb-4">
        <div className="grid grid-cols-2 divide-x divide-gray-300">
          <div className="p-3">
            <label className="block text-xs font-semibold mb-1">CHECK-IN</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full outline-none text-sm"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-semibold mb-1">CHECKOUT</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full outline-none text-sm"
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        
        <div className="relative border-t border-gray-300">
          <button 
            className="w-full p-3 text-left flex items-center justify-between"
            onClick={() => setShowGuestSelector(!showGuestSelector)}
          >
            <div>
              <label className="block text-xs font-semibold mb-1">GUESTS</label>
              <span className="text-sm">{guests} guest{guests !== 1 ? 's' : ''}</span>
            </div>
            <ChevronDown className={`h-5 w-5 transition-transform ${showGuestSelector ? 'rotate-180' : ''}`} />
          </button>
          
          {showGuestSelector && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg p-4 shadow-lg z-10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-medium">Adults</p>
                  <p className="text-sm text-text-secondary">Age 13+</p>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full disabled:opacity-50"
                    disabled={guests <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{guests}</span>
                  <button 
                    onClick={() => setGuests(prev => Math.min(property.maxGuests, prev + 1))}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full disabled:opacity-50"
                    disabled={guests >= property.maxGuests}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-text-secondary">
                This place has a maximum of {property.maxGuests} guests.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <button className="w-full btn-primary mb-4">
        {checkIn && checkOut ? 'Reserve' : 'Check availability'}
      </button>
      
      <p className="text-center mb-4 text-sm">You won't be charged yet</p>
      
      {nights > 0 && (
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="underline">${property.price} x {nights} nights</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="border-t border-gray-300 pt-4 mt-4 flex justify-between font-semibold">
            <span>Total before taxes</span>
            <span>${total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;