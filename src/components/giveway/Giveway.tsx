import React from 'react'

export default function Giveway() {
  const cardData=[
    {
      value:"0",
      title:"Entries"
    },
    {
      value:"509,802",
      title:"Total Entries"
    },
    {
      value:"60",
      title:"Days Left"
    },
  ]
  return (
    <div className='py-6 md:py-20 text-left sm:text-center'>
      <h2 data-aos="fade-right" className='text-[20px] md:text-[60px] font-[700] text-[#fff]' >AIZU Coin $10 Million Giveaway</h2>
      <p data-aos="fade-left" className='text-[#fff] text-[16px] md:text-[20px] font-[400] max-w-[1200px] mx-auto'>
      Join Aizu Coin's $1 Million Giveaway! 20 fortunate winners will each receive $50,000 worth of Aizu Coin. Boost your chances by sharing and completing all tasks to earn bonus entries. Don't miss out—participate now!
      </p>
      <h2 data-aos="fade-right" className=' text-[#fff] text-[16px] md:text-[24px] font-[700] pb-10 pt-2'>
      Note: A minimum $100 participation in the Aizu Coin Presale is required to be eligible.
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {cardData.map((item,index)=>{
          return(
            <div style={{background:"rgba(0, 0, 0, 0.5)"}} className='border border-[#2865FF] h-[213px] text-center flex justify-center items-center rounded-[40px]'>
              <div>
                <h3 data-aos="fade-right" className='text-[#fff] text-[30px] md:text-[50px] font-[700]'>{item?.value}</h3>
                <h4 data-aos="fade-right" className='text-[#fff] text-[20px] md:text-[40px] font-[700]'>{item?.title}</h4>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
