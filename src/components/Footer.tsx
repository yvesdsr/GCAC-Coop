
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-bold mb-6">ABKR-STORE</div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://wa.me/2250586905549"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <span className="text-xl">📱</span>
              WhatsApp
            </a>
            
            <a
              href="#"
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <span className="text-xl">📸</span>
              Instagram
            </a>
            
            <a
              href="#"
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <span className="text-xl">📘</span>
              Facebook
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-6">
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
