import { ArrowRight, CheckCircle2, Users, Globe, Target, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in every engagement." },
  { icon: Heart, title: "Integrity", desc: "We do what we say, and we do it transparently." },
  { icon: Users, title: "Partnership", desc: "We treat our clients' goals as our own." },
  { icon: Globe, title: "Global Mindset", desc: "Local expertise, global standards." },
];

const features = [
  { icon: CheckCircle2, title: "Innovative Solutions", desc: "For a Connected World" },
  { icon: Users, title: "Professional Team", desc: "Experts in Technology" },
  { icon: Globe, title: "Global Reach", desc: "Across Africa & Beyond" },
  { icon: Target, title: "Customer Focus", desc: "Your Success Matters" },
];

export default function About() {
  return (
    <main className="flex flex-col pt-32">
      <section className="py-16 bg-background">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                OBAGAGLOBAL LTD<br />
                <span className="text-primary">Your Trusted Technology Partner</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                We are a dynamic technology group based in Kenya, serving clients across Africa and global markets. We combine innovation, expertise and passion to deliver reliable IT solutions, digital products and world-class services.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="OBAGAGLOBAL team"
                className="w-full h-[500px] object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Who We Are</h2>
              <p className="text-muted leading-relaxed">
                OBAGAGLOBAL LTD is a technology company focused on ICT solutions, cloud services, networking, software development, cybersecurity, digital transformation and technology innovation. We serve businesses, organizations, governments, startups and international clients.
              </p>
              <p className="text-muted leading-relaxed">
                Our name reflects our ambition: OBAGA — rooted in Africa — and GLOBAL — delivering to the world. We exist to help organizations thrive in a digital world, with solutions that are reliable, secure and built to scale.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{f.title}</h4>
                        <p className="text-muted text-xs mt-1">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container>
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                The principles that guide every engagement
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-2xl bg-card border border-border h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
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
                Ready to build the future with us?
              </h2>
              <p className="text-muted">
                Whether you are modernizing infrastructure, launching a digital product or strengthening security, we are ready to help.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="group">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}