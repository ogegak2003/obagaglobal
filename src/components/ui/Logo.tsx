import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ variant = "dark", size = "md", className }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-background";
  const iconColor = "text-primary";
  
  const sizes = {
    sm: { icon: 20, text: "text-lg", sub: "text-[8px]" },
    md: { icon: 28, text: "text-2xl", sub: "text-[10px]" },
    lg: { icon: 40, text: "text-4xl", sub: "text-xs" },
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center">
        <Globe size={sizes[size].icon} className={iconColor} strokeWidth={1.5} />
        <div className="absolute w-full h-[1px] bg-primary rotate-45 scale-110" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={cn("font-bold tracking-wider", sizes[size].text, textColor)}>
          OBAGA<span className="text-primary">GLOBAL</span>
        </span>
        <span className={cn("tracking-[0.2em] font-medium text-right", sizes[size].sub, textColor)}>
          LTD
        </span>
      </div>
    </div>
  );
}