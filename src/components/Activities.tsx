
import React, { useState } from 'react';
import { ShoppingCart, Heart, Coffee, Factory, MessageCircle } from 'lucide-react';
import OrderModal from './OrderModal';

const Activities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const services = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Transformation locale",
      description: "Transformation artisanale de nos produits agricoles",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Vente de chocolat",
      description: "Chocolat artisanal de qualité premium",
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Massage au chocolat",
      description: "Soins bien-être au beurre de cacao",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Fèves de cacao",
      description: "Fèves de cacao bio de première qualité",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Poudre de cacao",
      description: "Poudre de cacao pure et naturelle",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Beurre de cacao",
      description: "Beurre de cacao bio pour cosmétiques et cuisine",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Agriculture durable",
      description: "Techniques agricoles respectueuses de l'environnement",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const handleOrderClick = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    const message = "Bonjour je souhaite passer une commande auprès de GCAC COOP-CA.";
    const url = `https://wa.me/2250707889797?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Nos Activités</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de produits et services agricoles durables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="p-6">
                <div className="text-green-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => handleOrderClick(service.title)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Direct Link */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Commande rapide</h3>
            <p className="text-gray-600 mb-6">Contactez-nous directement via WhatsApp</p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 mx-auto transition-all duration-200 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Commander sur WhatsApp
            </button>
          </div>
        </div>
      </div>

      <OrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </section>
  );
};

export default Activities;
