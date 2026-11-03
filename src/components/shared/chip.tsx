import type { ReactNode } from "react";
import { cn } from "cn";

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-inset px-3 py-1.5 text-xs font-medium text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
