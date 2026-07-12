// Regalos.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  Copy,
  Check,
  X,
  Landmark,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const DATOS_BANCARIOS = {
  banco: "Santander",
  titular: "Juan Pérez",
  cuenta: "1234567890123456",
  clabe: "123456789012345678",
};

export default function Regalos() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState("");

  const copiarTexto = async (texto, tipo) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(tipo);

      window.setTimeout(() => {
        setCopiado("");
      }, 2000);
    } catch (error) {
      console.error("No fue posible copiar:", error);
    }
  };

  return (
    <>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
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

        {/* ADORNO BOTÁNICO */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-16 h-72 w-60 text-[#9E8E7B]/15 sm:h-96 sm:w-80"
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
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C7A46A]/40 bg-white/35">
              <Gift
                size={22}
                strokeWidth={1.3}
                className="text-[#B89B5E]"
              />
            </div>

            <p className="mt-6 text-[9px] uppercase tracking-[0.5em] text-[#9E8E7B] sm:text-[10px]">
              Un detalle para nuestro futuro
            </p>

            <h2 className="mt-4 font-serif text-4xl font-normal text-[#433A34] sm:text-5xl md:text-6xl">
              Mesa de regalos
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />

              <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />

              <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
            </div>

            <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#6D5E52] sm:text-xl">
              Tu presencia es nuestro mejor regalo, pero si deseas tener un
              detalle con nosotros, te compartimos esta opción.
            </p>
          </motion.div>

          {/* TARJETA PRINCIPAL */}
          <motion.div
            className="relative mx-auto mt-14 grid w-full max-w-5xl grid-cols-1 overflow-hidden border border-[#C7A46A]/30 bg-white/30 shadow-[0_28px_80px_rgba(67,58,52,0.1)] backdrop-blur-sm md:grid-cols-[0.9fr_1.1fr]"
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

            {/* COLUMNA DECORATIVA */}
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden border-b border-[#C7A46A]/25 bg-[#EDE3D7] px-8 py-14 text-center md:min-h-[580px] md:border-b-0 md:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.75),_transparent_42%),linear-gradient(145deg,#EFE6DB_0%,#D9C9B8_100%)]" />

              <div className="relative z-10 flex max-w-sm flex-col items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#B89B5E]/35 bg-[#F8F5F0]/60 shadow-[0_18px_50px_rgba(67,58,52,0.1)] backdrop-blur-sm">
                  <Gift
                    size={38}
                    strokeWidth={1.1}
                    className="text-[#9E8E7B]"
                  />
                </div>

                <p className="mt-8 text-[9px] uppercase tracking-[0.42em] text-[#8F7D68]">
                  Gracias por acompañarnos
                </p>

                <p className="mt-5 font-serif text-3xl italic leading-snug text-[#433A34] sm:text-4xl">
                  El mejor obsequio será compartir este día contigo.
                </p>
              </div>
            </div>

            {/* INFORMACIÓN */}
            <div className="relative flex min-h-[390px] flex-col items-center justify-center px-8 py-16 text-center sm:px-12 md:min-h-[580px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C7A46A]/40 bg-[#F8F5F0]">
                <Heart
                  size={21}
                  strokeWidth={1.3}
                  className="text-[#B89B5E]"
                />
              </div>

              <p className="mt-7 text-[9px] uppercase tracking-[0.4em] text-[#9E8E7B]">
                Con cariño
              </p>

              <h3 className="mt-4 font-serif text-4xl font-normal text-[#433A34] sm:text-5xl">
                Lluvia de sobres
              </h3>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C7A46A]/55" />
                <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />
                <span className="h-px w-10 bg-[#C7A46A]/55" />
              </div>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#6D5E52] sm:text-base">
                Si deseas apoyarnos en esta nueva etapa, puedes hacerlo mediante
                una aportación a nuestra cuenta bancaria.
              </p>

              <button
                type="button"
                onClick={() => setMostrarModal(true)}
                className="group mt-10 inline-flex items-center justify-center gap-3 border border-[#8F7D68] bg-[#8F7D68] px-8 py-3.5 text-[9px] uppercase tracking-[0.28em] text-white shadow-[0_12px_30px_rgba(109,94,82,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#756453]"
              >
                Ver datos bancarios

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* MODAL DATOS BANCARIOS */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#433A34]/55 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setMostrarModal(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="datos-bancarios-title"
              className="relative my-auto w-full max-w-lg overflow-hidden border border-[#C7A46A]/40 bg-[#F9F6F0] shadow-[0_35px_100px_rgba(0,0,0,0.3)]"
              initial={{
                opacity: 0,
                y: 35,
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
                scale: 0.96,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* FONDO DEL MODAL */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,#FBF9F5_0%,#F3ECE3_100%)]" />

              {/* TEXTURA */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
                }}
              />

              {/* MARCO */}
              <div className="pointer-events-none absolute inset-3 z-10 border border-[#B89B5E]/18" />

              {/* CERRAR */}
              <button
                type="button"
                onClick={() => setMostrarModal(false)}
                aria-label="Cerrar datos bancarios"
                className="absolute right-5 top-5 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-[#C7A46A]/30 bg-[#F8F5F0]/80 text-[#8F7D68] backdrop-blur-sm transition hover:border-[#8F7D68] hover:bg-[#8F7D68] hover:text-white"
              >
                <X size={17} strokeWidth={1.5} />
              </button>

              <div className="relative z-20 px-7 py-10 text-center sm:px-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C7A46A]/40 bg-[#F8F5F0]">
                  <Landmark
                    size={21}
                    strokeWidth={1.3}
                    className="text-[#B89B5E]"
                  />
                </div>

                <p className="mt-6 text-[9px] uppercase tracking-[0.45em] text-[#9E8E7B]">
                  Lluvia de sobres
                </p>

                <h2
                  id="datos-bancarios-title"
                  className="mt-4 font-serif text-4xl font-normal text-[#433A34]"
                >
                  Datos bancarios
                </h2>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <span className="h-px w-10 bg-[#C7A46A]/60" />
                  <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />
                  <span className="h-px w-10 bg-[#C7A46A]/60" />
                </div>

                {/* TARJETA BANCARIA */}
                <div className="relative mt-9 overflow-hidden border border-[#C7A46A]/35 bg-[#8F7D68] px-6 py-7 text-left text-white shadow-[0_20px_55px_rgba(67,58,52,0.22)]">
                  <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/10" />
                  <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full border border-white/10" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.35em] text-white/65">
                          Banco
                        </p>

                        <p className="mt-2 font-serif text-2xl">
                          {DATOS_BANCARIOS.banco}
                        </p>
                      </div>

                      <Landmark
                        size={23}
                        strokeWidth={1.2}
                        className="text-[#E7D7B1]"
                      />
                    </div>

                    <div className="mt-8">
                      <p className="text-[9px] uppercase tracking-[0.32em] text-white/60">
                        Titular
                      </p>

                      <p className="mt-2 text-sm uppercase tracking-[0.18em]">
                        {DATOS_BANCARIOS.titular}
                      </p>
                    </div>

                    <div className="mt-7 border-t border-white/15 pt-6">
                      <p className="text-[9px] uppercase tracking-[0.32em] text-white/60">
                        Número de cuenta
                      </p>

                      <div className="mt-3 flex items-center justify-between gap-4">
                        <p className="break-all font-mono text-base tracking-[0.15em] sm:text-lg">
                          {DATOS_BANCARIOS.cuenta}
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            copiarTexto(DATOS_BANCARIOS.cuenta, "cuenta")
                          }
                          aria-label="Copiar número de cuenta"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
                        >
                          {copiado === "cuenta" ? (
                            <Check size={17} strokeWidth={1.7} />
                          ) : (
                            <Copy size={17} strokeWidth={1.5} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-[9px] uppercase tracking-[0.32em] text-white/60">
                        CLABE
                      </p>

                      <div className="mt-3 flex items-center justify-between gap-4">
                        <p className="break-all font-mono text-sm tracking-[0.12em] sm:text-base">
                          {DATOS_BANCARIOS.clabe}
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            copiarTexto(DATOS_BANCARIOS.clabe, "clabe")
                          }
                          aria-label="Copiar CLABE"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
                        >
                          {copiado === "clabe" ? (
                            <Check size={17} strokeWidth={1.7} />
                          ) : (
                            <Copy size={17} strokeWidth={1.5} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {copiado && (
                    <motion.div
                      key={copiado}
                      className="mx-auto mt-5 flex w-fit items-center gap-2 text-sm text-[#6D5E52]"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <Check
                        size={15}
                        strokeWidth={1.6}
                        className="text-[#B89B5E]"
                      />

                      {copiado === "cuenta"
                        ? "Número de cuenta copiado"
                        : "CLABE copiada"}
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="mx-auto mt-7 max-w-sm font-serif text-base italic leading-7 text-[#6D5E52]">
                  Gracias por ser parte de esta nueva etapa de nuestras vidas.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}