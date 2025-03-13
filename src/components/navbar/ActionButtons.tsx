
import React from "react";
import { Heart, User, ShoppingCart } from "lucide-react";

const ActionButtons = () => {
  return (
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
  );
};

export default ActionButtons;
