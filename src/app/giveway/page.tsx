import Giveway from '@/components/giveway/Giveway'
import MillinareGiveway from '@/components/giveway/MillinareGiveway'
import Wrapper from '@/components/global/wrapper'
import PageBox from '@/components/PageBox'
import React from 'react'

export default function page() {
  return (
    <PageBox>
      <Wrapper>

         <div className="relative overflow-x-hidden w-full pb-15 md:pb-10 px-4">

        <Giveway />
        <MillinareGiveway />
         </div>
      </Wrapper>

      
    </PageBox>
  )
}
