
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Filter data - could be moved to a data file later
const categories = [
  { value: "all", label: "All Categories" },
  { value: "supplements", label: "Supplements" },
  { value: "herbs", label: "Herbs & Botanicals" },
  { value: "beauty", label: "Natural Beauty" },
  { value: "food", label: "Organic Foods" },
  { value: "sports", label: "Sports Nutrition" },
  { value: "bath", label: "Bath & Personal Care" },
];

const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "under25", label: "Under $25" },
  { value: "25to50", label: "$25 to $50" },
  { value: "50to100", label: "$50 to $100" },
  { value: "over100", label: "Over $100" },
];

const ratings = [
  { value: "all", label: "All Ratings" },
  { value: "4", label: "4+ Stars" },
  { value: "3", label: "3+ Stars" },
  { value: "2", label: "2+ Stars" },
  { value: "1", label: "1+ Stars" },
];

const brands = [
  { value: "all", label: "All Brands" },
  { value: "herbessence", label: "Herb Essence" },
  { value: "natureblend", label: "Nature Blend" },
  { value: "organicroots", label: "Organic Roots" },
  { value: "purelife", label: "Pure Life" },
  { value: "vitalherbs", label: "Vital Herbs" },
];

interface ProductFilterProps {
  activeFilters: {
    category: string;
    priceRange: string;
    rating: string;
    brand: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
}

const ProductFilter = ({ activeFilters, onFilterChange }: ProductFilterProps) => {
  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["category", "price", "rating", "brand"]} className="space-y-4">
        <AccordionItem value="category" className="border border-gray-100 rounded-lg overflow-hidden">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-herb-50/50">
            Categories
          </AccordionTrigger>
          <AccordionContent className="px-0">
            <div className="space-y-1 pt-1">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => onFilterChange("category", category.value)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors",
                    activeFilters.category === category.value
                      ? "bg-herb-50 text-herb-700 font-medium"
                      : "hover:bg-gray-50"
                  )}
                >
                  <span>{category.label}</span>
                  {activeFilters.category === category.value && (
                    <CheckIcon className="h-4 w-4 text-herb-600" />
                  )}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border border-gray-100 rounded-lg overflow-hidden">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-herb-50/50">
            Price Range
          </AccordionTrigger>
          <AccordionContent className="px-0">
            <div className="space-y-1 pt-1">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => onFilterChange("priceRange", range.value)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors",
                    activeFilters.priceRange === range.value
                      ? "bg-herb-50 text-herb-700 font-medium"
                      : "hover:bg-gray-50"
                  )}
                >
                  <span>{range.label}</span>
                  {activeFilters.priceRange === range.value && (
                    <CheckIcon className="h-4 w-4 text-herb-600" />
                  )}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating" className="border border-gray-100 rounded-lg overflow-hidden">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-herb-50/50">
            Ratings
          </AccordionTrigger>
          <AccordionContent className="px-0">
            <div className="space-y-1 pt-1">
              {ratings.map((rating) => (
                <button
                  key={rating.value}
                  onClick={() => onFilterChange("rating", rating.value)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors",
                    activeFilters.rating === rating.value
                      ? "bg-herb-50 text-herb-700 font-medium"
                      : "hover:bg-gray-50"
                  )}
                >
                  <span>{rating.label}</span>
                  {activeFilters.rating === rating.value && (
                    <CheckIcon className="h-4 w-4 text-herb-600" />
                  )}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand" className="border border-gray-100 rounded-lg overflow-hidden">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-herb-50/50">
            Brands
          </AccordionTrigger>
          <AccordionContent className="px-0">
            <div className="space-y-1 pt-1">
              {brands.map((brand) => (
                <button
                  key={brand.value}
                  onClick={() => onFilterChange("brand", brand.value)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors",
                    activeFilters.brand === brand.value
                      ? "bg-herb-50 text-herb-700 font-medium"
                      : "hover:bg-gray-50"
                  )}
                >
                  <span>{brand.label}</span>
                  {activeFilters.brand === brand.value && (
                    <CheckIcon className="h-4 w-4 text-herb-600" />
                  )}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilter;
