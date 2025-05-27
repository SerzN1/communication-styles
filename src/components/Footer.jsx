import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">CommStyle</h3>
          <p className="text-gray-400 text-sm">
            Helping individuals and organizations communicate more effectively through science-based assessments.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300 text-sm">Home</Link></li>
            <li><Link to="/quiz" className="text-gray-400 hover:text-white transition duration-300 text-sm">Quiz</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300 text-sm">About</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">Research</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">contact@commstyle.com</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} CommStyle. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;