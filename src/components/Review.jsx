import React from 'react'
import { useEffect } from 'react';
import {testimonials} from "../export"
import AOS from "aos";
import "aos/dist/aos.css";
function Review() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
    });
    AOS.refresh()
  }, []);
      
  return (
    <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Clients Say</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-gray-600">{testimonial.title}</p>
            <p className="text-gray-500 mt-4">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Review
