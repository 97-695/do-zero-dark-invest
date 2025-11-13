import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Modules } from "@/components/Modules";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <Modules />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
