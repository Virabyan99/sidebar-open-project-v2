// components/Toolbar.tsx
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface ToolbarProps {
  onToggle: () => void;
}

const Toolbar = ({ onToggle }: ToolbarProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-card flex items-center justify-between px-4 z-10 shadow-md">
      <span className="text-lg font-semibold">App Toolbar</span>
      <Button variant="ghost" onClick={onToggle}>
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Toolbar;