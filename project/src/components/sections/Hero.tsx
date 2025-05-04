import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-300 dark:bg-teal-900 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 -left-24 w-72 h-72 bg-amber-300 dark:bg-amber-900 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Profile image with border glow wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-60 h-60 md:w-80 md:h-80 rounded-full glow-border"
          >
            <motion.img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGuJ6ZZC35gOQ/profile-displayphoto-shrink_800_800/B4EZTRT1h9HMAk-/0/1738678427479?e=1751500800&v=beta&t=1d-0-XzTfqWksCDHdsEBTcmCNyeLEecHrBujoK2iVoM"
              alt="Gadaveni Nithin"
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col items-center md:items-start"
            style={{ paddingLeft: '20px' }}  // Adjust padding to align text with the profile image
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-cover bg-center relative mb-4"
                style={{
                  backgroundImage: "url('https://media.licdn.com/dms/image/v2/D4E03AQGuJ6ZZC35gOQ/profile-displayphoto-shrink_800_800/B4EZTRT1h9HMAk-/0/1738678427479?e=1751500800&v=beta&t=1d-0-XzTfqWksCDHdsEBTcmCNyeLEecHrBujoK2iVoM')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  fontFamily: 'Bebas Neue, sans-serif',
                  padding: '10px 20px',  // Added padding to extend the text area
                  letterSpacing: '2px',  // Added letter spacing to increase text spacing
                }}>
              Gadaveni Nithin
            </h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
              <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 md:mb-6" 
                  style={{
                    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D4E03AQGuJ6ZZC35gOQ/profile-displayphoto-shrink_800_800/B4EZTRT1h9HMAk-/0/1738678427479?e=1751500800&v=beta&t=1d-0-XzTfqWksCDHdsEBTcmCNyeLEecHrBujoK2iVoM')",
                    backgroundSize: 'cover',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold', 
                    padding: '10px 20px',
                    letterSpacing: '2px',
                  }}>
                Full-Stack Developer & DevOps Enthusiast
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xl" 
                  style={{
                    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D4E03AQGuJ6ZZC35gOQ/profile-displayphoto-shrink_800_800/B4EZTRT1h9HMAk-/0/1738678427479?e=1751500800&v=beta&t=1d-0-XzTfqWksCDHdsEBTcmCNyeLEecHrBujoK2iVoM')",
                    backgroundSize: 'cover',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold', 
                    padding: '10px 20px',
                    letterSpacing: '2px',
                  }}>
                Based in Hyderabad, India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex justify-center md:justify-start space-x-4"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 text-white rounded-full shadow-lg transition-colors duration-300"
                style={{
                background: 'linear-gradient(135deg, #B3A1D9, #6A1B9A)', // Light Violet to Thick Violet gradient
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>


              <motion.a
                href="#projects"
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-violet-700 dark:hover:border-violet-700 text-slate-700 dark:text-white rounded-full shadow-lg transition-colors duration-300"wr
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md text-blue-500 dark:text-blue-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
