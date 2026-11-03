import { Fragment, type ReactNode } from "react";
import Link from "next/link";

type Breadcrumb = { href: string; label: string };

/** Top of every inner page: breadcrumb or eyebrow, the page title, and an intro. */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Parent pages. The current page is added from `title`. */
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode;
}) {
  return (
    <section className="theme-deep header-underlap bg-background">
      <div className="page-container py-14 md:py-20">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="text-sm text-subtle-foreground">
            {breadcrumbs.map((crumb) => (
              <Fragment key={crumb.href}>
                <Link href={crumb.href} className="transition-colors hover:text-foreground">
                  {crumb.label}
                </Link>
                <span aria-hidden className="mx-2">
                  /
                </span>
              </Fragment>
            ))}
            <span aria-current="page" className="text-foreground">
              {title}
            </span>
          </nav>
        ) : (
          eyebrow && <p className="eyebrow">{eyebrow}</p>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
