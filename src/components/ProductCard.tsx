
import React from "react";
import { Star, Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Product {
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

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
}

const ProductCard = ({ product, viewMode }: ProductCardProps) => {
  const { toast } = useToast();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      duration: 3000,
    });
  };
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
      duration: 3000,
    });
  };

  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="fill-amber-400 text-amber-400" size={viewMode === "grid" ? 14 : 16} />);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(
          <span key={i} className="relative">
            <Star className="text-gray-200" size={viewMode === "grid" ? 14 : 16} />
            <Star 
              className="absolute top-0 left-0 fill-amber-400 text-amber-400 overflow-hidden" 
              size={viewMode === "grid" ? 14 : 16}
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            />
          </span>
        );
      } else {
        stars.push(<Star key={i} className="text-gray-200" size={viewMode === "grid" ? 14 : 16} />);
      }
    }
    
    return stars;
  };
  
  if (viewMode === "list") {
    return (
      <a 
        href={`/product/${product.id}`}
        className="group relative flex bg-white border border-gray-100 rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300"
      >
        <div className="relative w-1/3 h-48">
          <img 
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {product.badge && (
            <Badge 
              className={cn(
                "absolute top-2 left-2 font-medium", 
                product.badge === "New" ? "bg-blue-500" : 
                product.badge === "Bestseller" ? "bg-amber-500" : 
                product.badge === "Sale" ? "bg-rose-500" : 
                "bg-herb-500"
              )}
            >
              {product.badge}
            </Badge>
          )}
        </div>
        
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">{product.brand}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleAddToWishlist}
              >
                <Heart size={16} />
              </Button>
            </div>
            
            <h3 className="font-medium text-base md:text-lg mt-1 mb-1 line-clamp-2 group-hover:text-herb-600 transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">{renderStars()}</div>
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
            
            <div className="text-sm text-muted-foreground mb-4">
              Category: <span className="text-foreground">{product.category}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <Badge variant="outline" className="text-rose-500 border-rose-200 bg-rose-50">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-9"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={16} className="mr-1" />
                Add to Cart
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </a>
    );
  }
  
  return (
    <a 
      href={`/product/${product.id}`}
      className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden product-card shadow-soft hover:shadow-hover transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {product.badge && (
          <Badge 
            className={cn(
              "absolute top-2 left-2 font-medium", 
              product.badge === "New" ? "bg-blue-500" : 
              product.badge === "Bestseller" ? "bg-amber-500" : 
              product.badge === "Sale" ? "bg-rose-500" : 
              "bg-herb-500"
            )}
          >
            {product.badge}
          </Badge>
        )}
        
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-3 left-3 right-3 flex gap-2">
            <Button
              className="flex-1 h-9 text-xs"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={14} className="mr-1" />
              Add to Cart
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              className="h-9 w-9"
              onClick={handleAddToWishlist}
            >
              <Heart size={14} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <span className="text-xs text-muted-foreground">{product.brand}</span>
          <div className="flex items-center">
            <div className="flex">{renderStars()}</div>
            <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
          </div>
        </div>
        
        <h3 className="font-medium text-sm mt-1 mb-1 line-clamp-2 group-hover:text-herb-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mt-2">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.discount && (
            <Badge variant="outline" className="text-xs text-rose-500 border-rose-200 bg-rose-50">
              {product.discount}% OFF
            </Badge>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
