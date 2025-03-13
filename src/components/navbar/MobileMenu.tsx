
import React from "react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Heart, User, ShoppingCart, X } from "lucide-react";

interface MobileMenuProps {
  categories: string[];
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const MobileMenu = ({ categories, isMobileMenuOpen, closeMobileMenu }: MobileMenuProps) => {
  if (!isMobileMenuOpen) return null;
  
  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-white pt-20">
      <Container>
        <div className="absolute top-4 right-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={closeMobileMenu}
            className="h-10 w-10 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="py-4">
          <div className="relative mb-6">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full h-12 pl-10 pr-4 rounded-full"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-semibold">Categories</p>
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="block py-2 border-b border-gray-100 text-foreground hover:text-herb-600"
                >
                  {category}
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Account</p>
              <a href="#" className="block py-2 border-b border-gray-100">Sign In / Register</a>
              <a href="#" className="block py-2 border-b border-gray-100">Wishlist</a>
              <a href="#" className="block py-2 border-b border-gray-100">Cart</a>
            </div>

            <div className="space-y-3">
              <p className="font-semibold">Help</p>
              <a href="#" className="block py-2 border-b border-gray-100">Help Center</a>
              <a href="#" className="block py-2 border-b border-gray-100">Blog</a>
              <a href="#" className="block py-2 border-b border-gray-100">Contact Us</a>
            </div>
          </div>
        </div>
      </Container>
      
      <MobileMenuFooter />
    </div>
  );
};

const MobileMenuFooter = () => (
  <div className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white p-4 flex justify-around">
    <button className="flex flex-col items-center text-xs">
      <Heart className="h-6 w-6 mb-1" />
      <span>Wishlist</span>
    </button>
    <button className="flex flex-col items-center text-xs">
      <User className="h-6 w-6 mb-1" />
      <span>Account</span>
    </button>
    <button className="flex flex-col items-center text-xs relative">
      <ShoppingCart className="h-6 w-6 mb-1" />
      <span className="absolute -top-1 -right-2 bg-herb-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        0
      </span>
      <span>Cart</span>
    </button>
  </div>
);

export default MobileMenu;
