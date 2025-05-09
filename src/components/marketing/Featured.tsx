"use client";
import * as React from "react";
import Slider from "react-slick";

// Import slick-carousel CSS in your global stylesheet
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../global/container";

const SlickSlider = Slider as unknown as React.FC<any>; // Fix TypeScript issue

const FeaturedIn = ({id}:{id:string}) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
   <Container  >
     <div id={id} className="bg-transparent text-white py-10 w-full  ">
        <div className="text-left sm:text-center  flex justify-center items-center">
           <div className="w-full">
           <h1 data-aos="fade-right" className="text-white text-[25px] sm:text-[30px] sm:text[40px] md:text-[60px] font-[700] " >Smart Trading with AIZU AI Trading Bot</h1>
            <h3 data-aos="fade-right" className="text-[#2865FF] text-[20px] sm:text[30px] md:text-[40px] font-[700] ">Maximize profits, minimize risks. Let AI do the heavy lifting 🚀📈</h3>
            <h3 data-aos="fade-right" className="text-[#fff] text-[18px] sm:text-[24px] font-[500] max-w-6xl mx-auto pt-2">
            AIZU AI Trading Bot leverages AI-driven insights to turn volatility into opportunity. Analyzes markets in real-time, automates smart trades, and keeps you ahead of the curve. Trade smarter with AI-powered precision!
            </h3>
           </div>

        </div>
      <h2 data-aos="fade-right"  className="text-center text-[39px] md:text-[50px] font-bold mb-6 mt-[90px]">
        Our Partners
      </h2>
      <div className="px-6">
        <SlickSlider {...settings}>
          {["cloudfare", "coinstats", "gemini", "openAi", "cloudfare"].map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img src={`/images/coin-icon/${logo}.svg`} alt={logo} className="w-[280px] h-[80px] object-contain" />
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
    

   </Container>
  );
};

export default FeaturedIn;
