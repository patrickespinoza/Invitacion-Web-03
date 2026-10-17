
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

const padres = [
  {
    titulo: "Padres de la novia",
    nombres: ["Alejandro Mendoza", "Patricia Salazar"],
  },
  {
    titulo: "Padres del novio",
    nombres: ["Fernando Castillo", "Gabriela Navarro"],
  },
];

export default function Padres() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="relative isolate w-full overflow-hidden bg-[#F8F5F0] px-5 py-24 sm:px-8 md:py-32"
    >
      {/* FONDO DEGRADADO */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(145deg,#FBF9F5_0%,#F3EDE4_55%,#E9DED1_100%)]" />

      {/* LUCES DECORATIVAS */}
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[400px] w-[400px] rounded-full bg-white/70 blur-3xl" />

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

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ENCABEZADO */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#9E8E7B]">
            Con amor y gratitud
          </p>

          <h2 className="mt-5 font-serif text-4xl font-normal text-[#433A34] sm:text-5xl md:text-6xl">
            Nuestros Padres
          </h2>

          {/* DIVISOR DORADO */}
          <div className="mt-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />

            <Heart
              size={16}
              strokeWidth={1.2}
              className="text-[#B89B5E]"
            />

            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
          </div>

          <p className="mx-auto mt-8 max-w-xl font-serif text-lg italic leading-relaxed text-[#6D5E52] sm:text-xl">
            Con la bendición y el amor de quienes nos han
            acompañado en cada paso de nuestras vidas.
          </p>
        </motion.div>

        {/* TARJETAS DE LOS PADRES */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {padres.map((familia, index) => (
            <motion.div
              key={familia.titulo}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative border border-[#C7A46A]/35 bg-white/35 px-6 py-14 text-center shadow-[0_25px_70px_rgba(67,58,52,0.07)] backdrop-blur-sm sm:px-10 sm:py-16"
            >
              {/* MARCO INTERIOR */}
              <div className="pointer-events-none absolute inset-3 border border-[#B89B5E]/15" />

              {/* ORNAMENTO SUPERIOR */}
              <div className="relative mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#C7A46A]/40 bg-[#F8F5F0]">
                <Heart
                  size={19}
                  strokeWidth={1.2}
                  className="text-[#B89B5E]"
                />
              </div>

              {/* TÍTULO */}
              <p className="relative text-[10px] uppercase tracking-[0.32em] text-[#9E8E7B]">
                {familia.titulo}
              </p>

              {/* NOMBRES */}
              <div className="relative mt-9 space-y-4">
                <h3 className="font-serif text-2xl font-normal text-[#433A34] sm:text-3xl">
                  {familia.nombres[0]}
                </h3>

                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#C7A46A]/40" />

                  <span className="font-serif text-lg italic text-[#B89B5E]">
                    y
                  </span>

                  <span className="h-px w-8 bg-[#C7A46A]/40" />
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#433A34] sm:text-3xl">
                  {familia.nombres[1]}
                </h3>
              </div>

              {/* ORNAMENTO INFERIOR */}
              <div className="relative mt-10 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#C7A46A]/50" />
                <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />
                <span className="h-px w-10 bg-[#C7A46A]/50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FRASE FINAL */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mx-auto mt-14 max-w-2xl text-center font-serif text-lg italic leading-relaxed text-[#6D5E52]"
        >
          Gracias por enseñarnos que el amor es el comienzo
          de todas las cosas bonitas.
        </motion.p>
      </div>
    </motion.section>
  );
}
