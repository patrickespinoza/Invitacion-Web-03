// Frase.jsx
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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

export default function Frase() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative isolate flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-[#F4EEE6] px-6 py-24 text-center sm:px-10 md:min-h-[620px] md:py-32"
    >
      {/* FONDO */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(145deg,#FBF9F5_0%,#F3EDE4_48%,#E9DED1_100%)]" />

      {/* LUCES SUAVES */}
      <div className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-white/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-44 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#B89B5E]/10 blur-3xl" />

      {/* TEXTURA DE PAPEL */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* MARCO EXTERIOR */}
      <div className="pointer-events-none absolute inset-4 border border-[#C7A46A]/25 sm:inset-7 md:inset-10" />

      {/* MARCO INTERIOR */}
      <div className="pointer-events-none absolute inset-[22px] border border-white/60 sm:inset-9 md:inset-12" />

      {/* BOTÁNICO IZQUIERDO */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-5 -left-8 h-52 w-44 text-[#A99886]/25 sm:h-64 sm:w-56 md:h-80 md:w-72"
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M31 310C76 241 95 175 111 97C118 61 132 32 159 8"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <path
          d="M95 173C64 159 42 167 25 194M106 130C79 112 57 116 39 139M116 91C96 70 80 65 59 74M85 212C113 207 134 218 146 242M106 144C133 143 151 155 163 177M125 67C146 69 162 81 171 99"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      {/* BOTÁNICO DERECHO */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-6 h-52 w-44 rotate-180 text-[#A99886]/20 sm:h-64 sm:w-56 md:h-80 md:w-72"
        viewBox="0 0 250 320"
        fill="none"
      >
        <path
          d="M31 310C76 241 95 175 111 97C118 61 132 32 159 8"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <path
          d="M95 173C64 159 42 167 25 194M106 130C79 112 57 116 39 139M116 91C96 70 80 65 59 74M85 212C113 207 134 218 146 242M106 144C133 143 151 155 163 177M125 67C146 69 162 81 171 99"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        {/* ICONO */}
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C7A46A]/40 bg-white/30 shadow-[0_12px_35px_rgba(67,58,52,0.08)] backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Quote
            size={21}
            strokeWidth={1.3}
            className="text-[#B89B5E]"
          />
        </motion.div>

        {/* ETIQUETA */}
        <motion.p
          className="mt-7 text-[9px] uppercase tracking-[0.5em] text-[#9E8E7B] sm:text-[10px]"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Una historia de amor
        </motion.p>

        {/* FRASE */}
        <motion.blockquote
          className="mt-8 max-w-3xl font-serif text-[1.75rem] font-normal italic leading-[1.45] text-[#433A34] sm:text-[2.15rem] md:text-[2.7rem] lg:text-[3rem]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          “El amor no mira con los ojos, sino con la mente, y por eso
          al alado Cupido lo pintan ciego.”
        </motion.blockquote>

        {/* DIVISOR */}
        <motion.div
          className="my-9 flex w-full max-w-[230px] items-center justify-center gap-4"
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.65 }}
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C7A46A]" />

          <span className="h-1.5 w-1.5 rotate-45 border border-[#B89B5E]" />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C7A46A]" />
        </motion.div>

        {/* AUTOR */}
        <motion.p
          className="text-[10px] uppercase tracking-[0.38em] text-[#7B6A5C] sm:text-xs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          William Shakespeare
        </motion.p>
      </div>
    </motion.section>
  );
}