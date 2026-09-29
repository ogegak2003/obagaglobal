import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Mail, Github, Chrome } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col pt-32 pb-24 min-h-screen items-center justify-center">
      <Container className="max-w-md">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-8">
            <Logo size="lg" />
          </div>
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-muted text-sm">Sign in to access your OBAGAGLOBAL account.</p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-center">
                <p className="text-primary text-sm">
                  Frontend authentication is not connected yet. This interface is ready to be wired to a real backend.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm text-white/80 mb-2">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-background border border-border rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm text-white/80 mb-2">Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-background border border-border rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-muted cursor-pointer">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="accent-primary"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-primary hover:text-primary-hover transition-colors">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Login <ArrowRight size={18} className="ml-2" />
                </Button>
              </form>
            )}

            {!submitted && (
              <>
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-muted text-xs">or continue with</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="flex items-center justify-center gap-2 py-3 rounded-lg border border-border text-white/80 hover:border-primary/50 hover:text-primary text-sm transition-colors"
                  >
                    <Chrome size={16} /> Google
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="flex items-center justify-center gap-2 py-3 rounded-lg border border-border text-white/80 hover:border-primary/50 hover:text-primary text-sm transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </button>
                </div>
              </>
            )}

            <p className="text-center text-sm text-muted mt-8">
              Don't have an account?{" "}
              <Link to="/contact" className="text-primary hover:text-primary-hover transition-colors">
                Contact us
              </Link>
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </main>
  );
}