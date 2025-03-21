import React, { useEffect, useState } from "react";

type TimerCounterProps = {
  phaseData?: {
    saleRateChangeInDuration?: any; // in seconds
    startAt?: any; // unix timestamp
    endAt?: any;   // unix timestamp
  };
  targetTime?: any; // Currently unused
};

export default function TimerCounter({ phaseData, targetTime }: TimerCounterProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = Math.floor(Date.now() / 1000);
    const duration = Number(phaseData?.saleRateChangeInDuration || 0);
    const startAt = Number(phaseData?.startAt || 0);

    if (!duration || !startAt) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Find the timestamp of the next phase
    const elapsed = now - startAt;
    const nextPhaseIn = duration - (elapsed % duration);
    const nextPhaseTimestamp = now + nextPhaseIn;

    const diff = nextPhaseTimestamp - now;

    return {
      days: Math.floor(diff / (24 * 3600)),
      hours: Math.floor((diff % (24 * 3600)) / 3600),
      minutes: Math.floor((diff % 3600) / 60),
      seconds: diff % 60,
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [phaseData]);

  return (
    <div className="flex flex-wrap sm:flex justify-center gap-3 mb-8">
      {[
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HOUR" },
        { value: timeLeft.minutes, label: "MINUTES" },
        { value: timeLeft.seconds, label: "SECOND" },
      ].map((time, index) => (
        <div
          key={index}
          data-aos="fade-right"
          style={{
            background:
              "linear-gradient(270deg, rgba(166, 166, 166, 0.7) 0%, rgba(166, 166, 166, 0) 50%, rgba(166, 166, 166, 0.7) 100%)",
            boxShadow: "0px 4px 4px 0px #00000040",
            padding: "1px",
            transition: "background 0.3s ease-in-out",
          }}
          className="rounded-[8px] hover:bg-gray-500 cursor-pointer"
        >
          <div className="bg-[#000000] px-2 md:px-6 py-3 rounded-[8px] text-center min-w-[100px] hover:bg-[#222] transition-all duration-300">
            <h3 className="text-[30px] md:text-[50px] font-[700] text-white mb-1 leading-[30px] md:leading-[50px]">
              {time.value}
            </h3>
            <div className="text-[14px] md:text-[16px] font-[400] text-white">
              {time.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
