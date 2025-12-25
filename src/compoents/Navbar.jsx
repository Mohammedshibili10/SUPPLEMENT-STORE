import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [open,setOpen]=useState(false)
  function add(){
  setOpen(!open)
  }
  return (
    <div>
      <div className='flex justify-between h-20     items-center py-5 px-10 md:px-5 lg:px-20 shadow-md bg-black/90 '>
        <div>
          <h1 className=' text-2xl md:text-3xl lg:text-4xl font-extrabold text-red-500 '>VITAL<span className='text-white'>CORE</span></h1>
        </div>
        
        <div>
          <ul className="hidden md:flex md:space-x-4 lg:space-x-10  text-white font-medium  lg:text-md md:text-sm">
          <Link to={'/products'}> <li className="hover:text-red-400 cursor-pointer">PRODUCT</li></Link> 
            <li className="hover:text-red-400 cursor-pointer">BENEFITS</li>
            <li className="hover:text-red-400 cursor-pointer">SCIENCE</li>
            <li className="hover:text-red-400 cursor-pointer">REVIEWS</li>
           <Link to={'/contact'}><li className="hover:text-red-400 cursor-pointer">CONTACT US</li></Link>
          </ul>

        </div>
        <div className='md:flex items-center gap-4 hidden '>
          <div className='w-12 h-12 rounded-full bg-red-500 relative'>
            <img className='w-7  absolute left-2 top-2' src="/images/shopping-cart.png" alt="error" /></div>
          <div className='hidden md:block'>
            <button className='w-40 h-10 bg-red-500 rounded-md text-white font-bold'>GET STARTED</button>
          </div>
        </div>
        <div className='md:hidden' >
          {open ? <IoClose  onClick={add} style={{color:'white', fontSize:'40px',}} />
         :<GiHamburgerMenu  onClick={add} style={{color:'white', fontSize:'40px',}}/>
       }

        </div>
         {open && (
      
        <div className="md:hidden bg-black/95 text-white  w-screen h-60  absolute top-20 right-1 pl-2 ">
          <p className="hover:text-red-400 font-bold ">PRODUCT</p>
          <p className="hover:text-red-400 font-bold mt-2">BENEFITS</p>
          <p className="hover:text-red-400 font-bold mt-2">SCIENCE</p>
          <p className="hover:text-red-400 font-bold mt-2">REVIEWS</p>
          <p className="hover:text-red-400 font-bold mt-2">CONTACT US</p>

          <button className="w-90 h-10 bg-red-500 rounded-md text-white font-bold mt-3">
            GET STARTED
          </button>
        </div>
       
      
      )}




      </div>




    </div>
  )
}
