import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTime = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hora: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
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
      <div className="p-2 sm:text-lg md:text-4xl lg:text-5xl text-black flex flex-col items-center rounded-lg font-playfair">
        <div className="flex space-x-10">
          {Object.keys(timeLeft).map((interval) => (
            <div key={interval} className="flex flex-col items-center gap-2">
              {/* Estilo para los números */}
              <span className="bg-[#9E8E7B] text-white font-bold p-2 w-12 h-12 rounded-full text-2xl flex items-center justify-center">
                {timeLeft[interval]}
              </span>
              {/* Estilo para las etiquetas (días, horas, minutos, segundos) */}
              <span className="text-white capitalize">{interval}</span>
            </div>
          ))}
        </div>
        {Object.keys(timeLeft).length === 0 && <span>Time's up!</span>}
      </div>
    </section>
  );
};

export default Countdown;
