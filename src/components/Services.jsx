import React from 'react'
import { useEffect } from 'react'
import payment from "../assets/payment.png"
import gift from "../assets/gift.png"
import refund from "../assets/return.png"
import shipping from "../assets/shipping.png"
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: "ease-in-out",
        });
        AOS.refresh()
      }, []);

  return (
    <div className='w-full flex flex-col lg:flex-row mt-5 lg:mt-8'>

      <div data-aos="zoom-in" data-aos-delay="50"
      className='mt-8 w-full flex flex-col items-center 
      justify-center gap-2'>
        <img src={shipping} alt="payment"className='w-[70px]' />
        <h1 className='text-lg font-semibold'>Fast & Reliable Delivery</h1>
        <p className='text-gray-700 text-sm'>Get your order quickly and safely</p>
      </div>
       
      <div data-aos="zoom-in" data-aos-delay="50"
      className='mt-8 w-full flex flex-col items-center 
      justify-center gap-2'>
        <img src={payment} alt="payment"className='w-[70px]' />
        <h1 className='text-lg font-semibold'>Secure Payment Options</h1>
        <p className='text-gray-700 text-sm'>Choose from multiple payment methods</p>
      </div>

      <div data-aos="zoom-in" data-aos-delay="50"
      className='mt-8 w-full flex flex-col items-center 
      justify-center gap-2'>
        <img src={refund} alt="payment"className='w-[70px]' />
        <h1 className='text-lg font-semibold'>Hassle-Free Returns</h1>
        <p className='text-gray-700 text-sm'>Return products with no questions asked</p>
      </div>

      <div data-aos="zoom-in" data-aos-delay="50"
      className='mt-8 w-full flex flex-col items-center 
      justify-center gap-2'>
        <img src={gift} alt="payment"className='w-[70px]' />
        <h1 className='text-lg font-semibold'>Gift Vouchers Available</h1>
        <p className='text-gray-700 text-base'>Perfect gifts for any occasion</p>
      </div>
    </div>
  )
}

export default Services
