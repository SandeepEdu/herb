
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="w-full max-w-xl relative">
      <Input
        type="search"
        placeholder="Search for products, brands, and categories..."
        className="w-full h-12 pl-10 pr-4 rounded-full border-gray-200 focus:border-herb-500 focus:ring focus:ring-herb-200 focus:ring-opacity-50 transition-shadow"
      />
      <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default SearchBar;
