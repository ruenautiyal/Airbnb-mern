export interface ReviewType {
  user: {
    name: string;
    avatar: string;
  };
  date: string;
  comment: string;
  ratings: {
    cleanliness: number;
    communication: number;
    checkIn: number;
    accuracy: number;
    location: number;
    value: number;
  };
}

export interface HostType {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  joinedDate: string;
  responseRate?: number;
  responseTime?: string;
}

export interface AmenityType {
  title: string;
  items: string[];
}

export interface PropertyType {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  price: number;
  available: boolean;
  availableDates?: string;
  images: string[];
  rating?: number;
  reviews: ReviewType[];
  host: HostType;
  bedrooms: number;
  beds: number;
  baths: number;
  maxGuests: number;
  amenities: AmenityType[];
  checkInTime?: string;
  checkOutTime?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}