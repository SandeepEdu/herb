
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, SlidersHorizontal, Grid3x3, List, ChevronDown } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilters, setActiveFilters] = useState({
    category: categoryParam || "all",
    priceRange: "all",
    rating: "all",
    brand: "all",
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { toast } = useToast();

  // Apply filters when activeFilters change
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeFilters.category && activeFilters.category !== "all") {
      result = result.filter(product => 
        product.category.toLowerCase() === activeFilters.category.toLowerCase()
      );
    }
    
    // Filter by price range
    if (activeFilters.priceRange && activeFilters.priceRange !== "all") {
      switch (activeFilters.priceRange) {
        case "under25":
          result = result.filter(product => product.price < 25);
          break;
        case "25to50":
          result = result.filter(product => product.price >= 25 && product.price <= 50);
          break;
        case "50to100":
          result = result.filter(product => product.price > 50 && product.price <= 100);
          break;
        case "over100":
          result = result.filter(product => product.price > 100);
          break;
      }
    }
    
    // Filter by rating
    if (activeFilters.rating && activeFilters.rating !== "all") {
      const minRating = parseInt(activeFilters.rating);
      result = result.filter(product => product.rating >= minRating);
    }
    
    // Filter by brand
    if (activeFilters.brand && activeFilters.brand !== "all") {
      result = result.filter(product => 
        product.brand.toLowerCase() === activeFilters.brand.toLowerCase()
      );
    }
    
    setFilteredProducts(result);
    
    // Update URL search params
    const newSearchParams = new URLSearchParams();
    Object.entries(activeFilters).forEach(([key, value]) => {
      if (value !== "all") {
        newSearchParams.set(key, value);
      }
    });
    setSearchParams(newSearchParams);
    
  }, [activeFilters, setSearchParams]);

  // Initialize filters from URL on page load
  useEffect(() => {
    const newFilters = { ...activeFilters };
    
    searchParams.forEach((value, key) => {
      if (key in newFilters && value) {
        newFilters[key as keyof typeof activeFilters] = value;
      }
    });
    
    setActiveFilters(newFilters);
  }, []);

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    
    toast({
      title: "Filters updated",
      description: `${filterType} filter set to ${value}`,
      duration: 2000,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero banner */}
        <div className="bg-gradient-to-r from-herb-50 to-herb-100 py-8">
          <Container>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {activeFilters.category !== "all" 
                  ? `${activeFilters.category.charAt(0).toUpperCase() + activeFilters.category.slice(1)} Products` 
                  : "All Products"}
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find the perfect natural health products for your wellness journey. 
                Use the filters to refine your search.
              </p>
            </div>
          </Container>
        </div>
        
        {/* Filter bar - mobile view */}
        <div className="block md:hidden sticky top-20 z-20 bg-white border-b">
          <Container className="py-4">
            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              >
                <Filter size={16} />
                Filters
                <ChevronDown size={16} className={`transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={viewMode === "grid" ? "bg-herb-50 text-herb-600" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 size={18} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={viewMode === "list" ? "bg-herb-50 text-herb-600" : ""}
                  onClick={() => setViewMode("list")}
                >
                  <List size={18} />
                </Button>
              </div>
            </div>
            
            {isMobileFilterOpen && (
              <div className="mt-4">
                <ProductFilter 
                  activeFilters={activeFilters} 
                  onFilterChange={handleFilterChange} 
                />
              </div>
            )}
          </Container>
        </div>
        
        <Container className="py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - desktop */}
            <div className="hidden md:block w-full md:w-64 lg:w-72 flex-shrink-0">
              <div className="sticky top-28">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="text-herb-600" size={18} />
                  <h2 className="font-medium text-lg">Filter Products</h2>
                </div>
                <ProductFilter 
                  activeFilters={activeFilters} 
                  onFilterChange={handleFilterChange} 
                />
              </div>
            </div>
            
            {/* Products grid */}
            <div className="flex-1">
              {/* Results summary */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
                </p>
                
                {/* View switcher - desktop */}
                <div className="hidden md:flex items-center gap-2 bg-background rounded-lg p-1 border">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-8 w-8 ${viewMode === "grid" ? "bg-herb-50 text-herb-600" : ""}`}
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3x3 size={16} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-8 w-8 ${viewMode === "list" ? "bg-herb-50 text-herb-600" : ""}`}
                    onClick={() => setViewMode("list")}
                  >
                    <List size={16} />
                  </Button>
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className={
                  viewMode === "grid" 
                    ? "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" 
                    : "flex flex-col gap-4"
                }>
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      viewMode={viewMode}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-herb-50/50 rounded-lg">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-herb-100 rounded-full mb-4">
                    <Filter className="text-herb-600" size={24} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or browse our categories
                  </p>
                  <Button 
                    onClick={() => setActiveFilters({
                      category: "all",
                      priceRange: "all",
                      rating: "all",
                      brand: "all",
                    })}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
