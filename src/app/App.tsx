import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProteinPage } from "./pages/ProteinPage";
import { ShopPage } from "./pages/ShopPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen w-full bg-white font-['Inter',sans-serif] antialiased">
        <ScrollToTop />
        <SiteNav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/protein" element={<ProteinPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </CartProvider>
  );
}
