import { ArrowRight, CheckCircle2, Users, Globe, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  { icon: CheckCircle2, title: "Innovative Solutions", desc: "For a Connected World" },
  { icon: Users, title: "Professional Team", desc: "Experts in Technology" },
  { icon: Globe, title: "Global Reach", desc: "Across Africa & Beyond" },
  { icon: Target, title: "Customer Focus", desc: "Your Success Matters" },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <AnimatedSection className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="OBAGAGLOBAL team collaborating in office"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-primary/30 p-6 rounded-xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">Global</p>
                  <p className="text-xs text-muted tracking-wider uppercase">Technology Group</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Side */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                OBAGAGLOBAL LTD<br />
                <span className="text-primary">Your Trusted Technology Partner</span>
              </h2>
              <p className="text-muted leading-relaxed">
                We are a dynamic technology group based in Kenya, serving clients across Africa and global markets. We combine innovation, expertise and passion to deliver reliable IT solutions, digital products and world-class services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                      <p className="text-muted text-xs mt-1">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <Button asChild className="group">
                <Link to="/about">
                  Learn More About Us 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}