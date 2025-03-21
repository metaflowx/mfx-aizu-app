"use client";
import React from "react";

export default function CommonButton({
  title,
  width,
  onClick,
  disabled,
  scale,
}: {
  title: string;
  width?: string;
  onClick?: any;
  disabled?: boolean;
  scale?: number;
}) {
  const defaultBg =
    "linear-gradient(90deg, #2865FF 0%, #DD4242 50%, #2865FF 100%)";
  const disabledBg = "#A0A0A0"; // You can change this to match your theme

  return (
    <button
      disabled={disabled}
      onClick={() => {
        if (onClick && !disabled) {
          onClick();
        }
      }}
      style={{
        background: disabled ? disabledBg : defaultBg,
        width: width ? width : "100%",
        overflow: "hidden",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      className={`
        rounded-[40px] h-[50px] text-white text-center text-[20px] 
        flex justify-center items-center 
        transition-all duration-300 ease-in-out transform 
        ${!disabled ? `hover:scale-${scale ?? 105} hover:shadow-lg hover:shadow-[#2865FF]/50` : ""}
      `}
    >
      <p>{title}</p>
    </button>
  );
}
