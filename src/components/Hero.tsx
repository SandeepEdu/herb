
import React, { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = -15 + x * 30; // -15px to 15px
      const moveY = -5 + y * 10; // -5px to 5px
      
      const heroElement = heroRef.current;
      const bgElement = heroElement.querySelector('.hero-bg') as HTMLElement;
      const contentElement = heroElement.querySelector('.hero-content') as HTMLElement;
      
      if (bgElement) {
        bgElement.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
      }
      
      if (contentElement) {
        contentElement.style.transform = `translate(${-moveX * 0.3}px, ${-moveY * 0.3}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-r from-herb-50 to-green-50 py-16 sm:py-24" 
      style={{ height: "calc(100vh - 128px)", minHeight: "550px", maxHeight: "780px" }}
    >
      <div 
        className="hero-bg absolute inset-0 transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550514435-c17127c7df07?q=80&w=1600&auto=format&fit=crop')", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />
      
      <Container className="relative h-full flex flex-col justify-center">
        <div className="hero-content transition-transform duration-300 ease-out max-w-2xl">
          <div className="inline-block overflow-hidden mb-4">
            <span className="bg-herb-500 px-3 py-1 text-xs text-white uppercase tracking-wider rounded-full inline-block animate-fade-in">
              Special Offers
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 opacity-0 animate-slide-down" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Your Natural Way to <br className="hidden md:block" />
            <span className="text-herb-600">Wellness</span> and <br className="hidden md:block" />
            <span className="text-herb-600">Health</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg opacity-0 animate-slide-down" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Discover premium natural products for a healthier lifestyle. From supplements to organic foods and natural beauty.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-slide-down" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <Button size="lg" className="bg-herb-600 hover:bg-herb-700 text-white group">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-herb-600 text-herb-600 hover:bg-herb-50">
              View Deals
            </Button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 opacity-0 animate-slide-down" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
            <div className="flex items-center">
              <div className="text-herb-600 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Premium Quality</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-herb-600 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Secure Payment</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-herb-600 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="13" x="4" y="2" rx="2" />
                  <path d="M4 19h16" />
                  <path d="M4 23h16" />
                  <path d="M8 6h.01" />
                  <path d="M12 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M8 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M16 10h.01" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
