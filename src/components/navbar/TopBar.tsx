
import React from "react";
import { Container } from "@/components/ui/container";

const TopBar = () => {
  return (
    <div className="border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between h-10 text-xs">
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Help
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Rewards
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Download App
            </a>
            <a href="#" className="font-medium text-herb-600 hover:text-herb-500 transition-colors">
              Sign In / Register
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
