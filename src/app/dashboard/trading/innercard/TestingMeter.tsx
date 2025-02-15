"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const Speedometer = ({speed}:{speed:number}) => {


  return (
    <div className="flex flex-col items-center space-y-4 pt-4">
      <div className="relative w-40 h-20">
        {/* Background Arc */}
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <path
            d="M10,50 A40,40 0 0,1 90,50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff2d55" />
              <stop offset="50%" stopColor="#ff9500" />
              <stop offset="100%" stopColor="#007aff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Needle */}
        <motion.div
        style={{
       
          transformOrigin: "bottom" ,
          overflow:"hidden"
        }}

          className="absolute top-[-10px] left-1/2 origin-bottom h-16  "
          // style={{ transformOrigin: "bottom" }}
          animate={{ rotate: (speed / 100) * 180 - 90 }}
          transition={{ duration: 0.5 }}
        >
            <img src="/images/trading/indicator.png" className="h-16" />
        </motion.div>

        {/* Indicator */}
        <div 
      
        className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-10  rounded-full">

            <img src="/images/trading/semicircle.png"  />
        
        </div>
      </div>
      
      {/* Speed Display */}
      <span className="text-white text-2xl font-bold">{speed}%</span>
      
     
    </div>
  );
};

export default Speedometer;
