import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projectsList = [
    {
      title: "AI Chatbot using Gemini API",
      description: "Built a full-stack chatbot with session-based chat history using SQLite. Integrated Gemini API for intelligent responses.",
      technologies: ["HTML/CSS/JS", "Flask", "SQLite", "Gemini API"],
      github: "https://github.com/KULLAPAVANI"
    },
    {
      title: "Accent-Based Cuisine Recommendation",
      description: "Built a voice-based ML model using MFCC + HuBERT to detect user accent and recommend matching regional cuisines. Features audio processing and React UI.",
      technologies: ["React", "Flask", "MFCC", "HuBERT ML Model"],
      github: "https://github.com/KULLAPAVANI"
    },
    {
      title: "Keyword Spotting & Speech Recognition",
      description: "Built a deep learning model to detect spoken keywords from audio signals. Extracted MFCC features and implemented a CNN + BiLSTM architecture.",
      technologies: ["Python", "Librosa", "TensorFlow/Keras", "CNN+BiLSTM"],
      github: "https://github.com/KULLAPAVANI"
    },
    {
      title: "Smart Dustbin Monitoring System",
      description: "Designed an IoT-based system to detect garbage levels using ultrasonic sensors. Included cloud services for data storage, SMTP email alerts, and a web interface.",
      technologies: ["IoT", "Python", "Cloud Services", "SMTP"],
      github: "https://github.com/KULLAPAVANI"
    }
  ];

  return (
    <section id="projects" className="projects-section pt-24 pb-16" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">
            <span className="text-gradient flex items-center justify-center gap-3">
              <FolderGit2 className="text-indigo-400" size={32} /> Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcasing my technical abilities through real-world applications in machine learning, web development, and IoT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <div 
              key={idx} 
              className="project-card glass group rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Hover gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <FolderGit2 size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-outfit text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
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
