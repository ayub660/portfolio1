import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

const Header = ({ darkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'process', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Services', 'Process', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 w-full py-6 px-4 md:px-12 flex justify-between items-center z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20"
      >
        <motion.a
          href="#home"
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-neon">
            A
          </div>
          <span className="font-display font-bold text-xl tracking-wide uppercase">shahriar</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.a
                key={item}
                className={`${isActive
                  ? 'text-primary font-bold relative'
                  : 'hover:text-primary'
                  } transition-all duration-300 cursor-pointer`}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {item}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="p-2 rounded-full bg-surface-light dark:bg-surface-dark shadow-sm hover:text-primary transition-colors"
            onClick={toggleTheme}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${darkMode ? 'ri-sun-line' : 'ri-moon-line'}`}></i>
            </motion.div>
          </Button>

          {/* Desktop Social Links */}
          <div className="hidden md:flex gap-3">
            {[
              { icon: 'ri-github-fill', href: 'https://github.com/ayub660' },
              { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/' },
              { icon: 'ri-twitter-x-line', href: 'https://x.com/' }
            ].map((social, index) => (
              <motion.a
                key={social.icon}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark shadow-sm hover:text-primary hover:-translate-y-1 transition-all"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-2 text-2xl relative z-50"
            onClick={toggleMobileMenu}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-4-line'}`}></i>
            </motion.div>
          </Button>
        </div>
      </motion.header >

      {/* Mobile Menu Overlay */}
      < AnimatePresence >
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background-light dark:bg-background-dark z-40 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-6 mb-8">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.toLowerCase();
                    return (
                      <motion.a
                        key={item}
                        className={`${isActive
                          ? 'text-primary font-bold border-l-4 border-primary pl-4'
                          : 'text-text-main-light dark:text-text-main-dark hover:text-primary pl-4'
                          } transition-all duration-300 cursor-pointer text-lg font-medium py-2 border-b border-gray-200/20 dark:border-gray-700/20 relative`}
                        href={`#${item.toLowerCase()}`}
                        onClick={closeMobileMenu}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item}
                        {isActive && (
                          <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Mobile Social Links */}
                <div className="mt-auto pb-8">
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4 uppercase tracking-wider font-bold">
                    Connect with me
                  </p>
                  <div className="flex gap-4">
                    {[
                      { icon: 'ri-github-fill', href: 'https://github.com/ayub660', label: 'GitHub' },
                      { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/', label: 'LinkedIn' },
                      { icon: 'ri-twitter-x-line', href: 'https://x.com/', label: 'Twitter' }
                    ].map((social, index) => (
                      <motion.a
                        key={social.icon}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm hover:text-primary hover:bg-primary/10 transition-all"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                      >
                        <i className={`${social.icon} text-xl`}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )
        }
      </AnimatePresence >
    </>
  );
};

export default Header;