
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import OrderModal from '../components/OrderModal';
import { ShoppingCart, Massage, Coffee, Factory, MessageCircle } from 'lucide-react';

const Activities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const services = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Transformation locale",
      description: "Transformation artisanale de nos produits agricoles selon des méthodes traditionnelles et modernes pour préserver la qualité et les saveurs authentiques.",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
      details: "Notre atelier de transformation utilise des équipements modernes tout en respectant les méthodes traditionnelles."
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Vente de chocolat",
      description: "Chocolat artisanal de qualité premium fabriqué à partir de nos fèves de cacao biologiques, avec différentes variétés et pourcentages de cacao.",
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
      details: "Chocolat noir, au lait, et blanc disponibles en tablettes, poudre et autres formats."
    },
    {
      icon: <Massage className="w-12 h-12" />,
      title: "Massage au chocolat",
      description: "Soins bien-être au beurre de cacao pur, offrant détente et hydratation naturelle de la peau avec les bienfaits antioxydants du cacao.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
      details: "Séances de massage relaxant utilisant nos produits 100% naturels à base de cacao."
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Fèves de cacao",
      description: "Fèves de cacao bio de première qualité, récoltées à maturité optimale et séchées selon nos standards de qualité pour préserver tous les arômes.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
      details: "Fèves crues ou torréfiées, conditionnées en sacs de différentes tailles."
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Poudre de cacao",
      description: "Poudre de cacao pure et naturelle, sans additifs, parfaite pour la pâtisserie, les boissons chaudes et la cuisine gastronomique.",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=600&q=80",
      details: "Poudre fine ou grossière selon vos besoins, conditionnée en sachets hermétiques."
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Beurre de cacao",
      description: "Beurre de cacao bio pur pour cosmétiques et cuisine, extrait à froid pour conserver toutes ses propriétés nutritives et hydratantes.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=600&q=80",
      details: "Beurre de cacao solide ou liquide, conditionné en pots de différentes tailles."
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Agriculture durable",
      description: "Formation et accompagnement en techniques agricoles respectueuses de l'environnement, permaculture et agriculture biologique.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
      details: "Programmes de formation, consultation agronomique et accompagnement technique."
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Produits cosmétiques",
      description: "Gamme de produits cosmétiques naturels à base de cacao : crèmes, baumes, savons et huiles pour tous types de peau.",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80",
      details: "Produits 100% naturels, sans parabènes ni sulfates, enrichis aux extraits de cacao."
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Activités</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Découvrez notre gamme complète de produits et services agricoles durables
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <p className="text-gray-500 text-xs mb-4 italic">{service.details}</p>
                  <button
                    onClick={() => handleOrderClick(service.title)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Commander / Réserver
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Direct Link */}
          <div className="text-center">
            <div className="bg-green-600 text-white p-8 rounded-2xl shadow-lg inline-block">
              <MessageCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Commande rapide</h3>
              <p className="mb-6">Contactez-nous directement via WhatsApp pour vos commandes urgentes</p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Commander sur WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <OrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProduct={selectedProduct}
      />

      <Footer />
    </div>
  );
};

export default Activities;
