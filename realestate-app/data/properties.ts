export type Property = {
  id: string;
  title: string;
  price: string;
  location: string;
  description: string;
  images: string[];
  features: {
    pool: boolean;
    garden: boolean;
    garage: boolean;
    balcony: boolean;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
    avatar: string;
  };
};


export const DEFAULT_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    price: "$450,000",
    location: "Los Angeles, USA",
    description:
      "A stunning modern villa with spacious interiors and premium finishes.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    ],
    features: {
      pool: true,
      garden: true,
      garage: true,
      balcony: true,
    },
    contact: {
      name: "John Carter",
      email: "john.carter@realhomes.com",
      phone: "+1 310 555 8721",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "2",
    title: "Cozy Family Home",
    price: "$280,000",
    location: "Texas, USA",
    description:
      "Perfect family home in a peaceful neighborhood with green surroundings.",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1600585154207-9c8e1b89f67b",
    ],
    features: {
      pool: false,
      garden: true,
      garage: true,
      balcony: false,
    },
    contact: {
      name: "Emily Watson",
      email: "emily.watson@realhomes.com",
      phone: "+1 214 555 1934",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
  {
    id: "3",
    title: "Minimalist City Apartment",
    price: "$190,000",
    location: "New York, USA",
    description: "A minimalist apartment located in the heart of the city.",
    images: [
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
    features: {
      pool: false,
      garden: false,
      garage: false,
      balcony: true,
    },
    contact: {
      name: "Michael Brown",
      email: "michael.brown@realhomes.com",
      phone: "+1 917 555 6021",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  },
  {
    id: "4",
    title: "Elegant Suburban House",
    price: "$320,000",
    location: "Florida, USA",
    description:
      "Elegant house with bright interiors and outdoor relaxation space.",
    images: [
      "https://images.unsplash.com/photo-1572120360610-d971b9b78825",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
    features: {
      pool: true,
      garden: true,
      garage: true,
      balcony: false,
    },
    contact: {
      name: "Sophia Miller",
      email: "sophia.miller@realhomes.com",
      phone: "+1 407 555 8842",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  },
  {
    id: "5",
    title: "Beachfront Dream Home",
    price: "$680,000",
    location: "Malibu, USA",
    description:
      "Luxury beachfront home with breathtaking ocean views.",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      "https://images.unsplash.com/photo-1600585154780-6c4d0c6f99a5",
    ],
    features: {
      pool: true,
      garden: false,
      garage: true,
      balcony: true,
    },
    contact: {
      name: "Daniel Scott",
      email: "daniel.scott@realhomes.com",
      phone: "+1 310 555 4419",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  },

 
];

