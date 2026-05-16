
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "C", "Python", "JavaScript", "HTML", "CSS"],
      color: "text-blue-400"
    },
    {
      title: "Frameworks/Tools",
      icon: Wrench,
      skills: ["Flask", "Git", "GitHub"],
      color: "text-green-400"
    },
    {
      title: "Core Concepts",
      icon: Database,
      skills: ["Responsive Web Design", "Data Structures", "DBMS", "Front-End Development"],
      color: "text-purple-400"
    }
  ];

  const strengths = [
    "Leadership and teamwork",
    "Excellent communication",
    "Problem-solving mindset",
    "Task management and meeting deadlines",
    "Creative and innovative thinking"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Skills & Strengths</h2>
          <p className="section-subheading">
            Technical expertise and personal strengths that drive success
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="portfolio-card">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${category.color}`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-badge w-full text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Strengths */}
          <div className="portfolio-card">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Core Strengths</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengths.map((strength, index) => (
                <div key={index} className="skill-badge text-center">
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
