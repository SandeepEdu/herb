
import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import TopBar from "./navbar/TopBar";
import Logo from "./navbar/Logo";
import SearchBar from "./navbar/SearchBar";
import ActionButtons from "./navbar/ActionButtons";
import MobileMenuButton from "./navbar/MobileMenuButton";
import CategoryNavigation from "./navbar/CategoryNavigation";
import MobileMenu from "./navbar/MobileMenu";

const categories = [
  "Supplements",
  "Beauty",
  "Grocery",
  "Sports",
  "Children",
  "Herbs",
  "Bath",
  "Pets",
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <TopBar />

      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden lg:flex flex-1 mx-12">
            <SearchBar />
          </div>

          <ActionButtons />

          <div className="lg:hidden flex items-center">
            <MobileMenuButton 
              isMobileMenuOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        <CategoryNavigation categories={categories} />
      </Container>

      <MobileMenu 
        categories={categories}
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
      />
    </header>
  );
};

export default NavBar;
