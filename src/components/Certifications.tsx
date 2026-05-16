
import { FileText, Award, Trophy, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Google Solution Challenge Certificate",
      provider: "Google",
      icon: Award,
      color: "text-green-400",
      link: "https://drive.google.com/file/d/12kKDYAxTPHz3o-nTUhRbqlquSBzmpl5p/view?usp=drivesdk"
    },
    {
      title: "Quantum Valley Hackathon – Finalist",
      provider: "Quantum Valley",
      icon: Trophy,
      color: "text-purple-400",
      link: "https://drive.google.com/file/d/1QK5_rUlCkxDUPA8nHwaYhWEKGHnXMr4J/view?usp=drivesdk"
    },
    {
      title: "Quantum Fundamentals",
      provider: "Qubitech",
      icon: FileText,
      color: "text-blue-400",
      link: "https://drive.google.com/file/d/1Kk8G17_BOrvGEWQxHJktjfmCIK8C22K5/view?usp=drivesdk"
    },
    {
      title: "Innovation Ambassador (IA) Training – Foundation Level",
      provider: "Innovation Ambassador",
      icon: Star,
      color: "text-orange-400",
      link: "https://drive.google.com/file/d/1sfQHdBlCR7ERJ5nb5m3s2wYKPm88DtYL/view?usp=drivesdk"
    },
    {
      title: "Innovation Ambassador (IA) Training – Advanced Level",
      provider: "Innovation Ambassador",
      icon: Award,
      color: "text-green-400",
      link: "https://drive.google.com/file/d/1KkssJcFLfDjXcLYSmjMY7Im2xA4IPiiW/view?usp=drivesdk"
    },
    {
      title: "Excel for Beginners",
      provider: "edX",
      icon: FileText,
      color: "text-blue-400",
      link: "https://drive.google.com/file/d/1SxclzVLEaOpCDCCTnjSBSLovl9lT3yZ9/view?usp=drivesdk"
    },
    {
      title: "Smart Innovation Hackathon – Second Prize",
      provider: "Smart Innovation",
      icon: Trophy,
      color: "text-purple-400",
      link: "https://drive.google.com/file/d/1PGqvIThkmZ2e36SMM7hQ6MzUs9Gk59JF/view?usp=drivesdk"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subheading">
            Continuous learning and professional development achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="portfolio-card hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${cert.color}`}>
                  <cert.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.provider}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
