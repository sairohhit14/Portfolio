
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in new opportunities and collaborations
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="mailto:sairohit614@gmail.com"
                className="btn-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </div>
            
            <div className="flex justify-center gap-6">
              <a 
                href="https://linkedin.com/in/k-s-rohit-82a546286" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/sairohhit14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:sairohit614@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Kotta Sai Rohit
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
