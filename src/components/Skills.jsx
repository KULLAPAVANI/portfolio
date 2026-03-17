import React, { useEffect, useRef } from 'react';
import { Code2, Lightbulb, Users, Target } from 'lucide-react';

const Skills = () => {
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

  const technicalSkills = [
    { name: 'Python', percentage: 85, color: 'from-green-500 to-green-600' },
    { name: 'HTML', percentage: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS', percentage: 80, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', percentage: 40, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Git', percentage: 75, color: 'from-pink-500 to-pink-600' },
    { name: 'Flask', percentage: 45, color: 'from-purple-500 to-purple-600' },
    { name: 'Cloud Computing', percentage: 70, color: 'from-cyan-500 to-cyan-600' }
  ];

  const professionalSkills = [
    { name: 'Creativity', percentage: 90, icon: <Lightbulb size={20} />, color: 'text-purple-400' },
    { name: 'Communication', percentage: 65, icon: <Users size={20} />, color: 'text-blue-400' },
    { name: 'Problem Solving', percentage: 75, icon: <Target size={20} />, color: 'text-green-400' },
    { name: 'Teamwork', percentage: 85, icon: <Code2 size={20} />, color: 'text-pink-400' }
  ];

  return (
    <section id="skills" className="skills-section pt-24 pb-16" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 font-outfit flex items-center text-white">
              <Code2 className="mr-3 text-indigo-400" size={24} /> Technical Skills
            </h3>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: '0%' }}
                      ref={(el) => {
                        if (el) {
                          setTimeout(() => {
                            el.style.width = `${skill.percentage}%`;
                            el.style.transition = 'width 1.5s ease-out';
                            el.style.transitionDelay = `${idx * 0.1}s`;
                            el.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
                          }, 100);
                        }
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 font-outfit flex items-center text-white">
              <Users className="mr-3 text-purple-400" size={24} /> Professional Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((skill, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-3">
                    {/* Background circle */}
                    <div className="absolute inset-0 rounded-full bg-gray-700"></div>
                    
                    {/* Progress circle */}
                    <svg className="relative w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-700"
                      ></circle>
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.percentage / 100)}`}
                        className={`${skill.color} transition-all duration-1500 ease-out`}
                        style={{
                          transitionDelay: `${idx * 0.15}s`,
                          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        ref={(el) => {
                          if (el) {
                            setTimeout(() => {
                              el.style.strokeDashoffset = `${2 * Math.PI * 40 * (1 - skill.percentage / 100)}`;
                            }, 100);
                          }
                        }}
                      ></circle>
                    </svg>
                    
                    {/* Icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={skill.color}>
                        {skill.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-white font-semibold">{skill.name}</h4>
                    <p className="text-gray-400 text-sm">{skill.percentage}%</p>
                  </div>
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
