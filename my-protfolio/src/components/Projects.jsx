import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import ECOMIMAGE from "../assets/Ecom.png";
import BLOG from "../assets/blog.png";
import PASTE from "../assets/paste.png";

// Project data
const projects = [
    {
        id: 1,
        name: "E-Commerce App",
        technologies: "MERN Stack",
        image: ECOMIMAGE,
        github: "https://github.com/GoutamPatra",
    },
    {
        id: 2,
        name: "Blog Application",
        technologies: "MERN Stack",
        image: BLOG,
        github: "https://github.com/GoutamPatra",
    },
    {
        id: 3,
        name: "Paste Application",
        technologies: "MERN Stack",
        image: PASTE,
        github: "https://github.com/GoutamPatra",
    }
];

// Animation variant
const fadeInUp = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

const Projects = () => {
    return (
        <div className='bg-black text-white py-22' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, {
                            once: false,
                            margin: '0px 0px -100px 0px',
                        });

                        return (
                            <motion.div
                                ref={ref}
                                key={project.id}
                                variants={fadeInUp}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className='bg-gray-800 p-6 rounded-lg transition-all duration-300 
                                hover:scale-105 hover:shadow-[0_0_10px_6px_rgba(20,191,255,0.6)]'
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className='rounded-lg mb-4 w-full h-60 object-cover'
                                />
                                <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                                <p className='text-gray-400 mb-4'>{project.technologies}</p>
                                <a
                                    href={project.github}
                                    className='inline-block bg-gradient-to-r from-green-400 
                                    to-blue-500 text-white px-4 py-2 rounded-full 
                                    transform transition-transform duration-300 hover:scale-95'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    GitHub
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
