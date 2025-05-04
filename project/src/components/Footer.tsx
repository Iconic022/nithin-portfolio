import React from 'react';
import { Github as GitHub, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Gadaveni Nithin</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              Full-Stack Developer & DevOps Enthusiast based in Hyderabad, India.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <motion.a 
                href="https://github.com/Iconic022/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <GitHub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/gadaveni-nithin-6b4a42280/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin />
              </motion.a>
              <motion.a 
                href="mailto:example@example.com" 
                className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail />
              </motion.a>
            </div>
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              © {new Date().getFullYear()} Gadaveni Nithin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;