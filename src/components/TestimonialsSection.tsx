import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/data/teamData";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-gradient">
              Client Testimonials
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              Read feedback from business owners, digital agencies, and managers who collaborated with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl bg-card border border-border p-6 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-amber-500">
                    {Array.from({ length: test.rating }).map((_, si) => (
                      <Star key={si} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground/90 italic leading-relaxed">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-border/40 mt-6">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl select-none">
                    {test.avatar}
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-foreground">
                      {test.clientName}
                    </h4>
                    <p className="text-[10px] text-muted-foreground">
                      {test.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
