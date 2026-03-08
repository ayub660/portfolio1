import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for background blobs
      gsap.to(".bg-blob-1", {
        x: 30,
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".bg-blob-2", {
        x: -20,
        y: 30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={heroRef}
      className="flex-grow flex flex-col justify-center px-4 md:px-12 py-12 relative overflow-hidden pt-24"
      id="home"
    >
      {/* Background Blobs */}
      <div className="bg-blob-1 absolute top-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="bg-blob-2 absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          <motion.div className="space-y-2" variants={itemVariants}>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
            >
              I'm Shahriar Ayub <br />
              <motion.span
                className="text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                MERN Stack Developer
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            I'm a passionate MERN Stack Developer with expertise in building
            full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
            I create responsive, scalable, and high-performance web solutions.
          </motion.p>

          {/* Social and Skills Section - Resume Button remove kora hoyeche */}
          <motion.div
            className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-gray-200/10"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <span className="text-xs font-display tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark font-bold">
                Find me on
              </span>
              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: "ri-github-line", href: "https://github.com/ayub660" },
                  { icon: "ri-linkedin-fill", href: "https://www.linkedin.com" },
                  { icon: "ri-twitter-x-line", href: "https://x.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    className="w-12 h-12 flex items-center justify-center rounded bg-surface-light dark:bg-surface-dark shadow-lg border border-transparent hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-display tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark font-bold">
                My Best Skill On
              </span>
              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: "ri-reactjs-line", color: "text-blue-400", title: "React.js" },
                  { icon: "ri-database-2-line", color: "text-green-600", title: "MongoDB" },
                  { icon: "ri-javascript-line", color: "text-yellow-400", title: "JavaScript" },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="w-12 h-12 flex items-center justify-center rounded bg-surface-light dark:bg-surface-dark shadow-lg group cursor-default"
                    title={skill.title}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <i className={`${skill.icon} text-xl ${skill.color}`}></i>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Image Section */}
        <motion.div
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
          variants={itemVariants}
        >
          <motion.div
            ref={imageRef}
            className="relative w-full max-w-md aspect-[4/5] bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden group border border-gray-200/10"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none">
              <span className="text-4xl md:text-5xl font-display font-black uppercase text-outline tracking-widest opacity-10">
                Developer
              </span>
            </div>

            <motion.img
              alt="Portrait of Shahriar Ayub"
              className="absolute inset-0 w-full h-full object-cover z-10"
              src="https://i.ibb.co/prvgcJdb/1772373517478.png"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />

            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent z-15"></div>

            <div className="absolute bottom-8 left-0 right-0 text-center z-20">
              <span className="block text-xl font-display font-bold text-white tracking-[0.3em] uppercase drop-shadow-lg">
                Shahriar Ayub
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;