import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/teamData";
import { ExternalLink, Github, Layers, Play, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "custom") return project.category === "custom";
    if (filter === "ecommerce") return project.category === "ecommerce";
    if (filter === "enterprise") return project.category === "dashboards" || project.category === "erp-crm";
    return true;
  });

  return (
    <div className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary pt-24">
      <Navbar />

      {/* Hero section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image with Radial Mask & Grayscale Effect */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/team-photo.jpg"
            alt="S5 Web Devs Team Background"
            className="w-full h-full object-cover opacity-25 dark:opacity-[0.12] filter grayscale contrast-115 transition-opacity duration-700"
          />
          {/* Gradients to blend image edges with the page background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,hsl(var(--background))_80%)] z-20" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider"
            >
              <Star size={14} className="fill-primary/20" />
              Our Portfolio
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight"
            >
              Completed Formats & <br />
              <span className="text-gradient">Production-Grade Applications</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              Browse our catalog of custom B2B interfaces, secure school portals, wellness Shopify sites, and taxi scheduling databases.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-t border-b border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {[
              { id: "all", label: "All Projects" },
              { id: "custom", label: "Custom Software" },
              { id: "ecommerce", label: "E-Commerce Storefronts" },
              { id: "enterprise", label: "Dashboards & ERPs" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-gradient-primary text-primary-foreground shadow-md shadow-primary/10"
                    : "bg-glass hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-primary flex flex-col justify-between"
                >
                  {/* Visual Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center select-none group-hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden`}>
                    {project.screenshot.startsWith("/") ? (
                      <img 
                        src={project.screenshot} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="relative z-10 text-6xl filter drop-shadow-md">{project.screenshot}</span>
                    )}
                    <div className="absolute top-4 right-4 text-[10px] px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-md font-semibold text-foreground border border-border/50 uppercase tracking-wider">
                      {project.category.replace("-", " ")}
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div className="space-y-5">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Features Bullet List */}
                      <div className="space-y-1.5">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Key Deliverables</p>
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
                            className="text-[10px] px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground font-semibold"
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
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline hover:translate-x-0.5 transition-transform"
                      >
                        <ExternalLink size={13} />
                        View Live Website
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 md:py-28 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Let's launch your next project
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Our specialists collaborate to engineer pixel-perfect styling layout vectors, robust backend databases, and secure desktop integrations.
            </p>
            <div className="pt-4">
              <a
                href="mailto:zenulwork@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-95 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Start Collaboration
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
