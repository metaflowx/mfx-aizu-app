import React from 'react'

export default function Footer() {
    const socialLinks = [
        {
          name: "Twitter",
          icon: "/images/dsh-footer/x.png",
          href: "#",
          bgColor: "bg-[#1A1D28]",
          hoverColor: "hover:text-[#1DA1F2]",
        },
        {
          name: "Instagram",
          icon: "/images/dsh-footer/i.png",
          href: "#",
          bgColor: "bg-[#1A1D28]",
          hoverColor: "hover:text-[#E4405F]",
        },
        {
          name: "LinkedIn",
          icon: "/images/dsh-footer/l.png",
          href: "#",
          bgColor: "bg-[#1A1D28]",
          hoverColor: "hover:text-[#0A66C2]",
        },
        {
          name: "Discord",
          icon: "/images/dsh-footer/d.png",
          href: "#",
          bgColor: "bg-[#1A1D28]",
          hoverColor: "hover:text-[#5865F2]",
        },
      ];
  return (
    <div className='sticky bottom-0 w-full pt-10'>

    <div className='grid grid-cols-1 sm:grid-cols-2 items-center'>

        <div>
            <h3 className='text-white text-[14px] sm:text-[17px] font-[400] '>
            Copyright © 2025 AIZUCoin.com. All rights reserved.
            </h3>
        </div>

        <div className='flex justify-center sm:justify-end'>
        <div className="flex flex-wrap sm:flex justify-center">
      {socialLinks.map((social) => (
        <a
        data-aos="fade-right"
          key={social.name}
          href={social.href}
        
          className={`p-4  transition-all hover:scale-105 ${social.hoverColor} flex items-center`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={social.icon} />
         
        </a>
      ))}
    </div>
        </div>
      
    </div>
    </div>
  )
}
