'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiBriefcase } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
          animate={{
            background: [
              'linear-gradient(to bottom right, #EEF2FF, #F3E8FF, #FCE7F3)',
              'linear-gradient(to bottom right, #F3E8FF, #FCE7F3, #EEF2FF)',
              'linear-gradient(to bottom right, #FCE7F3, #EEF2FF, #F3E8FF)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {[
            { x: 20, y: 20, size: 80 },
            { x: 60, y: 15, size: 60 },
            { x: 10, y: 90, size: 100 },
            { x: 70, y: 20, size: 80 },
            { x: 80, y: 50, size: 120 },
            { x: 40, y: 35, size: 90 },
          ].map((element, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-gradient-to-r from-indigo-200/30 to-purple-200/30 backdrop-blur-3xl"
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
                left: `${element.x}%`,
                top: `${element.y}%`,
              }}
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Floating circles */}
        {[
          { size: 80, x: 20, y: 30, duration: 12, delay: 0 },
          { size: 60, x: 70, y: 40, duration: 15, delay: 2 },
          { size: 100, x: 40, y: 60, duration: 18, delay: 4 },
          { size: 70, x: 80, y: 20, duration: 14, delay: 6 },
          { size: 90, x: 30, y: 80, duration: 16, delay: 8 },
          { size: 50, x: 60, y: 70, duration: 13, delay: 10 },
        ].map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-200/30 to-purple-200/30 backdrop-blur-sm"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: `${circle.x}%`,
              top: `${circle.y}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: circle.delay,
            }}
          />
        ))}
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}>
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)',
            }}
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-full text-white">
                  <FiMail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-indigo-600 font-medium">Email</p>
                  <a
                    href="mailto:aeluzvillanueva@gmail.com"
                    className="text-gray-900 hover:text-indigo-600 transition-colors"
                  >
                    aeluzvillanueva@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-full text-white">
                  <FiMapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-indigo-600 font-medium">Location</p>
                  <span className="text-gray-900">Palauig, Zambales, Philippine</span>
                </div>
              </motion.div>
            </div>

            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
                Connect on Social Media
              </h3>
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/pegasus430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">GitHub</span>
                  <FiGithub className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aeolus-villanueva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">LinkedIn</span>
                  <FiLinkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:aeluzvillanueva@gmail.com"
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Email</span>
                  <FiMail className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-indigo-100 max-w-md w-full"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.2
                  }}
                  className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white"
                >
                  <FiBriefcase className="h-8 w-8" />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Available for Opportunities
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-6 text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I'm currently open to new opportunities and would love to hear from you.
                  Feel free to reach out through any of the contact methods above.
                </motion.p>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Animated background particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    {[
                      { x: -30, y: -20, delay: 0 },
                      { x: 20, y: -40, delay: 0.5 },
                      { x: -40, y: 30, delay: 1 },
                      { x: 30, y: 20, delay: 1.5 },
                      { x: -20, y: -30, delay: 2 },
                    ].map((particle, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
                        initial={{ 
                          x: particle.x, 
                          y: particle.y,
                          opacity: 0 
                        }}
                        animate={{ 
                          x: particle.x * -1, 
                          y: particle.y * -1,
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: particle.delay,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Glowing effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-md"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main button */}
                  <motion.button
                    className="relative flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full w-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Animated dot */}
                    <motion.div 
                      className="w-3 h-3 bg-white rounded-full mr-2"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Button text with shine effect */}
                    <span className="text-sm font-medium relative z-10">Available for hire</span>
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.button>
                </motion.div>
                
                <motion.div 
                  className="mt-6 grid grid-cols-3 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {['Full-time', 'Freelance', 'Remote'].map((type, index) => (
                    <motion.div 
                      key={type}
                      className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 text-xs font-medium px-3 py-2 rounded-full text-center border border-indigo-100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {type}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 