import React from 'react'
import protien from '../assets/images/protien.jpg'
import prework from '../assets/images/prework.jpg'
import omega from '../assets/images/omega.jpg'

export default function Popularproduct() {
     const product = [
            {
              name: "BEAST MODE PROTEIN",
              description: "30g pure isolate protein per serving. ",
              price: "$54.99",
              selling: "BEST SELLER",
              image: protien
            },
            {
              name: "BEAST MODE PROTEIN",
              description: "30g pure isolate protein per serving. ",
              price: "$30.99",
              selling: "TOP RATED",
              image: prework
            },
            {
              name: "BEAST MODE PROTEIN",
              description: "30g pure isolate protein per serving. ",
              price: "$60.99",
              selling: "NEW ARRIVAL",
              image: omega
            },
            {
              name: "BEAST MODE PROTEIN",
              description: "30g pure isolate protein per serving. ",
              price: "$54.99",
              selling: "BEST SELLER",
              image: protien
            },
            {
              name: "BEAST MODE PROTEIN",
              description: "30g pure isolate protein per serving. ",
              price: "$30.99",
              selling: "TOP RATED",
              image: prework
            },
          
          ]
  return (
    <div>   
<div className=' sm:flex  md:flex-wrap  gap-15 justify-center items-center mt-10 '>
      {product.map((prod) => (
        <div className='border-2 broder-gray-500 w-85 md:w-70 h-100 rounded-xl bg-black text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-red-500 ' >
          <div className='relative'>
            <img className='w-70 h-50 rounded-t-xl ' src={prod.image} alt="error" />
            
          </div>
          <div className='px-3  space-y-1'>
            <div className='text-2xl text-red-500 mt-3'>★★★★★</div>
            <h1 className='font-bold text-xl '>{prod.name}</h1>
            <p className=''>{prod.description}</p>
            <div className='flex justify-between mt-3 items-center'>
              <h1 className='text-xl font-bold text-red-500'> {prod.price}</h1>
              
            </div>
          </div>
        </div>))}

    </div>
    </div>
  )
}
