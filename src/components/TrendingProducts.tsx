
import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Star, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Natural Vitamin C Complex",
    description: "Pure ascorbic acid with rose hips & bioflavonoids",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviewCount: 245,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
    badge: "Bestseller",
    category: "popular",
  },
  {
    id: 2,
    name: "Organic Turmeric Root Extract",
    description: "With black pepper for enhanced absorption",
    price: 19.99,
    originalPrice: 25.99,
    rating: 4.7,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1608571423539-e951b9b3871e?q=80&w=800&auto=format&fit=crop",
    badge: "Organic",
    category: "popular",
  },
  {
    id: 3,
    name: "Omega-3 Fish Oil",
    description: "Wild-caught, molecularly distilled for purity",
    price: 32.50,
    originalPrice: 39.99,
    rating: 4.9,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800&auto=format&fit=crop",
    badge: null,
    category: "popular",
  },
  {
    id: 4,
    name: "Probiotic Complex",
    description: "15 billion CFU, 10 strains for gut health",
    price: 28.99,
    originalPrice: 34.99,
    rating: 4.6,
    reviewCount: 178,
    image: "https://images.unsplash.com/photo-1586019240259-ac8e0c3e2462?q=80&w=800&auto=format&fit=crop",
    badge: null,
    category: "popular",
  },
  {
    id: 5,
    name: "Pure Collagen Peptides",
    description: "Grass-fed, pasture-raised bovine source",
    price: 37.99,
    originalPrice: 44.99,
    rating: 4.7,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1610462275440-4c8625bebb7f?q=80&w=800&auto=format&fit=crop",
    badge: "New",
    category: "new",
  },
  {
    id: 6,
    name: "Organic Matcha Green Tea",
    description: "Ceremonial grade, stone-ground Japanese matcha",
    price: 22.99,
    originalPrice: 27.99,
    rating: 4.8,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=800&auto=format&fit=crop",
    badge: "Organic",
    category: "new",
  },
  {
    id: 7,
    name: "Magnesium Glycinate",
    description: "Highly absorbable form for sleep & relaxation",
    price: 18.50,
    originalPrice: 22.99,
    rating: 4.5,
    reviewCount: 132,
    image: "https://images.unsplash.com/photo-1626170733247-0f3a6adfdfad?q=80&w=800&auto=format&fit=crop",
    badge: null,
    category: "new",
  },
  {
    id: 8,
    name: "Elderberry Immune Support",
    description: "Black elderberry extract with vitamin C & zinc",
    price: 26.99,
    originalPrice: 31.99,
    rating: 4.9,
    reviewCount: 278,
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=800&auto=format&fit=crop",
    badge: "Limited",
    category: "new",
  },
];

export const TrendingProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12 section-animate">
          <span className="inline-block px-3 py-1 bg-herb-100 text-herb-600 rounded-full text-sm font-medium mb-4">
            Trending Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our bestselling natural health solutions, loved by customers around the world.
          </p>
        </div>

        <Tabs defaultValue="popular" className="w-full section-animate">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="new">New Arrivals</TabsTrigger>
          </TabsList>
          
          {["popular", "new"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <div 
                      key={product.id} 
                      className="product-card bg-white rounded-2xl overflow-hidden shadow-soft h-full transition-all duration-300"
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      <div className="relative pt-[100%] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                          style={{
                            transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)',
                          }}
                        />
                        
                        {/* Quick action buttons */}
                        <div 
                          className="absolute top-0 right-0 p-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300"
                          style={{
                            opacity: hoveredProduct === product.id ? 1 : 0,
                          }}
                        >
                          <button className="h-9 w-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-herb-600 transition-colors">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="h-9 w-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-herb-600 transition-colors">
                            <Eye className="h-5 w-5" />
                          </button>
                        </div>
                        
                        {/* Badges */}
                        {product.badge && (
                          <div className="absolute top-3 left-3">
                            <span 
                              className={`
                                px-2 py-1 text-xs font-medium rounded 
                                ${product.badge === 'Bestseller' ? 'bg-yellow-100 text-yellow-800' : ''} 
                                ${product.badge === 'New' ? 'bg-blue-100 text-blue-800' : ''} 
                                ${product.badge === 'Organic' ? 'bg-herb-100 text-herb-800' : ''} 
                                ${product.badge === 'Limited' ? 'bg-red-100 text-red-800' : ''}
                              `}
                            >
                              {product.badge}
                            </span>
                          </div>
                        )}
                        
                        {/* Add to cart button */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 p-3 opacity-0 transform translate-y-4 transition-all duration-300 ease-out"
                          style={{
                            opacity: hoveredProduct === product.id ? 1 : 0,
                            transform: hoveredProduct === product.id ? 'translateY(0)' : 'translateY(1rem)',
                          }}
                        >
                          <Button variant="default" size="lg" className="w-full bg-herb-600 hover:bg-herb-700 text-white">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 text-sm font-medium">{product.rating}</span>
                          </div>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-xs text-gray-500">{product.reviewCount} reviews</span>
                        </div>
                        
                        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                        
                        <div className="flex items-center">
                          <span className="text-lg font-bold">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              ${product.originalPrice}
                            </span>
                          )}
                          
                          {product.originalPrice && (
                            <span className="ml-2 text-xs bg-red-50 text-red-600 px-1.5 py-0.5 rounded">
                              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              
              <div className="flex justify-center mt-12">
                <Button variant="outline" size="lg" className="border-herb-600 text-herb-600 hover:bg-herb-50">
                  View All Products
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default TrendingProducts;
