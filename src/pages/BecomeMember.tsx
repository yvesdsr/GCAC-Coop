
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, CheckCircle, Leaf, TrendingUp, Heart, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BecomeMember = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: '',
    email: '',
    profession: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Communauté solidaire",
      description: "Rejoignez une communauté d'agriculteurs unis pour le développement durable"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Formation continue",
      description: "Accès à des formations gratuites en techniques agricoles modernes"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Agriculture biologique",
      description: "Apprenez les techniques d'agriculture biologique et durable"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Certification qualité",
      description: "Bénéficiez de notre certification bio pour vos productions"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Commerce équitable",
      description: "Garantie d'une rémunération juste pour vos productions"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Transformation locale",
      description: "Accès prioritaire à nos services de transformation"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formSubmitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formSubmitData.append(key, value);
      });
      formSubmitData.append('_email', 'coopcagcac.ci@gmail.com');
      formSubmitData.append('_subject', 'Nouvelle demande d\'adhésion - GCAC COOP-CA');
      formSubmitData.append('_captcha', 'false');
      formSubmitData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/coopcagcac.ci@gmail.com', {
        method: 'POST',
        body: formSubmitData,
      });

      if (response.ok) {
        toast({
          title: "Demande envoyée !",
          description: "✅ Parfait ! Nous avons reçu votre demande d'adhésion. Notre équipe vous répondra dans un délai de 72h.",
        });
        setFormData({ 
          fullName: '', address: '', phone: '', email: '', profession: '', motivation: '' 
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Devenir Membre</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Rejoignez notre coopérative et cultivons ensemble un avenir durable et prospère
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Pourquoi nous rejoindre ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez tous les avantages d'être membre de GCAC COOP-CA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group text-center"
              >
                <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-800 mb-4">Formulaire d'adhésion</h2>
                <p className="text-gray-600">
                  Remplissez ce formulaire pour rejoindre notre coopérative
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Adresse complète *</label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    rows={3}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Votre adresse complète"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Votre adresse email (optionnel)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Profession *</label>
                  <input
                    type="text"
                    required
                    value={formData.profession}
                    onChange={(e) => setFormData({...formData, profession: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Votre profession actuelle"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Pourquoi rejoindre la coopérative ? *</label>
                  <textarea
                    required
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Expliquez vos motivations et ce que vous espérez apporter à la coopérative..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande d\'adhésion'}
                </button>
              </form>

              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">Processus d'adhésion :</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>1. Soumission de votre demande via ce formulaire</li>
                  <li>2. Examen de votre dossier par notre équipe (72h maximum)</li>
                  <li>3. Entretien téléphonique ou en personne</li>
                  <li>4. Validation de votre adhésion</li>
                  <li>5. Intégration dans nos activités et formations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeMember;
