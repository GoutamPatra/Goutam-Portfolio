import React from 'react'
import ABOUT from '../assets/About.png'
import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg'
import JAVASCRIPT from '../assets/javascript.svg'
import NODEJS from '../assets/nodejs.svg'
import REACT from '../assets/react.svg'
import GITHUB from '../assets/github.svg'
import MONGODB from '../assets/mongodb.svg'
import { motion } from 'framer-motion';


const About = () => {
    return (
        <div className='bg-black text-white py-17' id='aboutme' >
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={ABOUT} alt="It's Here"
                        className='w-95 h-105 rounded object-cover mb-8 md:mb-0' />
                    <div className='flex-1'>
                        <p className='text-lg mb-8' >
                            Hi, I'm a passionate web developer focused on building clean, 
                            responsive, and user-friendly websites and applications. 
                            With experience in modern technologies like React, Vite, 
                            Tailwind CSS, and more, I enjoy turning ideas into real-world 
                            digital products. I'm always eager to learn new tools and create 
                            solutions that make a meaningful impact.
                        </p>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>

                                    </div>

                                </div>

                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Java Script</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>

                                    </div>

                                </div>

                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>

                                    </div>

                                </div>

                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Node JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>

                                    </div>

                                </div>

                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>C++</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'>

                                    </div>

                                </div>

                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>DSA</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12'>

                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-500 to-blue-600
                                transform transition-transform duration-300 hover:scale-110'>
                                    Fresher
                                </h3>
                                
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-500 to-blue-600
                                transform transition-transform duration-300 hover:scale-110'>
                                    3+ Projects Completed
                                </h3>
                                
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-500 to-blue-600
                                transform transition-transform duration-300 hover:scale-110'>
                                    5+
                                </h3>
                                <p>Happy Clints</p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* this my my logo section */}
                <div className='mt-12 flex justify-between '>
                    <motion.div
                    className=' grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 
                    gap-32 justify-items-center '
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    >
                       
                    <img src={HTML} alt="HTML Logo" className='w-20 h-20 opacity-100 transition-transform duration-200 hover:scale-130 ' />
                    <img src={CSS} alt="" className='w-20 h-20 opacity-100 transition-transform duration-200 hover:scale-130' />
                    <img src={JAVASCRIPT} alt="" className='w-20 h-20 opacity-100 transition-transform duration-200 hover:scale-130' />
                    <img src={NODEJS} alt="" className='w-20 h-20 opacity-100 transition-transform duration-200 hover:scale-130'/>
                    <img src={REACT} alt="" className='w-20 h-20 opacity-100 transition-transform duration-200 hover:scale-130'/>
                    <img src={GITHUB} alt="" className='w-20 h-20 opacity-100 transition-transform duration-200 hover:scale-130'/>
                    <img src={MONGODB} alt="" className='w-20 h-20 opacity-100 transition-transform duration-200 hover:scale-130'/>

                    </motion.div>
                
                    
                </div>
            </div>
        </div>
    )
}

export default About
