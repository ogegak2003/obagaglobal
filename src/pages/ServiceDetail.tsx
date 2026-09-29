import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceDetails, ServiceDetailKey } from "@/data/serviceDetails";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id || !(id in serviceDetails)) {
    return <Navigate to="/services" replace />;
  }

  const service = serviceDetails[id as ServiceDetailKey];
  const Icon = service.icon;

  return (
    <main className="flex flex-col pt-32">
      {/* Hero */}
      <section className="relative py-16 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={service.hero} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-primary text-lg md:text-xl mb-6">{service.tagline}</p>
              <p className="text-muted text-lg leading-relaxed">{service.overview}</p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-surface border-y border-border">
        <Container>
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-8">Capabilities</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-6 rounded-xl bg-card border border-border h-full">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm">{cap}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits & Technologies */}
      <section className="py-24 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              <ul className="flex flex-col gap-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-bold text-white mb-8">Technology Areas</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-border bg-card text-white/80 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 bg-surface border-y border-border">
        <Container>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">How we deliver</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-card border border-border h-full">
                  <div className="text-primary font-bold text-2xl mb-4">{p.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to get started with {service.title}?
              </h2>
              <p className="text-muted">
                Let's design a solution that fits your business goals, timeline and budget.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="group">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">Back to Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}