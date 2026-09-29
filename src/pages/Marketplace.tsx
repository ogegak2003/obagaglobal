import { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal, ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { productsData } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export type CartItem = { id: string; name: string; price: number; qty: number; image: string };

const categories = ["All", "Fashion", "Accessories"];

export default function Marketplace() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(() => {
    let items = [...productsData];
    if (category !== "All") items = items.filter((p) => p.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter((p) => p.name.toLowerCase().includes(q));
    }
    if (sort === "price-asc") items.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") items.sort((a, b) => b.price - a.price);
    if (sort === "name") items.sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [query, category, sort]);

  const addToCart = (p: (typeof productsData)[number]) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) {
        return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: p.id, name: p.name, price: p.price, qty: 1, image: p.image }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id: string) => setCart((prev) => prev.filter((i) => i.id !== id));

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <main className="flex flex-col pt-32">
      <section className="py-16 bg-background">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">OBAGA GLOBAL</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Marketplace
              </h1>
              <p className="text-primary font-medium mb-4">
                Fashion • Lifestyle • Accessories • More
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Discover premium clothing and lifestyle products designed for modern, stylish and ambitious people.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-8 bg-surface border-y border-border sticky top-[60px] z-30 backdrop-blur-lg">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-background border border-border rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="appearance-none bg-background border border-border rounded-full pl-10 pr-8 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <SlidersHorizontal size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-background border border-border rounded-full pl-10 pr-8 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
              <button
                onClick={() => setCartOpen(true)}
                className="relative flex items-center gap-2 bg-primary text-background font-medium px-5 py-3 rounded-full hover:bg-primary-hover transition-colors"
              >
                <ShoppingCart size={18} />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-background text-primary text-xs rounded-full flex items-center justify-center font-bold">
                    {cart.reduce((s, i) => s + i.qty, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-background">
        <Container>
          {filtered.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-20">
                <p className="text-muted">No products match your search.</p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.05}>
                  <div className="group relative flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all">
                    <Link to={`/marketplace/products/${product.id}`} className="block aspect-square overflow-hidden bg-white/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>
                    <div className="p-4 flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-white font-semibold text-sm">{product.name}</h3>
                          <p className="text-muted text-xs mt-0.5">{product.category}</p>
                        </div>
                      </div>
                      <p className="text-primary font-semibold">KSh {product.price.toLocaleString()}</p>
                      <button
                        onClick={() => addToCart(product)}
                        className="mt-2 w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-background border border-primary/30 hover:border-primary rounded-full py-2 text-xs font-medium transition-colors"
                      >
                        <ShoppingCart size={14} /> Add to Cart
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <div className="relative w-full max-w-md h-full bg-surface border-l border-border flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-white">Your Cart</h3>
              <button onClick={() => setCartOpen(false)} className="text-muted hover:text-white transition-colors" aria-label="Close cart">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {cart.length === 0 ? (
                <p className="text-muted text-sm text-center py-12">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-border bg-card">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-medium">{item.name}</h4>
                      <p className="text-primary text-sm mt-0.5">KSh {item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-6 h-6 rounded-md border border-border flex items-center justify-center text-muted hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-white text-sm w-6 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-6 h-6 rounded-md border border-border flex items-center justify-center text-muted hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-muted hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="p-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted text-sm">Subtotal</span>
                <span className="text-white font-semibold">KSh {total.toLocaleString()}</span>
              </div>
              <Button
                className="w-full"
                disabled={cart.length === 0}
                onClick={() => alert("Frontend checkout demo. Connect a payment provider to complete orders.")}
              >
                Checkout
              </Button>
              <p className="text-muted text-xs text-center mt-3">
                Frontend demo only. No payment will be processed.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}