
import React from "react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
      duration: 3000,
    });
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-herb-100 rounded-full mix-blend-multiply opacity-20 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-bark-100 rounded-full mix-blend-multiply opacity-20 blur-3xl" />
          
          <div className="relative glass-panel rounded-3xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="leaf-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M20 2C14 2 2 14 2 20C2 26 14 38 20 38C26 38 38 26 38 20C38 14 26 2 20 2ZM20 26C16.7 26 14 23.3 14 20C14 16.7 16.7 14 20 14C23.3 14 26 16.7 26 20C26 23.3 23.3 26 20 26Z" 
                    fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
              </svg>
            </div>
            
            <div className="px-6 py-16 md:p-16 relative flex flex-col md:flex-row items-center section-animate">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <span className="inline-block px-3 py-1 bg-herb-100 text-herb-600 rounded-full text-sm font-medium mb-4">
                  Stay Connected
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get 10% off your first order
                </h2>
                <p className="text-gray-600 mb-6">
                  Join our community for exclusive offers, wellness tips, and new product announcements. 
                  Plus, receive a welcome gift of 10% off on your first purchase.
                </p>
                
                <form onSubmit={handleSubmit} className="relative max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-14 pl-5 pr-36 rounded-full border-gray-200 focus:border-herb-500 focus:ring focus:ring-herb-200 focus:ring-opacity-50 transition-shadow"
                    required
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 h-12 px-6 bg-herb-600 hover:bg-herb-700 text-white rounded-full"
                  >
                    Subscribe
                  </Button>
                </form>
                
                <p className="text-xs text-gray-500 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive our promotional emails.
                </p>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=800&auto=format&fit=crop"
                    alt="Natural wellness products"
                    className="w-full h-full object-cover rounded-2xl shadow-soft reveal-image"
                  />
                  
                  <div className="absolute -right-6 -bottom-6 bg-white rounded-2xl shadow-soft p-5 max-w-[14rem] reveal-image" style={{ animationDelay: "200ms" }}>
                    <div className="flex items-center mb-3">
                      <div className="h-10 w-10 rounded-full bg-herb-100 flex items-center justify-center text-herb-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                          <line x1="4" x2="4" y1="22" y2="15" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Weekly Digest</h4>
                        <p className="text-xs text-gray-500">Wellness tips & stories</p>
                      </div>
                    </div>
                    <p className="text-xs">Get inspired with curated wellness content delivered to your inbox weekly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
