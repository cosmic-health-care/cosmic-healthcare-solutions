import type { ComponentType } from "react";
import { cn } from "cn";

/** Square accent tile holding an icon. */
export function IconTile({
  icon: Icon,
  className,
}: {
  icon: ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-brand",
        className
      )}
    >
      <Icon className="size-5" />
    </span>
  );
}
