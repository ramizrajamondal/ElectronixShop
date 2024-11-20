import React from 'react'
import { useEffect } from 'react';
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";
import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: "ease-in-out",
          });
        AOS.refresh();
    },[])
  return (
    // main div 
    <div className='w-full flex flex-col'>
       {/* div one */}
      <div className='w-full flex flex-wrap justify-between bg-themepurple
      lg:p-10 p-5 gap-3 '>
           <img src={client1} alt="" className='opacity-75
           hover:opacity-100 w-[90px] lg:w-[120px]'  />
           <img src={client2} alt="image" className='opacity-75
           hover:opacity-100 w-[90px] lg:w-[120px]' />
           <img src={client3} alt="image" className='opacity-75
           hover:opacity-100 w-[90px] lg:w-[120px]' />
           <img src={client4} alt="image" className='opacity-75
           hover:opacity-100 w-[90px] lg:w-[120px]' />
           <img src={client5} alt="image" className='opacity-75
           hover:opacity-100 w-[90px] lg:w-[120px]' />
           <img src={client6} alt="image" className='opacity-75
           hover:opacity-100 w-[90px] lg:w-[120px]' />
      </div>
       {/* div two */}
      <div data-aos="zoom-in" data-aos-delay="60"
      className='w-full flex flex-col max-lg:items-start 
      lg:flex-row justify-between p-8 xl:p-16 lg:gap-5 gap-12'>
        <div data-aos="zoom-in" data-aos-delay="60"
         className='w-[15%] flex flex-col gap-5'>
          <h1 className='text-themepurple text-2xl lg:text-4xl
          font-bold underline italic'>ElectronixShop</h1>
          <h1 className='text-xl lg:text-2xl font-semibold'>Download Our App</h1>
          <div className='flex gap-3'>
          <img src={google} alt="google" />
          <img src={apple} alt="apple" />
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="60"
        className='flex flex-col items-center justify-center gap-4'>
        <h1 className='font-semibold lg:text-2xl text-xl'>
        UseFull Links</h1>
         <ul className="flex flex-col gap-3">
            <li className='text-lg text-gray-600 hover:text-black'>Home</li>
            <li className='text-lg text-gray-600 hover:text-black'>About</li>
            <li className='text-lg text-gray-600 hover:text-black'>Services</li>
            <li className='text-lg text-gray-600 hover:text-black'>Blogs</li>
            <li className='text-lg text-gray-600 hover:text-black'>Contact</li>
         </ul>
        </div> 

        <div data-aos="zoom-in" data-aos-delay="60"
         className='flex flex-col items-center justify-center gap-4'>
        <h1 className='font-semibold lg:text-2xl text-xl'>
        Information</h1>
         <ul className="flex flex-col gap-3">
            <li className='text-lg text-gray-600 hover:text-black'>Return Policy</li>
            <li className='text-lg text-gray-600 hover:text-black'>Privacy Policy</li>
            <li className='text-lg text-gray-600 hover:text-black'>Refund Policy</li>
            <li className='text-lg text-gray-600 hover:text-black'>Agreement</li>
            <li className='text-lg text-gray-600 hover:text-black'>We our Brand</li>
         </ul>
        </div> 

        <div data-aos="zoom-in" data-aos-delay="60"
        className='flex flex-col  gap-4'>
        <h1 className='font-semibold lg:text-2xl text-xl'>
        Top Category</h1>
         <ul className="flex flex-col gap-3">
            <li className='text-lg text-gray-600 hover:text-black'>Wireless Earbuds</li>
            <li className='text-lg text-gray-600 hover:text-black'>Bluetooth Speakers</li>
            <li className='text-lg text-gray-600 hover:text-black'>PC Desktops</li>
            <li className='text-lg text-gray-600 hover:text-black'>Digital Cameras</li>
            <li className='text-lg text-gray-600 hover:text-black'>Home Assistants </li>
         </ul>
        </div> 
      </div>
      
      {/* div three */}
      <div data-aos="zoom-in" data-aos-delay="60"
      className='w-full flex flex-col justify-evenly items-center 
      lg:p-5 p-5 lg:flex-row max-lg:gap-4'>
        <div className='flex'>
            <img src={pay1} alt="" className='w-[55px]'/>
            <img src={pay2} alt="" className='w-[55px]'/>
            <img src={pay3} alt="" className='w-[55px]'/>
            <img src={pay4} alt="" className='w-[55px]'/>
        </div>
        <div>
            <input className='rounded-sm px-4 py-2'
            type="email" placeholder='Email' />
            <button className='bg-themepurple text-white
            px-4 py-2 rounded-sm'>Submit</button>
        </div>
        <h3 className='text-gray-600 hover:text-black'>
        @2025 Power By ElectronixShop</h3>
        
      </div>

    </div>
  )
}

export default Footer
