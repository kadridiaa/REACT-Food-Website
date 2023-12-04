// Navbar.jsx

import React, { useState } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends,FaWallet } from 'react-icons/fa';
import { MdHelp,MdFavorite } from 'react-icons/md';



const Navbar = () => {
  
  // Navbar functions :
  const [nav , setNav] = useState(false)
  
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left Side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer pt-1'>
          <AiOutlineMenu size={32}/>
        </div>
        <h1 className='text-2xl px-2 sm:text-3xl lg:text-4xl'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white p-2 rounded-full'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
     {/* Search input */}
      <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20} className='mr-2'/>
        <input type="text" placeholder='Food name' className='p-2 bg-transparent w-full focus:outline-none'/>
      </div>
      {/* cart button */}
      <button className='bg-black text-white md:flex items-center hidden'>
        <BsFillCartFill/> Cart
      </button>
      
      {/* Mobile menu */}
      {/* Overlay */}
      { nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      
 
      {/*  Side Drawer Menu */}
      <div  className={nav? 'w-[300px] bg-white z-10 fixed top-0 left-0 h-screen duration-300': 'w-[300px] bg-white z-10 fixed top-0 left-[-100%] h-screen duration-300'}>
         <AiOutlineClose onClick={()=>setNav(!nav)} size={33} className='absolute top-4 right-4 cursor-pointer'/>
         <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
         <ul className='flex flex-col text-gray-800 p-4'>
          <li className='flex items-center py-4 text-xl'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
          <li className='flex items-center py-4 text-xl'><MdFavorite size={25} className='mr-4'/>Favorits</li>
          <li className='flex items-center py-4 text-xl'><FaWallet size={25} className='mr-4'/>Wallet</li>
          <li className='flex items-center py-4 text-xl'><MdHelp size={25} className='mr-4'/>Help</li>
          <li className='flex items-center py-4 text-xl'><AiFillTag size={25} className='mr-4'/>Promotions</li>
          <li className='flex items-center py-4 text-xl'><BsFillSaveFill size={25} className='mr-4'/>Best One</li>
          <li className='flex items-center py-4 text-xl'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
          </ul>     
      </div>
    </div>
  );
};

export default Navbar;
