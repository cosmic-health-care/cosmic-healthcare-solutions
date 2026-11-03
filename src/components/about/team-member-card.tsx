import Image from "next/image";
import type { TeamMember } from "@/data/team";
import { Chip } from "@/components/shared/chip";
import { Reveal } from "@/components/shared/reveal";

export function TeamMemberCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-4">
        <div className="relative size-24 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-brand">{member.role}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {member.highlights.map((highlight) => (
          <Chip key={highlight}>{highlight}</Chip>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {member.bio.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
