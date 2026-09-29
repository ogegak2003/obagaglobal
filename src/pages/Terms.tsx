import { Container } from "@/components/ui/Container";

export default function Terms() {
  return (
    <main className="pt-40 pb-24 bg-background">
      <Container className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="flex flex-col gap-6 text-muted leading-relaxed">
          <p>By accessing and using the OBAGAGLOBAL LTD website, you agree to these terms.</p>
          <h2 className="text-2xl font-semibold text-white mt-4">Use of Website</h2>
          <p>Content is provided for general information. You agree not to misuse the site, attempt unauthorized access, or interfere with its operation.</p>
          <h2 className="text-2xl font-semibold text-white mt-4">Intellectual Property</h2>
          <p>All content, logos and materials are owned by OBAGAGLOBAL LTD or its licensors and may not be reproduced without permission.</p>
          <h2 className="text-2xl font-semibold text-white mt-4">Services</h2>
          <p>Service engagements are governed by separate written agreements. Information on this website does not constitute a binding offer.</p>
          <h2 className="text-2xl font-semibold text-white mt-4">Liability</h2>
          <p>We strive for accuracy but make no warranties regarding completeness. OBAGAGLOBAL LTD is not liable for indirect or consequential damages arising from site use.</p>
          <h2 className="text-2xl font-semibold text-white mt-4">Contact</h2>
          <p>Questions about these terms? Email info@obagaglobal.com.</p>
        </div>
      </Container>
    </main>
  );
}