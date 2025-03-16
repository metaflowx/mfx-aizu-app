import React, { useState, useEffect } from "react";

const calculateAmounts = (initialValue: number, totalPhases: number, interval: number = 5, increment: number = 0.01) => {
  const results: number[] = [];
  let currentValue = initialValue;

  for (let i = 0; i < totalPhases; i++) {
    results.push(parseFloat(currentValue.toFixed(4))); 
    currentValue += increment;
  }

  return results;
};

const PhaseDisplay = ({targetTime}:{targetTime:any}) => { 
  const totalPhases = 20;
  const interval = 5;
  const startTimestamp =targetTime; 
  const startDate = new Date(Number(startTimestamp) * 1000); 
  const today = new Date();
  const elapsedDays = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const currentPhase = Math.min(Math.floor(elapsedDays / interval) + 1, totalPhases);

  const amounts = calculateAmounts(0.01, totalPhases);

  return (
    <div className="flex flex-col gap-4">
      {currentPhase <= totalPhases && (
        <div className="flex justify-between" >
          {/* Current Phase */}
          <div>
            <h1 data-aos="fade-right" className="text-[14px] md:text-[18px] font-bold text-center text-white">
              Phase {currentPhase}/{totalPhases}
            </h1>
            <p className="text-[12px] md:text-[14px] text-white">{amounts[currentPhase - 1]} USDT</p>
          </div>

         
          <div>
            <h1 data-aos="fade-right" className="text-[14px] md:text-[18px] font-bold text-center text-white">
              Next phase will start in {interval - (elapsedDays % interval)} days
            </h1>
          </div>

        
          {currentPhase < totalPhases && (
            <div>
              <h1 data-aos="fade-right" className="text-[14px] md:text-[18px] font-bold text-center text-white">
                Next Phase {currentPhase + 1}
              </h1>
              <p className="text-[12px] md:text-[14px] text-white">{amounts[currentPhase]} USDT</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhaseDisplay;
