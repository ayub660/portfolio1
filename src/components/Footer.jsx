import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-full py-8 px-4 text-center border-t border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark">
        <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
          © 2025 Shahriar Ayub - MERN Stack Developer. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;