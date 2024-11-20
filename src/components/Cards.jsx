import React from 'react'
import { useEffect } from 'react';
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

function Cards() {

    useEffect(() => {
        AOS.init({
          offset:100,
          duration: 500,
          easing: "ease-in-out",
        });
        AOS.refresh()
      }, []);

  return (
<div className="flex flex-wrap justify-evenly gap-4 p-4">
      {/* Card 1 */}
      <div data-aos="zoom-in" data-aos-delay="50"
      className="w-full h-64 bg-cover sm:w-[70%] xl:w-[30%]
      lg:w-[50%] bg-center rounded-lg shadow-2xl px-10 py-5
      flex items-end justify-start flex-col" 
      style={{ backgroundImage: `url(${banner1})`}}>
        <h2 className='px-2 py-2 rounded-lg font-normal
        text-xl text-themeyellow border border-themeyellow'>
        60% off</h2>
        <h1 className='text-2xl py-4  font-semibold
        text-white md:text-4xl'>Wireless<br/>Devices</h1>
        <button className='px-4 py-3 rounded-lg font-medium
        hover:bg-themepurple hover:text-white duration-300
        hover:scale-105 text-xl bg-themeyellow text-black'>
        Shop Now</button>
      </div>

      {/* Card 2 */}
      <div data-aos="zoom-in" data-aos-delay="50"
      className="w-full h-64 bg-cover sm:w-[70%] xl:w-[30%]
      lg:w-[50%] bg-center rounded-lg shadow-2xl px-10 py-5
      flex items-end justify-start flex-col" 
      style={{ backgroundImage: `url(${banner2})`}}>
        <h2 className='px-2 py-2 rounded-lg font-normal
        text-xl text-themeyellow border border-themeyellow'>
        40% off</h2>
        <h1 className='text-2xl py-4 font-semibold
        text-white md:text-4xl'>Wired<br/>Earbuds</h1>
        <button className='px-4 py-3 rounded-lg font-medium
        hover:bg-themepurple hover:text-white duration-300
        text-xl bg-themeyellow text-black hover:scale-105'>
        Shop Now</button>
      </div>

      {/* Card 3 */}
      <div data-aos="zoom-in" data-aos-delay="50"
      className="w-full h-64 bg-cover sm:w-[70%] xl:w-[30%]
      lg:w-[50%] bg-center rounded-lg shadow-2xl px-10 py-5
      flex items-end justify-start flex-col" 
      style={{ backgroundImage: `url(${banner3})`}}>
        <h2 className='px-2 py-2 rounded-lg font-normal
        text-xl text-themeyellow border border-themeyellow'>
        60% off</h2>
        <h1 className='text-2xl py-4  font-semibold
        text-white md:text-4xl'>Smart<br/>Watches</h1>
        <button className='px-4 py-3 rounded-lg font-medium
        hover:bg-themepurple hover:text-white duration-300
        text-xl bg-themeyellow text-black hover:scale-105'>
        Shop Now</button>
      </div>
      
    </div>
  )
}

export default Cards
