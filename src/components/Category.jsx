import React from 'react'
import { useEffect } from 'react';
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Category() {
   
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 600,
          easing: "ease-in-out",
        });
        AOS.refresh();
      }, []);

  return (
    <div id='category'className='w-full lg:p-8 bg-gray-100'>

      <div className='flex flex-col items-center
      justify-center gap-5 '>
        <h3 data-aos="zoom-in" data-aos-delay="70"
        className='text-2xl text-themepurple font-semibold'>Favourites item</h3>
        <h2 data-aos="zoom-in" data-aos-delay="70"
        className='text-4xl font-semibold'>Popular Category</h2>
        <button id='btn' data-aos="zoom-in" data-aos-delay="70"
        className='bg-themepurple px-6 py-3 text-xl text-white
        rounded-lg mt-5 font-semibold hover:bg-themeyellow 
        hover:text-black duration-300'>View More</button>
      </div>
      <div className='lg:flex lg:justify-around mt-10'>

      <div id="cat1" className='procat lg:w-[15%] w-[85%] max-lg:mt-14
       flex flex-col items-center justify-center mx-10 
       md:mx-16 lg:mx-0'
       data-aos="zoom-in" data-aos-delay="70">
        <img src={cat1} className='rounded-full bg-gray-100'/>
        <h1 className='text-xl mt-5 font-semibold
        hover:text-themepurple'>protable speker</h1>
      </div>
      
      <div id="cat2" className='procat lg:w-[15%] w-[85%] max-lg:mt-14
       flex flex-col items-center justify-center mx-10 
       md:mx-16 lg:mx-0'
       data-aos="zoom-in" data-aos-delay="70">
        <img src={cat2} className='rounded-full bg-gray-100'/>
        <h1 className='text-xl font-semibold mt-5
        hover:text-themepurple'>air conditinour</h1>
      </div>

      <div id="cat3" className='procat lg:w-[15%] w-[85%] max-lg:mt-14
       flex flex-col items-center justify-center mx-10 
       md:mx-16 lg:mx-0'
       data-aos="zoom-in" data-aos-delay="70">
        <img src={cat3} className='rounded-full bg-gray-100'/>
        <h1 className='text-xl mt-5 font-semibold
        hover:text-themepurple'>Ev charging cable</h1>
      </div>

      <div id="cat4" className='procat lg:w-[15%] w-[85%] flex flex-col 
      items-center justify-center mx-10 md:mx-16 lg:mx-0 
      max-lg:mt-14'
      data-aos="zoom-in" data-aos-delay="70">
        <img src={cat4} className='rounded-full bg-gray-100'/>
        <h1 className='text-xl mt-5 font-semibold
        hover:text-themepurple'>DVD player slot</h1>
      </div>
       
      <div id="cat5" className='procat lg:w-[15%] w-[85%] max-lg:mt-14
       flex flex-col items-center justify-center mx-10 md:mx-16 lg:mx-0'
       data-aos="zoom-in" data-aos-delay="70">
        <img src={cat5} className='rounded-full'/>
        <h1 className='text-xl mt-5  font-semibold
        hover:text-themepurple'>360 Camera</h1>
      </div>
     
      </div>
    </div>
  )
}

export default Category
