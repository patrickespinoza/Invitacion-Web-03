import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";

// 🔥 USA SOLO UNA URL
const API_URL = "https://script.google.com/macros/s/AKfycbxQTHIUXU3wWSw_mg7wvwbjwLbzskGcgGaGKzuY_yUK1r-RfPfXtSB7WD4CfZ6W7f5QJg/exec";

const preguntas = [
  {
    pregunta: "¿Dónde se conocieron Allison y David?",
    opciones: ["En la Universidad", "En una Fiesta", "En el trabajo", "Por una app", "En un viaje"],
    correcta: 0
  },
  {
    pregunta: "¿Quién dijo 'te amo' primero?",
    opciones: ["Allison", "David", "Ambos", "Nadie", "Accidente 😅"],
    correcta: 1
  },
  {
    pregunta: "¿Comida favorita?",
    opciones: ["Pizza", "Sushi", "Tacos", "Pasta", "Hamburguesas"],
    correcta: 2
  },
  {
    pregunta: "¿Primera cita?",
    opciones: ["Cine", "Restaurante", "Parque", "Café", "Playa"],
    correcta: 3
  },
  {
    pregunta: "¿Quién es más puntual?",
    opciones: ["Allison", "David", "Ambos", "Ninguno 😂", "Depende"],
    correcta: 0
  }
];

const Preguntas = () => {
  const [nombre, setNombre] = useState("");
  const [iniciado, setIniciado] = useState(false);
  const [paso, setPaso] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [score, setScore] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [ranking, setRanking] = useState([]);
  const [enviado, setEnviado] = useState(false);

  const resultadoRef = useRef();

  // 📤 enviar resultado
  const enviarResultado = async (nombre, score) => {
    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, score })
    });
  };

  // 📥 obtener ranking
  const obtenerRanking = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setRanking(data);
  };

  // 🔥 enviar solo una vez
  useEffect(() => {
    if (terminado && !enviado) {
      enviarResultado(nombre, score);
      obtenerRanking();
      setEnviado(true);
    }
  }, [terminado]);

  // 🎯 lógica respuesta
  const manejarRespuesta = (index) => {
    setSeleccion(index);

    if (index === preguntas[paso].correcta) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      setSeleccion(null);

      if (paso + 1 < preguntas.length) {
        setPaso(paso + 1);
      } else {
        setTerminado(true);
        setShowConfetti(true);
      }
    }, 800);
  };

  // 📸 guardar imagen
  const guardarResultado = async () => {
    const canvas = await html2canvas(resultadoRef.current);
    const link = document.createElement("a");
    link.download = "resultado.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl">

        {!iniciado ? (
          <div className="flex flex-col items-center gap-4 py-10">
            <h2 className="text-xl font-bold">Ingresa tu nombre</h2>

            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre..."
              className="px-4 py-2 border rounded-lg w-72"
            />

            <button
              onClick={() => {
                if (!nombre.trim()) return alert("Pon tu nombre 😅");
                setIniciado(true);
              }}
              className="px-6 py-2 bg-[#9E8E7B] text-white rounded-full"
            >
              Comenzar
            </button>
          </div>
        ) : (
          <>
            {showConfetti && <Confetti />}

            <AnimatePresence mode="wait">
              {!terminado ? (
                <motion.div
                  key={paso}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="flex flex-col items-center gap-5 py-10 bg-gray-50 rounded-2xl shadow-md"
                >
                  <h1 className="text-2xl font-bold">¿CUÁNTO NOS CONOCES?</h1>

                  <p className="text-blue-400">
                    PREGUNTA {paso + 1} DE {preguntas.length}
                  </p>

                  <h2>{preguntas[paso].pregunta}</h2>

                  <div className="flex flex-col gap-3 w-full items-center">
                    {preguntas[paso].opciones.map((opcion, index) => (
                      <button
                        key={index}
                        onClick={() => manejarRespuesta(index)}
                        className={`w-80 px-4 py-3 rounded-xl border transition-all
                        ${seleccion === index
                            ? "bg-pink-400 text-white scale-105"
                            : "bg-white hover:bg-pink-100"}`}
                      >
                        {opcion}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  ref={resultadoRef}
                  className="flex flex-col items-center gap-6 py-10 bg-white rounded-2xl shadow-xl"
                >
                  <h2 className="text-2xl font-bold">
                    🎉 {nombre}, este es tu resultado
                  </h2>

                  <p>
                    Acertaste <b>{score}</b> de {preguntas.length}
                  </p>

                  <button
                    onClick={guardarResultado}
                    className="px-6 py-2 bg-green-500 text-white rounded-full"
                  >
                    📸 Guardar resultado
                  </button>

                  <button
                    onClick={() => {
                      setPaso(0);
                      setScore(0);
                      setTerminado(false);
                      setShowConfetti(false);
                      setSeleccion(null);
                      setEnviado(false);
                    }}
                    className="px-6 py-2 bg-[#9E8E7B] text-white rounded-full"
                  >
                    Reintentar
                  </button>

                  {/* 🏆 ranking */}
                  <div className="w-full mt-6">
                    <h3 className="text-lg font-bold text-center mb-3">
                      🏆 Ranking
                    </h3>

                    {ranking.slice(0, 5).map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between bg-gray-100 px-4 py-2 rounded-lg mb-2"
                      >
                        <span>{index + 1}. {item.nombre}</span>
                        <span>{item.score}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
};

export default Preguntas;