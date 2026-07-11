import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, Mail, MessageSquare, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      if (!BOT_TOKEN || !CHAT_ID) {
        throw new Error("Telegram configuration is missing in environment variables.");
      }

      const text = [
        '📬 <b>New Contact Form Submission</b>',
        '━━━━━━━━━━━━━━━━━━━━',
        `<b>Name:</b> ${form.name}`,
        `<b>Email:</b> ${form.email}`,
        form.company ? `<b>Company:</b> ${form.company}` : '',
        form.phone ? `<b>Phone:</b> ${form.phone}` : '',
        `<b>Message:</b>\n${form.message}`,
        `━━━━━━━━━━━━━━━━━━━━`,
        `🕐 <b>Submitted:</b> ${new Date().toLocaleString()}`
      ].filter(Boolean).join('\n');

      const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        console.error('Telegram API error details:', errData);
        throw new Error("Failed to send message via Telegram.");
      }

      // Trigger premium toast
      toast.success("Inquiry Sent Successfully!", {
        description: `Thank you ${form.name}. Our team lead will reach out to you shortly.`,
      });

      setSubmitted(true);
      // Reset form
      setForm({ name: "", email: "", company: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error: any) {
      console.error('Contact submit error:', error);
      toast.error("Failed to Send Inquiry", {
        description: error.message || "Please check your network or try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary pt-24">
      <Navbar />

      {/* Hero Header */}
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
              Get in Touch
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold leading-tight"
            >
              Let's Coordinate and <br />
              <span className="text-gradient">Bring Your Ideas to Life</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              Have an inquiry about custom dashboards, Unity game assets, or enterprise software? Fill in the details or contact us directly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 md:py-24 border-t border-border/40 bg-muted/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
            
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-glass p-6 sm:p-10 rounded-3xl border border-border/80 shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  Send Us An Inquiry
                </h3>
                <p className="text-xs text-muted-foreground mb-8">
                  Provide your project specs, and our development coordinators will review it and reply within 12 hours.
                </p>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3"
                  >
                    <CheckCircle2 size={40} className="text-emerald-500 mx-auto" />
                    <h4 className="font-display font-bold text-foreground">Inquiry Received!</h4>
                    <p className="text-xs text-muted-foreground">
                      We have sent confirmation logs to our team. We'll be in touch very soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-foreground mb-1.5 block">Your Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
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
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
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
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                          placeholder="e.g. Acme Corp (Optional)"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-foreground mb-1.5 block">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                          placeholder="e.g. +91 90000 00000 (Optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-foreground mb-1.5 block">Project Requirements</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-xs placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                        placeholder="Tell us about the features, pages, timeline, or technologies you have in mind..."
                      />
                    </div>

                     <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-95 shadow-md shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? "Sending Proposal..." : "Submit Proposal"}
                      {!loading && <Send size={15} />}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Details Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="lg:col-span-5 flex flex-col justify-between space-y-8"
            >
              {/* Top info */}
              <div className="space-y-4 bg-glass border border-border p-6 rounded-3xl shadow-md">
                <h3 className="font-display text-lg font-bold text-foreground">Direct Collaboration</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Have an urgent project launch or want to schedule an introductory video meeting? Write to us or call our line directly.
                </p>
                
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <MapPin size={16} className="text-primary flex-shrink-0" />
                    <span>Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Clock size={16} className="text-primary flex-shrink-0" />
                    <span>Monday — Saturday, 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919638528117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-glass border border-border/80 hover:border-emerald-500/30 transition-all group shadow-sm hover:glow-emerald"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground group-hover:text-emerald-500 transition-colors">WhatsApp Chat</h4>
                    <p className="text-[10px] text-muted-foreground">Instant coordination (Lead Zenul)</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:zenulwork@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-glass border border-border/80 hover:border-primary/30 transition-all group shadow-sm hover:glow-primary"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">Email Us</h4>
                    <p className="text-[10px] text-muted-foreground">zenulwork@gmail.com</p>
                  </div>
                </a>

                {/* Direct Call */}
                <a
                  href="tel:+919638528117"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-glass border border-border/80 hover:border-blue-500/30 transition-all group shadow-sm hover:glow-blue"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground group-hover:text-blue-500 transition-colors">Direct Phone</h4>
                    <p className="text-[10px] text-muted-foreground">+91 96385 28117</p>
                  </div>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
