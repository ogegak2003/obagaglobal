import { useState } from "react";
import { Search, Book, MessageCircle, Phone, Mail, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "How do I request technical support?",
    a: "Existing clients can contact our 24/7 helpdesk by phone at +254 748 312 468 or by email at info@obagaglobal.com. New inquiries can use the contact form.",
  },
  {
    q: "What are your support hours?",
    a: "Our helpdesk is available 24/7 for managed services clients. General business inquiries are handled Monday–Friday, 8:00–18:00 EAT.",
  },
  {
    q: "Can I get a custom solution for my business?",
    a: "Yes. We design tailored solutions across cloud, networking, software and security. Contact us to book a discovery session.",
  },
  {
    q: "Do you support clients outside Kenya?",
    a: "Yes. We serve clients across Africa and global markets, with remote and on-site delivery where required.",
  },
];

const channels = [
  { icon: MessageCircle, title: "Live Chat", desc: "Chat with our team during business hours.", action: "Start Chat" },
  { icon: Phone, title: "Phone Support", desc: "Call +254 748 312 468 for immediate help.", action: "Call Now" },
  { icon: Mail, title: "Email Support", desc: "Send us details at info@obagaglobal.com.", action: "Send Email" },
  { icon: Book, title: "Knowledge Base", desc: "Browse guides, articles and how-tos.", action: "Browse Docs" },
];

export default function Support() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="flex flex-col pt-32">
      <section className="py-16 bg-background">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Support</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                How Can We <span className="text-primary">Help You?</span>
              </h1>
              <p className="text-muted text-lg mb-8">
                Find answers, reach our team, or explore resources.
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search support topics..."
                  className="w-full bg-card border border-border rounded-full pl-11 pr-4 py-4 text-sm text-white placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl bg-card border border-border h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{c.desc}</p>
                    <Button variant="outline" size="sm" className="w-fit">
                      {c.action} <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container className="max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {filtered.length === 0 ? (
              <p className="text-muted">No results. Try a different search term.</p>
            ) : (
              filtered.map((f, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="rounded-2xl bg-card border border-border overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                      aria-expanded={openIndex === i}
                    >
                      <span className="text-white font-medium pr-4">{f.q}</span>
                      <FileText size={18} className={`text-primary shrink-0 transition-transform ${openIndex === i ? "rotate-90" : ""}`} />
                    </button>
                    {openIndex === i && (
                      <div className="px-6 pb-6 text-muted text-sm leading-relaxed">
                        {f.a}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))
            )}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-surface border-y border-border">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Still need help?</h2>
              <p className="text-muted">Our team is ready to assist you with any question.</p>
              <Button asChild className="group">
                <Link to="/contact">
                  Contact Support
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