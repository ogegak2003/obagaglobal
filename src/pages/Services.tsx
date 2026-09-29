import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Services() {
  return (
    <main className="flex flex-col pt-32">
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Technology background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Technology Solutions <span className="text-primary">Built for Your Future</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                From cloud and networking to software, security and digital transformation — we deliver end-to-end technology services engineered for reliability, scale and impact.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 bg-background">
        <Container>
          <div className="flex flex-col gap-16">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const reversed = index % 2 === 1;
              return (
                <AnimatedSection key={service.id} delay={0.05}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-border">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[360px] object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                      <p className="text-muted leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild className="group">
                          <Link to={`/services/${service.id}`}>
                            Learn More
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to="/contact">Talk to an Expert</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-surface border-y border-border">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Not sure which service fits your needs?
              </h2>
              <p className="text-muted">
                Our team will help you map your goals to the right technology solution.
              </p>
              <Button asChild className="group">
                <Link to="/contact">
                  Book a Consultation
                  <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}