import { useState } from "react";
import { ArrowRight, Briefcase, MapPin, Clock, Heart, Users, Rocket, GraduationCap } from "lucide-react";
import { jobsData } from "@/data/jobs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const whyWork = [
  { icon: Rocket, title: "Growth & Learning", desc: "Work on challenging projects with modern technology." },
  { icon: Users, title: "Collaborative Culture", desc: "A supportive team that values ideas and initiative." },
  { icon: Heart, title: "Wellbeing", desc: "Flexible working and a healthy work-life balance." },
  { icon: GraduationCap, title: "Certifications", desc: "Support for professional certifications and training." },
];

export default function Careers() {
  const [applied, setApplied] = useState<string | null>(null);

  return (
    <main className="flex flex-col pt-32">
      <section className="py-16 bg-background">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Careers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Build the Future <span className="text-primary">With Us</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                Join a team of engineers, designers, analysts and strategists shaping the future of technology across Africa and beyond.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container>
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-10">Why Work With Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWork.map((w, i) => {
              const Icon = w.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-2xl bg-card border border-border h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{w.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container>
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-10">Open Positions</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {jobsData.map((job, i) => (
              <AnimatedSection key={job.id} delay={i * 0.05}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <p className="text-muted text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1"><Briefcase size={14} className="text-primary" /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} className="text-primary" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} className="text-primary" /> {job.type}</span>
                    </div>
                  </div>
                  <div>
                    {applied === job.id ? (
                      <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
                        Application received
                      </span>
                    ) : (
                      <Button onClick={() => setApplied(job.id)} className="group">
                        Apply Now
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">Don't see a role that fits?</h2>
              <p className="text-muted">
                Send us your CV and tell us how you'd like to contribute. We're always looking for exceptional people.
              </p>
              <Button asChild className="group">
                <a href="mailto:careers@obagaglobal.com">
                  Send Your CV
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}