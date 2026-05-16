
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">
            Building a strong foundation in computer science and technology
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="portfolio-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-primary font-medium mb-3">
                  Annamacharya Institute of Technology and Sciences, Tirupati
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Expected January 2027</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Tirupati, Andhra Pradesh</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  GPA: 8.57/10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
