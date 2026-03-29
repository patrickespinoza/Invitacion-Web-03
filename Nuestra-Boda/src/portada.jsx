import React, { useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import Countdown from "./componentes-encabezado/encabeza-cuenta";

export default function Portada() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); 

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al intentar reproducir el audio:", error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted; 
      setIsMuted(!isMuted); 
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
        
      </audio>
      <section className="relative w-full h-[calc(110vh-160px)] md:h-screen flex items-center justify-center text-white overflow-hidden">

  {/* Imagen */}
  <img
    src="/vistaprevia02.avif"
    alt="Fondo"
    className="absolute w-full h-full object-cover object-center"
  />

  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Difuminado abajo */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

  {/* Contenido */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 gap-4">
 
    <p className=" text-lg sm:text-2xl md:text-3xl lg:text-4xl opacity-90 tracking-widest font-cursiveDancing">Con amor, Te invitamos a celebrar</p>

    <h1 className="p-6 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-cursiveDancing tracking-wide">
      Allison & David
    </h1>

    <p className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl opacity-90 tracking-widest">
      SE CASAN
    </p>

    <div className="b pb-20 flex justify-center">
      <div className=" px-8 py-6 ">
        <Countdown targetDate="2026-06-11T00:00:00" />
      </div>
    </div>

    

  </div>

  

  {/* Botón música */}
  <button
    onClick={handlePlayMusic}
    className="absolute bottom-6 right-6 bg-[#9E8E7B] p-3 rounded-full shadow-lg hover:scale-110 transition"
    aria-label="Reproducir Música"
  >
    {isMuted ? (
      <FaVolumeMute className="text-white" size={22} />
    ) : (
      <FaVolumeUp className="text-white" size={22} />
    )}
  </button>

</section>

    </div>
    
  );
}


