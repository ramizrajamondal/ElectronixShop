import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg"
import earbuds from "../assets/earbuds.jpg"
import dslr from "../assets/dslr.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: "ease-in-out",
          });
        AOS.refresh();
    },[])

  return (
    <div className="w-full lg:h-[750px] h-[650px] overflow-x-hidden bg-gray-100">
    <Slider className="w-full"{...settings}>
    <div>
        <div className="w-full lg:h-[700px] h-[600px]
        flex flex-col justify-center gap-10 lg:px-20 px-5 bg-cover bg-center
        items-start" style={{backgroundImage: `url(${dslr})`}}>
          <h1 data-aos="zoom-in" data-aos-delay="50" 
          className="text-themeyellow border-2 rounded-xl 
          border-themeyellow text-xl px-6 py-3">
              get upto 50% Discount 
          </h1>

          <h1 data-aos="zoom-in" data-aos-delay="50" 
          className="text-xl text-white uppercase
          font-bold lg:text-[80px] text-[25px] leading-snug
          ">
            Upgrade your<br/>photography
          </h1>

          <h1 data-aos="zoom-in" data-aos-delay="50"
          className="text-white lg:text[90px] text-[30px]">Capture Every 
            <span className="text-themeyellow"> Moment</span>
          </h1>
          
           <buttton className="bg-themeyellow px-6 py-3 cursor-pointer 
            font-semibold hover:bg-yellow-400 
           hover:shadow-2xl duration-300 rounded-lg text-xl">
             Buy Now
           </buttton>
            
        </div>
    </div>
    <div>
        <div className="w-full lg:h-[700px] h-[600px]
        flex flex-col justify-center gap-10 lg:px-20 px-5 bg-cover bg-center
        items-start" style={{backgroundImage: `url(${headset})`}}>
          <h1 data-aos="zoom-in" data-aos-delay="50" 
          className="text-themeyellow border-2 rounded-xl 
          border-themeyellow text-xl px-6 py-3">
              Get 60% OFF on All Headsets!
          </h1>

          <h1 data-aos="zoom-in" data-aos-delay="50" 
          className="text-xl text-white uppercase
          font-bold lg:text-[80px] text-[30px] leading-tight
          ">
            Immerse Yourself <br/> in Sound
          </h1>

          <h1 data-aos="zoom-in" data-aos-delay="50"
          className="text-white lg:text[90px] text-[30px]">Premium audio for 
            <span className="text-themeyellow"> every beat</span>
          </h1>
          
           <buttton className="bg-themeyellow px-6 py-3 cursor-pointer 
            font-semibold hover:bg-yellow-400  text-xl
           hover:shadow-2xl duration-300 rounded-lg">
             Shop Now
           </buttton>
            
        </div>
    </div>
    <div>
        <div className="w-full lg:h-[700px] h-[600px]
        flex flex-col justify-center gap-10 lg:px-20 px-5 bg-cover bg-center
        items-start" style={{backgroundImage: `url(${earbuds})`}}>
          <h1 data-aos="zoom-in" data-aos-delay="50" 
          className="text-themeyellow border-2 rounded-xl 
          border-themeyellow text-xl px-6 py-3">
            30% Discount Your Next Pair of Earbuds 
          </h1>

          <h1 data-aos="zoom-in" data-aos-delay="50" 
          className="text-xl text-white uppercase
          font-bold lg:text-[80px] text-[35px] leading-tight
          ">
           Music on the Go<br/>Chill anywhere
          </h1>

          <h1 data-aos="zoom-in" data-aos-delay="50"
          className="text-white lg:text[90px] text-[30px]">Sound you can 
            <span className="text-themeyellow"> take anywhere</span>
          </h1>
          
           <buttton className="bg-themeyellow px-6 py-3 cursor-pointer 
            font-semibold hover:bg-yellow-400 text-xl
           hover:shadow-2xl duration-300 rounded-lg">
             Explore Earbuds
           </buttton>
            
        </div>
    </div>
    </Slider>
    </div>
  )
}
export default Hero
