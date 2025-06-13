
import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Bonjour, je souhaite obtenir des informations sur GCAC COOP-CA.";
    const url = `https://wa.me/2250707889797?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-green-800 font-bold text-lg">GC</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">GCAC COOP-CA</h3>
                <p className="text-green-200 text-sm">Cultivons l'avenir ensemble</p>
              </div>
            </div>
            <p className="text-green-100 text-sm">
              Société Coopérative avec Conseil d'Administration Globale Crop Agro-Conseil
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">Coordonnées</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-300 mt-0.5" />
                <p className="text-green-100 text-sm">
                  Région du Tonkpi, Danané, Gningleu, à 50 m du stade
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-300" />
                <p className="text-green-100 text-sm">0707889797</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-300" />
                <p className="text-green-100 text-sm">coopcagcac.ci@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">Contact rapide</h4>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-3 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
            <p className="text-green-100 text-sm">
              Contactez-nous directement pour vos commandes et informations
            </p>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 mt-8 text-center">
          <p className="text-green-200 text-sm">
            © 2024 GCAC COOP-CA. Tous droits réservés.
          </p>
          <p className="text-green-300 text-xs mt-2">
            Cultivons l'avenir ensemble - Durabilité, Équité, Prospérité !
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
