
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Activities from '../components/Activities';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Activities />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
