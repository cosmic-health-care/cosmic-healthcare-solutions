import { Check } from "lucide-react";
import { cn } from "cn";

export function CheckList({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
          <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
