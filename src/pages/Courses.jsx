import CourseCard from '../components/CourseCard';
import { motion } from 'framer-motion';

const Courses = () => {
  const courses = [
    { title: 'Quran Recitation', desc: 'Learn Tajweed and beautiful recitation.', id: 1 },
    { title: 'Arabic Grammar', desc: 'Understand the Quran’s language.', id: 2 },
    { title: 'Hadith Studies', desc: 'Explore authentic Hadith collections.', id: 3 },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#F0F7F4] to-[#DDEDEA]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-[#1e3a3a] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📚 Our Courses
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
