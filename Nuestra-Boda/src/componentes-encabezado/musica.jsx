
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Music2,
  Volume2,
  VolumeX,
  Pause,
  Play,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE
// ==========================================

const CONFIG_MUSICA = {
  cancion: "/TylerShaw.mp3",
  volumen: 0.45,
  nombres: "María & Jonathan",
};

// ==========================================
// COMPONENTE MÚSICA
// ==========================================

export default function Musica({ onContinuar }) {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [silenciado, setSilenciado] = useState(false);

  // ==========================================
  // INICIAR EXPERIENCIA
  // ==========================================

  const iniciarExperiencia = async (conSonido) => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = CONFIG_MUSICA.volumen;
      audio.muted = !conSonido;
      setSilenciado(!conSonido);

      if (conSonido) {
        try {
          await audio.play();
          setReproduciendo(true);
        } catch (error) {
          console.warn(
            "No fue posible reproducir el audio:",
            error
          );
          setReproduciendo(false);
        }
      } else {
        audio.pause();
        audio.currentTime = 0;
        setReproduciendo(false);
      }
    }

    setMostrarModal(false);
    onContinuar?.();
  };

  // ==========================================
  // REPRODUCIR / PAUSAR
  // ==========================================

  const alternarReproduccion = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        audio.muted = false;
        setSilenciado(false);
        await audio.play();
        setReproduciendo(true);
      } catch (error) {
        console.warn(
          "No fue posible reproducir el audio:",
          error
        );
      }
    } else {
      audio.pause();
      setReproduciendo(false);
    }
  };

  // ==========================================
  // SILENCIAR / ACTIVAR SONIDO
  // ==========================================

  const alternarSilencio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    const nuevoEstado = !audio.muted;
    audio.muted = nuevoEstado;
    setSilenciado(nuevoEstado);
  };

  return (
    <>
      {/* AUDIO INDEPENDIENTE */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={CONFIG_MUSICA.cancion}
      />

      {/* ======================================
          MODAL DE BIENVENIDA
      ====================================== */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="
              fixed inset-0
              z-[9999]
              flex items-center justify-center
              overflow-y-auto
              bg-[#E8DCCB]/95
              px-5 py-8
              backdrop-blur-2xl
            "
          >
            {/* TARJETA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                my-auto
                w-full max-w-[400px]
                overflow-hidden
                border border-[#C5A46D]/45
                bg-[#F8F5EF]
                px-7 py-10
                text-center
                shadow-[0_25px_80px_rgba(85,72,62,0.18)]
                sm:px-10
              "
            >
              {/* MARCO INTERIOR */}
              <div
                className="
                  pointer-events-none
                  absolute inset-2
                  border border-[#C5A46D]/20
                "
              />

              {/* LÍNEA SUPERIOR */}
              <div
                className="
                  absolute left-1/2 top-0
                  h-[2px] w-32
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#C5A46D]
                  to-transparent
                "
              />

              <div className="relative z-10">
                {/* ICONO */}
                <div
                  className="
                    mx-auto
                    flex h-16 w-16
                    items-center justify-center
                    rounded-full
                    border border-[#C5A46D]/50
                    bg-[#E8DCCB]/55
                  "
                >
                  <Music2
                    size={25}
                    strokeWidth={1.3}
                    className="text-[#C5A46D]"
                  />
                </div>

                {/* SUBTÍTULO */}
                <p
                  className="
                    mt-7
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    text-[#9B825E]
                  "
                >
                  Bienvenidos
                </p>

                {/* TÍTULO */}
                <h2
                  className="
                    mt-4
                    font-serif
                    text-[1.8rem]
                    font-normal
                    leading-tight
                    text-[#55483E]
                    sm:text-[2rem]
                  "
                >
                  Una experiencia
                  <span
                    className="
                      mt-1 block
                      italic
                      text-[#A58A61]
                    "
                  >
                    acompañada de música
                  </span>
                </h2>

                {/* SEPARADOR */}
                <div
                  className="
                    mx-auto mt-6
                    h-px w-20
                    bg-[#C5A46D]/65
                  "
                />

                {/* DESCRIPCIÓN */}
                <p
                  className="
                    mx-auto mt-6
                    max-w-[280px]
                    text-sm
                    leading-7
                    text-[#55483E]/75
                  "
                >
                  Hemos preparado cada detalle con
                  mucho cariño. Elige cómo deseas
                  disfrutar nuestra invitación.
                </p>

                {/* BOTONES */}
                <div className="mt-9 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      iniciarExperiencia(true)
                    }
                    className="
                      group
                      flex w-full
                      items-center justify-center
                      gap-3
                      bg-[#55483E]
                      px-5 py-4
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-[#F8F5EF]
                      shadow-[0_10px_25px_rgba(85,72,62,0.16)]
                      transition-all duration-300
                      hover:bg-[#75624E]
                    "
                  >
                    <Volume2
                      size={17}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        group-hover:scale-110
                      "
                    />
                    Activar sonido
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      iniciarExperiencia(false)
                    }
                    className="
                      group
                      flex w-full
                      items-center justify-center
                      gap-3
                      border border-[#C5A46D]/60
                      bg-transparent
                      px-5 py-4
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-[#55483E]
                      transition-all duration-300
                      hover:bg-[#E8DCCB]/55
                    "
                  >
                    <VolumeX
                      size={17}
                      strokeWidth={1.5}
                    />
                    Continuar en silencio
                  </button>
                </div>

                {/* NOMBRES */}
                <p
                  className="
                    mt-8
                    font-serif
                    text-sm
                    italic
                    tracking-wide
                    text-[#A58A61]
                  "
                >
                  {CONFIG_MUSICA.nombres}
                </p>
              </div>

              {/* LÍNEA INFERIOR */}
              <div
                className="
                  absolute bottom-0 left-1/2
                  h-[2px] w-32
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#C5A46D]
                  to-transparent
                "
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================
          CONTROLES FLOTANTES
      ====================================== */}
      <AnimatePresence>
        {!mostrarModal && (
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -20,
            }}
            transition={{ duration: 0.7 }}
            className="
              fixed
              left-5 top-5
              z-[100]
              flex items-center
              gap-2
              sm:left-8 sm:top-8
            "
          >
            {/* PLAY / PAUSA */}
            <button
              type="button"
              onClick={alternarReproduccion}
              aria-label={
                reproduciendo
                  ? "Pausar música"
                  : "Reproducir música"
              }
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-[#C5A46D]/60
                bg-[#F8F5EF]/95
                text-[#55483E]
                shadow-lg
                backdrop-blur-md
                transition-all duration-300
                hover:bg-[#E8DCCB]
              "
            >
              {reproduciendo ? (
                <Pause size={17} strokeWidth={1.6} />
              ) : (
                <Play size={17} strokeWidth={1.6} />
              )}
            </button>

            {/* SILENCIAR / ACTIVAR */}
            <button
              type="button"
              onClick={alternarSilencio}
              aria-label={
                silenciado
                  ? "Activar sonido"
                  : "Silenciar música"
              }
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-[#C5A46D]/60
                bg-[#F8F5EF]/95
                text-[#55483E]
                shadow-lg
                backdrop-blur-md
                transition-all duration-300
                hover:bg-[#E8DCCB]
              "
            >
              {silenciado ? (
                <VolumeX
                  size={17}
                  strokeWidth={1.6}
                />
              ) : (
                <Volume2
                  size={17}
                  strokeWidth={1.6}
                />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
