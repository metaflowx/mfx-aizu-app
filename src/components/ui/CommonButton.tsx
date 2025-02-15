"use client";
import React from "react";

export default function CommonButton({
  title,
  width,
  onClick,
}: {
  title: string;
  width?: string;
  onClick?: any;
}) {
  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      style={{
        background:
          "linear-gradient(90deg, #2865FF 0%, #DD4242 50%, #2865FF 100%)",
        width: width ? width : "100%",
        overflow:"hidden"
      }}
      className="rounded-[40px] h-[50px] text-white text-center text-[20px] flex justify-center items-center 
                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#2865FF]/50"
    >
      <p>{title}</p>
    </button>
  );
}
