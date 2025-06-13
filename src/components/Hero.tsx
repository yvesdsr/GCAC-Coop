
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Société Coopérative avec Conseil d'Administration
            <br />
            <span className="text-green-400">Globale Crop Agro-Conseil</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-yellow-400">(GCAC COOP-CA)</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-200 font-medium animate-fade-in-up">
            Cultivons l'avenir ensemble - Durabilité, Équité, Prospérité !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link
              to="/devenir-membre"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Devenir membre
            </Link>
            <a
              href="#about"
              className="border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
