import { Users, MessageCircle, Lightbulb, Target, Clock, Sparkles } from 'lucide-react';

const Strengths = () => {
  const strengths = [
    {
      title: "Leadership & Teamwork",
      description: "Natural ability to guide teams and collaborate effectively across diverse groups",
      icon: Users,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Excellent Communication",
      description: "Clear and effective communication skills in both technical and non-technical contexts",
      icon: MessageCircle,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      title: "Problem-Solving Mindset",
      description: "Analytical thinking and innovative approaches to complex challenges",
      icon: Lightbulb,
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400"
    },
    {
      title: "Task Management",
      description: "Excellent at prioritizing tasks and meeting deadlines consistently",
      icon: Target,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      title: "Time Management",
      description: "Efficient workflow organization and optimal use of available time",
      icon: Clock,
      color: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-400"
    },
    {
      title: "Creative Innovation",
      description: "Creative and innovative thinking to develop unique solutions",
      icon: Sparkles,
      color: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400"
    }
  ];

  return (
    <section id="strengths" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Core Strengths</h2>
          <p className="section-subheading">
            Personal and professional qualities that drive success and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <div 
              key={index} 
              className={`portfolio-card group slide-in-up`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${strength.color} flex items-center justify-center pulse-glow`}>
                  <strength.icon className={`w-8 h-8 ${strength.iconColor}`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {strength.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;