import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-3"
          >
            About Me
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-blue-500 rounded mx-auto mb-10"
          ></motion.div>

          <motion.div 
            variants={itemVariants}
            className="mb-12 text-slate-600 dark:text-slate-300 leading-relaxed text-lg text-center"
          >
            <p>
              I'm a passionate Full-Stack Developer and DevOps enthusiast based in Hyderabad, India. 
              I love creating elegant solutions and working with cutting-edge technologies to build 
              efficient, scalable, and user-friendly applications.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Development */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-full mx-auto mb-4">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center text-slate-800 dark:text-white mb-3">Frontend</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Creating responsive and intuitive user interfaces with modern frameworks and libraries.
              </p>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900/30 text-teal-500 rounded-full mx-auto mb-4">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center text-slate-800 dark:text-white mb-3">Backend</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Building robust APIs and server-side applications with Node.js and MongoDB.
              </p>
            </motion.div>

            {/* DevOps */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-500 rounded-full mx-auto mb-4">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center text-slate-800 dark:text-white mb-3">DevOps</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Implementing CI/CD pipelines and managing infrastructure with AWS, Docker, and Kubernetes.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;