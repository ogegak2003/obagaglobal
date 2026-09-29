import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="pt-40 pb-24 bg-background min-h-screen flex items-center">
      <Container className="max-w-2xl text-center">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Error 404</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Page Not Found</h1>
        <p className="text-muted mb-10">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </Link>
        </Button>
      </Container>
    </main>
  );
}