// DireccionEvento.jsx

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, ArrowUpRight } from "lucide-react";

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

export default function DireccionEvento() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative isolate flex min-h-[720px] w-full items-center justify-center overflow-hidden bg-[#F8F5F0] px-5 py-24 sm:px-8 md:py-32"
    >
      {/* FONDO */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(145deg,#FBF9F5_0%,#F3EDE4_50%,#E9DED1_100%)]" />

      {/* LUCES */}
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-white/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#B89B5E]/10 blur-3xl" />

      {/* TEXTURA DE PAPEL */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* DECORACIÓN BOTÁNICA */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 bottom-0 h-64 w-52 text-[#A99886]/20 sm:h-80 sm:w-64"
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

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-0 h-64 w-52 rotate-180 text-[#A99886]/15 sm:h-80 sm:w-64"
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

      {/* TARJETA PRINCIPAL */}
      <motion.div
        className="relative w-full max-w-4xl border border-[#C7A46A]/35 bg-white/35 px-6 py-12 text-center shadow-[0_30px_90px_rgba(67,58,52,0.1)] backdrop-blur-sm sm:px-10 md:px-16 md:py-16"
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* MARCO INTERIOR */}
        <div className="pointer-events-none absolute inset-3 border border-[#B89B5E]/15 sm:inset-4" />

        {/* ENCABEZADO */}
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#9E8E7B] sm:text-[10px]">
            Nuestro gran día
          </p>

          <h2 className="mt-4 font-serif text-4xl font-normal text-[#433A34] sm:text-5xl md:text-6xl">
            ¿Cuándo?
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
          </div>
        </motion.div>

        {/* INFORMACIÓN */}
        <div className="relative z-10 mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {/* FECHA */}
          <motion.div
            className="flex flex-col items-center px-5 md:border-r md:border-[#C7A46A]/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C7A46A]/40 bg-[#F8F5F0]">
              <CalendarDays
                size={20}
                strokeWidth={1.4}
                className="text-[#B89B5E]"
              />
            </div>

            <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#9E8E7B]">
              Fecha
            </p>

            <p className="mt-3 font-serif text-xl text-[#433A34] sm:text-2xl">
              Domingo
            </p>

            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#6D5E52]">
              11 de junio
            </p>
          </motion.div>

          {/* AÑO */}
          <motion.div
            className="flex flex-col items-center px-5 md:border-r md:border-[#C7A46A]/25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#9E8E7B]">
              Año
            </p>

            <p className="mt-3 font-serif text-6xl font-normal leading-none tracking-[-0.05em] text-[#433A34] sm:text-7xl">
              2027
            </p>

            <span className="mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#C7A46A] to-transparent" />
          </motion.div>

          {/* HORA */}
          <motion.div
            className="flex flex-col items-center px-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C7A46A]/40 bg-[#F8F5F0]">
              <Clock3
                size={20}
                strokeWidth={1.4}
                className="text-[#B89B5E]"
              />
            </div>

            <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#9E8E7B]">
              Hora
            </p>

            <p className="mt-3 font-serif text-2xl text-[#433A34] sm:text-3xl">
              4:30
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#6D5E52]">
              p. m.
            </p>
          </motion.div>
        </div>

        {/* UBICACIÓN */}
        <motion.div
          className="relative z-10 mt-12 border-t border-[#C7A46A]/25 pt-9"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <MapPin
            size={20}
            strokeWidth={1.4}
            className="mx-auto text-[#B89B5E]"
          />

          <p className="mt-4 text-[9px] uppercase tracking-[0.4em] text-[#9E8E7B]">
            Ubicación
          </p>

          <p className="mt-3 font-serif text-xl text-[#433A34] sm:text-2xl">
            Lugar de la celebración
          </p>

          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#6D5E52]">
            Consulta la ubicación y obtén indicaciones para llegar.
          </p>

          <a
            href="https://maps.app.goo.gl/TsSDUBKAractwi8F8"
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto mt-7 inline-flex items-center justify-center gap-3 border border-[#8F7D68] bg-[#8F7D68] px-7 py-3.5 text-[9px] uppercase tracking-[0.28em] text-white shadow-[0_10px_30px_rgba(109,94,82,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-[#756453]"
          >
            Ver ubicación

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}