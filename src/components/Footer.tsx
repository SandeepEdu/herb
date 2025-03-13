
import React from "react";
import { Container } from "@/components/ui/container";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-herb-600 mr-1">
                Herb
              </span>
              <span className="text-2xl font-bold tracking-tight text-bark-500">
                Harvest
              </span>
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              We're dedicated to bringing you the finest natural health products 
              to support your wellness journey. Our carefully curated selection focuses 
              on quality, purity, and efficacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-herb-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-herb-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-herb-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-herb-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-herb-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Categories</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Supplements</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Herbs & Botanicals</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Beauty & Personal Care</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Organic Foods</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Sports Nutrition</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Shipping Information</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Returns & Refunds</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Order Tracking</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Press & Media</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-herb-600 transition-colors flex items-center">
                  <ChevronRight className="h-3 w-3 mr-2" />
                  <span>Affiliate Program</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} HerbHarvest. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-sm text-gray-500 hover:text-herb-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-herb-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-herb-600 transition-colors">
              Shipping Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-herb-600 transition-colors">
              Accessibility
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-herb-600 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>* These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
