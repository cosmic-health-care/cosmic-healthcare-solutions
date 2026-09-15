import Image from "next/image";
import type { TeamMember } from "@/data/team";
import { Reveal } from "@/components/shared/reveal";

export function TeamMemberCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  return (
    <Reveal
      delay={delay}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
            {member.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-white/85">{member.role}</p>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap gap-2">
          {member.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {member.bio.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
