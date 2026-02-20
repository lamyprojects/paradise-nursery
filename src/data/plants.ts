export interface Plant {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  categories: string[];
}

export const CATEGORIES = [
  "Air Purifying Plants",
  "Aromatic Fragrant Plants",
  "Low Light Plants",
];

export const plants: Plant[] = [
  // Air Purifying
  {
    id: "snake-plant",
    name: "Snake Plant",
    price: 15,
    description: "Produces oxygen at night, improving air quality.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&q=80",
    categories: ["Air Purifying Plants", "Low Light Plants"],
  },
  {
    id: "spider-plant",
    name: "Spider Plant",
    price: 12,
    description: "Filters formaldehyde and xylene from the air.",
    image: "https://images.unsplash.com/photo-1572548922775-cd8f6a7c0ec2?w=300&q=80",
    categories: ["Air Purifying Plants"],
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    price: 18,
    description: "Removes mold spores and purifies the air.",
    image: "https://images.unsplash.com/photo-1616579591850-c4e54b5f11f0?w=300&q=80",
    categories: ["Air Purifying Plants", "Low Light Plants"],
  },
  {
    id: "boston-fern",
    name: "Boston Fern",
    price: 25,
    description: "Excellent air humidifier and pollutant remover.",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=300&q=80",
    categories: ["Air Purifying Plants"],
  },
  {
    id: "rubber-plant",
    name: "Rubber Plant",
    price: 22,
    description: "Absorbs airborne chemicals and toxins effectively.",
    image: "https://images.unsplash.com/photo-1622673038847-43acd2ecf44c?w=300&q=80",
    categories: ["Air Purifying Plants"],
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    price: 14,
    description: "Clears formaldehyde and benzene; has healing gel.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&q=80",
    categories: ["Air Purifying Plants", "Low Light Plants"],
  },

  // Aromatic Fragrant
  {
    id: "lavender",
    name: "Lavender",
    price: 20,
    description: "Calming scent, used in aromatherapy.",
    image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=300&q=80",
    categories: ["Aromatic Fragrant Plants"],
  },
  {
    id: "jasmine",
    name: "Jasmine",
    price: 18,
    description: "Sweet fragrance, promotes relaxation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
    categories: ["Aromatic Fragrant Plants"],
  },
  {
    id: "rosemary",
    name: "Rosemary",
    price: 15,
    description: "Invigorating scent, often used in cooking.",
    image: "https://images.unsplash.com/photo-1515942140272-b5aa5e7db9d1?w=300&q=80",
    categories: ["Aromatic Fragrant Plants"],
  },
  {
    id: "mint",
    name: "Mint",
    price: 14,
    description: "Fresh, cool aroma with culinary and medicinal uses.",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&q=80",
    categories: ["Aromatic Fragrant Plants"],
  },
  {
    id: "lemon-balm",
    name: "Lemon Balm",
    price: 11,
    description: "Citrusy scent that reduces stress and anxiety.",
    image: "https://images.unsplash.com/photo-1586116104117-6a42e64ad9c5?w=300&q=80",
    categories: ["Aromatic Fragrant Plants"],
  },
  {
    id: "hyacinth",
    name: "Hyacinth",
    price: 22,
    description: "Rich, sweet fragrance and vibrant spring blooms.",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=300&q=80",
    categories: ["Aromatic Fragrant Plants"],
  },

  // Low Light Plants
  {
    id: "zz-plant",
    name: "ZZ Plant",
    price: 25,
    description: "Tolerates low light and infrequent watering beautifully.",
    image: "https://images.unsplash.com/photo-1632321955893-ed1a7fac0d6a?w=300&q=80",
    categories: ["Low Light Plants"],
  },
  {
    id: "pothos",
    name: "Pothos",
    price: 13,
    description: "Hardy trailing vine, thrives in dim conditions.",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=300&q=80",
    categories: ["Low Light Plants"],
  },
  {
    id: "dracaena",
    name: "Dracaena",
    price: 19,
    description: "Striking foliage plant perfect for shaded rooms.",
    image: "https://images.unsplash.com/photo-1602923668104-8f9e03e77b62?w=300&q=80",
    categories: ["Low Light Plants"],
  },
];
