'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const skills = [
  { name: 'Python', color: '#61DAFB' },
  { name: 'PHP', color: '#339933' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Ruby', color: '#61DAFB' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Vue', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-gray-900 to-purple-900/20 z-10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6">
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Hi, I&apos;m <span className="text-indigo-400">Aeolus Villanueva</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6"
            >
              Full Stack Engineer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 max-w-xl text-justify"
            >
              Seasoned Full Stack Software Developer with over 8 years of comprehensive experience in designing, developing, and maintaining dynamic web
              applications. Proven ability to optimize system performance through various server configurations and deliver scalable, high-quality software solutions. Excellent problem-solving skills and a collaborative team player committed to
              continuous learning and innovation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              
              <motion.a
                href="/AeolusVillanueva.pdf"
                download
                className="px-8 py-3 bg-transparent text-white rounded-full font-medium border border-indigo-500 hover:bg-indigo-500/10 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="text-indigo-400" />
                Download Resume
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center lg:justify-start space-x-6 mb-8"
            >
              <motion.a
                href="https://github.com/pegasus430"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ y: -5 }}
              >
                <FiGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aeolus-villanueva/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ y: -5 }}
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:aeluzvillanueva@gmail.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ y: -5 }}
              >
                <FiMail className="w-6 h-6" />
              </motion.a>
            </motion.div>
            
            {/* Skills Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative group"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div
                    className="px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                    style={{
                      boxShadow: `0 0 20px ${skill.color}33`,
                    }}
                  >
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto lg:w-96 lg:h-96">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-2 rounded-full bg-gray-900 z-10" />
              <Image
                src="/2222.png"
                alt="Profile"
                fill
                className="rounded-full object-cover z-20"
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-indigo-500 z-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg p-4 shadow-lg z-30"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Available for hire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 