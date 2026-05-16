
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Strengths from '../components/Strengths';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Projects />
      <Skills />
      <Strengths />
      <Footer />
    </div>
  );
};

export default Index;
