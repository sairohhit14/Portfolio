
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            Passionate about creating beautiful and functional web experiences
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="portfolio-card text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">KR</span>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Aspiring Front-End Developer with strong skills in HTML, CSS, JavaScript, and responsive design. 
              Participated in the Google Solution Challenge and multiple hackathons, applying innovative thinking 
              to solve real-world problems. Passionate about creating user-centric interfaces and impactful web projects.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="skill-badge">Problem Solver</div>
              <div className="skill-badge">Creative Thinker</div>
              <div className="skill-badge">Team Player</div>
              <div className="skill-badge">Fast Learner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
