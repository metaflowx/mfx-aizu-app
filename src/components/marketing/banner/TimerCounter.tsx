import React, { useEffect, useState } from "react";

export default function TimerCounter({label,targetTime}:{label: string;
  targetTime: any;}) {


    const calculateTimeLeft = () => {
      const now = Math.floor(Date.now() / 1000); // Current time in Unix seconds
      const difference = Number(targetTime) - now;
  
      if (difference <= 0 || difference===undefined) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  
      return {
        days: Math.floor(difference / (24 * 3600)),
        hours: Math.floor((difference % (24 * 3600)) / 3600),
        minutes: Math.floor((difference % 3600) / 60),
        seconds: difference % 60,
      };
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, [targetTime]);

  return (
    <div className="flex flex-wrap sm:flex justify-center gap-3 mb-8">
      {[
        { value: timeLeft.days ||0, label: "DAYS" },
        { value: timeLeft.hours || 0, label: "HOUR" },
        { value: timeLeft.minutes || 0, label: "MINUTES" },
        { value: timeLeft.seconds || 0, label: "SECOND" },
      ].map((time, index) => (
        <div
        data-aos="fade-right"
          key={index}
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
