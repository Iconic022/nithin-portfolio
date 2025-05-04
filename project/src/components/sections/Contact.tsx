import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: <Mail />,
      label: "Email",
      value: "gadaveninithin@gmail.com",
      link: "mailto:contact@example.com",
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: "+91 7093946753",
      link: "tel:+911234567890",
    },
    {
      icon: <MapPin />,
      label: "Location",
      value: "Hyderabad, India",
      link: "https://maps.google.com/?q=Hyderabad,India",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

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
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-violet-800 dark:text-violet-300 mb-3"
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-violet-500 rounded mx-auto mb-10"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-violet-600 dark:text-violet-300 max-w-lg mx-auto mb-16"
          >
            Feel free to reach out for collaboration opportunities or just to say hello!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              className="md:col-span-1 space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-violet-100 dark:bg-violet-900/30 text-violet-500 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-violet-800 dark:text-violet-300">{item.label}</h3>
                    <p className="text-violet-600 dark:text-violet-300">{item.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Social Media */}
              <motion.div
                variants={itemVariants}
                className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-violet-800 dark:text-violet-300 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/Iconic022/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/gadaveni-nithin-6b4a42280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.25 0h-20.5c-.69 0-1.25.56-1.25 1.25v21.5c0 .69.56 1.25 1.25 1.25h20.5c.69 0 1.25-.56 1.25-1.25v-21.5c0-.69-.56-1.25-1.25-1.25zM7.5 20h-2.5v-11h2.5v11zm-1.25-12.65c-.8 0-1.45-.65-1.45-1.45s.65-1.45 1.45-1.45 1.45.65 1.45 1.45-.65 1.45-1.45 1.45zm11.95 12.65h-2.5v-5.75c0-1.34-.49-2.25-1.7-2.25-1.03 0-1.66.69-1.94 1.36-.1.25-.13.58-.13.92v5.72h-2.5v-11h2.5v1.62h.03c.35-.5.96-.98 1.75-.98 1.3 0 2.4.88 2.4 2.7v7.66z"/>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              className="md:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-violet-800 dark:text-violet-300">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-white dark:bg-slate-800 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-violet-800 dark:text-violet-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 bg-white dark:bg-slate-800 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-violet-800 dark:text-violet-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 bg-white dark:bg-slate-800 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-violet-800 dark:text-violet-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-white dark:bg-slate-800 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    rows={6}
                    required
                  />
                </div>

                <div className="space-x-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3 px-6 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors focus:outline-none"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
