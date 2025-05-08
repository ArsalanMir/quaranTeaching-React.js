import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';

const Home = () => (
  <div>
    <HeroSection />
    
    {/* Introduction Section */}
    <section className="text-center py-10">
      <h2 className="text-3xl font-semibold text-[#0077B6] mb-4">Explore Islamic Knowledge in Modern Ways</h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-8">
        Learn Quran, Hadith, and Arabic online with scholars. Join interactive sessions, live Quran recitations, and more.
      </p>
    </section>

    {/* History of Quran Section */}
    <section className="py-16 bg-[#F0F4F8]">
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-[#0077B6] mb-4">The History of the Quran</h2>
        <p className="text-lg text-gray-700">
          The Quran is the holy book of Islam, revealed to the Prophet Muhammad (PBUH) by Allah over a span of 23 years. It was revealed in the Arabic language, and it serves as a guide for all aspects of life, encompassing spiritual, moral, and legal principles.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          The Quran was revealed in stages, with the first revelation occurring in the Cave of Hira in Mecca. It was later compiled into the form we have today during the caliphate of Abu Bakr (RA) and Uthman (RA).
        </p>
      </motion.div>
    </section>

    {/* Fun Facts Section */}
    <section className="py-16 bg-white">
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#0077B6] mb-6">Interesting Facts about the Quran</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700">The Quran Contains 114 Surahs</h3>
            <p className="text-gray-600 mt-2">
              The Quran is divided into 114 chapters, known as Surahs. Each Surah focuses on different themes, including worship, morality, and guidance for personal development.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700">The Quran is the Unaltered Word of Allah</h3>
            <p className="text-gray-600 mt-2">
              Muslims believe that the Quran is the direct and unchanged word of Allah, preserved in its original form since its revelation over 1400 years ago.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700">The Quran is Memorized by Millions</h3>
            <p className="text-gray-600 mt-2">
              The Quran is one of the most memorized books in the world, with millions of Muslims dedicating their lives to memorizing it in its entirety, a tradition known as Huffaz.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700">The Quran's Scientific Insights</h3>
            <p className="text-gray-600 mt-2">
              The Quran contains many verses that describe natural phenomena, such as the development of the human embryo and the expansion of the universe, long before they were discovered by modern science.
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Call to Action */}
    <section className="py-16 bg-gradient-to-r from-[#6D9886] to-[#0077B6] text-center text-white">
      <h2 className="text-3xl font-semibold mb-6">Start Your Journey with the Quran</h2>
      <p className="max-w-3xl mx-auto mb-8">
        Embark on a spiritual journey by learning the Quran and understanding its deep wisdom. Begin your path today.
      </p>
      <motion.a 
        href="/courses"
        className="px-6 py-3 bg-white text-[#0077B6] rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Start Reading the Quran
      </motion.a>
    </section>
  </div>
);

export default Home;
