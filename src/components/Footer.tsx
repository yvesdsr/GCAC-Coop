
import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Facebook } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Bonjour, je souhaite obtenir des informations sur GCAC COOP-CA.";
    const url = `https://wa.me/2250707889797?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFacebookClick = () => {
    // URL Facebook à remplacer par la vraie page Facebook de la coopérative
    window.open('https://facebook.com', '_blank');
  };

  const handleGmailClick = () => {
    const subject = "Demande d'information - GCAC COOP-CA";
    const body = "Bonjour,\n\nJe souhaite obtenir des informations sur vos services.\n\nCordialement";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=coopcagcac.ci@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <footer 
      className="relative text-white py-12 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-green-900/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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

          {/* Quick Contact & Social Media */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">Nous contacter</h4>
            
            {/* Boutons de contact */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-200 w-full transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
              
              <button
                onClick={handleGmailClick}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-200 w-full transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Gmail
              </button>
              
              <button
                onClick={handleFacebookClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all duration-200 w-full transform hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </button>
            </div>
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
