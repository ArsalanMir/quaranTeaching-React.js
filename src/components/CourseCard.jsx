import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';

const CourseCard = ({ title, desc }) => (
  <motion.div
    className="bg-white shadow-xl border border-gray-100 hover:border-[#0077B6] rounded-xl p-6 transition duration-300 group"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <FaBookOpen className="text-[#0077B6] text-2xl" />
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0077B6] transition">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{desc}</p>
    <button className="mt-auto bg-[#0077B6] text-white px-5 py-2 rounded-full shadow hover:bg-[#005f8c] transition">
      Enroll Now
    </button>
  </motion.div>
);

export default CourseCard;
