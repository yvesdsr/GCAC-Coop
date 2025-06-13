
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "M. KOUASSI Kouadio Pierre",
      role: "Président de la Coopérative",
      department: "Direction Générale",
      phone: "0707889797",
      email: "president@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      bio: "Leader expérimenté avec plus de 15 ans d'expérience dans l'agriculture durable et la gestion coopérative."
    },
    {
      name: "Mme TRAORE Aminata",
      role: "Vice-Présidente",
      department: "Coordination des activités",
      phone: "0707889798",
      email: "vice-president@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1494790108755-2616c11195c8?auto=format&fit=crop&w=300&q=80",
      bio: "Spécialiste en développement rural et autonomisation des femmes dans l'agriculture."
    },
    {
      name: "M. DIABATE Seydou",
      role: "Responsable Production",
      department: "Gestion des cultures",
      phone: "0707889799",
      email: "production@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      bio: "Ingénieur agronome expert en culture de cacao biologique et techniques durables."
    },
    {
      name: "Mme KONE Mariam",
      role: "Responsable Transformation",
      department: "Traitement et transformation",
      phone: "0707889800",
      email: "transformation@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      bio: "Experte en transformation alimentaire avec une spécialisation dans les produits à base de cacao."
    },
    {
      name: "M. OUATTARA Ibrahim",
      role: "Responsable Commercial",
      department: "Ventes et marketing",
      phone: "0707889801",
      email: "commercial@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      bio: "Spécialiste en marketing agricole et développement de marchés pour produits biologiques."
    },
    {
      name: "Mme YAO Akissi",
      role: "Responsable Formation",
      department: "Éducation et développement",
      phone: "0707889802",
      email: "formation@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      bio: "Formatrice expérimentée en techniques agricoles modernes et développement des compétences."
    },
    {
      name: "M. BAMBA Lacina",
      role: "Responsable Qualité",
      department: "Contrôle et certification",
      phone: "0707889803",
      email: "qualite@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      bio: "Expert en normes de qualité alimentaire et processus de certification biologique."
    },
    {
      name: "Mme COULIBALY Fatoumata",
      role: "Secrétaire Générale",
      department: "Administration",
      phone: "0707889804",
      email: "secretariat@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      bio: "Gestionnaire administrative expérimentée, responsable de la coordination des activités internes."
    },
    {
      name: "M. SILUE Moussa",
      role: "Trésorier",
      department: "Gestion financière",
      phone: "0707889805",
      email: "tresorier@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80",
      bio: "Comptable certifié avec une expertise en gestion coopérative et finance rurale."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Notre Équipe Dirigeante</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Une équipe expérimentée et passionnée au service du développement de notre coopérative
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.department}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 text-center italic">{member.bio}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span className="break-all">{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location Info */}
          <div className="mt-16 bg-green-50 p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Notre Siège Social</h3>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              Région du Tonkpi, Danané, Gningleu, à 50 m du stade
            </p>
            <p className="text-gray-600">
              Nos bureaux sont ouverts du lundi au vendredi de 8h à 17h30, 
              et le samedi de 8h à 12h pour les urgences.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
