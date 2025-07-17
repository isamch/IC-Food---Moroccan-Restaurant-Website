import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-2 rounded-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Dar Lkebir</span>
                <p className="text-sm text-amber-400 -mt-1">Moroccan Restaurant</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Experience the authentic flavors of Morocco in an elegant and welcoming atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Menu</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span className="text-gray-400">123 Moroccan Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-gray-400">info@darlkebir.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-gray-400">Monday - Thursday</p>
                  <p className="text-sm text-gray-500">5:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="text-gray-400">Friday - Sunday</p>
                  <p className="text-sm text-gray-500">5:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Dar Lkebir Moroccan Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;