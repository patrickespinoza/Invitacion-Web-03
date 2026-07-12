// Vestimenta.jsx

import React from "react";
import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";

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

export default function Vestimenta() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative isolate overflow-hidden bg-[#F8F5F0] px-5 py-24 sm:px-8 md:py-32"
    >
      {/* FONDO */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(145deg,#FBF9F5_0%,#F3ECE3_50%,#E9DED1_100%)]" />

      {/* TEXTURA DE PAPEL */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* LUCES SUAVES */}
      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[460px] w-[460px] rounded-full bg-white/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-44 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#B89B5E]/10 blur-3xl" />

      {/* DECORACIÓN BOTÁNICA */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-14 h-72 w-60 text-[#9E8E7B]/15 sm:h-96 sm:w-80"
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M28 310C73 242 96 177 113 97C121 59 137 30 164 8"
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <path
          d="M96 176C67 159 43 167 25 194M107 133C81 112 58 116 39 140M117 92C98 70 81 65 60 74M86 216C114 208 135 219 149 244M108 146C135 144 153 157 165 180M128 67C149 69 164 81 174 101"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* ENCABEZADO */}
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#9E8E7B] sm:text-[10px]">
            Detalles de la celebración
          </p>

          <h2 className="mt-4 font-serif text-4xl font-normal text-[#433A34] sm:text-5xl md:text-6xl">
            Código de vestimenta
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
          </div>

          <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#6D5E52] sm:text-xl">
            Nos encantará verte elegante y acorde a la ocasión.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <motion.div
          className="relative mx-auto mt-14 grid w-full max-w-5xl grid-cols-1 overflow-hidden border border-[#C7A46A]/30 bg-white/30 shadow-[0_28px_80px_rgba(67,58,52,0.1)] backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr]"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* MARCO INTERIOR */}
          <div className="pointer-events-none absolute inset-3 z-20 border border-[#B89B5E]/15" />

          {/* IMAGEN DE VESTIMENTA */}
          <motion.div
            className="relative min-h-[390px] overflow-hidden border-b border-[#C7A46A]/25 bg-[#F5EFE7] md:min-h-[620px] md:border-b-0 md:border-r"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src="/dresscode.png"
              alt="Código de vestimenta formal"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Velo sutil para integrar la imagen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#433A34]/5 via-transparent to-white/5" />
          </motion.div>

          {/* SOLO ADULTOS */}
          <motion.div
            className="relative flex min-h-[390px] flex-col items-center justify-center px-8 py-16 text-center sm:px-12 md:min-h-[620px]"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C7A46A]/40 bg-[#F8F5F0]">
              <UsersRound
                size={22}
                strokeWidth={1.3}
                className="text-[#B89B5E]"
              />
            </div>

            <p className="mt-7 text-[9px] uppercase tracking-[0.4em] text-[#9E8E7B]">
              Celebración
            </p>

            <h3 className="mt-4 font-serif text-4xl font-normal text-[#433A34] sm:text-5xl">
              Solo adultos
            </h3>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C7A46A]/55" />
              <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />
              <span className="h-px w-10 bg-[#C7A46A]/55" />
            </div>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#6D5E52] sm:text-base">
              Deseamos que disfrutes esta celebración con total tranquilidad.
              Por ello, el evento ha sido planeado exclusivamente para adultos.
            </p>

            <p className="mt-8 font-serif text-lg italic text-[#8F7D68]">
              Gracias por tu comprensión.
            </p>
          </motion.div>
        </motion.div>

        {/* CIERRE */}
        <motion.p
          className="mx-auto mt-10 max-w-xl text-center font-serif text-lg italic text-[#7B6A5C]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Gracias por acompañarnos con tu mejor estilo.
        </motion.p>
      </div>
    </motion.section>
  );
}