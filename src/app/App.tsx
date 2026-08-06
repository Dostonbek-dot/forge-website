import { Bestsellers } from "./components/bestsellers";
import { Categories } from "./components/categories";
import { Hero } from "./components/hero";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { Testimonials } from "./components/testimonials";
import { TrustBand } from "./components/trust-band";
import { WhyForge } from "./components/why-forge";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf8] font-['Inter',sans-serif] antialiased">
      <SiteNav />
      <main>
        <Hero />
        <TrustBand />
        <WhyForge />
        <Categories />
        <Bestsellers />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}
