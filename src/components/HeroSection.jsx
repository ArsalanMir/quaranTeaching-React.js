import { motion } from "framer-motion";
import { BookOpen, Volume2, Info, ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showTafsir, setShowTafsir] = useState(false);

  return (
    <section className="h-screen bg-gradient-to-br from-[#0077B6] to-[#6D9886] relative flex items-center justify-center overflow-hidden">
      {/* Decorative Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-full h-full bg-[url('/islamic-pattern.png')] bg-repeat bg-[length:300px]" />
      </motion.div>

      {/* Floating Logo / Ornament */}
      <motion.img
        src="/crescent-logo.png" // Replace with your logo or motif
        alt="Islamic logo"
        className="absolute top-10 left-10 w-16 h-16 opacity-30"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-8 md:p-12 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-xl max-w-2xl mx-4 text-center text-white border border-white/30"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-wide text-white drop-shadow">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </h1>

        <p className="text-xl md:text-2xl italic mb-4 text-white/90 transition-all duration-500">
          In the name of Allah, the Most Gracious, the Most Merciful.
        </p>

        <p className="mb-4 text-sm font-semibold text-white/70">
          — Surah Al-Fatiha (1:1)
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={() => setShowTafsir(true)}
            className="flex items-center gap-2 px-5 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
          >
            <BookOpen className="w-4 h-4" /> Read Tafsir
          </button>

          <button
            className="flex items-center gap-2 px-5 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
            onClick={() => {
              const audio = new Audio("https://cdn.islamic.network/quran/audio/128/ar.alafasy/001001.mp3");
              audio.play();
            }}
          >
            <Volume2 className="w-4 h-4" /> Play Audio
          </button>

          <a
            href="https://quran.com/1/1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
          >
            <Info className="w-4 h-4" /> More on Quran.com
          </a>
        </div>

        {/* Call to Action Button */}
        <motion.a
          href="/courses"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0077B6] font-semibold rounded-full shadow hover:bg-gray-100 transition-all"
        >
          Start Reading the Quran <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Tafsir Modal */}
      {showTafsir && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black rounded-2xl p-6 max-w-xl relative shadow-xl">
            <button
              onClick={() => setShowTafsir(false)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2">Tafsir</h2>
            <p className="text-gray-700 leading-relaxed">
              This verse reminds believers to begin every action with remembrance of Allah, acknowledging His mercy and sovereignty. It sets the spiritual tone for the recitation and all righteous deeds.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
