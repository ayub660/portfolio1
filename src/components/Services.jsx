import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".services-blob-1", {
        x: 20,
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".services-blob-2", {
        x: -30,
        y: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const services = [
    {
      icon: "ri-reactjs-line",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React.js, Tailwind CSS, and DaisyUI. Implementing modern features like React Router, TanStack Query, and Firebase Authentication.",
      features: [
        "React.js Applications",
        "Responsive Design",
        "Component Libraries",
        "State Management",
      ],
    },
    {
      icon: "ri-nodejs-line",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side applications using Node.js and Express.js. Implementing JWT authentication, role-based access control, and secure payment processing with Stripe.",
      features: [
        "REST APIs",
        "Database Integration",
        "Authentication Systems",
        "Payment Processing",
      ],
    },
    {
      icon: "ri-database-2-line",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      title: "Database & Backend Systems",
      description:
        "Designing scalable MongoDB databases and building secure backend systems with Express.js. Implementing Firebase authentication, JWT authorization, and real-time features for full-stack applications.",
      features: [
        "MongoDB Design",
        "Secure Authentication Systems",
        "API Development & Integration",
        "Real-time Features",
      ],
    },

    {
      icon: "ri-shield-check-line",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      title: "Authentication & Security",
      description:
        "Implementing secure user authentication with Firebase Auth and JWT tokens. Building role-based systems (HR/Employee roles) with proper authorization and cookie-based session management.",
      features: [
        "User Authentication",
        "Role-based Access",
        "Security Implementation",
        "Session Management",
      ],
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="flex-grow flex flex-col justify-start px-4 md:px-12 py-12 relative overflow-hidden pt-24"
      id="services"
    >
      {/* Background Blobs */}
      <div className="services-blob-1 absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="services-blob-2 absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div 
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <span className="text-primary font-display font-bold tracking-[0.2em] text-sm uppercase mb-2 block">
            Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            What I <span className="text-primary">Offer</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed max-w-2xl mx-auto">
            Comprehensive MERN stack development services to bring your ideas to life. From concept to deployment, 
            I provide end-to-end solutions for modern web applications.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-surface-light dark:bg-surface-dark border-transparent hover:border-primary/20 transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center ${service.color} text-3xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <i className={service.icon}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3">{service.title}</h3>
                      <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;