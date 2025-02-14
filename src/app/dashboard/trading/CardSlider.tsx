import React from 'react';
import Slider from 'react-slick'; // Import React Slick
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css';

export default function CardSlider() {
  const cards = [
    { name: 'Bitcoin', price: '$42577.10', change: '+1.08%', icon: '🟠' },
    { name: 'Ethereum', price: '$2529.41', change: '-0.56%', icon: '🔵' },
    { name: 'Avalanche', price: '$1.09', change: '+1.08%', icon: '🔴' },
    { name: 'Arbitrum', price: '$42577.10', change: '+1.08%', icon: '🟦' },
    { name: 'Bitcoin', price: '$42577.10', change: '+1.08%', icon: '🟠' },
    { name: 'Ethereum', price: '$2529.41', change: '-0.56%', icon: '🔵' },
    { name: 'Avalanche', price: '$1.09', change: '+1.08%', icon: '🔴' },
    { name: 'Arbitrum', price: '$42577.10', change: '+1.08%', icon: '🟦' },
  ];

  // React Slick settings
  const settings = {
    infinite: false,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: false, 
    autoplaySpeed: 3000, 
    arrows: false, 
    responsive: [
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
          <div key={index} className="slider-slide p-4 bg-gray-900 rounded-lg text-center mx-2">
            <div className="text-xl">{card.icon}</div>
            <div className="text-lg font-semibold">{card.price}</div>
            <div className="text-sm text-gray-400">{card.name}</div>
            <div
              className={`text-sm ${
                card.change.includes('-') ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {card.change}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
