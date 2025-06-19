
import React from 'react';
import { Leaf, Users, BookOpen, Globe, Recycle, TrendingUp } from 'lucide-react';

const About = () => {
  const missions = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Durabilité",
      description: "Pratiques agricoles respectueuses de l'environnement"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Équité",
      description: "Commerce équitable et juste rémunération des producteurs"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Formation",
      description: "Éducation et formation continue de nos membres"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Environnement",
      description: "Protection et préservation de notre écosystème"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Transformation",
      description: "Valorisation locale de nos productions"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Prospérité",
      description: "Développement économique durable de la région"
    }
  ];

  const timeline = [
    { year: '2016', event: 'Création de la coopérative' },
    { year: '2019', event: 'Lancement de la transformation locale' },
    { year: '2020', event: 'Expansion des activités' },
    { year: '2021', event: 'Reconnaissance nationale' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Notre Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous œuvrons pour un développement agricole durable, équitable et prospère 
            au service de nos communautés et de l'environnement.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {missions.map((mission, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {mission.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">Notre Historique</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-300"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-800">{item.year}</div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                </div>
                <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
