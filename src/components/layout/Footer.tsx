import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Logo size="md" />
            <p className="text-muted text-sm leading-relaxed">
              We provide cutting-edge ICT solutions, cloud services, and technology innovation to help businesses, organizations and communities thrive in a digital world.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Nairobi, Kenya</span>
              <span className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +254 748 312 468</span>
              <span className="flex items-center gap-2"><Mail size={16} className="text-primary" /> info@obagaglobal.com</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted mb-4">Get latest updates, offers and technology news.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-background border border-border rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <Button type="submit" size="sm" className="w-full justify-between group">
                Subscribe <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 OBAGAGLOBAL LTD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <p className="tracking-widest uppercase text-primary/80">Innovation Beyond Borders</p>
        </div>
      </Container>
    </footer>
  );
}