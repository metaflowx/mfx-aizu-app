import React from 'react';
import Slider from 'react-slick'; // Import React Slick
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css';
import LineChartCom from './LineChartCom';

export default function CardSlider() {
  const cards = [
    { name: 'Bitcoin', price: '$42577.10', change: '+1.08%', icon: '/images/trading/slider/bitcoin.png' },
    { name: 'Ethereum', price: '$2529.41', change: '-0.56%', icon: '/images/trading/slider/ethereum.png' },
    { name: 'Avalanche', price: '$1.09', change: '+1.08%', icon: '/images/trading/slider/avalanche.png' },
    { name: 'Arbitrum', price: '$42577.10', change: '+1.08%', icon: '/images/trading/slider/arbitrum.png' },
    { name: 'Polygon', price: '$42577.10', change: '+1.08%', icon: '/images/trading/slider/polygon.png' },
    { name: 'Ethereum', price: '$2529.41', change: '-0.56%', icon: '/images/trading/slider/ethereum.png' },
    { name: 'Avalanche', price: '$1.09', change: '+1.08%', icon: '/images/trading/slider/avalanche.png' },
    { name: 'Arbitrum', price: '$42577.10', change: '+1.08%', icon: '/images/trading/slider/arbitrum.png' },
  ];

  // React Slick settings
  const settings = {
    infinite: true,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: false, 
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div style={{width:"230px"}} key={index} className="slider-slide p-4   mx-2 w-[230px] ">
            <div className="flex justify-between">
              <img src={card.icon} className='h-[40px] w-[40px] ' />
              <LineChartCom />
             </div>
            <div className="text-[24px] font-[700] text-white pt-5">{card.price}</div>
            <div className='flex justify-between items-center pt-3'>
            <div className="text-[20px] font-[400] text-white">{card.name}</div>
            <div
              className={`text-sm rounded-[4px] p-[4px] flex justify-center items-center ${
                card.change.includes('-') ? 'text-[#FF3D33] bg-[#FF3D3333]' : 'text-[#01FD48] bg-[#01FD4833]'
              }`}
            >
              <img src={ card.change.includes('-') ? "/images/trading/down.png" :"/images/trading/up.png"} />
              {card.change}
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
