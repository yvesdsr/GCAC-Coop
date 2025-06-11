
import React from 'react';
import { MessageCircle, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-bold mb-6 animate-fade-in">ABKR-STORE</div>
          
          <div className="flex justify-center space-x-8 mb-8 animate-fade-in-up">
            <a
              href="https://wa.me/2250586905549"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-accent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <MessageCircle size={24} className="text-green-400" />
              <span className="font-medium">WhatsApp</span>
            </a>
            
            <a
              href="#"
              className="flex items-center gap-3 hover:text-accent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Instagram size={24} className="text-pink-400" />
              <span className="font-medium">Instagram</span>
            </a>
            
            <a
              href="#"
              className="flex items-center gap-3 hover:text-accent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Facebook size={24} className="text-blue-400" />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-6 animate-fade-in-up">
            <p className="text-sm opacity-80">
              © 2024 ABKR-STORE. Tous droits réservés.
            </p>
            <p className="text-xs opacity-60 mt-2">
              Exprime ton style. Commande simplement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
