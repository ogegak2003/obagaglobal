import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ variant = "dark", size = "md", className }: LogoProps) {
  // Since the provided logo has a white background, we use mix-blend-mode 
  // to make it blend seamlessly on dark backgrounds without a visible box.
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-12 w-auto",
    lg: "h-20 w-auto",
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <img
        src="/obagaglobal-logo.png"
        alt="OBAGAGLOBAL LTD - Innovation Beyond Borders"
        className={cn(
          "object-contain transition-all duration-300",
          sizeClasses[size],
          variant === "dark" ? "mix-blend-screen" : "mix-blend-multiply"
        )}
      />
    </div>
  );
}