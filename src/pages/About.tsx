import { motion } from "framer-motion";
import { Code2, Layers, Users2, ShieldCheck, HeartHandshake, Target, Compass, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const highlights = [
  { 
    icon: Code2, 
    title: "Clean React Architecture",
    description: "Modular, reusable, and type-safe code written with TypeScript and modern best practices."
  },
  { 
    icon: Layers, 
    title: "Scalable ERP/CRM Systems",
    description: "Custom enterprise software built to grow and streamline operations for expanding businesses."
  },
  { 
    icon: Users2, 
    title: "5-Specialist Synergy",
    description: "A collaborative force covering Frontend, Backend, Mobile, Game Development, and Graphic Design."
  },
  { 
    icon: ShieldCheck, 
    title: "Highly Secure Applications",
    description: "Implementation of secure auth (JWT), input sanitization, and solid architectural safeguards."
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We align with your vision, research requirements, define specifications, and map out the tech stack."
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Our graphic designers craft custom layouts, branding, and interactive wireframes for your approval."
  },
  {
    step: "03",
    title: "Agile Development",
    description: "Our frontend and backend developers write optimized code in sprints, keeping you updated at every stage."
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "We run unit, integration, and UI tests to ensure everything is bug-free, secure, and performs optimally."
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "We deploy your project to production and remain close partners for maintenance and future feature iterations."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary pt-24">
      <Navbar />
      
      {/* Hero Section */}
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
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider"
            >
              <Award size={14} />
              About CH Solution
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight"
            >
              Crafting Digital Solutions <br />
              <span className="text-gradient">With Purpose & Precision</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light"
            >
              We are a collaborative team of design experts, software engineers, and game developers dedicated to building highly secure, responsive, and elegant digital products.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy & Vision */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-muted/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Our Story & Vision
              </h2>
              <div className="w-16 h-1 bg-gradient-primary rounded-full" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                With over <strong className="text-foreground font-semibold">6+ years of combined experience</strong> in web application development, graphic branding, and Unity game creation, we formed CH Solution to offer unified, full-service technology solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Our mission is to help companies transform their legacy operations, build engaging customer touchpoints, and scale their infrastructure with clean, performant React and backend architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="bg-glass p-6 rounded-2xl border border-border shadow-xl space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <HeartHandshake size={24} />
                  <h3 className="font-display font-bold text-base text-foreground">Our Philosophy</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We value transparent communication, clean code standards, and deliver lasting utility to our clients.
                </p>
              </div>

              <div className="bg-glass p-6 rounded-2xl border border-border shadow-xl space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Target size={24} />
                  <h3 className="font-display font-bold text-base text-foreground">Our Goal</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  To turn your innovative ideas into pixel-perfect interfaces and secure backend data systems.
                </p>
              </div>

              <div className="bg-glass p-6 rounded-2xl border border-border shadow-xl space-y-4 sm:col-span-2">
                <div className="flex items-center gap-3 text-primary">
                  <Compass size={24} />
                  <h3 className="font-display font-bold text-base text-foreground">Our Integrity</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We build long-term trust. We are deeply committed to quality assurance, testing every layout for cross-device responsiveness, and scaling systems smoothly as requirements evolve.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Highlights */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">Why Partner With CH Solution?</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              We focus on premium quality, security, and top-tier architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300 hover:glow-primary hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Our Development Process</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              A structured lifecycle designed to execute projects smoothly from concept to production.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line for larger screens */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/80 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col md:flex-row items-stretch ${isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Empty block for layout alignment on large screens */}
                    <div className="w-full md:w-1/2 px-8 hidden md:block" />

                    {/* Step badge/marker */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-display font-bold text-xs -translate-x-1/2 z-10">
                      {step.step}
                    </div>

                    {/* Content Box */}
                    <div className="w-full md:w-1/2 pl-12 pr-4 md:px-8">
                      <div className="p-6 bg-glass border border-border/80 rounded-2xl shadow-md hover:border-primary/20 transition-all hover:glow-primary">
                        <span className="text-xs font-semibold text-primary/70 uppercase tracking-widest block mb-1">
                          Phase {step.step}
                        </span>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Ready to build <span className="text-gradient">something epic?</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Whether you need a custom admin dashboard, an e-commerce platform, or a secure ERP, we're ready to bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border hover:border-primary/30 text-sm font-semibold hover:glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                View Our Portfolio
              </a>
              <a
                href="mailto:zenulwork@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-95 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Get In Touch
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

export default About;
