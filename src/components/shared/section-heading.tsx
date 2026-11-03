import { cn } from "cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
