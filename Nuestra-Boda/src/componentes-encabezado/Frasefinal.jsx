import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FraseBiblica() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#F8F5F0] py-32 px-6"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FBF9F5_0%,#F2EBE2_100%)]" />

      {/* Luz */}
      <div className="absolute -left-40 -top-32 w-[450px] h-[450px] rounded-full bg-white/70 blur-3xl" />

      <div className="absolute -right-32 bottom-0 w-[400px] h-[400px] rounded-full bg-[#C7A46A]/10 blur-3xl" />

      {/* Marco */}
      <div className="absolute inset-5 border border-[#C7A46A]/20" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[0.45em] text-[#9E8E7B] text-[10px]">
          Una promesa
        </p>

        <div className="mt-6 flex justify-center items-center gap-4">
          <span className="w-14 h-px bg-[#C7A46A]/60"></span>

          <span className="w-2 h-2 rotate-45 border border-[#B89B5E]"></span>

          <span className="w-14 h-px bg-[#C7A46A]/60"></span>
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="
          mt-12
          font-serif
          italic
          text-[#433A34]
          leading-[1.5]
          text-[2rem]
          sm:text-[2.6rem]
          md:text-[3.2rem]
          "
        >
          Donde quiera que vayas,
          <br />
          iré yo también.
          <br />
          <br />
          Donde tú permanezcas,
          <br />
          permaneceré contigo.
        </motion.blockquote>

        <div className="mt-14 w-28 h-px bg-gradient-to-r from-transparent via-[#C7A46A] to-transparent mx-auto"></div>

        <p className="mt-7 uppercase tracking-[0.45em] text-[#8F7D68] text-xs">
          Libro de Rut 1:16
        </p>

      </div>
    </motion.section>
  );
}