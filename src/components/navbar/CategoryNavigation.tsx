
import React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface CategoryNavigationProps {
  categories: string[];
}

const CategoryNavigation = ({ categories }: CategoryNavigationProps) => {
  return (
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
  );
};

export default CategoryNavigation;
