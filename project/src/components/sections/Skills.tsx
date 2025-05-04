import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    // Frontend
    { name: "HTML", level: 90, category: "Frontend", color: "bg-gradient-to-r from-violet-300 to-violet-700" },
    { name: "CSS", level: 85, category: "Frontend", color: "bg-gradient-to-r from-violet-300 to-violet-700" },
    { name: "JavaScript", level: 88, category: "Frontend", color: "bg-gradient-to-r from-violet-300 to-violet-700" },
    { name: "React", level: 85, category: "Frontend", color: "bg-gradient-to-r from-violet-300 to-violet-700" },
    
    // Backend
    { name: "Node.js", level: 80, category: "Backend", color: "bg-gradient-to-r from-violet-300 to-violet-700" },
    { name: "MongoDB", level: 75, category: "Backend", color: "bg-gradient-to-r from-violet-300 to-violet-700" },
    
    // DevOps
    { name: "AWS", level: 70, category: "DevOps", color: "bg-gradient-to-r from-violet-300 to-violet-700" },
    { name: "Docker", level: 65, category: "DevOps", color: "bg-gradient-to-r from-violet-300 to-violet-700" },
    { name: "Kubernetes", level: 60, category: "DevOps", color: "bg-gradient-to-r from-violet-300 to-violet-700" },
  ];

  const categories = ["Frontend", "Backend", "DevOps"];

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

  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
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
            Skills
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-violet-400 to-violet-700 rounded mx-auto mb-16"
          ></motion.div>

          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">{category}</h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.color} rounded-full`}
                          custom={skill.level}
                          variants={barVariants}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
