import React from 'react';
import Slider from 'react-slick'; // Import React Slick
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css';
import LineChartCom from './LineChartCom';

import { useQuery } from '@tanstack/react-query';
import { ramaCoinGeckoPrice } from '@/lib/api/rest/ramaCoinGeckoPrice';


export default function CardSlider() {



  const { data: ramaCoinGeckoPriceData } = useQuery({
    queryKey: ['ramaCoinGeckoPrice'],
    queryFn: () => {
      return ramaCoinGeckoPrice()
    }
    ,
  })

 
//  const tester = ramaCoinGeckoPriceData;
//   console.log(tester, "jssssss");



  const coin__price__btc = ramaCoinGeckoPriceData?.[0]?.current_price;
  const btc__title = ramaCoinGeckoPriceData?.[0]?.id;
  const btcicon = ramaCoinGeckoPriceData?.[0]?.image;
  const change__pricebtc = ramaCoinGeckoPriceData?.[0]?.price_change_24h;



  const coin__price__eth = ramaCoinGeckoPriceData?.[1]?.current_price;
  const eth__title = ramaCoinGeckoPriceData?.[1]?.id;
  const ethicon = ramaCoinGeckoPriceData?.[1]?.image;
   const change__priceeth = ramaCoinGeckoPriceData?.[1]?.price_change_24h;
  

  const coin__price__ava = ramaCoinGeckoPriceData?.[16]?.current_price;
  const ava__title = ramaCoinGeckoPriceData?.[16]?.id;
  const avaicon = ramaCoinGeckoPriceData?.[16]?.image;
    const change__priceava = ramaCoinGeckoPriceData?.[16]?.price_change_24h;


  const coin__price__arb = ramaCoinGeckoPriceData?.[67]?.current_price;
  const arb__title = ramaCoinGeckoPriceData?.[67]?.id;
  const arbicon = ramaCoinGeckoPriceData?.[67]?.image;
    const change__pricearb = ramaCoinGeckoPriceData?.[67]?.price_change_24h;

  const coin__price__poly = ramaCoinGeckoPriceData?.[62]?.current_price;
  const polyicon = ramaCoinGeckoPriceData?.[62]?.image;
    const change__pricepoly = ramaCoinGeckoPriceData?.[62]?.price_change_24h;



  const cards = [
    {
      name: `${btc__title}`,
      price: `$${coin__price__btc}`,
      change: `${parseFloat(change__pricebtc).toFixed(2)}`,
      icon: btcicon,
    },
    {
      name: eth__title,
      price: `$${coin__price__eth}`,
      change: `${parseFloat(change__priceeth).toFixed(2)}`,
      icon: ethicon,
    },
    {
      name: ava__title,
      price: `$${coin__price__ava}`,
     change: `${parseFloat(change__priceava).toFixed(2)}`,
      icon: avaicon
    },
    {
      name: arb__title,
      price: `$${coin__price__arb}`,
      change: `${parseFloat(change__pricearb).toFixed(2)}`,
      icon: arbicon,
    },
    {
      name: "Polygon",
      price: `$${coin__price__poly}`,
      change: `${parseFloat(change__pricepoly).toFixed(2)}`,
      icon: polyicon,
    },
    
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
          <div style={{ width: "230px" }} key={index} className="slider-slide p-4   mx-2 w-[230px] ">
            <div className="flex justify-between">
              <img src={card.icon} className='h-[40px] w-[40px] ' />
              <LineChartCom />
            </div>
            <div className="text-[24px] font-[700] text-white pt-5">{card.price}</div>
            <div className='flex justify-between items-center pt-3'>
              <div className="text-[20px] font-[400] text-white">{card.name}</div>
              <div
                className={`text-sm rounded-[4px] p-[4px] flex justify-center items-center ${card.change.includes('-') ? 'text-[#FF3D33] bg-[#FF3D3333]' : 'text-[#01FD48] bg-[#01FD4833]'
                  }`}
              >
                <img src={card.change.includes('-') ? "/images/trading/down.png" : "/images/trading/up.png"} />
                {card.change}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
