import React from 'react'
import { useEffect } from 'react';
import {products} from "../export"
import {FaRegHeart} from "react-icons/fa"
import {MdAddShoppingCart, MdOutlineRemoveRedEye} from "react-icons/md"
import AOS from "aos";
import "aos/dist/aos.css";
function Products() {

    useEffect(() => {
        AOS.init({
          offset:100,
          duration: 500,
          easing: "ease-in-out",
        });
        AOS.refresh()
      }, []);

  return (
    <div className='w-full bg-gray-100 flex flex-col
    items-center justify-center mt-10 gap-3 py-16'>

      <h1 className='text-xl text-themepurple
      font-semibold'>Borwse Collections</h1>
      <h1 className='text-[40px] text-black md:text-[45px]
      font-semibold'>Trending Products</h1>

      <div className='w-full flex flex-col items-center 
      justify-center h-full gap-8 mt-8 lg:flex-row flex-wrap'>

        {
        products.map((item,idx) => (
            <div id='mainProduct' key={idx} data-aos="fade-up-right" data-aos-delay="50"
            className='rounded-xl shadow-lg bg-white'>

              <div id='iconDiv' className='flex justify-center gap-5 py-3'>
                <div className='p-3 bg-themepurple rounded-full 
                text-white hover:bg-themeyellow hover:text-black'>
                <FaRegHeart />
                </div>
                <div className='p-3 bg-themepurple rounded-full 
                text-white hover:bg-themeyellow hover:text-black'>
                <MdAddShoppingCart />
                </div>
                <div className='p-3 bg-themepurple rounded-full 
                text-white hover:bg-themeyellow hover:text-black'>
                <MdOutlineRemoveRedEye />
                </div>
              </div>
              <img src={item.img} alt="image"
              className='h-[400px] lg:h-[300px]'/>
              <div className='flex flex-col gap-4 items-center
              relative bottom-12'>
                 <p className='text-base text-gray-500 font-medium'>{item.category}</p>
                 <p className='text-xl font-semibold'>{item.name}</p>
                 <p className='text-xl font-semibold text-themepurple'>{item.price}</p>
              </div>
              <div className='flex justify-between px-10 bottom-5 relative'>
              <h1 className='text-themepurple text-4xl'>* * * *</h1>
              <h1 className='text-xl text-white bg-green-600 
              px-4 py-2 rounded-lg'>
                {item.save}</h1>
              </div>
              
            </div>
        ))
        }
      </div>
      <button className='px-6 py-3 bg-themepurple text-lg mt-5
      rounded-lg font-semibold hover:bg-themeyellow text-white
       hover:text-black duration-300'>
      View More</button>
    </div>
  )
}

export default Products
