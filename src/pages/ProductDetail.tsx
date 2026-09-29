import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { productsData } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = productsData.find((p) => p.id === id);

  if (!product) return <Navigate to="/marketplace" replace />;

  return (
    <main className="flex flex-col pt-32">
      <section className="py-16 bg-background">
        <Container>
          <Link to="/marketplace" className="inline-flex items-center gap-2 text-muted hover:text-primary text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Marketplace
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-square">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="flex flex-col gap-6">
              <div>
                <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">{product.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary">KSh {product.price.toLocaleString()}</p>
              </div>
              <p className="text-muted leading-relaxed">
                Premium quality {product.name.toLowerCase()} designed for modern, stylish and ambitious people. Crafted with attention to detail and built to last.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  size="lg"
                  onClick={() => alert("Added to cart (demo).")}
                  className="w-full sm:w-fit"
                >
                  <ShoppingCart size={18} className="mr-2" /> Add to Cart
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-fit">
                  <Link to="/contact">Ask a Question</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                {[
                  { icon: Truck, label: "Fast Delivery" },
                  { icon: ShieldCheck, label: "Secure Payment" },
                  { icon: RefreshCw, label: "Easy Returns" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
                      <Icon size={18} className="text-primary" />
                      <span className="text-white/80 text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </main>
  );
}