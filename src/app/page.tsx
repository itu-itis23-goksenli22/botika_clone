import HeroSection from "@/components/sections/HeroSection";
import TrustLogos from "@/components/sections/TrustLogos";
import ProductShowcase from "@/components/sections/ProductShowcase";
import BrandsCarousel from "@/components/sections/BrandsCarousel";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import QualityGuarantee from "@/components/sections/QualityGuarantee";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustLogos />
      <ProductShowcase />
      <BrandsCarousel />
      <CaseStudies />
      <Testimonials />
      <QualityGuarantee />
      <FinalCTA />
    </>
  );
}
