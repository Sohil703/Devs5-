import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/teamData";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-gradient">
              Our Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              Explore our portfolio of production-grade client platforms, internal ERP dashboards, and customizable B2C applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {projects.slice(0, 2).map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-primary flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center select-none group-hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden`}>
                  {project.screenshot.startsWith("/") ? (
                    <img 
                      src={project.screenshot} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="relative z-10 text-6xl filter drop-shadow-md">{project.screenshot}</span>
                  )}
                  <div className="absolute top-4 right-4 text-[10px] px-2.5 py-0.5 rounded-full bg-background/60 backdrop-blur-md font-semibold text-foreground border border-border/50 uppercase tracking-wider">
                    {project.category.replace("-", " ")}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features Bullet List */}
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Key Features</p>
                      <ul className="list-disc list-inside text-xs text-muted-foreground/90 space-y-1 pl-1">
                        {project.features.map((feat, fi) => (
                          <li key={fi} className="leading-tight">{feat}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-6 border-t border-border/40 mt-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-95 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              View More Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
