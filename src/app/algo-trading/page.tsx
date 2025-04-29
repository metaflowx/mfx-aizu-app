import React from 'react'
import TradingPage from '../dashboard/trading/page'
import ComingSoon from '@/components/ComingSoon'

export default function page() {
  return (
    <>
 
    <div style={{background:"url(/images/giveway/givewaybg.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"top"}} className='w-full px-4 md:px-16 py-10'>
    {/* <ComingSoon />  */}
        <h3 className='text-white py-3 text-[16px] sm:text-[30px] font-[700] '>Algo Trading</h3>
       <TradingPage /> 
    </div>
    </>
  )
}
