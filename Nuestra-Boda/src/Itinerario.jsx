import { motion } from "framer-motion";

const ItinerarioTimelinePremium = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const events = [
    { time: "18:00", title: "Ceremonia", description: "Ceremonia civil con nuestros seres queridos", icon: "💍" },
    { time: "19:30", title: "Recepción", description: "Bienvenida con cóctel y música en vivo", icon: "🥂" },
    { time: "21:00", title: "Cena", description: "Banquete con menú especialmente diseñado", icon: "🍽️" },
    { time: "23:00", title: "Fiesta", description: "¡A bailar hasta que amanezca!", icon: "🎉" },
  ];

  return (
    <div className="relative px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-b from-[#fff7f0] via-[#fefcfb] to-[#fff7f0]">
      {/* Línea vertical central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#9E8E7B]/50 via-[#9E8E7B]/20 to-[#9E8E7B]/50"></div>

      <div className="flex flex-col items-center space-y-20">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`
                relative w-full flex
                ${isLeft ? "sm:justify-center md:justify-start" : "sm:justify-center md:justify-end"}
              `}
            >
              {/* Punto con brillo sobre la línea */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-[#9E8E7B] border-2 border-white shadow-xl animate-pulse z-10"></div>

              {/* Línea horizontal conectando la card */}
              <div
                className={`
                  absolute top-2 h-1 w-6 bg-[#9E8E7B]
                  ${isLeft ? "md:right-1/2 md:mr-6 sm:left-0 sm:ml-0" : "md:left-1/2 md:ml-6 sm:right-0 sm:mr-0"}
                `}
              ></div>

              {/* Card premium */}
              <div
                className="bg-gradient-to-r from-white/70 via-white/30 to-white/70 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl w-full max-w-md transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(158,142,123,0.4)] text-left"
              >
                {/* Icono */}
                <div className="text-3xl mb-2">{event.icon}</div>

                <p className="text-[#9E8E7B] text-sm tracking-[0.2em]">{event.time}</p>
                <h2 className="text-black text-xl sm:text-2xl font-semibold mt-2">{event.title}</h2>
                <p className="text-[#9E8E7B] text-sm mt-1">{event.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ItinerarioTimelinePremium;


