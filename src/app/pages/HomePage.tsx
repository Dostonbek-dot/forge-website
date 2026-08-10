import { Bestsellers } from "../components/bestsellers";
import { Categories } from "../components/categories";
import { Hero } from "../components/hero";
import { Testimonials } from "../components/testimonials";
import { TrustBand } from "../components/trust-band";
import { WhyForge } from "../components/why-forge";

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <WhyForge />
      <Categories />
      <Bestsellers />
      <Testimonials />
    </>
  );
}
