// NuestraHistoria.jsx

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Carousel from "./carrusel";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function NuestraHistoria() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative isolate w-full overflow-hidden bg-[#F8F5F0] px-5 py-24 sm:px-8 md:py-32"
    >
      {/* FONDO */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#F9F6F0_0%,#F1E9DF_100%)]" />

      {/* LUZ SUAVE */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-white/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[450px] w-[450px] rounded-full bg-[#B89B5E]/10 blur-3xl" />

      {/* TEXTURA DE PAPEL */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* DECORACIÓN BOTÁNICA IZQUIERDA */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -left-12 h-64 w-52 text-[#A99886]/18 sm:h-80 sm:w-64"
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <path
          d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* ENCABEZADO */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C7A46A]/40 bg-white/35"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Heart
              size={18}
              strokeWidth={1.35}
              className="text-[#B89B5E]"
            />
          </motion.div>

          <motion.p
            className="mt-6 text-[9px] uppercase tracking-[0.5em] text-[#9E8E7B] sm:text-[10px]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Un recorrido por nuestros recuerdos
          </motion.p>

          <motion.h2
            className="mt-4 font-serif text-4xl font-normal text-[#433A34] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Nuestra historia
          </motion.h2>

          <motion.div
            className="mt-6 flex items-center gap-4"
            initial={{ opacity: 0, scaleX: 0.7 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#6D5E52] sm:text-xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Cada imagen guarda un instante, una sonrisa y un recuerdo que nos
            trajo hasta aquí.
          </motion.p>
        </div>

        {/* CONTENEDOR DEL CARRUSEL */}
        <motion.div
          className="relative mx-auto mt-14 w-full max-w-4xl"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* SOMBRA */}
          <div className="absolute inset-x-10 bottom-[-18px] h-16 rounded-full bg-[#6D5E52]/12 blur-2xl" />

          {/* MARCO PRINCIPAL */}
          <div className="relative border border-[#C7A46A]/35 bg-white/35 p-3 shadow-[0_28px_85px_rgba(67,58,52,0.12)] backdrop-blur-sm sm:p-5 md:p-6">
            {/* MARCO INTERIOR */}
            <div className="pointer-events-none absolute inset-2 border border-[#B89B5E]/15 sm:inset-3" />

            {/* ESQUINAS DECORATIVAS */}
            <span className="pointer-events-none absolute left-2 top-2 h-7 w-7 border-l border-t border-[#B89B5E]/55 sm:left-3 sm:top-3" />
            <span className="pointer-events-none absolute right-2 top-2 h-7 w-7 border-r border-t border-[#B89B5E]/55 sm:right-3 sm:top-3" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-7 w-7 border-b border-l border-[#B89B5E]/55 sm:bottom-3 sm:left-3" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-7 w-7 border-b border-r border-[#B89B5E]/55 sm:bottom-3 sm:right-3" />

            <div className="relative z-10 overflow-hidden bg-[#EEE6DC]">
              <Carousel />
            </div>
          </div>
        </motion.div>

        {/* TEXTO FINAL */}
        <motion.div
          className="mx-auto mt-12 flex max-w-xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C7A46A] to-transparent" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.38em] text-[#9E8E7B]">
            Y lo mejor de nuestra historia
          </p>

          <p className="mt-3 font-serif text-xl italic text-[#433A34] sm:text-2xl">
            apenas está por comenzar
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}