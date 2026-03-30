import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Confirmacion = () => {

  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const enviarConfirmacion = async () => {
    if (!nombreInvitado || !asistencia) {
      setError("Completa tu nombre y confirma asistencia");
      return;
    }

    setError("");
    setLoading(true);

    const data = {
      nombre: nombreInvitado,
      asistencia,
      invitados,
      mensaje: mensajeInvitado,
    };

    try {
  await fetch("https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec", {
  method: "POST",
  mode: "no-cors", // 🔥 IMPORTANTE
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

      // 🎉 éxito
      setEnviado(true);

      // limpiar
      setNombreInvitado("");
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados(1);

      // ocultar mensaje después
      setTimeout(() => {
        setEnviado(false);
      }, 3000);

    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center gap-5 h-auto py-10 bg-gray-50 rounded-2xl shadow-md"
    >
      <h1 className="text-xl sm:text-2xl font-bold font-playfair">
        CONFIRMAR ASISTENCIA
      </h1>

      <p className="text-gray-600">Por favor, confirma tu asistencia</p>

      {/* Nombre */}
      <input
        type="text"
        placeholder="Nombre y apellido"
        value={nombreInvitado}
        onChange={(e) => setNombreInvitado(e.target.value)}
        className="w-80 p-3 border rounded-lg focus:ring-2 focus:ring-[#9E8E7B] outline-none"
      />

      {/* Asistencia */}
         <div className="flex flex-col gap-3 w-80">

  {/* OPCIÓN SI */}
  <label className="flex items-center gap-3 cursor-pointer">
    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
      asistencia === "Sí asistiré"
        ? "border-[#9E8E7B]"
        : "border-gray-400"
    }`}>
      {asistencia === "Sí asistiré" && (
        <div className="w-2.5 h-2.5 bg-[#9E8E7B] rounded-full"></div>
      )}
    </div>

    <span className="text-gray-700">Sí asistiré</span>

    <input
      type="radio"
      name="asistencia"
      value="Sí asistiré"
      onChange={() => setAsistencia("Sí asistiré")}
      className="hidden"
    />
  </label>

  {/* OPCIÓN NO */}
  <label className="flex items-center gap-3 cursor-pointer">
    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
      asistencia === "No podré asistir"
        ? "border-[#9E8E7B]"
        : "border-gray-400"
    }`}>
      {asistencia === "No podré asistir" && (
        <div className="w-2.5 h-2.5 bg-[#9E8E7B] rounded-full"></div>
      )}
    </div>

    <span className="text-gray-700">No podré asistir</span>

    <input
      type="radio"
      name="asistencia"
      value="No podré asistir"
      onChange={() => setAsistencia("No podré asistir")}
      className="hidden"
    />
  </label>

</div>

      {/* Invitados */}
      <input
        type="number"
        min="1"
        value={invitados}
        onChange={(e) => setInvitados(Number(e.target.value))}
        className="w-80 p-3 border rounded-lg text-center"
      />

      {/* Mensaje */}
      <textarea
        placeholder="Mensaje para los novios (opcional)"
        value={mensajeInvitado}
        onChange={(e) => setMensajeInvitado(e.target.value)}
        className="w-80 p-3 border rounded-lg"
      />

      {/* ERROR */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-500 text-sm"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* SUCCESS */}
      <AnimatePresence>
        {enviado && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-green-500 text-sm"
          >
            ✅ Confirmación enviada correctamente
          </motion.p>
        )}
      </AnimatePresence>

      {/* BOTÓN */}
      <button
        onClick={enviarConfirmacion}
        disabled={loading}
        className={`px-6 py-3 rounded-full shadow-lg transition duration-300 text-white flex items-center justify-center gap-2 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#9E8E7B] hover:bg-[#8a7a69]"
        }`}
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Enviando...
          </>
        ) : (
          "Enviar Confirmación"
        )}
      </button>
    </motion.div>
  );
};

export default Confirmacion;