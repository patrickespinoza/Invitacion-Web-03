// Confirmacion.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronDown,
  HeartHandshake,
  LoaderCircle,
  MessageSquareText,
  Send,
  UserRound,
  UsersRound,
  X,
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

const API_URL =
  "https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec";

export default function Confirmacion() {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const seleccionarAsistencia = (opcion) => {
    setAsistencia(opcion);
    setError("");
  };

  const enviarConfirmacion = async () => {
    if (loading) return;

    if (!nombreInvitado.trim() || !asistencia) {
      setError("Escribe tu nombre y selecciona una opción de asistencia.");
      return;
    }

    if (invitados < 1) {
      setError("Selecciona un número válido de invitados.");
      return;
    }

    setError("");
    setEnviado(false);
    setLoading(true);

    const data = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados: asistencia === "Sí asistiré" ? invitados : 0,
      mensaje: mensajeInvitado.trim(),
    };

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setEnviado(true);
      setNombreInvitado("");
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados(1);

      window.setTimeout(() => {
        setEnviado(false);
      }, 4500);
    } catch (err) {
      console.error("Error al enviar la confirmación:", err);
      setError(
        "No fue posible enviar tu confirmación. Inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
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

      {/* LUCES */}
      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[460px] w-[460px] rounded-full bg-white/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-44 -right-32 -z-10 h-[430px] w-[430px] rounded-full bg-[#B89B5E]/10 blur-3xl" />

      {/* BOTÁNICO */}
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
            <HeartHandshake
              size={23}
              strokeWidth={1.25}
              className="text-[#B89B5E]"
            />
          </div>

          <p className="mt-6 text-[9px] uppercase tracking-[0.5em] text-[#9E8E7B] sm:text-[10px]">
            Nos encantará contar contigo
          </p>

          <h2 className="mt-4 font-serif text-4xl font-normal text-[#433A34] sm:text-5xl md:text-6xl">
            Confirma tu asistencia
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />

            <span className="h-2 w-2 rotate-45 border border-[#B89B5E]" />

            <span className="h-px w-12 bg-[#C7A46A]/60 sm:w-20" />
          </div>

          <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-[#6D5E52] sm:text-xl">
            Ayúdanos a preparar cada detalle confirmando tu asistencia.
          </p>
        </motion.div>

        {/* FORMULARIO */}
        <motion.div
          className="relative mx-auto mt-14 w-full max-w-3xl overflow-hidden border border-[#C7A46A]/35 bg-white/35 px-6 py-10 shadow-[0_28px_85px_rgba(67,58,52,0.1)] backdrop-blur-sm sm:px-10 sm:py-12 md:px-14"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* MARCO INTERIOR */}
          <div className="pointer-events-none absolute inset-3 border border-[#B89B5E]/15" />

          <div className="relative z-10">
            {/* NOMBRE */}
            <div>
              <label
                htmlFor="nombre-invitado"
                className="text-[9px] uppercase tracking-[0.38em] text-[#8F7D68]"
              >
                Nombre y apellido
              </label>

              <div className="relative mt-3">
                <UserRound
                  size={17}
                  strokeWidth={1.4}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B89B5E]"
                />

                <input
                  id="nombre-invitado"
                  type="text"
                  placeholder="Escribe tu nombre"
                  value={nombreInvitado}
                  maxLength={60}
                  onChange={(event) => {
                    setNombreInvitado(event.target.value);
                    setError("");
                  }}
                  className="w-full border border-[#C7A46A]/35 bg-[#F8F5F0]/70 py-4 pl-12 pr-4 font-serif text-lg text-[#433A34] outline-none transition placeholder:text-[#A99886] focus:border-[#8F7D68]"
                />
              </div>
            </div>

            {/* ASISTENCIA */}
            <fieldset className="mt-9">
              <legend className="text-[9px] uppercase tracking-[0.38em] text-[#8F7D68]">
                ¿Podrás acompañarnos?
              </legend>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => seleccionarAsistencia("Sí asistiré")}
                  className={`flex min-h-[68px] items-center gap-4 border px-5 py-4 text-left transition duration-300 ${
                    asistencia === "Sí asistiré"
                      ? "border-[#8F7D68] bg-[#8F7D68] text-white"
                      : "border-[#C7A46A]/30 bg-white/25 text-[#433A34] hover:border-[#8F7D68]/60 hover:bg-[#F3ECE3]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                      asistencia === "Sí asistiré"
                        ? "border-white/40"
                        : "border-[#C7A46A]/45"
                    }`}
                  >
                    <Check size={16} strokeWidth={1.6} />
                  </span>

                  <span>
                    <span className="block font-serif text-lg">
                      Sí asistiré
                    </span>

                    <span
                      className={`mt-1 block text-xs ${
                        asistencia === "Sí asistiré"
                          ? "text-white/70"
                          : "text-[#8F7D68]"
                      }`}
                    >
                      Será un gusto acompañarlos
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => seleccionarAsistencia("No podré asistir")}
                  className={`flex min-h-[68px] items-center gap-4 border px-5 py-4 text-left transition duration-300 ${
                    asistencia === "No podré asistir"
                      ? "border-[#8F7D68] bg-[#8F7D68] text-white"
                      : "border-[#C7A46A]/30 bg-white/25 text-[#433A34] hover:border-[#8F7D68]/60 hover:bg-[#F3ECE3]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                      asistencia === "No podré asistir"
                        ? "border-white/40"
                        : "border-[#C7A46A]/45"
                    }`}
                  >
                    <X size={16} strokeWidth={1.5} />
                  </span>

                  <span>
                    <span className="block font-serif text-lg">
                      No podré asistir
                    </span>

                    <span
                      className={`mt-1 block text-xs ${
                        asistencia === "No podré asistir"
                          ? "text-white/70"
                          : "text-[#8F7D68]"
                      }`}
                    >
                      Estaré presente de corazón
                    </span>
                  </span>
                </button>
              </div>
            </fieldset>

            {/* INVITADOS */}
            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  className="mt-9"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <label
                    htmlFor="numero-invitados"
                    className="text-[9px] uppercase tracking-[0.38em] text-[#8F7D68]"
                  >
                    Número de invitados
                  </label>

                  <div className="relative mt-3">
                    <UsersRound
                      size={17}
                      strokeWidth={1.4}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B89B5E]"
                    />

                    <select
                      id="numero-invitados"
                      value={invitados}
                      onChange={(event) =>
                        setInvitados(Number(event.target.value))
                      }
                      className="w-full appearance-none border border-[#C7A46A]/35 bg-[#F8F5F0]/70 py-4 pl-12 pr-12 font-serif text-lg text-[#433A34] outline-none transition focus:border-[#8F7D68]"
                    >
                      {[1, 2, 3, 4, 5, 6].map((cantidad) => (
                        <option key={cantidad} value={cantidad}>
                          {cantidad} {cantidad === 1 ? "persona" : "personas"}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={17}
                      strokeWidth={1.4}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8F7D68]"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MENSAJE */}
            <div className="mt-9">
              <label
                htmlFor="mensaje-invitado"
                className="text-[9px] uppercase tracking-[0.38em] text-[#8F7D68]"
              >
                Mensaje para los novios
              </label>

              <div className="relative mt-3">
                <MessageSquareText
                  size={17}
                  strokeWidth={1.4}
                  className="absolute left-4 top-5 text-[#B89B5E]"
                />

                <textarea
                  id="mensaje-invitado"
                  placeholder="Escribe un mensaje especial (opcional)"
                  value={mensajeInvitado}
                  maxLength={300}
                  onChange={(event) =>
                    setMensajeInvitado(event.target.value)
                  }
                  rows={5}
                  className="w-full resize-none border border-[#C7A46A]/35 bg-[#F8F5F0]/70 py-4 pl-12 pr-4 text-sm leading-7 text-[#433A34] outline-none transition placeholder:text-[#A99886] focus:border-[#8F7D68]"
                />
              </div>

              <p className="mt-2 text-right text-[10px] text-[#A99886]">
                {mensajeInvitado.length}/300
              </p>
            </div>

            {/* MENSAJES */}
            <div className="mt-6 min-h-[28px]">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    key="error"
                    className="flex items-center justify-center gap-2 text-center text-sm text-[#9A5C4E]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <X size={15} strokeWidth={1.6} />
                    {error}
                  </motion.div>
                )}

                {enviado && (
                  <motion.div
                    key="success"
                    className="flex items-center justify-center gap-2 text-center text-sm text-[#6F7A5C]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <Check size={15} strokeWidth={1.7} />
                    Confirmación enviada correctamente.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BOTÓN */}
            <button
              type="button"
              onClick={enviarConfirmacion}
              disabled={loading}
              className={`mx-auto mt-5 flex min-h-[52px] w-full max-w-sm items-center justify-center gap-3 px-7 py-3.5 text-[9px] uppercase tracking-[0.28em] text-white shadow-[0_12px_30px_rgba(109,94,82,0.16)] transition duration-300 ${
                loading
                  ? "cursor-not-allowed bg-[#AFA59A]"
                  : "bg-[#8F7D68] hover:-translate-y-0.5 hover:bg-[#756453]"
              }`}
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={16}
                    strokeWidth={1.6}
                    className="animate-spin"
                  />
                  Enviando
                </>
              ) : (
                <>
                  <Send size={15} strokeWidth={1.5} />
                  Enviar confirmación
                </>
              )}
            </button>

            <p className="mx-auto mt-7 max-w-sm text-center font-serif text-sm italic leading-6 text-[#8F7D68]">
              Tu confirmación nos ayudará a preparar cada detalle con mucho
              cariño.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}