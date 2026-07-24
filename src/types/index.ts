export interface Service {
  id: string;
  name: string;
  description: string;
  iconName: string;
  duration: string;
  price: string;
  benefits: string[];
  image: string;
}

export interface Provider {
  id: string | number;
  name: string;
  phone: string;
  image: string;
  age?: string | number;
  location?: string;
  experience?: string | number;
  services?: string[];
  description?: string;
  available?: boolean;
  rating?: number;
  reviewsCount?: number;
  specialties?: string[];
  experienceYears?: number;
  availability?: string;
  createdAt?: any;
}

export interface TestimonialItem {
  id: number;
  clientName: string;
  role?: string;
  comment: string;
  rating: number;
  avatar: string;
  serviceReceived: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate?: string;
  message: string;
}
