
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Supplements",
    image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=800&auto=format&fit=crop",
    count: "1,200+ Products",
    slug: "supplements"
  },
  {
    id: 2,
    name: "Herbs & Botanicals",
    image: "https://images.unsplash.com/photo-1611572847364-ec3eef48e682?q=80&w=800&auto=format&fit=crop",
    count: "800+ Products",
    slug: "herbs"
  },
  {
    id: 3,
    name: "Natural Beauty",
    image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=800&auto=format&fit=crop",
    count: "950+ Products",
    slug: "beauty"
  },
  {
    id: 4,
    name: "Organic Foods",
    image: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?q=80&w=800&auto=format&fit=crop",
    count: "750+ Products",
    slug: "food"
  },
  {
    id: 5,
    name: "Sports Nutrition",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop",
    count: "500+ Products",
    slug: "sports"
  },
  {
    id: 6,
    name: "Bath & Personal Care",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4d8vivian?q=80&w=800&auto=format&fit=crop",
    count: "650+ Products",
    slug: "bath"
  },
];

export const FeaturedCategories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
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
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16 section-animate">
          <span className="inline-block px-3 py-1 bg-herb-100 text-herb-600 rounded-full text-sm font-medium mb-4">
            Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our wide selection of natural health products, organized 
            by category to help you find exactly what you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`section-animate rounded-2xl overflow-hidden shadow-soft group hover:shadow-hover transition-all duration-500 bg-white border border-gray-100`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/products?category=${category.slug}`} className="block relative overflow-hidden aspect-[4/3]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-white/80">{category.count}</p>
                </div>
              </Link>
              <div className="p-5 flex justify-between items-center">
                <span className="text-sm font-medium text-herb-600">Explore Products</span>
                <span className="h-8 w-8 rounded-full flex items-center justify-center bg-herb-50 text-herb-600 group-hover:bg-herb-100 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCategories;
