// components/ui/Sidebar.tsx
"use client";
import { useSpring, animated } from "react-spring";
import { Button } from "@/components/ui/button";
import { X, Home, Settings, Users } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const SIDEBAR_WIDTH = 256;

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const styles = useSpring({
    transform: isOpen ? "translateX(0px)" : `translateX(${SIDEBAR_WIDTH}px)`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      style={{
        ...styles,
        top: `0px`,
        height: `100vh`,
        width: `${SIDEBAR_WIDTH}px`,
      }}
      className="fixed right-0 bg-sidebar text-sidebar-foreground border-l border-sidebar-border rounded-l-md shadow-xl overflow-y-auto z-20"
    >
      <div className="flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                asChild
              >
                <a href="#">
                  <Home className="mr-2 h-5 w-5" />
                  Home
                </a>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                asChild
              >
                <a href="#">
                  <Users className="mr-2 h-5 w-5" />
                  Users
                </a>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                asChild
              >
                <a href="#">
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </a>
              </Button>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-sidebar-border">
          <p className="text-sm text-sidebar-muted-foreground">
            Sidebar Prototype v1.0
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default Sidebar;