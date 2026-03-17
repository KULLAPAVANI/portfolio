import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text animate-fade-in">
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Pavani Kulla</h1>
          <h2 className="role">
            <span className="highlight">AI Developer</span> / <span className="highlight">Software Developer</span>
          </h2>
          <p className="summary">
            Motivated Computer Science student seeking opportunities to apply technical knowledge in real-time projects and continue learning advanced software development.
          </p>
          
          <div className="cta-container">
            <a href="#projects" className="primary-btn glass">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="primary-btn glass">
              Contact Me <Mail size={18} />
            </a>
            <div className="social-links">
              <a href="https://github.com/KULLAPAVANI" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href="mailto:pavanikulla1245@gmail.com" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="blob-container animate-blob">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll down">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
