import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import './App.css'
import { FiUser } from 'react-icons/fi';

import { FiSearch } from 'react-icons/fi';
const Navbar = () => {
 

  return (
    <>
   
    <nav className="bg-[#EEEEEE]  text-[#333333] h-18 flex justify-between items-center gap-50  p-4 ">
    <div className=" font-bold text-2xl p-6 w-[20%]  ">E-Shop</div>
      <div className="flex items-center border  px-3 py-2  rounded-xl h-9  w-150 bg-white">
      <FiSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search products..."
        className="flex-grow outline-none"
      /></div>

    <div className=" w-[20%] p-6 flex justify-end items-center gap-6">
      
  
    <FiShoppingCart size={24} color="black" />
    <FiUser size={24} color="black" />

    </div>
  
    </nav>
     
    </>
  )
}

export default Navbar;