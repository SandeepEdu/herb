
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  brand: string;
  badge?: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vitamin D3 5000 IU Softgels",
    category: "Supplements",
    price: 12.99,
    originalPrice: 15.99,
    discount: 19,
    rating: 4.8,
    reviewCount: 1245,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
    brand: "PureLife",
    badge: "Bestseller",
    inStock: true
  },
  {
    id: 2,
    name: "Organic Echinacea & Elderberry Immune Support Tea",
    category: "Herbs",
    price: 8.49,
    rating: 4.5,
    reviewCount: 867,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800&auto=format&fit=crop",
    brand: "HerbEssence",
    inStock: true
  },
  {
    id: 3,
    name: "Marine Collagen Peptides Powder",
    category: "Beauty",
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    rating: 4.7,
    reviewCount: 2156,
    image: "https://images.unsplash.com/photo-1598386651573-9232cc0c2d6c?q=80&w=800&auto=format&fit=crop",
    brand: "VitalHerbs",
    badge: "Sale",
    inStock: true
  },
  {
    id: 4,
    name: "Organic Virgin Coconut Oil",
    category: "Food",
    price: 14.99,
    rating: 4.9,
    reviewCount: 3421,
    image: "https://images.unsplash.com/photo-1590107417752-0c4094e66778?q=80&w=800&auto=format&fit=crop",
    brand: "OrganicRoots",
    inStock: true
  },
  {
    id: 5,
    name: "Plant-Based Protein Powder - Chocolate",
    category: "Sports",
    price: 29.99,
    rating: 4.3,
    reviewCount: 1876,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
    brand: "NatureBlend",
    inStock: true
  },
  {
    id: 6,
    name: "Lavender & Chamomile Bath Salts",
    category: "Bath",
    price: 18.99,
    originalPrice: 21.99,
    discount: 14,
    rating: 4.6,
    reviewCount: 945,
    image: "https://images.unsplash.com/photo-1608571423902-ead9849d2f0c?q=80&w=800&auto=format&fit=crop",
    brand: "HerbEssence",
    inStock: true
  },
  {
    id: 7,
    name: "Organic Matcha Green Tea Powder",
    category: "Food",
    price: 24.99,
    rating: 4.7,
    reviewCount: 1532,
    image: "https://images.unsplash.com/photo-1582793988951-9aed6f94a8eb?q=80&w=800&auto=format&fit=crop",
    brand: "OrganicRoots",
    badge: "New",
    inStock: true
  },
  {
    id: 8,
    name: "Fish Oil Omega-3 Softgels",
    category: "Supplements",
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    rating: 4.5,
    reviewCount: 2105,
    image: "https://images.unsplash.com/photo-1577563348398-2a5bc0f97d37?q=80&w=800&auto=format&fit=crop",
    brand: "PureLife",
    inStock: true
  },
  {
    id: 9,
    name: "Natural Charcoal Teeth Whitening Powder",
    category: "Bath",
    price: 15.99,
    rating: 4.2,
    reviewCount: 986,
    image: "https://images.unsplash.com/photo-1523532888451-8cfcb53a1c3a?q=80&w=800&auto=format&fit=crop",
    brand: "VitalHerbs",
    inStock: true
  },
  {
    id: 10,
    name: "Organic Ashwagandha Root Powder",
    category: "Herbs",
    price: 21.49,
    rating: 4.8,
    reviewCount: 1789,
    image: "https://images.unsplash.com/photo-1590788353433-d4ce1574c2ba?q=80&w=800&auto=format&fit=crop",
    brand: "HerbEssence",
    inStock: true
  },
  {
    id: 11,
    name: "Natural Rose Water Facial Toner",
    category: "Beauty",
    price: 12.99,
    rating: 4.4,
    reviewCount: 1234,
    image: "https://images.unsplash.com/photo-1570173277010-332b8ded9c9e?q=80&w=800&auto=format&fit=crop",
    brand: "NatureBlend",
    inStock: true
  },
  {
    id: 12,
    name: "BCAA Recovery Powder - Berry Flavor",
    category: "Sports",
    price: 34.99,
    originalPrice: 39.99,
    discount: 13,
    rating: 4.6,
    reviewCount: 876,
    image: "https://images.unsplash.com/photo-1616091209084-a35e4624c5df?q=80&w=800&auto=format&fit=crop",
    brand: "PureLife",
    badge: "Sale",
    inStock: true
  }
];
