import React, { useState } from "react";
import Carousel from "./carrusel";
import Countdown from "./componentes-encabezado/encabeza-cuenta";
import { motion, AnimatePresence } from "framer-motion";


export default function Intinerario() {
  // Estados para manejar el formulario
  const[mostraModal, setMostrarModal] = useState(false)
  const [copiado, setCopiado] = useState(false);
  const copiarCuenta = () => {
  navigator.clipboard.writeText("1234 5678 9012 3456");
  setCopiado(true);

  setTimeout(() => {
    setCopiado(false);
  }, 2000);
};
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);
  const [error, setError] = useState("");
  const enviarConfirmacion = async () => {
  if (!nombreInvitado || !asistencia) {
    setError("Completa tu nombre y confirma asistencia");
    return;
  }

  setError("");

  const data = {
    nombre: nombreInvitado,
    asistencia,
    invitados,
    mensaje: mensajeInvitado,
  };

  try {
    // 🔥 GUARDAR EN GOOGLE SHEETS
    await fetch("https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // 📱 WHATSAPP
    const numero = "522214105012";

    const mensaje = `✨ Confirmación de asistencia ✨

Nombre: ${nombreInvitado}
Asistencia: ${asistencia}
Invitados: ${invitados}

Mensaje:
${mensajeInvitado || "Sin mensaje"}

¡Nos vemos en la boda! 💍🎉`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    // 🧹 RESET
    setNombreInvitado("");
    setMensajeInvitado("");
    setAsistencia("");
    setInvitados(1);

  } catch (error) {
    console.error("Error:", error);
    setError("Hubo un error al enviar");
  }
};

  return (
    <div >

      <div className="relative flex flex-col items-center justify-center text-white bg-black py-20 px-6 text-center overflow-hidden">

  {/* Glow decorativo sutil */}
  <div className="absolute w-[500px] h-[500px] bg-[#9E8E7B]/20 rounded-full blur-3xl top-[-100px]"></div>

  {/* Contenido */}
  <div className="relative z-10 max-w-3xl">

    <h1 className="text-3xl sm:text-5xl md:text-6xl font-cursiveDancing mb-6 leading-tight">
      ¡Estás invitado!
    </h1>

    <p className="text-lg sm:text-2xl md:text-3xl opacity-90 mb-6">
      Nos encantaría que seas parte de este momento tan especial para nosotros
    </p>

    {/* Línea elegante */}
    <div className="w-20 h-[2px] bg-[#9E8E7B] mx-auto my-6"></div>

    <p className="text-xl sm:text-3xl italic opacity-80">
      ¡Falta poco!
    </p>

  </div>
</div>

{/* COUNTDOWN separado pero integrado */}
<div className="bg-black pb-20 flex justify-center">
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 shadow-xl">
    <Countdown targetDate="2026-06-11T00:00:00" />
  </div>
</div>
        <div className="relative w-full h-[450px] md:h-[550px] lg:h-[700px] overflow-hidden">

  <img
    src="/bajotime.avif"
    alt="Decoración"
    className="w-full h-full object-cover object-center"
  />

  {/* Fade blanco abajo */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        <div className="flex items-center justify-center p-6">
  <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center space-y-4 hover:scale-105 transition duration-300">
    
    <h1 className="text-2xl sm:text-3xl font-bold font-playfair tracking-wide">
      CELEBRACIÓN
    </h1>

    <div className="text-lg font-cursiveDancing space-y-1">
      <p>📅 11 Junio 2026</p>
      <p>⏰ 4:30 PM</p>
    </div>

    <div className="border-t border-gray-200 pt-4 space-y-2">
      <p className="font-semibold text-lg">Ubicacion</p>
      <p className="font-semibold text-lg">📍 Salón Event Center</p>
      <p className="text-sm text-gray-600">
        C.5 Pte. 400, Libertad, Heroica Puebla de Zaragoza, Pue
      </p>
    </div>

    <a
      href="https://maps.app.goo.gl/TsSDUBKAractwi8F8"
      target="_blank"
      className="inline-block mt-4 bg-[#9E8E7B] hover:bg-[#8a7a69] text-white px-6 py-3 rounded-full shadow-md transition duration-300"
    >
      Ver ubicación
    </a>
  </div>
</div>

        {/* Sección de Vestimenta */}
        <div className="flex items-center justify-center p-6 bg-black">
  <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-8 max-w-md w-full text-center space-y-4 text-white">
    
    <h1 className="text-2xl sm:text-4xl font-bold font-playfair tracking-wide">
      Detalles
    </h1>

    <p className="text-lg sm:text-2xl font-cursiveDancing">
      Código de vestimenta
    </p>

    {/* Línea decorativa */}
    <div className="w-16 h-[2px] bg-[#9E8E7B] mx-auto"></div>

    {/* Tipo */}
    <p className="text-2xl sm:text-3xl font-semibold mt-2">
      Formal
    </p>

    {/* Descripción */}
    <p className="text-sm sm:text-base text-gray-300 mt-2">
      Elegante y acorde a la ocasión. Evita colores demasiado claros.
    </p>

    {/* Íconos */}
    <div className="flex justify-center gap-6 mt-4 text-3xl">
      <span>🤵</span>
      <span>👗</span>
    </div>

    {/* Línea decorativa */}
    <div className="w-16 h-[2px] bg-[#9E8E7B] mx-auto"></div>
    
    <p className="text-lg sm:text-2xl font-cursiveDancing">
      Evento
    </p>

    <p className="text-sm sm:text-base text-gray-300 mt-2">
      Solo para adultos
    </p>


  </div>
</div>

        {/* Sección de Momentos */}
        <div className="flex items-center justify-center py-12 bg-gray-50">
  <div className="max-w-4xl w-full text-center space-y-6">

    {/* Título */}
    <h1 className="text-2xl sm:text-4xl font-bold font-playfair tracking-wide">
      Nuestros Momentos
    </h1>

    {/* Línea decorativa */}
    <div className="w-20 h-[2px] bg-[#9E8E7B] mx-auto"></div>

    {/* Subtexto */}
    <p className="text-gray-500 text-sm sm:text-base">
      Un vistazo a nuestra historia juntos 💛
    </p>

    {/* Carrusel dentro de card */}
    <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Carousel />
  </div>
</div>

  </div>
</div>

        {/* Sección de Regalos */}
  <div className="flex flex-col items-center justify-center gap-3 h-96 md:h-80 lg:h-[700px]">
  <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/regalo1.png" alt="Regalo" />
  <h1 className="text-xl sm:text-2xl font-bold p-3 font-playfair">REGALOS</h1>
  <p className="text-lg sm:text-xl p-7 text-center ">Ya tenemos pensado el ferrari, la mansion y el velero. Ahora lo unico que nos falta es el dinero</p>

  {/* Botón para ver datos bancarios*/}
  <button 
    className="bg-[#9E8E7B] rounded-md p-3 w-96 h-14 flex items-center justify-center text-xl text-white "
    onClick={() => setMostrarModal(true)}
  >
    Ver Datos Bancarios
  </button>
<AnimatePresence>
  {mostraModal && (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
      onClick={() => setMostrarModal(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-80 h-56 rounded-2xl p-5 text-white overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0, y: 80 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 80 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "linear-gradient(135deg, #9E8E7B, #5f564c)",
        }}
      >
        {/* ✨ Brillo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 animate-[shine_3s_infinite]" />

        {/* 🏦 Logo banco */}
        <div className="flex justify-between items-center">
          <h2 className="text-sm tracking-widest">SANTANDER</h2>
          <span className="text-xs opacity-70">VISA</span>
        </div>

        {/* 💳 Chip */}
        <div className="w-10 h-7 bg-yellow-300 rounded-md mt-4 shadow-inner"></div>

        {/* 🔢 Número */}
        <p className="text-lg tracking-[0.2em] mt-6">
          1234 5678 9012 3456
        </p>

        {/* 👤 Nombre + fecha */}
        <div className="flex justify-between items-end mt-4 text-xs">
          <div>
            <p className="opacity-70">Card Holders</p>
            <p className="text-sm tracking-wide">JUAN PEREZ</p>
          </div>
          <div>
            <p className="opacity-70">VALID THRU</p>
            <p>06/20</p>
          </div>
        </div>

        {/* 📋 Botón copiar */}
        <button
          onClick={copiarCuenta}
          className="mt-4 w-full bg-white text-black py-1 rounded-md text-xs font-semibold hover:opacity-80 transition"
        >
          📋 Copiar número
        </button>

        {/* ✅ Feedback */}
        {copiado && (
          <p className="absolute bottom-10 left-0 right-0 text-center text-green-200 text-xs">
            ✅ Copiado
          </p>
        )}

        {/* ❌ Cerrar */}
        <button
          className="absolute top-1 right-3 text-white text-lg"
          onClick={() => setMostrarModal(false)}
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
</div>

{/* Sección de Confirmación de Asistencia */}

<div className="relative w-full flex justify-center items-center py-16 bg-black overflow-hidden">

  {/* Fondo con blur */}
  <img
    src="/finalboda.webp"
    alt="Fondo boda"
    className="absolute w-full h-full object-cover opacity-30 blur-sm scale-110"
  />

  {/* Contenido principal */}
  <div className="relative flex flex-col items-center">

    <img
      src="/finalboda.webp"
      alt="Boda"
      className="w-72 sm:w-96 rounded-2xl shadow-2xl border border-white/20"
    />

    {/* Línea decorativa */}
    <div className="w-24 h-[2px] bg-[#9E8E7B] mt-6"></div>

    {/* Texto opcional elegante */}
    <p className="text-white mt-4 text-lg font-cursiveDancing opacity-90">
      ¡Te esperamos!
    </p>

  </div>
</div>
<div className="flex flex-col items-center justify-center gap-4 h-auto py-10 bg-gray-50 rounded-2xl shadow-md">
  <h1 className="text-xl sm:text-2xl font-bold font-playfair">
    CONFIRMAR ASISTENCIA
  </h1>

  <p>Por favor, confirma tu asistencia</p>

  {/* Nombre */}
  <input
    type="text"
    placeholder="Nombre y apellido"
    value={nombreInvitado}
    onChange={(e) => setNombreInvitado(e.target.value)}
    className="w-80 p-3 border rounded-lg focus:ring-2 focus:ring-[#9E8E7B]"
  />

  {/* Asistencia */}
  <div className="flex gap-4">
    <button
      onClick={() => setAsistencia("Sí asistiré")}
      className={`px-4 py-2 rounded-lg border ${
        asistencia === "Sí asistiré"
          ? "bg-green-500 text-white"
          : "bg-white"
      }`}
    >
      ✅ Asistiré
    </button>

    <button
      onClick={() => setAsistencia("No podré asistir")}
      className={`px-4 py-2 rounded-lg border ${
        asistencia === "No podré asistir"
          ? "bg-red-500 text-white"
          : "bg-white"
      }`}
    >
      ❌ No asistiré
    </button>
  </div>

  {/* Número de invitados */}
  <input
    type="number"
    min="1"
    value={invitados}
    onChange={(e) => setInvitados(e.target.value)}
    className="w-80 p-3 border rounded-lg text-center"
  />

  {/* Mensaje */}
  <textarea
    placeholder="Mensaje para los novios (opcional)"
    value={mensajeInvitado}
    onChange={(e) => setMensajeInvitado(e.target.value)}
    className="w-80 p-3 border rounded-lg"
  />

  {/* Error */}
  {error && (
    <p className="text-red-500 text-sm">{error}</p>
  )}

  {/* Botón */}
  <button
  onClick={enviarConfirmacion}
  className="bg-[#9E8E7B] hover:bg-[#8a7a69] text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
>
  Enviar Confirmación
</button>
</div>

      </div>      
    </div>
  );
}
