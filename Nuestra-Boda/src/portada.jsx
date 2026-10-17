
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Countdown from "./componentes-encabezado/encabeza-cuenta";

export default function Portada({
  mostrarContenido = false,
}) {
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
            <ChevronDown
              size={18}
              strokeWidth={1.5}
            />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
