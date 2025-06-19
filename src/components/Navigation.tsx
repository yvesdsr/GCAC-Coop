
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Activités', href: '/activites' },
    { name: 'Équipe', href: '/equipe' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white-600 rounded-lg flex items-center justify-center">
              <img  src="Site-logo.jpg" alt="" />
            </div>
            <div className="hidden md:block">
              <span className="font-bold text-green-800 text-lg">GCAC COOP-CA</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/devenir-membre"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Devenir membre
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/devenir-membre"
              className="block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Devenir membre
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
