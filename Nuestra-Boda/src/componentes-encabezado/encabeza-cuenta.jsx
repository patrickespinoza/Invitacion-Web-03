import { useEffect, useState } from "react";
import React from "react";

const Countdown = ({ targetDate }) => {
  const calculateTime = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60),
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
    <section className="w-full flex justify-center">
      <div className="font-playfair w-full max-w-md">

        {/* GRID RESPONSIVE */}
        <div className="
          grid grid-cols-2 gap-3
          sm:flex sm:justify-center sm:items-center sm:gap-4
        ">

          {Object.keys(timeLeft).map((interval, index) => (
            <React.Fragment key={interval}>

              {/* BLOQUE */}
              <div className="
                flex flex-col items-center justify-center
                bg-white/10 backdrop-blur-md
                px-3 py-3 sm:px-4 sm:py-3
                rounded-xl
                min-w-[70px] sm:min-w-[80px]
              ">

                {/* NÚMERO */}
                <span className="
                  text-white font-bold
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                ">
                  {timeLeft[interval]}
                </span>

                {/* LABEL */}
                <span className="
                  text-white uppercase tracking-widest
                  text-[10px] sm:text-xs md:text-sm
                  opacity-80
                ">
                  {interval}
                </span>

              </div>

              {/* ":" SOLO EN DESKTOP */}
              {index < Object.keys(timeLeft).length - 1 && (
                <span className="
                  hidden sm:block
                  text-2xl md:text-3xl
                  text-[#9E8E7B] opacity-80
                ">
                  :
                </span>
              )}

            </React.Fragment>
          ))}
        </div>

        {/* FINAL */}
        {Object.keys(timeLeft).length === 0 && (
          <span className="text-white mt-4 text-center block">
            ¡Llegó el gran día! 🎉
          </span>
        )}

      </div>
    </section>
  );
};

export default Countdown;
