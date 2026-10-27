import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export interface WorkingHour {
  day: string;
  hours: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export const contactInfo = {
  phones: ["+970 599 000 000", "+970 2 222 2222"],
  email: "info@fastgate.com",
  address: "Hebron, Palestine",
  workingHours: [
    { day: "Sunday - Thursday", hours: "8:00 AM - 5:00 PM" },
    { day: "Friday", hours: "Closed" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
  ] as WorkingHour[],
  socialMedia: [
    { name: "Facebook", url: "https://facebook.com", icon: FaFacebookF },
    { name: "Instagram", url: "https://instagram.com", icon: FaInstagram },
    { name: "LinkedIn", url: "https://linkedin.com", icon: FaLinkedinIn },
    { name: "WhatsApp", url: "https://wa.me/970599000000", icon: FaWhatsapp },
  ] as SocialLink[],
  location: {
    lat: 31.5326, // placeholder - الخليل تقريباً بما إنه العنوان "Hebron"
    lng: 35.0998,
  } as Coordinates,
};
