import { FaSearch } from 'react-icons/fa'; 

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Title Section */}
      <h2 className="text-3xl font-bold mb-6 text-blue-700">About QuranVision</h2>
      <p className="text-gray-700 leading-loose mb-6">
        QuranVision is an innovative platform built to make Quranic education accessible, modern, and engaging for everyone.
        Our mission is to connect people with the Quran through interactive lessons, audio recitations, live streams, and much more.
      </p>

      {/* Search Section */}
      <div className="flex items-center mb-6">
        <input 
          type="text" 
          placeholder="Search Quranic topics..." 
          className="w-full md:w-1/2 p-3 rounded-l-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-700 text-white p-3 rounded-r-lg hover:bg-blue-800 transition duration-300">
          <FaSearch />
        </button>
      </div>

      {/* Features Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Features</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Interactive Quranic lessons with experienced teachers</li>
          <li>Live Quran recitations 24/7 from Mecca and Madinah</li>
          <li>Access to the most authentic Tafsir and Hadith collections</li>
          <li>Free resources and courses for beginners to advanced learners</li>
        </ul>
      </div>

      {/* History Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">A Brief History of the Quran</h3>
        <p className="text-gray-700 leading-loose">
          The Quran, the holy book of Islam, is believed to be the word of God as revealed to the Prophet Muhammad (PBUH) over a period of 23 years. It is considered the ultimate source of guidance for Muslims and has been preserved in its original language and form since the time of its revelation.
        </p>
        <p className="text-gray-700 leading-loose mt-4">
          The Quran is divided into 114 chapters, known as Surahs, and over 6,000 verses. It covers various aspects of life, law, spirituality, and morality.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-700 mb-4">Join us today and begin your journey to understanding the Quran in a deeper way.</p>
        <button className="bg-yellow-400 text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
