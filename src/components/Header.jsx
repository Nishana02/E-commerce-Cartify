import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-black p-4 fixed top-0">
      <div className="flex items-center">
        <FaShoppingCart className="text-white text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-3" />
        <h2 className="font-bold text-white text-xl sm:text-2xl md:text-3xl font-serif">
          Cartify
        </h2>
      </div>
    </div>
  );
};

export default Header;
