import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">Dar Lkebir</span>
              <p className="text-xs text-amber-600 -mt-1">Moroccan Restaurant</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-orange-600 ${
                  location.pathname === item.href
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Reservation Button */}
          <Link
            to="/reservations"
            className="hidden md:inline-flex items-center px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-medium rounded-lg hover:from-orange-700 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Reserve Table
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={toggleMenu}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={toggleMenu}
              className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg hover:from-orange-700 hover:to-amber-600 transition-all duration-200 text-center"
            >
              Reserve Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;