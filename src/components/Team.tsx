
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Président du Conseil d'administration (PCA)/ Mr KRA Magloire",
      role: "Direction Générale",
      phone: "0707889797",
      email: "christ77maguy@gmail.com",
      image: "P-c-a.jpg"
    },
    {
      name: "Directeur Coopérative / Mr Kra Kouame Ange Melvyn",
      role: "Direction générale",
      phone: "0544282900",
      email: "kraangemelvine18@gmail.com",
      image: "Dr.jpg"
    },
    {
      name: "Sécrétaire Général / Mr Blede Tahou Judicael",
      role: "Direction générale",
      phone: "0749296310",
      email: "judicaelblede@gmail.com",
      image: "SG.jpg"
    },
    {
      name: "Trésorier/ Mr Kofii Kan Mathurin",
      role: "Finances",
      phone: "0757978903",
      email: "commercial@gcac-coop.ci",
      image: "grandplan.jpeg"
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
