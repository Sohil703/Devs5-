import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Briefcase, MapPin, Calendar, CheckCircle2, Heart, Award, Zap, Laptop, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const perks = [
  {
    icon: Laptop,
    title: "100% Remote / Hybrid Work",
    description: "Work comfortably from your home or choose a hybrid setup. We value flexibility and deliverables over micro-management."
  },
  {
    icon: Zap,
    title: "Modern Technology Stack",
    description: "Build layouts using React, Next.js, FastAPI, Unity, and Tauri. Stay on the cutting edge of industry-grade framework tools."
  },
  {
    icon: Award,
    title: "Skills & Career Growth",
    description: "Access training modules, team synergy discussions, and collaborate directly with senior specialists to expand your engineering limits."
  },
  {
    icon: Heart,
    title: "Balanced Work Culture",
    description: "Transparent milestones, weekend pauses, and open communication lines. We focus on building products without burner schedules."
  }
];

const positions = [
  {
    id: "frontend-dev",
    title: "React / Frontend Developer",
    type: "Remote (India)",
    experience: "2-4 Years",
    description: "We are looking for a passionate Frontend Developer skilled in React, TypeScript, and modern styling libraries to turn high-fidelity mockups into modular, high-performance browser modules.",
    requirements: [
      "Deep understanding of React state management, hooks, and clean components layout.",
      "Proficient in TypeScript, HTML5, CSS3, and utility frameworks like Tailwind CSS/Bootstrap.",
      "Familiarity with Framer Motion, micro-animations, and responsive viewports debugging.",
      "Bonus: Knowledge of Tauri desktop wrappers or cross-platform mobile Flutter architectures."
    ]
  },
  {
    id: "backend-eng",
    title: "Python Backend & Web Scraper Engineer",
    type: "Remote (India)",
    experience: "2+ Years",
    description: "Looking for a Backend Specialist to design scalable databases schemas, construct performant REST APIs, and maintain high-efficiency scraping pipelines.",
    requirements: [
      "Strong coding proficiency in Python and asynchronous frameworks (FastAPI, Django, Scrapy).",
      "Experience bypassing CAPTCHAs, managing rotating proxy nets, and extracting web data efficiently.",
      "Knowledge of database setups (MongoDB, PostgreSQL, SQLite) and indexing optimization.",
      "Comfortable configuring REST endpoints, JWT logins, and CORS server permissions."
    ]
  },
  {
    id: "unity-dev",
    title: "Unity Game Developer",
    type: "Project-Based (Contract)",
    experience: "2+ Years",
    description: "Join us in programming interactive puzzle, hypercasual, and shooter mechanics. Focus on C# scripting, rendering performance, and cross-platform mobile packaging.",
    requirements: [
      "Excellent logical scripting capabilities in C# within the Unity Editor framework.",
      "Experience optimizing mobile games for drawing batches, frame rate, and asset packaging.",
      "Familiarity with shader graphs, collider physics engines, and dynamic UI panels integration.",
      "A passion for creating highly polished and satisfying gameplay loops."
    ]
  }
];

const Careers = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary pt-24">
      <Navbar />

      {/* Hero Header Section */}
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
              <Briefcase size={14} />
              Careers at CCH
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight"
            >
              Build the Future <br />
              <span className="text-gradient">With CH Solution</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              We are a collaborative squad of designers and programmers. Join us to build production-grade web systems, desktop wrappers, and interactive gameplay interfaces.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Perks / Benefits Section */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-muted/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Why Partner With Us?</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              We focus on premium deliverables, quality workspace support, and balanced execution timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 bg-glass border border-border/80 rounded-2xl flex gap-4 items-start shadow-sm hover:border-primary/20 transition-all hover:glow-primary"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <perk.icon size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-foreground">{perk.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{perk.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 border-t border-border/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">Explore Open Positions</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              Find a path that fits your coding experience and skills.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {positions.map((pos) => {
              const isExpanded = expandedId === pos.id;
              return (
                <div 
                  key={pos.id} 
                  className="bg-glass border border-border/80 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors shadow-sm"
                >
                  {/* Position Summary bar */}
                  <div 
                    onClick={() => toggleExpand(pos.id)}
                    className="p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-1.5 text-left">
                      <h3 className="font-display font-bold text-base sm:text-lg text-foreground hover:text-primary transition-colors">
                        {pos.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-semibold flex items-center gap-1">
                          <MapPin size={10} />
                          {pos.type}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                          Experience: {pos.experience}
                        </span>
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Position Details expanded block */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border/40 bg-muted/10 overflow-hidden"
                      >
                        <div className="p-6 space-y-5 text-left">
                          <div className="space-y-1.5">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Description</h4>
                            <p className="text-xs text-foreground/90 leading-relaxed">{pos.description}</p>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Core Requirements</h4>
                            <ul className="space-y-1.5 pl-1">
                              {pos.requirements.map((req, ri) => (
                                <li key={ri} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                                  <CheckCircle2 size={13} className="text-primary/70 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2">
                            <a
                              href={`mailto:zenulwork@gmail.com?subject=Application for ${encodeURIComponent(pos.title)}`}
                              className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
                            >
                              <span>Apply for this position</span>
                              <ArrowRight size={13} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Don't see a matching position?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              We are always on the lookout for skilled React frontend developers, API engineers, and visual branding designers. Send us your resume!
            </p>
            <div className="pt-4">
              <a
                href="mailto:zenulwork@gmail.com?subject=General Application - Developer/Designer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-95 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Send General Resume
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

export default Careers;
