import React from "react";



const PhaseDisplay = ({  phaseData,tokenPrice }: {  phaseData: any,tokenPrice:any }) => {


  const totalPhases = 20;
  const saleRateChangeInDuration = Number(phaseData?.saleRateChangeInDuration); // Assuming it's in seconds
  const startTimestamp = Number(phaseData?.startAt); 
  const endTimestamp = Number(phaseData?.endAt); 
  const now = Math.floor(Date.now() / 1000); // Current time in seconds

  if (now < startTimestamp) {
    return <p className="text-white">Sale hasn't started yet.</p>;
  }

  if (now >= endTimestamp) {
    return <p className="text-white">Sale has ended.</p>;
  }

  const elapsedPhases = Math.floor((now - startTimestamp) / saleRateChangeInDuration);
  const currentPhase = Math.min(elapsedPhases + 1, totalPhases);

  
  const nextPhaseInSeconds = saleRateChangeInDuration - ((now - startTimestamp) % saleRateChangeInDuration);
  const nextPhaseInDays = Math.floor(nextPhaseInSeconds / (60 * 60 * 24));

  return (
    <div className="flex flex-col gap-4">
      {currentPhase <= totalPhases && (
        <div className="flex justify-between">
          {/* Current Phase */}
          <div>
            <h1 data-aos="fade-right" className="text-[14px] md:text-[18px] font-bold text-center text-white">
              Phase {currentPhase}/{totalPhases}
            </h1>
            <p className="text-[12px] md:text-[14px] text-white">{tokenPrice} USDT</p>
          </div>

          {/* Next Phase Timer */}
          <div>
            <h1 data-aos="fade-right" className="text-[14px] md:text-[18px] font-bold text-center text-white">
              Next phase will start in {nextPhaseInDays} days
            </h1>
          </div>

          {/* Next Phase Price */}
          {currentPhase < totalPhases && (
            <div>
              <h1 data-aos="fade-right" className="text-[14px] md:text-[18px] font-bold text-center text-white">
                Next Phase {currentPhase + 1}
              </h1>
              <p className="text-[12px] md:text-[14px] text-white">{Number(tokenPrice)+0.01} USDT</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhaseDisplay;
