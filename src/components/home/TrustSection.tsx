import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function TrustSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-md">
              We build long-term partnerships by delivering real value and measurable results.
            </p>
            <Link to="/about" className="group flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors">
              Learn More About Our Approach 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 relative">
              <Quote size={40} className="text-primary/20 absolute top-8 left-8" />
              <div className="relative z-10 pt-8">
                <p className="text-white/90 text-lg leading-relaxed italic mb-8">
                  "Their professionalism and technical expertise have helped us scale our operations with confidence. OBAGAGLOBAL is a true partner in our digital journey."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                    BC
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Business Client</h4>
                    <p className="text-muted text-sm">Enterprise Technology Sector</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}