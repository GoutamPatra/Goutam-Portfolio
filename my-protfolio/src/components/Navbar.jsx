import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section, div[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const linkClass = (id) =>
    `hover:text-gray-400 block md:inline ${activeSection === id ? 'text-blue-400 font-semibold' : ''}`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className='text-white px-8 md:px-16 lg:px-24 fixed w-full bg-white/10 z-50 backdrop-blur'>
      <div className='container py-3 flex justify-between items-center'>
        <a href="home" className='text-2xl font-bold'>Goutam Patra</a>

        {/* Hamburger Icon */}
        <button className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 items-center'>
          <a href="#home" className={linkClass('home')}>Home</a>
          <a href="#aboutme" className={linkClass('aboutme')}>About Me</a>
          <a href="#skills" className={linkClass('skills')}>Skills</a>
          <a href="#projects" className={linkClass('projects')}>Projects</a>
          <a href="#contact" className={linkClass('contact')}>Contact</a>

          {/* Reach Out Button + Toggle */}

        </div>
        <div className="flex items-center space-x-3">

          <a
            href="#contact"
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                transform transition-transform duration-300 hover:scale-105 px-3 py-1 rounded-full'
          >
            Reach Out
          </a>

          {/* Dark Mode Toggle Button */}
          <a href="#dark"
            onClick={() => setDarkMode(!darkMode)}
            className="text-yellow-300 dark:text-white hover:scale-110 transition"
            title="Toggle Dark/Light Mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden flex flex-col bg-black/80 text-white px-8 py-4 space-y-4'>
          <a href="#home" className={linkClass('home')} onClick={closeMenu}>Home</a>
          <a href="#aboutme" className={linkClass('aboutme')} onClick={closeMenu}>About Me</a>
          <a href="#skills" className={linkClass('skills')} onClick={closeMenu}>Skills</a>
          <a href="#projects" className={linkClass('projects')} onClick={closeMenu}>Projects</a>
          <a href="#contact" className={linkClass('contact')} onClick={closeMenu}>Contact</a>

          {/* Reach Out and Toggle (Mobile) */}
          <div className="flex items-center space-x-4 justify-between">
            <a
              href="#contact"
              className='bg-gradient-to-r from-green-400 to-blue-500 text-white text-center
                px-4 py-2 rounded-full w-full'
              onClick={closeMenu}
            >
              Reach Out
            </a>

            <button
              onClick={() => {
                setDarkMode(!darkMode);
                closeMenu();
              }}
              className="text-yellow-300 dark:text-white"
              title="Toggle Mode"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
