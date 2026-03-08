import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, X, Eye } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AssetVerse",
      description:
        "A full-featured asset management platform built with the MERN stack, designed for companies to manage assets, handle requests and approvals, and control access through role-based dashboards.",
      image: "https://i.ibb.co/BKtZ1kYk/asssetvers.png",
      category: "Enterprise Asset Management",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Authentication",
        "JWT",
        "Stripe",
        "Tailwind CSS",
      ],
      liveLink: "https://asset-verse-mobin.pages.dev",
      githubLink: "https://asset-verse-clients.netlify.app/",
      mainTech:
        "MERN Stack with Firebase Authentication, JWT Authorization, Role-Based Access Control, and Subscription Payment System with Stripe",
      challenges:
        "Designing a secure role-based system for Admin, HR and Employees, building asset request and approval workflows, managing company assets efficiently, and integrating Stripe for subscription-based payments.",
      improvements:
        "Planned features include real-time asset notifications, advanced reporting and analytics dashboard, performance optimization, and future mobile application support.",
    }
  ];

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-[#0f172a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover rounded-t-2xl" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{project.category}</Badge>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Key Challenges</h3>
                <p className="text-sm text-muted-foreground">{project.challenges}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Future Roadmap</h3>
                <p className="text-sm text-muted-foreground">{project.improvements}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" id="projects">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-mono font-bold tracking-[0.3em] text-xs uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-4">
            Highlighted <span className="gradient-text">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A deep dive into my most comprehensive full-stack application built with the MERN stack.
          </p>
        </motion.div>

        {/* Centered Single Project Card */}
        <div className="flex justify-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="w-full max-w-2xl"
            >
              <Card className="group bg-card/50 backdrop-blur-md border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white border-none">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-secondary rounded-md text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div className="flex gap-4">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <Button
                      variant="link"
                      className="text-primary font-bold uppercase tracking-tighter hover:no-underline flex items-center gap-2 group/btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      Case Study <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;