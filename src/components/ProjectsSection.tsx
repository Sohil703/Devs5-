import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, Play } from "lucide-react";
import { projects } from "@/data/teamData";

const categories = [
  { value: "all", label: "All Projects" },
  { value: "erp-crm", label: "ERP & CRM" },
  { value: "dashboards", label: "Dashboards" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "custom", label: "Custom Apps" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

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

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filter === cat.value
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/10"
                    : "bg-secondary text-secondary-foreground hover:bg-muted border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-primary flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl select-none group-hover:scale-[1.02] transition-transform duration-300 relative`}>
                  <span className="relative z-10 filter drop-shadow-md">{project.screenshot}</span>
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
                    >
                      <Github size={12} />
                      Code Repository
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
