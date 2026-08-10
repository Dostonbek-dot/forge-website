import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ProteinPage } from "./pages/ProteinPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf8] font-['Inter',sans-serif] antialiased">
      <ScrollToTop />
      <SiteNav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/protein" element={<ProteinPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
