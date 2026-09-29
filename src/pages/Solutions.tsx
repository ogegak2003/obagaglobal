import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { solutionsData } from "@/data/solutions";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Solutions() {
  return (
    <main className="flex flex-col pt-32">
      <section className="py-16 bg-background">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Solutions <span className="text-primary">for Modern Business</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                Discover solution areas that power your business with modern technology — from cloud infrastructure to cybersecurity and digital transformation.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 bg-background">
        <Container>
          <div className="flex flex-col gap-12">
            {solutionsData.map((sol, index) => (
              <AnimatedSection key={sol.id} delay={index * 0.05}>
                <div
                  id={sol.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-[380px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{sol.title}</h2>
                    <p className="text-primary font-medium">{sol.subtitle}</p>
                    <p className="text-muted leading-relaxed">{sol.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {sol.capabilities.map((c, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full border border-border bg-card text-white/80 text-xs"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <Button asChild className="w-fit group">
                      <Link to="/contact">
                        Discuss This Solution
                        <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-surface border-y border-border">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Need a tailored solution?
              </h2>
              <p className="text-muted">
                We combine multiple solution areas into integrated programs that match your goals.
              </p>
              <Button asChild className="group">
                <Link to="/contact">
                  Talk to Our Team
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}