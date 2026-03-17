import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      role: "Research Intern",
      company: "SPIRE Lab, IISc Bangalore",
      points: [
        "Participated in a research internship focused on speech processing and machine learning.",
        "Gained hands-on experience in audio preprocessing, MFCC feature extraction, and deep learning models.",
        "Collaborated with team members to develop and evaluate a keyword spotting system."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section pt-24 pb-16" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 font-outfit flex items-center text-white justify-center">
            <Briefcase className="mr-3 text-indigo-400" size={28} /> Internships
          </h3>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:to-purple-500 flex justify-center">
            
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active w-full max-w-2xl mx-auto">
                {/* Timeline Node */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  <Briefcase size={16} />
                </div>
                
                {/* Card Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 ml-4 md:ml-0">
                  <div className="flex flex-col mb-4">
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <div className="text-indigo-400 font-medium">{exp.company}</div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="pl-1">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
