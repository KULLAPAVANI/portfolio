import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="about-section pt-24 pb-16" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                  <img 
                    src="/profile.jpeg" 
                    alt="Pavani Kulla" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Bio Side */}
          <div className="about-bio glass p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <h3 className="text-2xl font-bold mb-4 font-outfit">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a motivated Computer Science student seeking opportunities to apply my technical knowledge in real-time projects and continue learning advanced software development.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              My core interests lie in Artificial Intelligence, Machine Learning, and Web Development. I enjoy building intelligent systems and creating responsive, user-friendly digital experiences.
            </p>
            
            <div className="flex items-center text-gray-400 mt-auto">
              <MapPin size={18} className="mr-2 text-indigo-400" />
              <span>Based in Kakinada, Andhra Pradesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
