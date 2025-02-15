import React from 'react'
import TradingPage from '../dashboard/trading/page'

export default function page() {
  return (
    <div className='w-full px-4 md:px-16 py-10'>
        <h3 className='text-white py-3 text-[16px] sm:text-[30px] font-[700] '>Algo Trading</h3>
       <TradingPage /> 
    </div>
  )
}
