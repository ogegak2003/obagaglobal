import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Ambient background globe */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-globe.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            <span>Technology</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>Innovation</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>Global Impact</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            OBAGA<br />
            <span className="text-primary">GLOBAL</span> LTD
          </h1>

          <h2 className="text-2xl md:text-3xl font-light text-white/90">
            Innovation Beyond Borders
          </h2>

          <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed">
            We provide cutting-edge ICT solutions, cloud services, and technology
            innovation to help businesses, organizations and communities thrive
            in a digital world.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button size="lg" asChild className="group">
              <a href="#services">
                Explore Our Solutions
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </motion.div>

        {/* Featured globe visual */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex relative items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[560px]">
            {/* Glowing halo behind globe */}
            <div className="absolute inset-0 rounded-full bg-primary/25 blur-[120px] animate-pulse" />
            <div className="absolute inset-8 rounded-full bg-primary/10 blur-[80px]" />

            {/* Globe image */}
            <img
              src="/hero-globe.jpg"
              alt="Global technology network over Africa"
              className="relative z-10 w-full h-full object-cover rounded-full border border-primary/20 shadow-[0_0_80px_rgba(245,169,0,0.25)]"
            />

            {/* Decorative gold network dots */}
            <div className="absolute top-1/4 left-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#F5A900] z-20" />
            <div className="absolute bottom-1/3 right-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#F5A900] z-20" />
            <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff] z-20" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}