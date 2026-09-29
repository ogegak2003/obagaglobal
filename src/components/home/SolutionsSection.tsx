import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const solutions = [
  { id: "cloud-infra", title: "Cloud Infrastructure", subtitle: "Flexible. Secure. Scalable.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" },
  { id: "enterprise-net", title: "Enterprise Networking", subtitle: "Connect. Communicate. Grow.", image: "https://images.unsplash.com/photo-1558494949-efc5256cf2c9?q=80&w=2070&auto=format&fit=crop" },
  { id: "managed-it", title: "Managed IT Services", subtitle: "Proactive. Reliable. Always On.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" },
  { id: "custom-software", title: "Custom Software", subtitle: "Built for your unique needs.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
  { id: "cybersecurity", title: "Cybersecurity", subtitle: "Prevent. Detect. Respond.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" },
];

export function SolutionsSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Featured Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Powering businesses with modern technology
              </h2>
            </div>
            <Link to="/solutions" className="group flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors">
              View All Solutions 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, index) => (
            <AnimatedSection key={sol.id} delay={index * 0.1} className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
              <Link 
                to={`/solutions#${sol.id}`}
                className="group relative block h-[320px] rounded-2xl overflow-hidden border border-border"
              >
                <img 
                  src={sol.image} 
                  alt={sol.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{sol.title}</h3>
                    <p className="text-muted text-sm">{sol.subtitle}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}