
import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const categories = [
  "Supplements",
  "Beauty",
  "Grocery",
  "Sports",
  "Children",
  "Herbs",
  "Bath",
  "Pets",
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Help
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Rewards
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Download App
              </a>
              <a href="#" className="font-medium text-herb-600 hover:text-herb-500 transition-colors">
                Sign In / Register
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight text-herb-600 mr-1">
                Herb
              </span>
              <span className="text-2xl font-bold tracking-tight text-bark-500">
                Harvest
              </span>
            </a>
          </div>

          <div className="hidden lg:flex flex-1 mx-12">
            <div className="w-full max-w-xl relative">
              <Input
                type="search"
                placeholder="Search for products, brands, and categories..."
                className="w-full h-12 pl-10 pr-4 rounded-full border-gray-200 focus:border-herb-500 focus:ring focus:ring-herb-200 focus:ring-opacity-50 transition-shadow"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
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

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-500"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <nav className="hidden lg:flex items-center justify-between py-4 overflow-x-auto scrollbar-none">
          {categories.map((category) => (
            <DropdownMenu key={category}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium hover:text-herb-600 transition-colors px-2 py-1">
                  {category}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 animate-fade-in">
                <DropdownMenuItem>Best Sellers</DropdownMenuItem>
                <DropdownMenuItem>New Arrivals</DropdownMenuItem>
                <DropdownMenuItem>Specials</DropdownMenuItem>
                <DropdownMenuItem>Brands</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          <a href="#specials" className="ml-auto text-sm font-medium text-herb-600 hover:text-herb-500 transition-colors px-2 py-1">
            Today's Deals
          </a>
          <a href="#new" className="text-sm font-medium text-herb-600 hover:text-herb-500 transition-colors px-2 py-1">
            New Arrivals
          </a>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
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
        </div>
      )}
    </header>
  );
};

export default NavBar;
