import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { whyHireUs } from "@/data/teamData";
import { Zap, FileCode2, Laptop, Search, Layers, Users2, ShieldAlert, Sparkles, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap: Zap,
  FileCode2: FileCode2,
  Laptop: Laptop,
  Search: Search,
  Layers: Layers,
  Users2: Users2,
  ShieldAlert: ShieldAlert,
  Sparkles: Sparkles,
};

const WhyHireUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-hire-us" className="py-24 md:py-32 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-gradient">
              Why Hire Our Team?
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              We focus on production-grade standards to ensure your website is fast, secure, search engine ready, and scalable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyHireUs.map((item, i) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-glass border border-border/80 hover:border-primary/30 transition-all hover:glow-primary flex flex-col items-start"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireUs;
