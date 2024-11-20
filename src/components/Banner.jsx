import React from 'react'
import { useEffect } from 'react';
import deal from '../assets/deal-bg.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {

    useEffect(() => {
        AOS.init({
          offset:100,
          duration: 500,
          easing: "ease-in-out",
        });
        AOS.refresh()
      }, []);

  return (
    <div className='w-full lg:px-20 px-5 py-10 h-[300px]'>
      <div data-aos="flip-up" data-aos-delay="50"
      className='bg-cover bg-center w-full flex gap-5
      items-center justify-center rounded-lg h-full flex-col'
      style={{backgroundImage:`url(${deal})`}}
      >
        <h1 className='text-themeyellow text-2xl font-semibold'>
            Every Day Shopping</h1>
        <h1 className='text-4xl text-white font-semibold'>Deal of The Day</h1>
      </div>
    </div>
  )
}

export default Banner
