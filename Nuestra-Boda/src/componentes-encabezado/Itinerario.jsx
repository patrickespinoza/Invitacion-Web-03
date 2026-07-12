import React from "react";
import { motion } from "framer-motion";
import {
  Gem,
  Wine,
  UtensilsCrossed,
  Music2,
} from "lucide-react";

const ItinerarioPremium = () => {
  const events = [
    {
      time: "18:00",
      period: "HRS",
      title: "Ceremonia",
      description:
        "Ceremonia civil acompañados de nuestras familias y seres queridos.",
      icon: Gem,
    },
    {
      time: "19:30",
      period: "HRS",
      title: "Recepción",
      description:
        "Cóctel de bienvenida y un momento para compartir juntos.",
      icon: Wine,
    },
    {
      time: "21:00",
      period: "HRS",
      title: "Cena",
      description:
        "Banquete preparado especialmente para celebrar este gran día.",
      icon: UtensilsCrossed,
    },
    {
      time: "23:00",
      period: "HRS",
      title: "Fiesta",
      description:
        "Música, baile y una noche llena de recuerdos inolvidables.",
      icon: Music2,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#F8F5F0] px-5 py-24 sm:px-8 md:py-32">
      {/* FONDO */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#FBF9F5_0%,#F2EBE2_100%)]" />

      {/* TEXTURA DE PAPEL */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* LUCES */}
      <div className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[430px] w-[430px] rounded-full bg-white/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#B89B5E]/10 blur-3xl" />

      {/* BOTÁNICO IZQUIERDO */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-16 h-72 w-60 text-[#9E8E7B]/16 sm:h-96 sm:w-80"
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

      {/* BOTÁNICO DERECHO */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-10 h-72 w-60 rotate-180 text-[#9E8E7B]/12 sm:h-96 sm:w-80"
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

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* ENCABEZADO */}
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#9E8E7B] sm:text-[10px]">
            Programa de celebración
          </p>

          <h2 className="mt-4 font-serif text-4xl font-normal text-[#433A34] sm:text-5xl md:text-6xl">
            Itinerario
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
          </div>

          <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#6D5E52] sm:text-xl">
            Cada momento ha sido preparado para compartirlo contigo.
          </p>
        </motion.div>

        {/* PROGRAMA */}
        <div className="relative mx-auto mt-16 max-w-4xl border-y border-[#C7A46A]/30">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.article
                key={event.title}
                className={`relative grid grid-cols-[90px_1fr] gap-5 px-1 py-9 sm:grid-cols-[150px_1fr] sm:gap-10 sm:px-6 sm:py-12 md:grid-cols-[190px_1fr] ${
                  index !== events.length - 1
                    ? "border-b border-[#C7A46A]/25"
                    : ""
                }`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* HORA */}
                <div className="flex flex-col items-center justify-center border-r border-[#C7A46A]/25 pr-5 text-center sm:pr-10">
                  <span className="font-serif text-2xl leading-none text-[#433A34] sm:text-4xl md:text-5xl">
                    {event.time}
                  </span>

                  <span className="mt-3 text-[7px] uppercase tracking-[0.35em] text-[#9E8E7B] sm:text-[9px]">
                    {event.period}
                  </span>
                </div>

                {/* INFORMACIÓN */}
                <div className="flex items-center gap-4 sm:gap-7">
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#C7A46A]/35 bg-white/30 sm:flex">
                    <Icon
                      size={21}
                      strokeWidth={1.25}
                      className="text-[#B89B5E]"
                    />
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-3 sm:hidden">
                      <Icon
                        size={17}
                        strokeWidth={1.3}
                        className="text-[#B89B5E]"
                      />

                      <span className="h-px w-8 bg-[#C7A46A]/50" />
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-[#433A34] sm:text-3xl md:text-4xl">
                      {event.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#6D5E52] sm:text-base sm:leading-7">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* NÚMERO DECORATIVO */}
                <span className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 font-serif text-[5rem] leading-none text-[#B89B5E]/5 md:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.article>
            );
          })}
        </div>

        {/* CIERRE */}
        <motion.div
          className="mx-auto mt-14 flex max-w-xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C7A46A] to-transparent" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-[#9E8E7B]">
            Te esperamos
          </p>

          <p className="mt-3 font-serif text-xl italic text-[#433A34] sm:text-2xl">
            para celebrar juntos cada instante
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ItinerarioPremium;