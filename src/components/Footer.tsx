import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">CommStyle</h3>
          <p className="text-gray-400 text-sm">
            Helping individuals and organizations communicate more effectively through science-based
            assessments.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
                aria-label="Home page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/assessment"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
                aria-label="Assessment page"
              >
                Assessment
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
                aria-label="About page"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://mnyalusafaris.com/tours/mount-kilimanjaro/"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
                aria-label="Kilimanjaro trekking"
              >
                Kilimanjaro trekking
              </a>
            </li>
            <li>
              <a
                href="https://mnyalusafaris.com/tours/tanzania-safari/"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
                aria-label="Tanzania Safari"
              >
                Tanzania Safari
              </a>
            </li>
            <li>
              <a
                href="https://mnyalusafaris.com/tours/zanzibar-tours/"
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
                aria-label="Zanzibar tours"
              >
                Zanzibar tours
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://mnyalusafaris.com"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Visit Mnyalu Safaris website"
            >
              <i className="fab fa-internet-explorer"></i>
            </a>
            <a
              href="https://web.facebook.com/Mnyalu-Safaris-100217801339589"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Mnyalu Safaris Facebook page"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/serzn1"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LinkedIn profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/mnyalusafaris/"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Mnyalu Safaris Instagram profile"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">bob_s@list.ru</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} CommStyle. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
