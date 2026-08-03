import React, { useEffect, useState } from "react";

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
    <div className="flex w-full justify-center">
      {intervals.length > 0 ? (
        <div className="flex w-full max-w-[430px] items-center justify-center">
          {intervals.map(([interval, value], index) => (
            <React.Fragment key={interval}>
              <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-1 text-center sm:px-2">
                {/* NÚMERO */}
                <span
                  className="
                    font-serif
                    text-[1.4rem]
                    font-normal
                    leading-none
                    tracking-[-0.03em]
                    text-white
                    drop-shadow-md
                    sm:text-[1.7rem]
                    md:text-3xl
                  "
                >
                  {String(value).padStart(2, "0")}
                </span>

                {/* ETIQUETA */}
                <span
                  className="
                    mt-1.5
                    text-[6px]
                    uppercase
                    tracking-[0.14em]
                    text-white/70
                    sm:text-[7px]
                    sm:tracking-[0.2em]
                  "
                >
                  {interval}
                </span>
              </div>

              {/* DIVISOR */}
              {index < intervals.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    h-7
                    w-px
                    shrink-0
                    bg-white/25
                    sm:h-9
                  "
                />
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="py-2 text-center">
          <p className="font-serif text-lg italic text-white sm:text-xl">
            Llegó nuestro gran día
          </p>

          <p className="mt-1.5 text-[7px] uppercase tracking-[0.25em] text-white/70">
            Gracias por celebrarlo con nosotros
          </p>
        </div>
      )}
    </div>
  );
};

export default Countdown;