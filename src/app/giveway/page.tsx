import Giveway from '@/components/giveway/Giveway'
import MillinareGiveway from '@/components/giveway/MillinareGiveway'
import Wrapper from '@/components/global/wrapper'
import PageBox from '@/components/PageBox'
import React from 'react'
import "aos/dist/aos.css";
import ComingSoon from '@/components/ComingSoon'


export default function page() {
  return (
    <div
    style={{background:"url(/images/giveway/givewaybg.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"top"}}
    >

    <PageBox
    
    >
      <Wrapper>

         <div className="relative overflow-x-hidden w-full pb-15 md:pb-10 px-4">

          <ComingSoon />

        {/* <Giveway />
        <MillinareGiveway /> */}
         </div>
      </Wrapper>

      
    </PageBox>
    </div>
  )
}
