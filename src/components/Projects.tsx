'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Emporix',
    description: 'Emporix provides the most flexible commerce technology for manufacturing and retail.',
    image: '/emporix.png',
    technologies: ['React', 'Django', 'Vue.js', 'Spring Boot', 'AWS', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://www.emporix.com/',
  },
  {
    title: 'Shelton AI',
    description: 'Shelton AI automated our back-office, cutting costs and freeing up resources for strategic tasks.',
    image: '/sheltonai.png',
    technologies: ['Django', 'AWS', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://sheltonai.com',
  },
  {
    title: 'Getgamba',
    description: 'gamba!は、日々の業務報告を簡単に行える日報アプリです。直感的な操作と豊富な機能で、報告業務を効率化し、チームの連携を強化します。',
    image: '/gamba.png',
    technologies: ['Ruby','React',  'Firebase', 'Material-UI'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://getgamba.com',
  },
  {
    title: 'Tuscany Leather',
    description: 'Wide range of Italian leather goods. Choose our leather bags, briefcases and leather backpacks.',
    image: '/tuscanyleather.png',
    technologies: ['Next.js', 'Azure' , 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://www.tuscanyleather.it/en',
  },
  {
    title: 'Southwick Storage',
    description: 'Southwick Storage, Easy online booking and instant 24 hour access* with our state of the art technology, or call us. ',
    image: '/southwickstorage.png',
    technologies: ['Vue.js', 'Laravel','TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://southwickstorage.co.uk/',
  },
  {
    title: 'MondoConv',
    description: 'Mondo Convenienza, home fumishings at unbeatable prices, support 24 hours access and weekend too',
    image: '/mondo.png',
    technologies: ['React', 'Firebase', 'Azure', 'Material-UI'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://www.mondoconv.it/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <span className="sr-only">Live Demo</span>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 