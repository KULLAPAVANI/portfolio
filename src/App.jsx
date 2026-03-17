import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  
  // Apply initial fade-in to the main app container
  useEffect(() => {
    document.body.classList.add('bg-dark');
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="footer glass border-t border-white/10 py-8 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pavani Kulla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
