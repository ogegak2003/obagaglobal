import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, User, Briefcase, HelpCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Utility Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs text-muted bg-background/80 backdrop-blur-md border-b border-border">
        <span className="tracking-widest uppercase">Innovation Beyond Borders</span>
        <div className="flex items-center gap-6">
          <Link to="/support" className="hover:text-primary transition-colors flex items-center gap-1">
            <HelpCircle size={12} /> Support
          </Link>
          <Link to="/careers" className="hover:text-primary transition-colors flex items-center gap-1">
            <Briefcase size={12} /> Careers
          </Link>
          <Link to="/login" className="hover:text-primary transition-colors flex items-center gap-1">
            <User size={12} /> Login
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className={cn(
        "transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/95 backdrop-blur-lg border-border py-2" : "bg-transparent py-4"
      )}>
        <Container className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1",
                    isActive ? "text-primary" : "text-white/80"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="sm">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[60px] bg-background/98 backdrop-blur-xl z-40 transition-transform duration-300 lg:hidden flex flex-col",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "flex items-center justify-between py-4 border-b border-border text-lg font-medium",
                location.pathname === link.path ? "text-primary" : "text-white"
              )}
            >
              {link.name}
              <ChevronRight size={18} className="text-muted" />
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild className="w-full">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}