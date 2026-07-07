import { motion } from "framer-motion";
import { Monitor, Server, Wrench, Shield, Check, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skillGroups = [
  {
    title: "Frontend & Mobile Dev",
    icon: Monitor,
    description: "Building responsive, highly accessible browser portals and native mobile layouts.",
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
    description: "Designing fast API endpoints, scalable data pipelines, and immersive games.",
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
    description: "Crafting graphic brand identities, local app wrappers, and workflow controls.",
    skills: [
      { name: "Adobe Photoshop & Illustrator", level: 94 },
      { name: "Canva & Creative Layouts", level: 90 },
      { name: "Git & Version Control", level: 90 },
      { name: "CorelDRAW & Print Media", level: 88 },
      { name: "Tauri Desktop & Rust", level: 80 }
    ]
  }
];

const synergyMatrix = [
  {
    name: "Sohil Sumra",
    role: "FrontEnd Developer",
    contribution: "React components, responsive grid styling, Tauri desktop integration, and user interaction logic."
  },
  {
    name: "Madni Haradwala",
    role: "Back-end Developer",
    contribution: "Scalable python crawlers, API routing, MongoDB schema design, and server administration scripts."
  },
  {
    name: "Atesham Sumra",
    role: "Web Developer",
    contribution: "Bootstrap layout design, cross-browser compatibility debugging, jQuery script optimization, and Flutter layouts."
  },
  {
    name: "Zenul Sumara",
    role: "Unity Game Developer",
    contribution: "C# game loop scripting, physics collisions, layout optimization, and mobile game UI builds."
  },
  {
    name: "Arman Sumra",
    role: "Graphic Designer",
    contribution: "Vector brand design, high-fidelity landing assets, UI mockups, and festival promo marketing templates."
  }
];

const Skills = () => {
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
              <Award size={14} />
              Technical Competence
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight"
            >
              Technologies We Command <br />
              <span className="text-gradient">& Software Expertise</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              An analytical breakdown of our stack coverage across interactive client frameworks, secure database systems, and asset design platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Skills breakdown section */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-muted/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillGroups.map((group, gi) => {
              const IconComponent = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1, duration: 0.5 }}
                  className="bg-glass p-8 rounded-3xl border border-border/80 shadow-md hover:border-primary/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2.5 border-b border-border/50 pb-3">
                      <IconComponent size={20} className="text-primary" />
                      {group.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                      {group.description}
                    </p>
                    <div className="space-y-5">
                      {group.skills.map((skill, si) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1.5 text-xs">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <span className="text-muted-foreground font-semibold">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + si * 0.05, duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Synergy Matrix section */}
      <section className="py-16 md:py-24 border-t border-border/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Specialist Skill Synergy</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              How our team's distinct focus areas integrate to deliver complete end-to-end applications.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {synergyMatrix.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-glass border border-border/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-primary/20 transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <h3 className="font-display text-base font-bold text-foreground">{item.name}</h3>
                  </div>
                  <p className="text-xs text-primary font-semibold pl-4 uppercase tracking-wider">{item.role}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed sm:max-w-xl pl-4 sm:pl-0">
                  {item.contribution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Built to Standards</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              We write production-grade code designed to be reliable, secure, and maintainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3 p-6 bg-glass border border-border rounded-2xl hover:glow-primary hover:border-primary/20 transition-all">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit">
                <Shield size={20} />
              </div>
              <h3 className="font-display font-bold text-sm text-foreground">Secure Implementations</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Adhering to security best practices like sanitized state payloads, JWT token management, CORS policy setups, and path restrictions.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-glass border border-border rounded-2xl hover:glow-primary hover:border-primary/20 transition-all">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit">
                <Check size={20} />
              </div>
              <h3 className="font-display font-bold text-sm text-foreground">Continuous Quality</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Pre-commit linting checks, modular file layout systems, TypeScript strict compiler configurations, and multi-viewport testing.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-glass border border-border rounded-2xl hover:glow-primary hover:border-primary/20 transition-all">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit">
                <Award size={20} />
              </div>
              <h3 className="font-display font-bold text-sm text-foreground">Code Cleanliness</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Writing semantic HTML5 components, well-documented API logic layers, structured contexts, and highly reusable React hooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Looking for our software stack?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Hire our team to build high-performance React client apps with clean backend FastAPI interfaces and secure database queries.
            </p>
            <div className="pt-4">
              <a
                href="mailto:zenulwork@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-95 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Request Consultation
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

export default Skills;
