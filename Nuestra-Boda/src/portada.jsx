import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Music2,
  Volume2,
  VolumeX,
} from "lucide-react";
import Countdown from "./componentes-encabezado/encabeza-cuenta";

export default function Portada() {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const iniciarExperiencia = async (conSonido) => {
    const audio = audioRef.current;

    if (audio) {
      audio.muted = !conSonido;
      audio.volume = 0.45;

      try {
        await audio.play();
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
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
      </audio>

      {/* IMAGEN PRINCIPAL */}
      <motion.img
        src="/portada.png"
        alt="María y Jonathan"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_40%]
        "
        initial={{
          opacity: 0,
          scale: 1.08,
        }}
        animate={
          mostrarContenido
            ? {
                opacity: 1,
                scale: 1,
              }
            : {
                opacity: 0,
                scale: 1.08,
              }
        }
        transition={{
          opacity: {
            duration: 1.3,
          },
          scale: {
            duration: 8,
            ease: "easeOut",
          },
        }}
      />

      {/* OSCURECIMIENTO GENERAL */}
      <div
        className="
          absolute
          inset-0
          bg-black/20
        "
      />

      {/* DEGRADADO SUPERIOR */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/45
          via-transparent
          to-transparent
        "
      />

      {/* DEGRADADO INFERIOR */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/20
          to-transparent
        "
      />

      {/* OSCURECIMIENTO LATERAL PARA COMPUTADORA */}
      <div
        className="
          absolute
          inset-0
          hidden
          bg-gradient-to-r
          from-black/35
          via-transparent
          to-black/15
          md:block
        "
      />

      {/* MARCOS */}
      <div
        className="
          pointer-events-none
          absolute
          inset-3
          z-20
          border
          border-white/30
          sm:inset-5
          md:inset-7
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[18px]
          z-20
          border
          border-white/10
          sm:inset-7
          md:inset-9
        "
      />

      {/* CONTENIDO SOBRE LA IMAGEN */}
      <motion.div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          flex-col
          items-center
          justify-end
          px-6
          pb-10
          pt-28
          text-center
          sm:px-8
          sm:pb-14
          md:justify-center
          md:pb-10
          lg:px-12
        "
        initial={{
          opacity: 0,
        }}
        animate={
          mostrarContenido
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 1.2,
          delay: 0.2,
        }}
      >
        <div
          className="
            flex
            w-full
            max-w-3xl
            flex-col
            items-center
          "
        >


          {/* NOMBRES */}
          <motion.h1
            className="
              mt-6
              font-serif
              text-[3.8rem]
              font-normal
              leading-[0.8]
              tracking-[-0.055em]
              text-white
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
              sm:text-[5rem]
              md:mt-8
              md:text-[6rem]
              lg:text-[7.4rem]
            "
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 1.1,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            María

            <span
              className="
                my-2
                block
                font-cursiveDancing
                text-[2.8rem]
                font-normal
                leading-none
                text-[#E6C98D]
                drop-shadow-md
                sm:text-[3.8rem]
                md:my-3
                md:text-[4.4rem]
              "
            >
              &
            </span>

            Jonathan
          </motion.h1>


          {/* CUENTA REGRESIVA */}
          <motion.div
            className="
              mt-7
              w-full
              max-w-[620px]
              rounded-[24px]
              border
              border-white/25
              bg-black/20
              px-3
              py-4
              shadow-[0_18px_55px_rgba(0,0,0,0.22)]
              backdrop-blur-md
              sm:mt-9
              sm:px-6
              sm:py-5
            "
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.97,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <p
              className="
                mb-4
                text-[8px]
                uppercase
                tracking-[0.45em]
                text-white/75
                sm:text-[9px]
              "
            >
              Faltan
            </p>

            <Countdown targetDate="2027-06-11T00:00:00" />
          </motion.div>

          {/* BOTÓN BAJAR */}
          <motion.button
            type="button"
            onClick={bajarContenido}
            aria-label="Continuar hacia la invitación"
            className="
              mt-6
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/50
              bg-black/10
              text-white
              backdrop-blur-sm
              transition
              duration-300
              hover:border-[#E6C98D]
              hover:bg-[#E6C98D]
              hover:text-[#433A34]
              sm:mt-8
            "
            initial={{
              opacity: 0,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: [0, 6, 0],
                  }
                : {
                    opacity: 0,
                  }
            }
            transition={{
              opacity: {
                duration: 0.8,
                delay: 1.2,
              },
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
      </motion.div>

      {/* INDICADOR DE MÚSICA */}
      {!mostrarModal && (
        <motion.div
          className="
            absolute
            left-7
            top-7
            z-30
            flex
            items-center
            gap-3
            md:left-12
            md:top-12
          "
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-black/15
              text-white
              shadow-md
              backdrop-blur-md
            "
          >
            <Music2 size={16} strokeWidth={1.5} />
          </div>

          <p
            className="
              hidden
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white
              drop-shadow-md
              sm:block
            "
          >
            Nuestra canción
          </p>
        </motion.div>
      )}

      {/* MODAL DE MÚSICA */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/55
              px-5
              backdrop-blur-[10px]
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <motion.div
              className="
                relative
                w-full
                max-w-[390px]
                overflow-hidden
                border
                border-[#C7A46A]/40
                bg-[#F8F5F0]
                px-7
                py-9
                text-center
                shadow-[0_30px_100px_rgba(0,0,0,0.4)]
                sm:px-9
              "
              initial={{
                opacity: 0,
                y: 28,
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
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  border
                  border-[#B89B5E]/15
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-px
                  w-32
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#B89B5E]
                  to-transparent
                "
              />

              <div className="relative">
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B89B5E]/45
                    bg-[#F3EEE6]
                    shadow-sm
                  "
                >
                  <Music2
                    size={21}
                    strokeWidth={1.4}
                    className="text-[#B89B5E]"
                  />
                </div>

                <p
                  className="
                    mt-6
                    text-[9px]
                    uppercase
                    tracking-[0.45em]
                    text-[#9E8E7B]
                  "
                >
                  Bienvenidos
                </p>

                <h2
                  className="
                    mt-3
                    font-serif
                    text-[1.7rem]
                    font-normal
                    leading-tight
                    text-[#3F352E]
                  "
                >
                  Una experiencia

                  <span
                    className="
                      block
                      italic
                      text-[#8F7D68]
                    "
                  >
                    acompañada de música
                  </span>
                </h2>

                <div
                  className="
                    mx-auto
                    mt-5
                    h-px
                    w-16
                    bg-[#C7A46A]/60
                  "
                />

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-[270px]
                    text-sm
                    leading-6
                    text-[#6D5E52]
                  "
                >
                  Elige cómo deseas disfrutar esta invitación.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => iniciarExperiencia(true)}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      bg-[#8F7D68]
                      px-5
                      py-3.5
                      text-[10px]
                      uppercase
                      tracking-[0.24em]
                      text-white
                      shadow-[0_10px_25px_rgba(109,94,82,0.18)]
                      transition
                      duration-300
                      hover:bg-[#756453]
                    "
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
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      border
                      border-[#B8A999]/70
                      px-5
                      py-3.5
                      text-[10px]
                      uppercase
                      tracking-[0.24em]
                      text-[#6D5E52]
                      transition
                      duration-300
                      hover:bg-[#EFE6DA]
                    "
                  >
                    <VolumeX
                      size={15}
                      strokeWidth={1.5}
                      className="transition group-hover:scale-110"
                    />

                    Continuar en silencio
                  </button>
                </div>

                <p
                  className="
                    mt-6
                    font-serif
                    text-xs
                    italic
                    text-[#9E8E7B]
                  "
                >
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