
import { Github, Linkedin, Mail, Phone, MapPin, Download, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl float" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div className="text-left">
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="hero-title mb-6">
                Kotta Sai Rohit
              </h1>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="hero-subtitle mb-8">
                Aspiring Front-End Developer
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-8`}>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2 portfolio-card px-4 py-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Kadapa, Andhra Pradesh</span>
                </div>
                <div className="flex items-center gap-2 portfolio-card px-4 py-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:sairohit614@gmail.com" className="hover:text-primary transition-colors">
                    sairohit614@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 portfolio-card px-4 py-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 8712367466</span>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-12`}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://linkedin.com/in/k-s-rohit-82a546286" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/sairohhit14" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <button className="btn-secondary">
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </button>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-1200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="#about" className="inline-block">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pulse-glow">
                  <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-95'}`}>
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-lg"></div>
                
                {/* Main image frame */}
                <div className="relative bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm rounded-3xl p-3 shadow-2xl shadow-primary/30 border border-white/30">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="/profile.jpg" 
                      alt="Kotta Sai Rohit" 
                      className="w-80 h-96 object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50"></div>
                  </div>
                </div>
                
                {/* Sparkle decoration */}
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-8 h-8 text-accent animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
