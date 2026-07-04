import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/data/teamData";
import { Code2, LayoutDashboard, Network, GraduationCap, ShoppingBag, MonitorPlay, Cpu, Database, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2: Code2,
  LayoutDashboard: LayoutDashboard,
  Network: Network,
  GraduationCap: GraduationCap,
  ShoppingBag: ShoppingBag,
  MonitorPlay: MonitorPlay,
  Cpu: Cpu,
  Database: Database,
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-gradient">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              From web apps to full-scale enterprise architectures, we offer end-to-end development services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  className="group relative rounded-2xl bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300 hover:glow-primary hover:-translate-y-1"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5 group-hover:bg-primary/25 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
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

export default ServicesSection;
