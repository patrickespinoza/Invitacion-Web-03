import { useEffect, useState } from "react";
import React from "react";

const Countdown = ({ targetDate }) => {
  const calculateTime = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hora: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
   <section>
  <div className="p-2 text-black flex flex-col items-center font-playfair">

    <div className="flex items-center">

      {Object.keys(timeLeft).map((interval, index) => (
        <React.Fragment key={interval}>

          {/* BLOQUE */}
          <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl min-w-[80px]">

            {/* NÚMERO */}
            <span className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
              {timeLeft[interval]}
            </span>

            {/* LABEL */}
            <span className="text-white uppercase tracking-widest text-xs sm:text-sm opacity-80">
              {interval}
            </span>

          </div>

          {/* ":" SOLO SI NO ES EL ÚLTIMO */}
          {index < Object.keys(timeLeft).length - 1 && (
            <span className="mx-2 text-3xl sm:text-4xl text-[#9E8E7B] opacity-80">
              :
            </span>
          )}

        </React.Fragment>
      ))}

    </div>

    {Object.keys(timeLeft).length === 0 && (
      <span className="text-white mt-4">Time's up!</span>
    )}

  </div>
</section>
  );
};

export default Countdown;
