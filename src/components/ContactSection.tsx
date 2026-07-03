import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${form.name}! We will review your inquiry for ${form.company || "your project"} and get back to you soon.`);
    setForm({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background glow orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-gradient">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              Ready to build your next ERP, dashboard, or custom React platform? Let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
            {/* Form Column */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="lg:col-span-7 bg-glass p-6 sm:p-8 rounded-3xl border border-border/80 shadow-xl space-y-5"
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                Send Us An Inquiry
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Fill in the details below and our team lead will respond within 12 hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-foreground mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="e.g. john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-foreground mb-1.5 block">Company Name</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="e.g. Acme Corp"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground mb-1.5 block">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="e.g. +1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground mb-1.5 block">Project Requirements</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Tell us about the dashboard, ERP, CRM, or website you need built..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-95 shadow-md shadow-primary/10 transition-all"
              >
                Send Inquiry
                <Send size={14} />
              </button>
            </motion.form>

            {/* Quick Actions Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="lg:col-span-5 flex flex-col justify-center space-y-6"
            >
              <div className="space-y-2">
                <h3 className="font-display text-lg font-bold text-foreground">
                  Direct Contact
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Prefer direct communication over filling forms? Reach out instantly via WhatsApp or Email. We are available for quick intro calls.
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp button */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-glass hover:border-emerald-500/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground group-hover:text-emerald-500 transition-colors">WhatsApp Chat</h4>
                    <p className="text-[10px] text-muted-foreground">Instant response</p>
                  </div>
                </a>

                {/* Direct Email button */}
                <a
                  href="mailto:inquire@antigravity-devs.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-glass hover:border-primary/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">Email Us</h4>
                    <p className="text-[10px] text-muted-foreground">inquire@antigravity-devs.com</p>
                  </div>
                </a>

                {/* Direct Call button */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-glass hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground group-hover:text-blue-500 transition-colors">Call Our Lead</h4>
                    <p className="text-[10px] text-muted-foreground">+91 98765 43210</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
