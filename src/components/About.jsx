import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-blob-1", {
        x: 20, y: -30, duration: 5, repeat: -1, yoyo: true, ease: "power2.inOut"
      });
      gsap.to(".about-blob-2", {
        x: -30, y: 20, duration: 4, repeat: -1, yoyo: true, ease: "power2.inOut"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "HTML / CSS", level: 95, icon: "ri-html5-line" },
    { name: "JavaScript (ES6+)", level: 92, icon: "ri-javascript-line" },
    { name: "React.js", level: 90, icon: "ri-reactjs-line" },
    { name: "Tailwind CSS", level: 88, icon: "ri-palette-line" },
    { name: "Node.js / Express.js", level: 85, icon: "ri-node-tree" },
    { name: "MongoDB", level: 82, icon: "ri-database-2-line" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 md:px-12 relative overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background Blobs */}
      <div className="about-blob-1 absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="about-blob-2 absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">Get to know me</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mt-2">
            About <span className="text-orange-500">M</span><span className="text-blue-400">e</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Side: Who I Am Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gray-500/10 dark:bg-gray-800/40 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-text-main-light dark:text-text-main-dark">Who I Am</h3>
            <div className="space-y-6 text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              <p>
                I'm a passionate <span className="text-primary font-semibold">MERN Stack Developer</span> with expertise in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I create responsive, scalable, and high-performance web solutions.
              </p>
              <p>
                From pixel-perfect frontends with HTML, CSS, and Tailwind to robust backend APIs with Node.js and Express, I deliver complete web solutions. I love turning ideas into reality with clean, maintainable code.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Skills Progress Bars */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <i className={`${skill.icon} text-orange-500 text-xl`}></i>
                    <span className="font-semibold text-text-main-light dark:text-text-main-dark">{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold text-text-muted-light dark:text-text-muted-dark">{skill.level}%</span>
                </div>

                {/* Progress Bar Background */}
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  {/* Animated Progress Fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;