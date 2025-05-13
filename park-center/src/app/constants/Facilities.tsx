type Facility = {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    features: string[]; // Required array of strings
    operatingHours?: {
      weekdays: string;
      weekends: string;
    };
  };
  
  export const FACILITIES: Facility[] = [
    {
      id: "football",
      title: "Football Pitch",
      description: "Professional turf with floodlights for night games",
      price: "N20k/hour,N30k/2hours (5 aside), N25k/hour,N45k/2hours (7 aside)",
      image: "/images/Censad1.jpeg",
      features: [
        "Professional-grade turf",
        "Floodlighting available",
        "Changing rooms with showers",
        "Equipment rental available"
      ],
      operatingHours: {
        weekdays: "6:00 AM - 2:00 AM",
        weekends: "6:00 AM - 2:00 AM"
      }
    },
    {
      id: "basketball",
      title: "Basketball Court",
      description: "Indoor/outdoor court with premium flooring",
      price: "15k/hour",
      image: "/images/Censad8.jpeg",
      features: [
        "High-quality flooring",
        "Night lighting",
        "Seating area",
        "Basketball rental"
      ]
    },
    {
      id: "car-wash",
      title: "Car Wash",
      description: "Professional cleaning services",
      price: "Bronze 2k/2500, Silver 3k/4k, Gold 5k/6k, Platinum 10k/12k,",
      image: "/images/Censad6.jpeg",
      features: [
        "Eco-friendly products",
        "Interior vacuuming",
        "Waxing services",
        "Express wash option"
      ]
    },
    {
      id: "Restaurant",
      title: "Cen-sad Cafe",
      description: "foods and drinks",
      price: "affordable",
      image: "/images/censad2.jpeg",
      features: [
        "High-quality ",
        "Night lighting",
        "Seating area",
      ]
    },
    {
      id: "Badminton",
      title: "Badminton Court",
      description: "outdoor court with premium flooring",
      price: "10k for membership",
      image: "/images/Censad7.jpeg",
      features: [
        "High-quality flooring",
        "Night lighting",
        "Seating area",
        "Badminton rental"
      ]
    },
    {
      id: "indoors",
      title: "indoors",
      description: "Table Tennis and Snooker",
      price: "affordable",
      image: "/images/Censad10.jpeg",
      features: [
        "High-quality",
        "Night lighting",
        "Seating area",
      ]
    },
  ];