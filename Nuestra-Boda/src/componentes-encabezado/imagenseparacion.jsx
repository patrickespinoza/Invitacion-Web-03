// ImagenSeparacion.jsx

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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

export default function ImagenSeparacion() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative isolate w-full overflow-hidden bg-[#F8F5F0]"
    >
      {/* CONTENEDOR DE LA FOTOGRAFÍA */}
      <div className="relative min-h-[620px] w-full overflow-hidden sm:min-h-[720px] md:min-h-[820px]">
        {/* IMAGEN */}
        <motion.img
          src="/finalboda.webp"
          alt="María y Jonathan celebrando su boda"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* VELOS EDITORIALES */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#433A34]/65 via-[#433A34]/10 to-[#433A34]/15" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#433A34]/15 via-transparent to-[#433A34]/10" />

        {/* MARCO */}
        <div className="pointer-events-none absolute inset-5 z-10 border border-white/35 sm:inset-8 md:inset-10" />

        <div className="pointer-events-none absolute inset-7 z-10 border border-[#E7D7B1]/30 sm:inset-10 md:inset-12" />

        {/* PAPEL SUPERIOR */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 w-full overflow-hidden leading-none">
          <svg
            className="block h-[75px] w-full sm:h-[105px]"
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M0,0
                L1440,0
                L1440,48
                C1260,95 1110,30 930,65
                C750,105 590,35 410,72
                C245,108 120,45 0,82
                Z
              "
              fill="#F8F5F0"
            />
          </svg>
        </div>

        {/* CONTENIDO CENTRAL */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-28 text-center text-white sm:pb-36 md:pb-40"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/45 bg-white/10 backdrop-blur-md">
            <Heart size={20} strokeWidth={1.3} />
          </div>

          <p className="mt-7 text-[9px] uppercase tracking-[0.5em] text-white/80 sm:text-[10px]">
            Nuestro gran día
          </p>

          <h2 className="mt-4 font-serif text-4xl font-normal sm:text-5xl md:text-6xl lg:text-7xl">
            ¡Te esperamos!
          </h2>

          <div className="mt-7 flex items-center gap-4">
            <span className="h-px w-12 bg-white/55 sm:w-20" />

            <span className="h-2 w-2 rotate-45 border border-[#E7D7B1]" />

            <span className="h-px w-12 bg-white/55 sm:w-20" />
          </div>

          <p className="mt-7 max-w-xl font-serif text-lg italic leading-relaxed text-white/90 sm:text-xl md:text-2xl">
            Será un honor compartir contigo uno de los momentos más importantes
            de nuestra historia.
          </p>

          <p className="mt-8 text-[9px] uppercase tracking-[0.4em] text-[#E7D7B1] sm:text-[10px]">
            María & Jonathan
          </p>
        </motion.div>

        {/* PAPEL INFERIOR */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
          <svg
            className="block h-[95px] w-full sm:h-[135px]"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SOMBRA DEL PAPEL */}
            <path
              d="
                M0,86
                C165,34 305,125 475,75
                C650,23 800,127 970,70
                C1135,15 1280,114 1440,58
                L1440,160
                L0,160
                Z
              "
              fill="rgba(67,58,52,0.16)"
              transform="translate(0,-5)"
            />

            {/* PAPEL */}
            <path
              d="
                M0,86
                C165,34 305,125 475,75
                C650,23 800,127 970,70
                C1135,15 1280,114 1440,58
                L1440,160
                L0,160
                Z
              "
              fill="#F8F5F0"
            />

            {/* BORDE CHAMPAGNE */}
            <path
              d="
                M0,86
                C165,34 305,125 475,75
                C650,23 800,127 970,70
                C1135,15 1280,114 1440,58
              "
              fill="none"
              stroke="#C7A46A"
              strokeOpacity="0.42"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </motion.section>
  );
}