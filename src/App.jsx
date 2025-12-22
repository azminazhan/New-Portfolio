import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarBackground from './components/StarBackground';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} AI Student Portfolio. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
