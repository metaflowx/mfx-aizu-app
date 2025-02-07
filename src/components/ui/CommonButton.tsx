"use client"
import React from 'react'

export default function CommonButton({title,width,onClick}:{title:string,width?:string,onClick?:any}) {
  return (
   <button
   onClick={()=>{
    if(onClick){
      onClick()
    }
   }}
   style={{background: "linear-gradient(90deg, #2865FF 0%, #DD4242 50%, #2865FF 100%)",width:width ? width :"100%"
   }} className='rounded-[40px] h-[50px] text-center text-[20px] flex justify-center items-center' >
    <p >
    {title}
    </p>

   </button>
  )
}
