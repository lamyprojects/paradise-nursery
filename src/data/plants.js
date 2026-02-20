// 18 unique plants — local images in /public/plants/

const plants = [
  // ── Air Purifying Plants ──────────────────────────────────────────────────
  { id: "snake-plant",     name: "Snake Plant",     price: 15, description: "Produces oxygen at night, improving air quality.",           thumbnail: "/images/snake-plant.jpg",      category: "Air Purifying Plants" },
  { id: "spider-plant",    name: "Spider Plant",    price: 12, description: "Filters formaldehyde and xylene from the air.",             thumbnail: "/images/spider-plant.jpg",     category: "Air Purifying Plants" },
  { id: "peace-lily",      name: "Peace Lily",      price: 18, description: "Removes mold spores and purifies the air beautifully.",     thumbnail: "/images/peace-lily.jpg",       category: "Air Purifying Plants" },
  { id: "boston-fern",     name: "Boston Fern",     price: 25, description: "Excellent air humidifier and pollutant remover.",           thumbnail: "/images/boston-fern.jpg",      category: "Air Purifying Plants" },
  { id: "rubber-plant",    name: "Rubber Plant",    price: 22, description: "Absorbs airborne chemicals and toxins effectively.",        thumbnail: "/images/rubber-plant.jpg",     category: "Air Purifying Plants" },
  { id: "aloe-vera",       name: "Aloe Vera",       price: 14, description: "Clears formaldehyde and benzene; has healing gel.",         thumbnail: "/images/aloe-vera.jpg",        category: "Air Purifying Plants" },

  // ── Aromatic Fragrant Plants ──────────────────────────────────────────────
  { id: "lavender",        name: "Lavender",        price: 20, description: "Calming scent widely used in aromatherapy.",               thumbnail: "/images/lavender.jpg",         category: "Aromatic Fragrant Plants" },
  { id: "jasmine",         name: "Jasmine",         price: 18, description: "Sweet fragrance that promotes relaxation.",                thumbnail: "/images/jasmine.jpg",          category: "Aromatic Fragrant Plants" },
  { id: "rosemary",        name: "Rosemary",        price: 15, description: "Invigorating scent, also great for cooking.",              thumbnail: "/images/rosemary.jpg",         category: "Aromatic Fragrant Plants" },
  { id: "mint",            name: "Mint",            price: 14, description: "Fresh, cool aroma with culinary and medicinal uses.",      thumbnail: "/images/mint.jpg",             category: "Aromatic Fragrant Plants" },
  { id: "lemon-balm",      name: "Lemon Balm",      price: 11, description: "Citrusy scent that reduces stress and anxiety.",           thumbnail: "/images/lemon-balm.jpg",       category: "Aromatic Fragrant Plants" },
  { id: "hyacinth",        name: "Hyacinth",        price: 22, description: "Rich, sweet fragrance with vibrant spring blooms.",        thumbnail: "/images/hyacinth.jpg",         category: "Aromatic Fragrant Plants" },

  // ── Low Light Plants ──────────────────────────────────────────────────────
  { id: "zz-plant",        name: "ZZ Plant",        price: 25, description: "Tolerates low light and infrequent watering beautifully.", thumbnail: "/images/zz-plant.jpg",         category: "Low Light Plants" },
  { id: "pothos",          name: "Pothos",          price: 13, description: "Hardy trailing vine, thrives in dim conditions.",          thumbnail: "/images/pothos.jpg",           category: "Low Light Plants" },
  { id: "dracaena",        name: "Dracaena",        price: 19, description: "Striking foliage plant perfect for shaded rooms.",         thumbnail: "/images/dracaena.jpg",         category: "Low Light Plants" },
  { id: "cast-iron-plant", name: "Cast Iron Plant", price: 28, description: "Nearly indestructible — thrives in very low light.",       thumbnail: "/images/cast-iron-plant.jpg",  category: "Low Light Plants" },
  { id: "chinese-evergreen",name: "Chinese Evergreen",price:17,description: "Colorful, air-cleaning plant that loves shade.",           thumbnail: "/images/chinese-evergreen.jpg",category: "Low Light Plants" },
  { id: "philodendron",    name: "Philodendron",    price: 16, description: "Fast-growing beauty that adapts to low light rooms.",      thumbnail: "/images/philodendron.jpg",     category: "Low Light Plants" },
];

export const CATEGORIES = [
  "Air Purifying Plants",
  "Aromatic Fragrant Plants",
  "Low Light Plants",
];

export default plants;
