"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex items-center gap-2 text-white text-[17px] font-[400] hover:text-white transition-colors"
    >
      Back to top
      <ArrowUp className="w-[50px] h-[50px] rounded-full" style={{
        background: "#FFFFFF",
        border: "1.5px solid #FFFFFF1A"

      }} />
    </button>
  );
}