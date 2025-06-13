
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Président de la Coopérative",
      role: "Direction Générale",
      phone: "0707889797",
      email: "president@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Responsable Production",
      role: "Gestion des cultures",
      phone: "0707889798",
      email: "production@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Responsable Transformation",
      role: "Traitement et transformation",
      phone: "0707889799",
      email: "transformation@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1494790108755-2616c11195c8?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Responsable Commercial",
      role: "Ventes et marketing",
      phone: "0707889800",
      email: "commercial@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Responsable Formation",
      role: "Éducation et développement",
      phone: "0707889801",
      email: "formation@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Responsable Qualité",
      role: "Contrôle et certification",
      phone: "0707889802",
      email: "qualite@gcac-coop.ci",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Notre Équipe Dirigeante</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe expérimentée et passionnée au service du développement de notre coopérative
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-green-600 font-semibold mb-4">{member.role}</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{member.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{member.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
