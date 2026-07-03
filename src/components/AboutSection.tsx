import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Users2, ShieldCheck, HeartHandshake } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean React Architecture" },
  { icon: Layers, label: "Scalable Enterprise ERP/CRM" },
  { icon: Users2, label: "5-Specialist Team Coverage" },
  { icon: ShieldCheck, label: "Highly Secure Applications" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background soft blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-gradient">
              About Our Team
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
            <div className="md:col-span-7 space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                We are a passionate team of designers and developers specializing in graphic design, frontend development, backend development, and Unity game development. With over <strong className="text-foreground font-semibold">6+ years of combined industry experience</strong>, we've successfully delivered impactful digital solutions that help businesses grow.
              </p>
              <p>
                Our expertise spans websites, web applications, custom software, game development, and digital media. We take pride in building long term relationships with our clients, many of whom return to us for future projects because of our commitment to quality, reliability, and results.
              </p>
            </div>

            <div className="md:col-span-5 bg-glass p-6 rounded-2xl border border-border/80 shadow-xl space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <HeartHandshake size={28} />
                <h3 className="font-display font-bold text-lg text-foreground">Our Philosophy</h3>
              </div>
              <p className="text-sm text-muted-foreground/90 leading-relaxed">
                "We turn ideas into impactful digital experiences through thoughtful design, quality development, and honest collaboration. Every project we build is driven by purpose, precision, and a commitment to delivering lasting value."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-glass hover:border-primary/30 transition-all hover:glow-primary"
              >
                <div className="p-3 rounded-xl bg-primary/10 mb-3 text-primary">
                  <item.icon size={24} />
                </div>
                <span className="text-xs font-semibold text-foreground tracking-wide">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
