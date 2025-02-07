"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Spheres1Background: any;
  }
}

const SpheresBackground = () => {
  useEffect(() => {
    // Dynamically load the Spheres1Background script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js";
    script.async = true;
    console.log(">>>>>>>>>>>>>.window.Spheres1Background",script);
    
    script.onload = () => {
    //   if (!window.Spheres1Background) return;

      const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;
      console.log(">>>>>>>>>>canvas",canvas);
      
      if (!canvas) return;

      // Initialize the spheres background
      const bg = new window.Spheres1Background(canvas, {
        count: 300,
        minSize: 0.3,
        maxSize: 1,
        gravity: 0.5,
      });

      console.log(">>>>>>>>>>bg",bg);
      

      // Add event listeners for UI buttons
      document.getElementById("gravity-btn")?.addEventListener("click", () => {
        bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0;
      });

      document.getElementById("colors-btn")?.addEventListener("click", () => {
        bg.spheres.setColors([
          0xffffff * Math.random(),
          0xffffff * Math.random(),
          0xffffff * Math.random(),
        ]);
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-[100px] font-bold text-black uppercase drop-shadow-lg">Sphere</h1>
        <h2 className="text-[80px] font-medium text-black uppercase drop-shadow-lg">Packing</h2>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center gap-4 z-10">
        <button
          id="gravity-btn"
          className="px-4 py-2 bg-white/50 border border-gray-500 rounded-md font-semibold"
        >
          Toggle gravity
        </button>
        <button
          id="colors-btn"
          className="px-4 py-2 bg-white/50 border border-gray-500 rounded-md font-semibold"
        >
          Random colors
        </button>
      </div>
      {/* <canvas id="webgl-canvas" className="absolute inset-0 w-full h-full z-0" /> */}
      <canvas id="webgl-canvas"></canvas>
    </div>
  );
};

export default SpheresBackground;
