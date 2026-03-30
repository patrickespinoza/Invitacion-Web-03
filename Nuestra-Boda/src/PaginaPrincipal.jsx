import React, { useState } from "react";
import Carousel from "./carrusel";
import { motion, AnimatePresence } from "framer-motion";
import Itinerario from "./Itinerario";
import Preguntas from "./Preguntas";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";


export default function PaginaPrincipal() {
   // Estados para manejar boton de album
  const [open, setOpen] = useState(false);
  // Estados para manejar el formulario
  
  const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
// Estados para manejar boton de tarjeta bancaria

  const[mostrarModal, setMostrarModal] = useState(false)
  const [copiado, setCopiado] = useState(false);
  const copiarCuenta = () => {
  navigator.clipboard.writeText("1234 5678 9012 3456");
  setCopiado(true);

  setTimeout(() => {
    setCopiado(false);
  }, 2000);
};
  




  return (
    <div >

      <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative flex flex-col items-center justify-center text-white bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-black py-24 px-6 text-center overflow-hidden"
>

  {/* Glow decorativo sutil */}
  <div className="absolute w-[500px] h-[500px] bg-[#9E8E7B]/20 rounded-full blur-3xl top-[-100px]"></div>
  

  {/* Contenido */}
  <div className="relative z-10 max-w-3xl">

    <p className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
      "El amor no mira con los ojos, sino con la mente, y por eso al alado Cupido lo pintan ciego."
    </p>

    {/* Línea elegante */}
    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#9E8E7B] to-transparent mx-auto my-8"></div>

    <p className="text-sm tracking-[0.3em] text-[#9E8E7B] uppercase">
  William Shakespeare
</p>

  </div>
</motion.div>


{/* Direccion del evento*/}

        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex items-center justify-center p-6 bg-gradient-to-b from-black via-[#1a1a1a] to-black"
>
  <div className="bg-white/10  p-10 md:p-12 max-w-lg md:max-w-xl min-h-[400px] md:min-h-[450px] w-full text-center space-y-6 md:space-y-8 transition duration-300 hover:scale-105">
    
    <h1 className="text-sm tracking-[0.3em] text-[#9E8E7B] font-semibold">
  ¿CUÁNDO?
   </h1>

     <div>
      <p className="text-6xl">📅</p>
      <p className="text-lg text-gray-300 tracking-wid">DOMINGO, 11 DE JUNIO</p>
      <div className="w-24 h-[1px] bg-white/20 mx-auto"></div>
      <p className="text-5xl fond-bold text-white">2026</p>

      <p className="text-lg text-gray-300 tracking-wide">16:30 </p>
    </div>

    <a
      href="https://maps.app.goo.gl/TsSDUBKAractwi8F8"
      target="_blank"
      className="inline-block mt-4 bg-[#9E8E7B] hover:bg-[#8a7a69] text-white px-6 py-3 rounded-full shadow-md transition duration-300"
    >
      Ver ubicación
    </a>
    <div className="w-24 h-[1px] bg-white/20 mx-auto"></div>
  </div>
</motion.div>

        {/* Sección de Momentos */}
        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex items-center justify-center py-12 bg-gray-50"
>
  <div className="max-w-4xl w-full text-center space-y-6">

    {/* Título */}
    <h1 className="text-2xl sm:text-4xl font-bold font-playfair tracking-wide">
      Nuestros Historia
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
</motion.div>

{/* Seccion de Itinerario  */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Itinerario />
  </div>
</div>

{/* Seccion de Frase  */}
 <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative flex flex-col items-center justify-center text-center py-36 px-6 overflow-hidden bg-gradient-to-b from-[#fdfaf6] via-[#fbf6f2] to-[#fffefb]"
>

  {/* Glow de fondo ultra premium */}
  <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-[#f5d185]/30 via-[#9e8e7b]/20 to-[#ffffff]/0 rounded-full blur-3xl animate-pulse top-[-150px] left-[-100px]"></div>
  <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#facf91]/20 to-[#fdf6e3]/0 rounded-full blur-2xl bottom-[-120px] right-[-80px] animate-pulse"></div>

  {/* Resplandor radial detrás del texto */}
  <div className="absolute w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

  {/* Partículas flotantes */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="absolute bg-red-400/75 rounded-full blur-sm"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float${i} ${Math.random() * 10 + 5}s ease-in-out infinite alternate`
        }}
      ></div>
    ))}
  </div>

  {/* Contenido */}
  <div className="relative z-10 max-w-3xl">

    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[GreatVibes] bg-clip-text text-transparent bg-gradient-to-r from-[#7f5b45] via-[#d18f81] to-[#a08428] leading-snug mb-4 drop-shadow-xl">
      "Donde quiera que vayas, iré yo
    </p>
    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[GreatVibes] bg-clip-text text-transparent bg-gradient-to-r from-[#9d7155] via-[#c1897c] to-[#a08428] leading-snug mb-4 drop-shadow-xl">
      también.
    </p>
    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[GreatVibes] bg-clip-text text-transparent bg-gradient-to-r from-[#b27d5c] via-[#a9776c] to-[#a08428] leading-snug mb-12 drop-shadow-xl">
      Donde te quedes, yo me quedaré."
    </p>

    {/* Línea central elegante */}
    <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#E9CFC9] to-transparent mx-auto mb-8 rounded-full shadow-lg"></div>

    <p className="text-sm sm:text-base tracking-[0.4em] text-[#9c713b] uppercase font-semibold drop-shadow-md">
      - LIBRO DE RUT
    </p>
  </div>

  {/* Animación de partículas */}
  <style jsx>{`
    ${Array.from({ length: 30 }).map((_, i) => `
      @keyframes float${i} {
        0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
        50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
      }
    `).join('')}
  `}</style>

</motion.div>


   {/* Sección de Vestimenta */}

 <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex items-center justify-center p-6"
>
  <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-md w-full text-center space-y-6 text-black relative overflow-hidden">
    
    {/* Glow sutil detrás */}
    <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#fcd5b5]/40 via-[#f9e1d1]/20 to-transparent rounded-full blur-3xl animate-pulse -z-10"></div>

    <h1 className="text-3xl sm:text-4xl font-bold font-playfair tracking-wide">
      Detalles
    </h1>

    <p className="text-lg sm:text-2xl font-[DancingScript]">
      Código de vestimenta
    </p>

    {/* Línea decorativa premium */}
    <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#9E8E7B] to-transparent rounded-full"></div>

    {/* Tipo */}
    <p className="text-2xl sm:text-3xl font-semibold mt-2">
      Formal
    </p>

    {/* Descripción */}
    <p className="text-sm sm:text-base text-gray-600 mt-2">
      Elegante y acorde a la ocasión. Evita colores demasiado claros.
    </p>

    {/* Íconos con ligero hover */}
    <div className="flex justify-center gap-8 mt-4 text-4xl">
      <span className="hover:scale-110 transition-transform duration-300">🤵</span>
      <span className="hover:scale-110 transition-transform duration-300">👗</span>
    </div>

    {/* Línea decorativa premium */}
    <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#9E8E7B] to-transparent rounded-full"></div>
    
    <p className="text-lg sm:text-2xl font-[DancingScript]">
      Evento
    </p>

    <p className="text-sm sm:text-base text-gray-600 mt-2">
      Solo para adultos
    </p>

  </div>
</motion.div>

 {/* Sección de Album Compartido */}

 <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center justify-center p-6"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-md w-full text-center space-y-6 text-black relative overflow-hidden">

          {/* Glow */}
          <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#fcd5b5]/40 via-[#f9e1d1]/20 to-transparent rounded-full blur-3xl animate-pulse -z-10"></div>

          <h1 className="text-3xl sm:text-4xl font-bold font-playfair tracking-wide">
            ÁLBUM COMPARTIDO
          </h1>

          <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#9E8E7B] to-transparent rounded-full"></div>

          <p className="text-lg sm:text-2xl font-[DancingScript]">
            Sube tus fotos del evento y revive cada momento especial junto a nosotros
          </p>

          {/* BOTÓN */}
          <button
            onClick={() => setOpen(true)}
            className="bg-[#9E8E7B] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Ir al Álbum 📸
          </button>
        </div>
      </motion.div>

      {/* MODAL de Album*/}
 <AnimatePresence>
  {open && (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white rounded-[2rem] p-8 max-w-md w-full text-center space-y-6 shadow-[0_25px_80px_rgba(0,0,0,0.3)] overflow-hidden"
      >

        {/* Glow interno */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fcd5b5]/30 via-transparent to-[#f9e1d1]/20 rounded-[2rem] blur-2xl -z-10"></div>

        {/* Cerrar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-5 text-gray-400 hover:text-black text-xl transition"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-2xl font-playfair font-semibold text-[#7f5b45]">
          Nuestro Álbum 📸
        </h2>

        {/* Línea */}
        <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#9E8E7B] to-transparent"></div>

        {/* App */}
        <p className="text-gray-600">
          Aplicación:
          <span className="block font-semibold text-[#9E8E7B] mt-1">
            Wedshoots
          </span>
        </p>

        {/* Botón app */}
        <a
          href="https://apps.apple.com/mx/app/wedshoots/id660256196"
          target="_blank"
          className="inline-block px-6 py-2 rounded-full border border-[#9E8E7B] text-[#9E8E7B] hover:bg-[#9E8E7B] hover:text-white transition"
        >
          Descargar App
        </a>

        {/* Código */}
        <div className="space-y-2">
          <p className="text-gray-500 text-sm">Código del álbum</p>
          <div className="bg-[#f8f5f2] rounded-xl py-3 px-4 font-mono text-lg tracking-[0.3em] text-[#7f5b45] shadow-inner">
            MXat19tb26
          </div>
        </div>

        {/* QR con estilo */}
        <div className="flex justify-center">
          <div className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200">
            <img
              src="/qr.png"
              alt="QR"
              className="w-40 h-40 rounded-lg"
            />
          </div>
        </div>

        <p className="text-xs text-gray-400">
          Escanea el código o usa la app para subir tus fotos ✨
        </p>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Sección de Cuanto nos conoces */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Preguntas/>
  </div>
</div>
     

 {/* Sección de Regalos */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Regalos/>
  </div>
</div>
     

{/* Sección de imagen de separacion */}

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative w-full flex justify-center items-center py-16 bg-black overflow-hidden"
>

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
</motion.div>

{/* Sección de Confirmación de Asistencia */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Confirmacion/>
  </div>
</div>

      </div>      
  );
}
