import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-slate-950 text-white z-50">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mb-4 mx-auto"></div>
              <h2 className="text-2xl font-semibold">Loading...</h2>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;