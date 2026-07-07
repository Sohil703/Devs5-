import { motion } from "framer-motion";
import { services } from "@/data/teamData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Code2, LayoutDashboard, Network, GraduationCap, ShoppingBag, 
  MonitorPlay, Cpu, Database, ChevronRight, CheckCircle2, ArrowRight
} from "lucide-react";

// Icon mapping matching ServicesSection.tsx
const iconMap: Record<string, any> = {
  Code2,
  LayoutDashboard,
  Network,
  GraduationCap,
  ShoppingBag,
  MonitorPlay,
  Cpu,
  Database,
};

const techStacks = [
  {
    category: "Front-end Web",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Framer Motion"]
  },
  {
    category: "Back-end & API",
    items: ["Python", "FastAPI", "Django", "Node.js", "Express", "PHP", "RESTful APIs", "JWT Auth"]
  },
  {
    category: "Mobile & Game Dev",
    items: ["Flutter", "Dart", "Unity Engine", "C# Programming", "Tauri Desktop"]
  },
  {
    category: "Database & Scraping",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Scrapy", "BeautifulSoup", "Selenium"]
  }
];

const faqs = [
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes, we provide ongoing support, security updates, and performance tuning to ensure your applications run smoothly long after deployment."
  },
  {
    q: "Can you help migrate our legacy system to React / Next.js?",
    a: "Absolutely. We specialize in refactoring legacy codebase databases, optimizing frontend layouts, and integrating modern REST APIs."
  },
  {
    q: "How does the payment structure work?",
    a: "We usually work on milestone-based structures. Once a specific phase (e.g., UI design, backend integration) is verified, payment is requested."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary pt-24">
      <Navbar />

      {/* Services Hero */}
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
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider"
            >
              Capabilities
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight"
            >
              What We Build & <br />
              <span className="text-gradient">How We Deliver Value</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              From complex CRM/ERP suites and web scrapers to interactive mobile applications and fast marketing landers, we offer tailored end-to-end coverage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-muted/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="group relative rounded-3xl bg-card border border-border p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/25 transition-colors">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border/40 flex items-center gap-1.5 text-xs text-primary font-bold opacity-80 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all">
                    <span>Inquire Service</span>
                    <ChevronRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack & Tooling */}
      <section className="py-16 md:py-24 border-t border-border/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Our Tech Stack & Tools</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              The languages, frameworks, and technologies we leverage to design scalable products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {techStacks.map((stack, idx) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-glass border border-border/60 rounded-3xl p-6 shadow-md hover:border-primary/20 transition-colors"
              >
                <h3 className="font-display font-bold text-foreground mb-4 border-b border-border/40 pb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {stack.category}
                </h3>
                <ul className="space-y-2.5">
                  {stack.items.map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary/70 flex-shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              Answers to typical questions about our development and coordination workflows.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-6 bg-glass border border-border/80 rounded-2xl"
              >
                <h3 className="font-display text-base font-bold text-foreground mb-2 flex items-start gap-2.5">
                  <span className="text-primary font-bold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed pl-5">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 md:py-28 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Looking for a custom solution?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Our 5-specialist squad has the range to configure secure database frameworks, design dashboard UIs, and engineer fast web experiences.
            </p>
            <div className="pt-4">
              <a
                href="mailto:zenulwork@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-95 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Start Your Project
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

export default Services;
