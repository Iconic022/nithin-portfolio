import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const educationItems = [
    {
      id: 1,
      title: "B.Tech CSE",
      institution: "Lovely Professional University",
      period: "2023–2026",
      score: "CGPA: 7.0",
      icon: <GraduationCap size={24} />,
      color: "bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700"  // Violet gradient
    },
    {
      id: 2,
      title: "Diploma in Computer Engineering",
      institution: "Govt Institute of Electronics Hyderabad",
      period: "2020–2023",
      score: "Percentage: 75%",
      icon: <BookOpen size={24} />,
      color: "bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700"  // Violet gradient
    },
    {
      id: 3,
      title: "SSC",
      institution: "Trinity Model Secondary School, Peddapalli",
      period: "2019–2020",
      score: "Percentage: 95%",
      icon: <Award size={24} />,
      color: "bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700"  // Violet gradient
    }
  ];

  return (
    <section id="education" className="py-20">
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
            Education
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-blue-500 rounded mx-auto mb-16"
          ></motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform md:translate-x-px"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-purple-500 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <span className="text-white font-bold">{item.id}</span>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-0 md:pr-16' : 'md:pl-16 md:pr-0'} pl-16`}>
                    <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${item.color}`}>
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-purple-500 rounded-full mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white dark:text-white mb-1">{item.institution}</p>
                      <div className="flex justify-between text-sm text-white dark:text-white">
                        <span>{item.period}</span>
                        <span className="font-medium">{item.score}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
