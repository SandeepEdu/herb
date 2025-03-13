
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import TrendingProducts from "@/components/TrendingProducts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll(".section-animate");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to HerbHarvest!",
        description: "Explore our natural wellness products and get 10% off your first order.",
        duration: 5000,
      });
    }, 2000);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [toast]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        <TrendingProducts />
        <Newsletter />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-herb-600 text-white flex items-center justify-center shadow-lg hover:bg-herb-700 transition-colors"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;
