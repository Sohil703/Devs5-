import { motion } from "framer-motion";
import { ArrowDown, Send, Users, Sparkles } from "lucide-react";
import { teamMembers } from "@/data/teamData";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(165,80%,48%) 1px, transparent 1px), linear-gradient(90deg, hsl(165,80%,48%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-left space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>Top-Tier React Agency Team</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            We Build Modern <br />
            <span className="text-gradient">Web Applications</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground/90 font-light max-w-xl">
            A collaborative powerhouse of 5 specialized React & Full-Stack developers. We deliver highly scalable admin dashboards, CRM/ERP systems, and custom software for clients worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Hire Our Team
              <Send size={16} />
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-card/50 text-foreground font-semibold text-sm hover:bg-muted/80 backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              Meet The Team
              <Users size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right column: Interactive Visual (Team Hub) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center">
            {/* Pulsing ring background */}
            <div className="absolute inset-0 rounded-full border border-primary/10 animate-[ping_4s_infinite] pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-accent/15 animate-[ping_6s_infinite] pointer-events-none" />

            {/* Central hub card */}
            <div className="relative z-10 w-72 p-6 rounded-3xl bg-glass shadow-2xl border border-border/80 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white text-3xl font-display font-semibold shadow-lg">
                S5
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Active Dev Hub</h3>
                <p className="text-xs text-muted-foreground">Collaborative Development Network</p>
              </div>

              {/* Overlapping team avatars */}
              <div className="flex -space-x-3 items-center">
                {teamMembers.map((member, i) => (
                  <motion.div
                    key={member.id}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="relative w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-lg cursor-pointer shadow-md"
                    title={member.name}
                  >
                    {member.avatar}
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-background" />
                  </motion.div>
                ))}
              </div>

              <div className="w-full h-px bg-border/50 my-2" />

              <div className="grid grid-cols-2 gap-4 w-full text-left">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Sprint Status</p>
                  <p className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    All Live Now
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Combined Exp.</p>
                  <p className="text-xs font-semibold">18+ Years</p>
                </div>
              </div>
            </div>

            {/* Float Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 right-0 bg-glass p-3 rounded-2xl border border-border/80 shadow-lg flex items-center gap-2.5 z-20 pointer-events-none"
            >
              <span className="text-xl">📊</span>
              <div>
                <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Completed</p>
                <p className="text-xs font-extrabold text-foreground">45+ Systems</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 left-0 bg-glass p-3 rounded-2xl border border-border/80 shadow-lg flex items-center gap-2.5 z-20 pointer-events-none"
            >
              <span className="text-xl">🚀</span>
              <div>
                <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Main Stack</p>
                <p className="text-xs font-extrabold text-primary">React & TS</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-muted-foreground/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
