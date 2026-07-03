import { motion } from "framer-motion";
import { ArrowDown, Send, Users, Sparkles } from "lucide-react";
import { teamMembers } from "@/data/teamData";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] z-10" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Dynamic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-primary/10 blur-[130px] pointer-events-none z-10" />

      {/* Centered Content Wrapper */}
      <div className="container mx-auto px-4 md:px-8 text-center relative z-30 max-w-4xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>5 Developers Online & Available</span>
          </motion.div>

          {/* Large Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none">
            We Build Modern <br />
            <span className="text-gradient">Web Applications</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground/90 font-light max-w-2xl mx-auto leading-relaxed">
            A collaborative powerhouse of 5 specialized React & Full-Stack developers. We construct custom ERPs, CRM systems, high-performance dashboards, and responsive web platforms.
          </p>

          {/* Core Metrics Quick-Grid */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-4">
            <div className="text-center">
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-widest">Completed</p>
              <p className="text-xl font-bold text-foreground">45+ Systems</p>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-widest">Main Stack</p>
              <p className="text-xl font-bold text-primary">React & TS</p>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-widest">Combined Exp.</p>
              <p className="text-xl font-bold text-foreground">18+ Years</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center pt-6">
            <a
              href="#team"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Meet The Team
              <Users size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <a href="#about" aria-label="Scroll Down">
          <ArrowDown size={20} className="text-muted-foreground/40 hover:text-primary transition-colors duration-200" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
