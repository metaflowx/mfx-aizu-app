"use client"
import { useEffect, useState } from "react";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-01T00:00:00"); // Set your launch date here
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) return null;
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen  text-white text-center px-4">
      <div>
        <h1 className="text-4xl sm:text-6xl font-bold">Giveaway 10 Million AIZU</h1>
        <p className="text-lg sm:text-xl mt-4">We're launching something amazing. Stay tuned!</p>
        
      </div>
    </div>
  );
};

export default ComingSoon;
