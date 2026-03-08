import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // GSAP ScrollTrigger integration
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.lagSmoothing(0);

        // Check theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            setDarkMode(false);
        }

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-body transition-colors duration-300 min-h-screen flex flex-col bg-pattern-dots">
            <Header darkMode={darkMode} toggleTheme={toggleTheme} />
            <main className="flex-grow">
                <Hero />
                <About />
                <Services />
                <Process />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;