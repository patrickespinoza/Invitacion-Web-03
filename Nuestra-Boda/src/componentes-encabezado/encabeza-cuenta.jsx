import { useEffect, useState } from "react";
import React from "react";

const Countdown = ({ targetDate }) => {
  const calculateTime = () => {
    const difference = new Date(targetDate).getTime() - Date.now();

    if (difference <= 0) {
      return {};
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / (1000 * 60)) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const intervals = Object.entries(timeLeft);

  return (
    <section className="flex w-full justify-center">
      <div className="w-full max-w-2xl">
        {intervals.length > 0 ? (
          <div className="grid grid-cols-4">
            {intervals.map(([interval, value], index) => (
              <React.Fragment key={interval}>
                <div className="relative flex min-w-0 flex-col items-center justify-center px-1 py-2 text-center sm:px-3 sm:py-4">
                  {/* ADORNO SUPERIOR */}
                  <span className="mb-3 block h-px w-5 bg-[#C7A46A]/70 sm:w-8" />

                  {/* NÚMERO */}
                  <span className="font-serif text-[1.7rem] font-normal leading-none tracking-[-0.04em] text-[#433A34] sm:text-4xl md:text-5xl">
                    {String(value).padStart(2, "0")}
                  </span>

                  {/* ETIQUETA */}
                  <span className="mt-3 truncate text-[7px] uppercase tracking-[0.2em] text-[#8F7D68] sm:text-[9px] sm:tracking-[0.3em]">
                    {interval}
                  </span>
                </div>

                {/* DIVISOR */}
                {index < intervals.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="my-auto h-14 w-px bg-gradient-to-b from-transparent via-[#B89B5E]/50 to-transparent sm:h-20"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center py-5 text-center">
            <span className="mb-4 h-px w-12 bg-[#C7A46A]/70" />

            <p className="font-serif text-2xl italic text-[#433A34] sm:text-3xl">
              Llegó nuestro gran día
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-[#8F7D68]">
              Gracias por celebrarlo con nosotros
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;