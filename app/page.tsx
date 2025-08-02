"use client";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/Sidebar";
import Toolbar from "@/components/ui/Toolbar";

const SIDEBAR_WIDTH = 256;
const TOOLBAR_HEIGHT = 64;

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainStyles = useSpring({
    paddingRight: isOpen ? SIDEBAR_WIDTH : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="relative min-h-screen bg-background flex">
      <animated.div
        style={mainStyles}
        className="relative z-0 pt-16 flex-1 min-w-0"
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>This is the main screen content that shifts when the sidebar opens. This is the main screen content that shifts when the sidebar opens.This is the main screen content that shifts when the sidebar opens. This is the main screen content that shifts when the sidebar opens. This is the main screen content that shifts when the sidebar opens. This is the main screen content that shifts when the sidebar opens. This is the main screen content that shifts when the sidebar opens. This is the main screen content that shifts when the sidebar opens.</p>
          <Button>Homepage Button</Button>
        </div>
      </animated.div>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Toolbar onToggle={() => setIsOpen((prev) => !prev)} />
    </div>
  );
};

export default HomePage;