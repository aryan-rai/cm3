import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Mail, Phone, MapPin, Instagram, Youtube, Cloud } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Music size={24} className="text-gold-400" />
              <span className="text-xl font-serif font-semibold text-white">Clynton Music</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Providing exceptional music education and coaching since 2010. Specializing in piano and cello instruction for all ages and skill levels.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-gold-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-gold-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/piano-notes" className="text-sm hover:text-gold-400 transition-colors">
                  Piano Notes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-sm hover:text-gold-400 transition-colors">
                  Schedule a Demo
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-gold-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gold-400 mt-0.5" />
                <span className="text-sm">+6586132683</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gold-400 mt-0.5" />
                <span className="text-sm">contact@clyntonmusic.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-400 mt-0.5" />
                <span className="text-sm">BLK 20B LORONG 3 GEYLANG<br />Singapore 383020</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-white font-medium text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://soundcloud.com/clyntonloh" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Cloud size={20} />
              </a>
              <a href="https://www.instagram.com/clyntonmusic/" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@clyntonmusic" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Clynton Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;