import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { teamMembers, TeamMember } from "@/data/teamData";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Mail, Phone, MapPin, Briefcase, Calendar, GraduationCap, 
  Github, Linkedin, ExternalLink, Download, FileText, CheckCircle2, AlertCircle, ArrowRight
} from "lucide-react";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenProfile = (member: TeamMember) => {
    setSelectedMember(member);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary pt-24">
      <Navbar />

      {/* Team Hero */}
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
              Our Specialists
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight"
            >
              Meet The Experts Behind <br />
              <span className="text-gradient">Team CCH Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              A collaborative squad of 5 dedicated designers and full-stack developers crafting secure dashboards, game builds, and high-performance websites.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group w-full h-[350px] relative"
                  style={{ perspective: "1200px" }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Card */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-3xl bg-glass border border-border/60 p-8 flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
                      
                      <div className="relative w-24 h-24 rounded-full mb-6 ring-4 ring-primary/5 ring-offset-2 ring-offset-background transition-transform duration-500 group-hover:scale-105 overflow-hidden flex-shrink-0">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3 className="font-display font-bold text-xl text-foreground leading-tight tracking-tight mb-2">
                        {member.name}
                      </h3>

                      <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-3">
                        {member.role}
                      </p>

                      <p className="text-xs text-muted-foreground/80 flex items-center justify-center gap-1.5 font-medium mt-1">
                        <MapPin size={13} className="text-primary/70" />
                        {member.location}
                      </p>

                      <div className="absolute bottom-6 text-[10px] text-muted-foreground/40 font-semibold tracking-wider uppercase group-hover:opacity-0 transition-opacity duration-300">
                        Hover to view skills
                      </div>
                    </div>

                    {/* Back Card */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-3xl bg-glass border border-border/60 p-8 flex flex-col justify-between shadow-lg group-hover:shadow-primary/5 transition-all duration-300 overflow-hidden [transform:rotateY(180deg)]"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="space-y-6">
                        <h4 className="font-display text-sm font-bold text-foreground border-b border-border/40 pb-3 flex items-center gap-2 tracking-wide">
                          <span className="w-2.5 h-2.5 rounded-full bg-gradient-primary" />
                          Core Strengths
                        </h4>
                        <div className="space-y-4 text-left">
                          {member.skills.slice(0, 3).map((skill) => (
                            <div key={skill.name} className="space-y-1.5">
                              <div className="flex justify-between text-xs">
                                <span className="font-semibold text-muted-foreground/90">{skill.name}</span>
                                <span className="text-primary font-bold">{skill.level}%</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-secondary/80 overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-gradient-primary"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => handleOpenProfile(member)}
                        className="w-full py-3.5 rounded-xl bg-gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-95 shadow-md shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                      >
                        View Full Profile
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Profile Detail Sheet */}
      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto w-full border-l border-border/80 bg-background/95 backdrop-blur-xl">
          {selectedMember && (
            <div className="space-y-8 pt-4">
              <SheetHeader className="text-left space-y-4">
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/80 overflow-hidden shadow-lg flex-shrink-0">
                    <img
                      src={selectedMember.photo}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <SheetTitle className="font-display text-2xl font-bold">
                      {selectedMember.name}
                    </SheetTitle>
                    <SheetDescription className="text-primary font-medium text-sm">
                      {selectedMember.role}
                    </SheetDescription>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground flex items-center gap-1">
                        <MapPin size={10} />
                        {selectedMember.location}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        selectedMember.availability === "Available" ? "bg-emerald-500/10 text-emerald-500" :
                        selectedMember.availability === "Almost Booked" ? "bg-amber-500/10 text-amber-500" : "bg-red-500/10 text-red-500"
                      }`}>
                        {selectedMember.availability === "Available" ? <CheckCircle2 size={10} /> : <AlertCircle size={10} />}
                        {selectedMember.availability}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        Exp: {selectedMember.experience}
                      </span>
                    </div>
                  </div>
                </div>
              </SheetHeader>

              {/* Bio & Socials */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground">About Me</h3>
                <p className="text-sm text-foreground/90 leading-relaxed bg-secondary/30 p-4 rounded-2xl border border-border/40">
                  {selectedMember.bio}
                </p>
                <div className="flex flex-wrap gap-3 items-center pt-2">
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors bg-secondary/50 px-3 py-1.5 rounded-lg border border-border"
                  >
                    <Mail size={12} />
                    {selectedMember.email}
                  </a>
                  <a
                    href={`tel:${selectedMember.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors bg-secondary/50 px-3 py-1.5 rounded-lg border border-border"
                  >
                    <Phone size={12} />
                    {selectedMember.phone}
                  </a>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground">Skill Sets</h3>
                <div className="space-y-3.5">
                  {selectedMember.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-primary"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground">Experience Timeline</h3>
                <div className="relative pl-5 border-l border-border space-y-6">
                  {selectedMember.timeline.map((exp, i) => (
                    <div key={i} className="relative">
                      <span className={`absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full border ${
                        exp.current ? "bg-primary border-primary animate-pulse" : "bg-background border-border"
                      }`} />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-sm text-foreground">{exp.role}</h4>
                          <span className="text-[10px] text-primary bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{exp.company}</p>
                        <p className="text-xs text-muted-foreground/80 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              {selectedMember.education && selectedMember.education.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground">Education</h3>
                  <div className="space-y-3">
                    {selectedMember.education.map((edu, i) => (
                      <div key={i} className="flex gap-3 items-start bg-secondary/20 p-3.5 rounded-xl border border-border/40">
                        <GraduationCap size={18} className="text-primary mt-0.5" />
                        <div className="space-y-0.5">
                          <h4 className="font-display font-bold text-xs text-foreground">{edu.degree}</h4>
                          <p className="text-[11px] text-muted-foreground">{edu.school} — {edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>

      <Footer />
    </div>
  );
};

export default Team;
