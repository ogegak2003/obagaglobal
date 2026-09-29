import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const serviceOptions = [
  "Cloud Solutions",
  "Networking",
  "ICT Support & Managed Services",
  "Software Development",
  "Cybersecurity",
  "Digital Transformation",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: serviceOptions[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Please tell us how we can help.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col pt-32">
      <section className="py-16 bg-background">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Let's Build Something <span className="text-primary">Together</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                Tell us about your goals and we'll get back to you with the right team and next steps.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-16 bg-surface border-y border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-3">
              {submitted ? (
                <div className="p-10 rounded-2xl bg-card border border-primary/30 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank you, {form.name.split(" ")[0] || "there"}!</h3>
                  <p className="text-muted max-w-md">
                    Your message has been captured locally on this frontend. Once a backend is connected, submissions will be delivered to our team automatically.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", company: "", service: serviceOptions[0], message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="p-8 md:p-10 rounded-2xl bg-card border border-border flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-white/80 mb-2">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-white/80 mb-2">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm text-white/80 mb-2">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm text-white/80 mb-2">Company</label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm text-white/80 mb-2">Service of Interest</label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-white/80 mb-2">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-fit">
                    <Send size={18} className="mr-2" /> Send Message
                  </Button>
                </form>
              )}
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-2 flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Office</h4>
                  <p className="text-muted text-sm mt-1">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Phone</h4>
                  <a href="tel:+254748312468" className="text-muted text-sm mt-1 hover:text-primary transition-colors block">+254 748 312 468</a>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Email</h4>
                  <a href="mailto:info@obagaglobal.com" className="text-muted text-sm mt-1 hover:text-primary transition-colors block">info@obagaglobal.com</a>
                </div>
              </div>

              {/* Map-style visual */}
              <div className="rounded-2xl overflow-hidden border border-border relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                  alt="Map of Nairobi, Kenya"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_#F5A900]" />
                  <div>
                    <p className="text-white font-semibold text-sm">Nairobi, Kenya</p>
                    <p className="text-muted text-xs">East Africa • Global Reach</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </main>
  );
}