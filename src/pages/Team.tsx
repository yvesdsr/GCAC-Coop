
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Mr KRA Magloire",
      role: "Président du Conseil d'Administration",
      department: "Direction Générale",
      phone: "0707889797",
      email: "christ77maguy@gmail.com",
      image: "P-c-a.jpg",
      bio: "Leader expérimenté avec plus de 15 ans d'expérience dans l'agriculture durable et la gestion coopérative."
    },
    {
      name: "Mr Kra Kouame Ange Melvyn",
      role: "Directeur Général",
      department: "Direction générale",
      phone: "0544282900",
      email: "kraangemelvine18@gmail.com",
      image: "Dr.jpg",
      bio: " Manager dynamique engagé dans la valorisation des filières agricoles, il pilote les opérations de GCAC COOP-CA avec une vision centrée sur l'innovation, la performance et l’autonomisation des producteurs"
    },
    {
      name: "Mr Blede Tahou Judicael",
      role: "Sécrétaire Général",
      department: "Direction générale",
      phone: "0749296310",
      email: "judicaelblede@gmail.com",
      image: "SG.jpg",
      bio: "Pilier administratif de la coopérative, il veille à la bonne coordination des instances, à la conformité des décisions et à la fluidité de la communication interne et externe de GCAC COOP-CA"
    },
    {
      name: "Mr Koffi Kan Mathurin",
      role: "Trésorier",
      department: "Finances",
      phone: "0757978903",
      email: "transformation@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      bio: " Garant de la transparence financière, il supervise la gestion des ressources de GCAC COOP-CA avec rigueur, assurant la stabilité économique et le respect des obligations comptables."
    },
   
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
