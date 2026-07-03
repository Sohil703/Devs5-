import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/teamData";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200; // milliseconds
    const stepTime = 20; // ms per frame (~50fps)
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              ref={ref}
              className="space-y-1.5"
            >
              <h3 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-xs sm:text-sm font-medium opacity-80 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
