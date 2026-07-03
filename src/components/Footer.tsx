import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 py-12 relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Info */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <a href="#" className="font-display text-xl font-bold text-gradient flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white text-sm font-display tracking-wider">S5</span>
              <span>Devs</span>
            </a>
            <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-sm">
              We are a collaborative squad of 5 passionate React & Full-Stack Developers building modern, secure, and production-grade dashboards, CRM/ERP systems, and custom web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Team</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Meet Developers</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider">Connect With Us</h4>
            <div className="flex gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border transition-all"
              >
                <Github size={14} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border transition-all"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="mailto:inquire@antigravity-devs.com"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border transition-all"
              >
                <Mail size={14} />
              </a>
            </div>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1">
              <Phone size={10} />
              +91 98765 43210
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-border/40 my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-muted-foreground">
          <p>© {new Date().getFullYear()} S5 Devs Team. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
