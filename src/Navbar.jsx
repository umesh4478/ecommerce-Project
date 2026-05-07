import React from "react";
import { ShoppingCart, Search, User, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          ShopEasy
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Products</a>
          <a href="#" className="hover:text-blue-600 transition">Categories</a>
          <a href="#" className="hover:text-blue-600 transition">Deals</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border rounded-lg overflow-hidden w-80">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-3 py-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2">
            <Search size={18} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <button className="hover:text-blue-600">
            <User size={22} />
          </button>
          <button className="relative hover:text-blue-600">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              2
            </span>
          </button>
          <button className="md:hidden hover:text-blue-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;