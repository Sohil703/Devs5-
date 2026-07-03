import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "React Developer",
    company: "Jio",
    period: "2023 — Present",
    description:
      "Building and maintaining large-scale React applications, implementing complex UI components, optimizing performance, and collaborating with cross-functional teams to deliver high-quality digital products.",
    current: true,
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Startup",
    period: "2022 — 2023",
    description:
      "Developed responsive web interfaces, integrated REST APIs, and contributed to the design system using React and Tailwind CSS.",
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-gradient text-center">
            Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-primary rounded-full mb-12 mx-auto" />

          <div className="max-w-2xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className={`absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "border-primary bg-primary/20"
                      : "border-muted-foreground/30 bg-background"
                  }`} />

                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={14} className="text-primary" />
                    <span className="text-xs font-medium text-primary">{exp.period}</span>
                    {exp.current && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
