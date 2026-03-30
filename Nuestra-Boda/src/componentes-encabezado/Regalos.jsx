import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Copy } from "lucide-react";

// ✨ Animación
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const Regalos = () => {

  // 🔥 estados
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);

  // 📋 copiar cuenta
  const copiarCuenta = () => {
    navigator.clipboard.writeText("1234567890123456");
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center gap-3 h-96 md:h-80 lg:h-[700px]"
    >
      
      <img className="h-24 w-24 sm:h-28 sm:w-28 p-3" src="/regalo1.png" alt="Regalo" />

      <h1 className="text-xl sm:text-2xl font-bold p-3 font-playfair">
        REGALOS
      </h1>

      <p className="text-lg sm:text-xl p-7 text-center">
        Ya tenemos pensado el ferrari, la mansión y el velero. 
        Ahora lo único que nos falta es el dinero 😄
      </p>

      {/* BOTÓN */}
      <button 
        className="bg-[#9E8E7B] rounded-md p-3 w-80 h-14 flex items-center justify-center text-lg text-white"
        onClick={() => setMostrarModal(true)}
      >
        Ver Datos Bancarios
      </button>

      {/* MODAL */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setMostrarModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-80 min-h-[260px] rounded-2xl p-5 text-white overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 80 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 80 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "linear-gradient(135deg, #9E8E7B, #5f564c)",
              }}
            >
              {/* brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 animate-[shine_3s_infinite]" />

              <div className="flex justify-between items-center">
                <h2 className="text-sm tracking-widest">SANTANDER</h2>
                <span className="text-xs opacity-70">VISA</span>
              </div>

              <div className="w-10 h-7 bg-yellow-300 rounded-md mt-4 shadow-inner"></div>

              <p className="text-lg tracking-[0.2em] mt-6">
                1234 5678 9012 3456
              </p>

              <div className="flex justify-between items-end mt-4 text-xs">
                <div>
                  <p className="opacity-70">Titular</p>
                  <p className="text-sm tracking-wide">JUAN PEREZ</p>
                </div>
                <div>
                  <p className="opacity-70">VENCE</p>
                  <p>06/30</p>
                </div>
              </div>

             <div className="flex justify-end mt-4">
  <button
    onClick={copiarCuenta}
    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
  >
    <Copy size={18} />
  </button>
</div>

              {copiado && (
                <p className="absolute bottom-10 left-0 right-0 text-center text-green-200 text-xs">
                  ✅ Copiado
                </p>
              )}

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

    </motion.div>
  );
};

export default Regalos;