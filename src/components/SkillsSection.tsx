import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const skillGroups = [
  {
    title: "Frontend & Mobile Dev",
    icon: Monitor,
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "JavaScript & TypeScript", level: 92 },
      { name: "HTML5 / CSS3 / Tailwind CSS", level: 94 },
      { name: "Bootstrap & Material UI", level: 91 },
      { name: "Flutter Mobile Apps", level: 80 }
    ]
  },
  {
    title: "Backend, Game Dev & DevOps",
    icon: Server,
    skills: [
      { name: "Python & Django/FastAPI", level: 95 },
      { name: "Unity Game Engine & C#", level: 93 },
      { name: "Node.js & NestJS Backend", level: 91 },
      { name: "Databases (MongoDB/SQL/Redis)", level: 91 },
      { name: "DevOps (Docker/AWS/Nginx)", level: 88 }
    ]
  },
  {
    title: "Design & Desktop Utilities",
    icon: Wrench,
    skills: [
      { name: "Adobe Photoshop & Illustrator", level: 94 },
      { name: "Canva & Creative Layouts", level: 90 },
      { name: "Git & Version Control", level: 90 },
      { name: "CorelDRAW & Print Media", level: 88 },
      { name: "Tauri Desktop & Rust", level: 80 }
    ]
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-gradient">
              Our Core Skills
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              A detailed breakdown of our combined technical proficiency across web frameworks, server integrations, and development workflow tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillGroups.map((group, gi) => {
              const IconComponent = group.icon;
              return (
                <div key={group.title} className="bg-glass p-6 rounded-2xl border border-border/80 shadow-md">
                  <h3 className="font-display text-lg font-bold text-foreground mb-6 flex items-center gap-2.5 border-b border-border/50 pb-3">
                    <IconComponent size={18} className="text-primary" />
                    {group.title}
                  </h3>
                  <div className="space-y-5">
                    {group.skills.slice(0, 3).map((skill, si) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.15 + (gi * 3 + si) * 0.05, duration: 0.4 }}
                      >
                        <div className="flex justify-between mb-1.5 text-xs">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-primary"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ delay: 0.3 + (gi * 3 + si) * 0.05, duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-95 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              View More Skills
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
