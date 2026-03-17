import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - in real app, this would send to your backend
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitMessage(`Thank you ${formData.name}! Your message has been received. I'll get back to you soon!`);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section pt-24 pb-24 relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {submitMessage && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-center">
            {submitMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info (takes 2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="contact-info-card glass p-8 rounded-2xl h-full flex flex-col justify-center gap-8">
              
              <a href="mailto:pavanikulla1245@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 drop-shadow-sm">Email</h4>
                  <p className="text-gray-400 group-hover:text-indigo-300 transition-colors">pavanikulla1245@gmail.com</p>
                </div>
              </a>

              <a href="tel:6301286224" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 drop-shadow-sm">Phone</h4>
                  <p className="text-gray-400 group-hover:text-purple-300 transition-colors">6301286224</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 drop-shadow-sm">Location</h4>
                  <p className="text-gray-400 group-hover:text-pink-300 transition-colors">Kakinada, Andhra Pradesh</p>
                </div>
              </div>

              <div className="pt-8 mt-4 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/KULLAPAVANI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/pavani-kulla-835903307" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form (takes 3 columns) */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="contact-form glass p-8 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry" 
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                  required 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  placeholder="Hello Pavani, I'd like to talk about..." 
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600 resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium font-outfit text-lg flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
