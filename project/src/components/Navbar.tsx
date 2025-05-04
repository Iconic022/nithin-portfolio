import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Education", href: "#education" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home"
          className="w-16 h-16 md:w-20 md:h-20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/gn-logo.png"  // Ensure this is the transparent image in public folder
            alt="GN Logo"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="text-violet-700 dark:text-violet-400 hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.title}
            </motion.a>
          ))}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-slate-100 dark:bg-slate-800"
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-violet-700 dark:text-violet-400"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-900 shadow-xl`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-violet-700 dark:text-violet-400 hover:text-violet-600 dark:hover:text-violet-300 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
