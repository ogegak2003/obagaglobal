import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { productsData } from "@/data/products";

export function MarketplacePreview() {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Block */}
          <AnimatedSection className="lg:col-span-4 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">OBAGA GLOBAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Marketplace</h2>
            <p className="text-primary font-medium mb-6">Fashion • Lifestyle • Accessories • More</p>
            <p className="text-muted text-sm leading-relaxed mb-8">
              Discover premium clothing and lifestyle products designed for modern, stylish and ambitious people.
            </p>
            <Button asChild className="w-fit group">
              <Link to="/marketplace">
                Shop Now 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>

          {/* Products Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productsData.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.1}>
                  <Link 
                    to={`/marketplace/products/${product.id}`}
                    className="group block relative rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden bg-white/5">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-semibold text-sm mb-1">{product.name}</h4>
                      <p className="text-primary text-sm font-medium">KSh {product.price.toLocaleString()}</p>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ShoppingBag size={14} />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}