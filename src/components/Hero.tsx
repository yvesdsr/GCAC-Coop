
import React from 'react';

interface HeroProps {
  onDiscoverProducts: () => void;
}

const Hero = ({ onDiscoverProducts }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden scroll-snap-start">
      {/* Image de fond avec overlay moderne */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(15,15,15,0.6), rgba(15,15,15,0.4)), url('https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Contenu */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Exprime ton style.
          <br />
          <span className="text-accent bg-gradient-to-r from-accent to-red-600 bg-clip-text text-transparent">
            Commande simplement.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up">
          Découvrez notre collection exclusive de chaussures, vêtements, t-shirts, pantalons, 
          accessoires et friperies. Commande en un clic via WhatsApp.
        </p>
        
        <button
          onClick={onDiscoverProducts}
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-float"
        >
          Découvrir nos produits
        </button>
      </div>
      
      {/* Indicateur de défilement moderne */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
