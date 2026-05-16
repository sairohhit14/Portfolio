
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "WellNow",
      description: "AI-powered healthcare app offering chat and voice consultation, report analysis, nearby doctor detection, and appointment booking.",
      technologies: ["Python", "Flask", "HTML", "CSS", "Vertex AI"],
      github: "https://github.com/sairohhit14/WellNow",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Qatalyst -- Quantum State Visualizer",
      description: "Interactive platform visualizing quantum states and concepts with tutorials explaining superposition and quantum gates.",
      technologies: ["Python", "Flask", "Data Visualization"],
      github: "https://github.com/sairohhit14",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Resqify -- Disaster Coordinator",
      description: "Platform connecting volunteers with people in need during disasters for better coordination and assistance.",
      technologies: ["Python", "Flask", "HTML", "CSS"],
      github: "https://github.com/sairohhit14/ResQify",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "The Fantastic Detector – Real-Time Fraud Detection System",
      description: "A real-time fraud detection system that monitors bank transactions and instantly identifies suspicious activities to help prevent financial fraud. Built using a streaming architecture for fast processing and live anomaly detection.",
      technologies: ["Streamlit", "React", "TypeScript", "WebSockets"],
      github: "https://github.com/sairohhit14/The-Fantastic-Detector",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card group slide-in-up`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`h-32 bg-gradient-to-br ${project.color} rounded-lg mb-6 project-image flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold text-white relative z-10">{project.title}</h3>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="skill-badge text-xs"
                      style={{animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
