import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music2,
  Volume2,
  VolumeX,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Countdown from "./componentes-encabezado/encabeza-cuenta";

export default function Portada() {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const iniciarExperiencia = async (conSonido) => {
    if (audioRef.current) {
      audioRef.current.muted = !conSonido;
      audioRef.current.volume = 0.45;

      try {
        await audioRef.current.play();
      } catch (error) {
        console.warn("No fue posible reproducir el audio:", error);
      }
    }

    setMostrarModal(false);
    setMostrarContenido(true);
  };

  const bajarContenido = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F8F5F0] text-[#433A34]">
      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
      </audio>

      {/* FONDO GENERAL */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#FBF9F5_0%,#F4EEE6_45%,#EDE3D7_100%)]" />

        {/* Luz suave */}
        <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-white/60 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-[460px] w-[460px] rounded-full bg-[#C7A46A]/10 blur-3xl" />

        {/* Textura sutil */}
        <div
          className="absolute inset-0 opacity-[0.055] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* MARCO EXTERIOR */}
      <div className="pointer-events-none absolute inset-3 z-20 border border-[#B89B5E]/25 sm:inset-5 md:inset-7" />

      <div className="pointer-events-none absolute inset-[18px] z-20 border border-white/60 sm:inset-7 md:inset-9" />

      {/* CONTENIDO PRINCIPAL */}
      <motion.div
        className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-[1.03fr_0.97fr]"
        initial={{ opacity: 0 }}
        animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        {/* FOTOGRAFÍA */}
        <motion.div
          className="relative order-1 min-h-[58vh] md:min-h-screen"
          initial={{ opacity: 0, scale: 1.035 }}
          animate={
            mostrarContenido
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.035 }
          }
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/prueba-03.jpg"
            alt="María y Jonathan"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />

          {/* Tratamiento editorial */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#433A34]/20 via-transparent to-white/5" />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F8F5F0]/10 md:to-[#F8F5F0]/35" />

          {/* Etiqueta superior */}
          <motion.div
            className="absolute left-7 top-7 flex items-center gap-3 md:left-12 md:top-12"
            initial={{ opacity: 0, x: -20 }}
            animate={mostrarContenido ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-md">
              <Music2 size={16} strokeWidth={1.5} />
            </div>

            <p className="text-[9px] uppercase tracking-[0.38em] text-white drop-shadow-md">
              Nuestra historia
            </p>
          </motion.div>

          {/* Monograma */}
          <motion.div
            className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:bottom-12"
            initial={{ opacity: 0, y: 25, scale: 0.9 }}
            animate={
              mostrarContenido
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 25, scale: 0.9 }
            }
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[#C7A46A]/70 bg-[#F8F5F0]/90 shadow-[0_14px_45px_rgba(67,58,52,0.2)] backdrop-blur-md md:h-24 md:w-24">
              <div className="absolute inset-[5px] rounded-full border border-[#C7A46A]/30" />

              <span className="font-serif text-2xl tracking-[0.08em] text-[#6D5E52] md:text-3xl">
                M<span className="mx-1 text-[#C7A46A]">&</span>J
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* INFORMACIÓN */}
        <div className="relative order-2 flex min-h-[64vh] items-center justify-center px-7 py-20 text-center md:min-h-screen md:px-12 lg:px-16 xl:px-20">
          {/* Adorno superior */}
          <motion.div
            className="absolute right-8 top-10 hidden text-[#B89B5E]/35 md:block"
            initial={{ opacity: 0 }}
            animate={mostrarContenido ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <svg
              width="135"
              height="170"
              viewBox="0 0 135 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M122 5C78 31 48 67 24 124M95 27C95 48 84 61 66 67M69 51C52 44 41 48 34 64M67 78C82 82 93 93 96 110M46 93C29 87 18 94 12 110M35 112C50 120 57 135 56 153"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          <div className="relative mx-auto flex w-full max-w-xl flex-col items-center">
            {/* Encabezado */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={mostrarContenido ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <span className="h-px w-8 bg-[#B89B5E]/60 sm:w-14" />

              <Sparkles
                size={13}
                strokeWidth={1.3}
                className="text-[#B89B5E]"
              />

              <span className="h-px w-8 bg-[#B89B5E]/60 sm:w-14" />
            </motion.div>

            <motion.p
              className="mt-5 text-[9px] uppercase tracking-[0.5em] text-[#8F7D68] sm:text-[10px]"
              initial={{ opacity: 0, y: 18 }}
              animate={mostrarContenido ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Con amor, te invitamos a celebrar
            </motion.p>

            {/* Nombres */}
            <motion.h1
              className="mt-9 font-serif text-[4.2rem] font-normal leading-[0.78] tracking-[-0.055em] text-[#3F352E] sm:text-[5.4rem] md:text-[5rem] lg:text-[6.2rem] xl:text-[7rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={mostrarContenido ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.15,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              María

              <span className="my-3 block font-cursiveDancing text-[3.2rem] font-normal leading-none text-[#B89B5E] sm:text-[4rem] lg:text-[4.7rem]">
                &
              </span>

              Jonathan
            </motion.h1>

            {/* Se casan */}
            <motion.div
              className="mt-10 flex w-full items-center justify-center gap-5"
              initial={{ opacity: 0, scaleX: 0.75 }}
              animate={
                mostrarContenido
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: 0, scaleX: 0.75 }
              }
              transition={{ duration: 1, delay: 0.75 }}
            >
              <span className="h-px max-w-[90px] flex-1 bg-gradient-to-r from-transparent to-[#B89B5E]" />

              <p className="text-[10px] uppercase tracking-[0.5em] text-[#6D5E52]">
                Nos casamos
              </p>

              <span className="h-px max-w-[90px] flex-1 bg-gradient-to-l from-transparent to-[#B89B5E]" />
            </motion.div>

            {/* Fecha */}
            <motion.div
              className="mt-7 flex items-center justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 18 }}
              animate={mostrarContenido ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.9 }}
            >
              <span className="font-serif text-lg tracking-[0.18em] text-[#433A34] sm:text-xl">
                11
              </span>

              <span className="h-7 w-px bg-[#C7A46A]/55" />

              <span className="font-serif text-lg uppercase tracking-[0.28em] text-[#433A34] sm:text-xl">
                Junio
              </span>

              <span className="h-7 w-px bg-[#C7A46A]/55" />

              <span className="font-serif text-lg tracking-[0.18em] text-[#433A34] sm:text-xl">
                2027
              </span>
            </motion.div>

            {/* Frase */}
            <motion.p
              className="mt-8 max-w-sm font-serif text-base italic leading-relaxed text-[#7B6A5C] sm:text-lg"
              initial={{ opacity: 0 }}
              animate={mostrarContenido ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              “Hay historias que Dios escribe con el corazón.”
            </motion.p>

            {/* Cuenta regresiva */}
            <motion.div
              className="mt-9 w-full rounded-[28px] border border-[#C7A46A]/25 bg-white/30 px-3 py-5 shadow-[0_18px_55px_rgba(67,58,52,0.08)] backdrop-blur-sm sm:px-6 md:mt-11"
              initial={{ opacity: 0, y: 25 }}
              animate={mostrarContenido ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <p className="mb-4 text-[9px] uppercase tracking-[0.42em] text-[#9E8E7B]">
                Faltan
              </p>

              <Countdown targetDate="2027-06-11T00:00:00" />
            </motion.div>

            {/* Botón bajar */}
            <motion.button
              type="button"
              onClick={bajarContenido}
              aria-label="Continuar hacia la invitación"
              className="mt-9 flex h-11 w-11 items-center justify-center rounded-full border border-[#B89B5E]/50 text-[#8F7D68] transition duration-300 hover:-translate-y-1 hover:border-[#B89B5E] hover:bg-[#B89B5E] hover:text-white"
              initial={{ opacity: 0 }}
              animate={
                mostrarContenido
                  ? {
                      opacity: 1,
                      y: [0, 5, 0],
                    }
                  : { opacity: 0 }
              }
              transition={{
                opacity: { duration: 0.8, delay: 1.25 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <ChevronDown size={18} strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* MODAL DE MÚSICA */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#433A34]/45 px-5 backdrop-blur-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="relative w-full max-w-[390px] overflow-hidden border border-[#C7A46A]/40 bg-[#F8F5F0] px-7 py-9 text-center shadow-[0_30px_100px_rgba(38,30,25,0.3)] sm:px-9"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Marco interior */}
              <div className="pointer-events-none absolute inset-2 border border-[#B89B5E]/15" />

              {/* Brillo superior */}
              <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B89B5E] to-transparent" />

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#B89B5E]/45 bg-[#F3EEE6] shadow-sm">
                  <Music2
                    size={21}
                    strokeWidth={1.4}
                    className="text-[#B89B5E]"
                  />
                </div>

                <p className="mt-6 text-[9px] uppercase tracking-[0.45em] text-[#9E8E7B]">
                  Bienvenidos
                </p>

                <h2 className="mt-3 font-serif text-[1.7rem] font-normal leading-tight text-[#3F352E]">
                  Una experiencia
                  <span className="block italic text-[#8F7D68]">
                    acompañada de música
                  </span>
                </h2>

                <div className="mx-auto mt-5 h-px w-16 bg-[#C7A46A]/60" />

                <p className="mx-auto mt-5 max-w-[270px] text-sm leading-6 text-[#6D5E52]">
                  Elige cómo deseas disfrutar esta invitación.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => iniciarExperiencia(true)}
                    className="group flex w-full items-center justify-center gap-3 bg-[#8F7D68] px-5 py-3.5 text-[10px] uppercase tracking-[0.24em] text-white shadow-[0_10px_25px_rgba(109,94,82,0.18)] transition duration-300 hover:bg-[#756453]"
                  >
                    <Volume2
                      size={15}
                      strokeWidth={1.5}
                      className="transition group-hover:scale-110"
                    />

                    Activar sonido
                  </button>

                  <button
                    type="button"
                    onClick={() => iniciarExperiencia(false)}
                    className="group flex w-full items-center justify-center gap-3 border border-[#B8A999]/70 px-5 py-3.5 text-[10px] uppercase tracking-[0.24em] text-[#6D5E52] transition duration-300 hover:bg-[#EFE6DA]"
                  >
                    <VolumeX
                      size={15}
                      strokeWidth={1.5}
                      className="transition group-hover:scale-110"
                    />

                    Continuar en silencio
                  </button>
                </div>

                <p className="mt-6 font-serif text-xs italic text-[#9E8E7B]">
                  María & Jonathan
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}