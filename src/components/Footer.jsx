import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-blue-700 text-white py-8 mt-10">
    {/* Footer Content Container */}
    <div className="max-w-6xl mx-auto px-6 text-center">
      
      {/* Copyright Text */}
      <p className="text-sm text-gray-200 mb-4">© 2025 QuranVision. All rights reserved.</p>
      
      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Contact and Additional Links */}
      
      <div className="text-sm text-gray-300">
        <p>For more information, feel free to <a href="/contact" className="text-yellow-400 hover:text-white transition duration-300">contact us</a>.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
