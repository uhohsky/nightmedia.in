import BrandingAgencyBlog from './pages/branding-agency-transform';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import CustomCursor from "./components/Layout/CustomCursor";
import WhatsAppFloat from "./components/Layout/WhatsAppFloat";
import ScrollToTop from "./components/Layout/ScrollToTop";

import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import Rebranding3DEraCaseStudy from "./pages/Rebranding3DEraCaseStudy";
import PerformanceMarketingTrends2025 from "./pages/performance-marketing-trends-2025";
import AIMarketingAutomationGuide from "./pages/ai-marketing-automation-guide";
import GrowthSystemsFramework from "./pages/growth-systems-framework";

/* ✅ SAFARI DETECTION — DO NOT MOVE */
const isSafari =
  typeof navigator !== "undefined" &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <div className="min-h-screen flex flex-col">
            {/* ✅ Disable cursor animation ONLY on Safari */}
            {!isSafari && <CustomCursor />}

            <Navigation />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route
                  path="/blog/rebranding-3d-era-case-study"
                  element={<Rebranding3DEraCaseStudy />}
                />
                <Route
                  path="/blog/performance-marketing-trends-2025"
                  element={<PerformanceMarketingTrends2025 />}
                />
                <Route
                  path="/blog/ai-marketing-automation-guide"
                  element={<AIMarketingAutomationGuide />}
                />
                <Route
                  path="/blog/growth-systems-framework"
                  element={<GrowthSystemsFramework />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
            <WhatsAppFloat />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
