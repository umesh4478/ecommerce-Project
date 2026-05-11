import React from "react";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = ({search, setsearch}) => {
  const navigate = useNavigate()
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
            type="text" onChange={(e)=>setsearch(e.target.value)}
            placeholder="Search products..." value={search}
            className="w-full px-3 py-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2">
            <Search size={18} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-700">

  <button className="hover:text-blue-600 transition">
    <i className="fa-solid fa-user text-2xl"></i>
  </button>

  <button className="relative hover:text-blue-600 transition" onClick={()=>navigate('/home/cart')} >
    <i className="fa-solid fa-cart-arrow-down text-2xl"></i>

    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      2
    </span>
  </button>
<button className=" ml-15 hover:text-blue-600 transition">
  <i className="fa-solid fa-bars text-2xl"> </i>
</button>

</div>
      </div>
    </nav>
  );
};

export default Navbar;