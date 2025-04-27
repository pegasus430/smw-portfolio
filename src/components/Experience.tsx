'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: 'GetGamba',
    position: 'Senior Full Stack Developer',
    period: '02/2022 - 12/2024',
    description: [
      "Developed and maintained full-stack applications using RoR and JavaScript/React.",
      "Designed and implemented RESTful APIs while ensuring high performance and responsiveness.",
      "Managed databases including MySQL and PostgreSQL to ensure data integrity and security.",
      "Deployed applications on Heroku and used Docker for containerization to streamline development and testing environments.",
      "Utilized Nginx for reverse proxy and load balancing for enhanced application performance.",
      "Collaborated with cross-functional teams to determine project requirements and deliver high-quality software solutions.",
    ] ,
    skills: ['React', 'RoR', 'MySQL', 'AWS', 'TypeScript', 'Docker']
  },
  {
    id: 2,
    company: 'Giftee Inc',
    position: 'Backend/DevOps Software Engineer',
    period: '11/2020 - 12/2022',
    description: [
      "Designed and developed a robust Python/Django application, ensuring high performance and scalability for critical business operations.",
      "Integrated PostgreSQL as the database backend, optimizing queries to enhance data processing and retrieval efficiency.",
      "Deployed the application to AWS EC2 instances, setting up SSL certification to secure communications and configuring an S3 bucket for efficient file storage.",
      "Engaged in continuous integration and deployment processes, ensuring timely and efficient software releases.",
      "Implemented comprehensive test cases to ensure code quality and system reliability, reducing potential bugs and enhancing maintainability.",
    ] ,
    skills: ['Python', 'React', 'PostgreSQL', 'AWS', 'TypeScript', 'Docker']
  },
  {
    id: 3,
    company: 'Jobilla',
    position: 'Fullstack Software Engineer',
    period: '08/2018 - 09/2020',
    description: [
      "Developed high-traffic web applications using Python, Node.js and React, enhancing user experience and system performance.",
      "Optimized database queries, which reduced load times by 40% and significantly improved data retrieval efficiency.",
      "Collaborated with cross-functional teams to design and implement user-centric features, boosting user satisfaction scores by 20%.",
      "Automated testing procedures, improving code quality and reducing bug incidences by 35%.",
      "Assisted in front-end development with JavaScript and CSS, enhancing website usability and visual appeal.",
    ] ,
    skills: ['Python', 'Node.js', 'React', 'AWS', 'TypeScript', 'Docker']
  },
  {
    id: 4,
    company: 'Brandnooz Media ',
    position: 'Web Developer',
    period: '09/2016 - 06/2018',
    description: [
      "Expertly designed and developed robust and scalable web applications, leveraging modern frontend technologies such as HTML5, CSS3, JavaScript (ES6+), and React.js to create intuitive and responsive user interfaces.",
      "Engineered efficient backend systems using Python, Node.js and Express, ensuring seamless integration with databases and enhancing server-side functionality and performance.",
      "Implemented and managed relational and NoSQL databases like PostgreSQL and MongoDB, optimizing data storage, retrieval, and overall database performance.",
      "Engineered backend APIs to scrape sports data from external sources by using Python, ensuring up-to-date information for users.",
      "Collaborated with cross-functional teams, including designers, product managers, and QA engineers, to gather requirements, perform code reviews, and ensure the delivery of high-quality software that met business objectives and user needs.",
    ] ,
    skills: ['Python', 'Node.js', 'React', 'AWS', 'Express', 'MongoDB']
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-indigo-500/50 to-purple-500/50"></div>

          {/* Experience items */}
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12"
            >
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-indigo-500 border-4 border-gray-900 z-10"
              ></motion.div>

              {/* Content */}
              <div className={`md:text-left ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FiBriefcase className="text-indigo-400 w-5 h-5" />
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-1">{exp.position}</h4>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FiCalendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="text-gray-300 mb-4 exp-description">{
                    exp.description.map((exp) => (
                      <li>{exp}</li>
                    ))
                    }
                    </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty column for timeline layout */}
              <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 