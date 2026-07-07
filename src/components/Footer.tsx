import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 py-12 relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Info */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Team CCH" className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="font-display text-xl font-bold text-gradient">Team CCH</span>
            </Link>
            <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-sm">
              We are a collaborative squad of 5 passionate React & Full-Stack Developers building modern, secure, and production-grade dashboards, CRM/ERP systems, and custom web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Team</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Meet Developers</Link>
              </li>
              <li>
                <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Our Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Our Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider">Connect With Us</h4>
            <div className="flex gap-2">
              <a
                href="mailto:zenulwork@gmail.com"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary border border-border transition-all flex items-center gap-2 text-xs text-muted-foreground"
              >
                <Mail size={14} />
                <span>zenulwork@gmail.com</span>
              </a>
            </div>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1.5 pl-2">
              <Phone size={10} />
              <a href="tel:+919638528117" className="hover:underline">+91-9638528117</a>
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-border/40 my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-muted-foreground">
          <p>© {new Date().getFullYear()} Team CCH. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:underline">Privacy Policy</Link>
            <Link to="/" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
