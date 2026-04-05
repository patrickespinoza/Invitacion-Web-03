import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "./componentes-encabezado/encabeza-cuenta";

export default function Portada() {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const activarSonido = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
    setMostrarModal(false);
    setMostrarContenido(true);
  };

  const silenciar = () => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play();
    }
    setMostrarModal(false);
    setMostrarContenido(true);
  };

  return (
    <div className="relative w-full overflow-hidden">

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
      </audio>

      {/* CONTENEDOR */}
      <div className="relative w-full">

        {/* IMAGEN (SOLO FADE) */}
        <motion.img
          src="/invitacion-03.avif"
          alt="portada"
          className="w-full h-auto object-contain"
          initial={{ opacity: 0 }}
          animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        />

        {/* OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        />

        {/* CONTENIDO */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 gap-4"
          initial={{ opacity: 0 }}
          animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl tracking-widest font-cursiveDancing">
            Con amor, te invitamos a celebrar
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-cursiveDancing">
            Maria & Jonathan
          </h1>

          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl tracking-widest">
            SE CASAN
          </p>

          <div className="pt-14">
            <Countdown targetDate="2026-06-11T00:00:00" />
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#111] text-white p-6 rounded-2xl text-center w-full max-w-sm shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-lg font-bold mb-4">
                🎶 Experiencia con música
              </h2>

              <p className="text-sm opacity-80 mb-6">
                Esta invitación incluye música.
                ¿Deseas activarla?
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={silenciar}
                  className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-800"
                >
                  🔇 Silenciar
                </button>

                <button
                  onClick={activarSonido}
                  className="px-4 py-2 bg-[#9E8E7B] rounded-lg hover:scale-105"
                >
                  🔊 Activar sonido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}