
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Leaf, Users, BookOpen, Globe, Recycle, TrendingUp } from 'lucide-react';

const About = () => {
  const missions = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Durabilité",
      description: "Nous promouvons des pratiques agricoles respectueuses de l'environnement pour préserver notre écosystème pour les générations futures."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Équité",
      description: "Nous garantissons un commerce équitable et une juste rémunération pour tous nos producteurs membres."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Formation",
      description: "Nous offrons une éducation et formation continue à nos membres pour améliorer leurs compétences agricoles."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Environnement",
      description: "Protection et préservation de notre environnement naturel à travers des pratiques agricoles durables."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Transformation",
      description: "Valorisation locale de nos productions agricoles pour créer plus de valeur ajoutée."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Prospérité",
      description: "Développement économique durable de notre région et amélioration des conditions de vie."
    }
  ];

  const timeline = [
    { 
      year: '2016', 
      event: 'Création de la coopérative GCAC COOP-CA',
      description: ' les producteurs créent la Coopérative Agricole GLOBAL CROP AGRO-CONSEIL en abrégé CA GCAC avec siège social à YEILEU département de ZOUAN-HOUNIEN'
    },
    { 
      year: '2017', 
      event: 'Formation des premiers membres',
      description: 'Lancement des programmes de formation en agriculture durable et techniques modernes.'
    },
    
    { 
      year: '2019', 
      event: 'Lancement de la transformation locale',
      description: 'Début des activités de transformation du cacao en produits finis.'
    },
    { 
      year: '2020', 
      event: 'Expansion des activités',
      description: 'Diversification vers le massage au chocolat et autres produits dérivés.'
    },
    { 
      year: '2021', 
      event: 'Reconnaissance nationale',
      description: 'Conformément aux nouvelles dispositions de l’acte uniforme OHADA (Organisation pour l’harmonisation en Afrique des droits des affaires), la CA GCAC devient « GCAC COOP-CA»'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center relative"
        style={{
          backgroundImage: ` url('grandplan.jpeg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">À Propos de GCAC COOP-CA</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Notre histoire, notre mission et notre vision pour un avenir agricole durable
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Notre Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mission :
La GCAC-COOP-CA a pour mission d’accompagner et de renforcer les capacités des producteurs de cacao, café, hévéa, anacarde et palmier à huile en collaboration avec tous les acteurs de la chaine d’approvisionnement, cela en mettant en place des pratiques agricoles durables, innovantes et équitables. Ainsi nous nous engageons à : <br />
<ul>
<br /><br />
<li>
  Promouvoir l’agriculture durable et la préservation de l’environnement en pratiquant  l’agro écologie, la reforestation et une utilisation responsable des ressources naturelles.
</li>
<br />

<li>
  l’innovation et la modernisation agricole par la formation, la recherche appliquée et l’adoption de technologies aux besoins des coopérateurs.
</li>
<br />

<li>
  Une gestion basée sur la gouvernance transparente, démocratique et inclusive en PRESIDENT la participation active des membres aux décisions et en matière de redevabilité.
</li>
<br />

<li>
  œuvrer pour l’équité et la justice sociale» prônant les droits des producteurs,  lutter contre les inégalités et en promouvant l’autonomisation des femmes et des jeunes dans le secteur agricole.
</li>
</ul>
<br /> <br />
Par cette mission, la GCAC-COOP-CA aspire à la connaissance de la famille des communautés et actions communautaires, centrée sur l’humain, de l’environnement de son écosystème, tout contribuant au développement socio-économique des communautés rurales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div 
                key={index}
                className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {mission.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Notre Historique</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez l'évolution de notre coopérative depuis sa création
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-12 last:mb-0">
                <div className="flex flex-col items-center mr-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index !== timeline.length - 1 && <div className="w-1 h-24 bg-green-300 mt-4"></div>}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-green-800 mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
