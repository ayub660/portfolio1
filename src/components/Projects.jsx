import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, X, Eye } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AssetVerse",
      category: "Enterprise Asset Management",
      description: "A full-featured asset management platform built with the MERN stack, designed for companies to manage assets, handle requests and approvals, and control access through role-based dashboards.",
      images: [
        "https://i.ibb.co/BKtZ1kYk/asssetvers.png",
        "https://i.ibb.co/nsHRwDGS/sdgfsdg.png"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe"],
      liveLink: "https://asset-verse-clients.netlify.app",
      githubLink: "https://github.com/ayub660/Client-asset-verse",
      challenges: "Designing a secure role-based system and integrating Stripe for subscription payments.",
      improvements: "Planned real-time asset notifications and advanced reporting dashboard."
    },
    {
      id: 2,
      title: "CleanCity",
      category: "Community Service",
      description: "A community issue reporting portal where citizens can report local problems like waste or road damage. Features real-time status tracking and community engagement.",
      images: [
        "https://i.ibb.co/C5NcXk4g/Captusdfafre.png",
        "https://i.ibb.co/ZvryqdF/Captsdfsdgfure.png"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "DaisyUI"],
      liveLink: "https://reporting-portal-city.netlify.app",
      githubLink: "https://github.com/ayub660/b12-a10-clients",
      challenges: "Implementing a clean reporting form with image upload and status management.",
      improvements: "Google Maps integration for precise location tracking."
    }
  ];

  // Auto-slide logic: Changes image index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={project.images[0]} alt={project.title} className="w-full h-64 md:h-96 object-cover" />
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-4 right-4 bg-black/50 text-white rounded-full hover:bg-black/70">
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <Badge className="bg-primary/10 text-primary mt-2 border-primary/20">{project.category}</Badge>
            <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-xl">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(t => <Badge key={t} variant="secondary" className="bg-secondary/50">{t}</Badge>)}
              </div>
              <div className="flex gap-4 pt-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
                  <a href={project.liveLink} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-4" /> Live Demo</a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href={project.githubLink} target="_blank" rel="noreferrer"><Github className="mr-2 h-4" /> View Code</a>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div><h4 className="font-bold text-lg">Challenges</h4><p className="text-sm text-muted-foreground">{project.challenges}</p></div>
              <div><h4 className="font-bold text-lg">Future Roadmap</h4><p className="text-sm text-muted-foreground">{project.improvements}</p></div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" id="projects">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary uppercase tracking-widest font-mono text-xs">Portfolio</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-4">Recent <span className="gradient-text">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Exploring the intersection of design and full-stack performance.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              className="h-full"
            >
              <Card className="group h-full bg-card/40 backdrop-blur-md border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                {/* Image Slider Section */}
                <div className="relative h-60 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={project.images.length > 1 ? imgIndex : 0}
                      src={project.images.length > 1 ? project.images[imgIndex] : project.images[0]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Indicators for multiple images */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {project.images.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${imgIndex === i ? "w-4 bg-primary" : "w-1.5 bg-white/50"}`} />
                      ))}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white border-none shadow-lg">{project.category}</Badge>
                </div>

                <CardContent className="p-6 flex flex-col h-[calc(100%-15rem)]">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map(t => (
                      <span key={t} className="text-[10px] bg-secondary/80 text-secondary-foreground px-2.5 py-1 rounded-md uppercase font-bold tracking-wider border border-border">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <div className="flex gap-5">
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                        <Github size={20} />
                      </a>
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-bold text-primary flex gap-2 group/btn hover:no-underline"
                      onClick={() => setSelectedProject(project)}
                    >
                      CASE STUDY <Eye size={17} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;