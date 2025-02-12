import Giveway from '@/components/giveway/Giveway'
import PageBox from '@/components/PageBox'
import React from 'react'

export default function page() {
  return (
    <PageBox>
         <div className="relative overflow-x-hidden w-full pb-15 md:pb-10 px-4">

        <Giveway />
         </div>

      
    </PageBox>
  )
}
