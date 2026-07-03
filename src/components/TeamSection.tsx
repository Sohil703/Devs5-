import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { teamMembers, TeamMember } from "@/data/teamData";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Mail, Phone, MapPin, Briefcase, Calendar, GraduationCap, Github, Linkedin, ExternalLink, Download, FileText, CheckCircle2, AlertCircle } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenProfile = (member: TeamMember) => {
    setSelectedMember(member);
    setDrawerOpen(true);
  };

  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-gradient">
              Meet Our Team
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              A collaborative team of certified developers, UI designers, and quality assurance specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="group w-full h-[330px] relative"
                style={{ perspective: "1200px" }}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-3xl bg-glass border border-border/60 p-6 flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Glowing effect inside the card */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
                    
                    {/* Member photo with availability indicator dot */}
                    <div className="relative w-20 h-20 rounded-full mb-5 ring-4 ring-primary/5 ring-offset-2 ring-offset-background transition-transform duration-500 group-hover:scale-105 overflow-hidden flex-shrink-0">
                      <img 
                        src={member.photo} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                      <span className={`absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-background ${
                        member.availability === "Available" ? "bg-emerald-500" :
                        member.availability === "Almost Booked" ? "bg-amber-500" : "bg-red-500"
                      }`} title={member.availability} />
                    </div>

                    <h3 className="font-display font-bold text-lg text-foreground leading-tight tracking-tight mb-2">
                      {member.name}
                    </h3>
                    
                    {/* Role Label */}
                    <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-3">
                      {member.role}
                    </p>

                    <p className="text-[10px] text-muted-foreground/80 flex items-center justify-center gap-1 font-medium mt-1">
                      <MapPin size={11} className="text-primary/70" />
                      {member.location}
                    </p>

                    {/* Hint at the bottom */}
                    <div className="absolute bottom-4 text-[9px] text-muted-foreground/40 font-semibold tracking-wider uppercase group-hover:opacity-0 transition-opacity duration-300">
                      Hover to view skills
                    </div>
                  </div>

                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-3xl bg-glass border border-border/60 p-6 flex flex-col justify-between shadow-lg group-hover:shadow-primary/5 transition-all duration-300 overflow-hidden [transform:rotateY(180deg)]"
                    style={{ 
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <div className="space-y-5">
                      <h4 className="font-display text-sm font-bold text-foreground border-b border-border/40 pb-2.5 flex items-center gap-2 tracking-wide">
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-primary" />
                        Top Skills
                      </h4>
                      <div className="space-y-3.5 text-left">
                        {member.skills.slice(0, 3).map((skill) => (
                          <div key={skill.name} className="space-y-1">
                            <div className="flex justify-between text-[10px]">
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
                      className="w-full py-3 rounded-xl bg-gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-95 shadow-md shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                      View Full Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sheet details for selected member */}
      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto w-full border-l border-border/80 bg-background/95 backdrop-blur-xl">
          {selectedMember && (
            <div className="space-y-8 pt-4">
              <SheetHeader className="text-left space-y-4">
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-4xl text-white shadow-lg shadow-primary/10">
                    {selectedMember.avatar}
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
                <div className="flex flex-wrap gap-3 items-center">
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
                  <div className="flex gap-2 ml-auto">
                    <a
                      href={selectedMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border transition-all"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border transition-all"
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>
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
                      {/* Timeline dot */}
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

              {/* Download Resume Link */}
              <div className="pt-2">
                <a
                  href={`#`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Downloading resume profile for ${selectedMember.name}`);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-95 shadow-md shadow-primary/10 transition-all"
                >
                  <Download size={16} />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default TeamSection;
