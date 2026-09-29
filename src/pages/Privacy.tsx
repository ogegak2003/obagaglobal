import { Container } from "@/components/ui/Container";

export default function Privacy() {
  return (
    <main className="pt-40 pb-24 bg-background">
      <Container className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="flex flex-col gap-6 text-muted leading-relaxed">
          <p>OBAGAGLOBAL LTD respects your privacy. This policy explains how we collect, use and protect information you share with us through this website.</p>
          <h2 className="text-2xl font-semibold text-white mt-4">Information We Collect</h2>
          <p>We collect information you voluntarily provide through contact forms, newsletter subscriptions and account registration, including name, email, phone and company details.</p>
          <h2 className="text-2xl font-semibold text-white mt-4">How We Use It</h2>
          <p>We use your information to respond to inquiries, deliver services, send updates you subscribed to, and improve our website and offerings.</p>
          <h2 className="text-2xl font-semibold text-white mt-4">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by contacting info@obagaglobal.com.</p>
          <h2 className="text-2xl font-semibold text-white mt-4">Contact</h2>
          <p>For privacy questions, email info@obagaglobal.com or write to us in Nairobi, Kenya.</p>
        </div>
      </Container>
    </main>
  );
}