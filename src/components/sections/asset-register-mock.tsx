import { CalendarCheck, FileCheck2 } from "lucide-react";
import { cn } from "cn";

type RegisterStatus = "ok" | "due";

// Illustration of the kind of asset register we maintain for a facility. Not live data.
const sampleAssets: { name: string; location: string; status: string; tone: RegisterStatus }[] = [
  { name: "Anesthesia Workstation", location: "OT 2", status: "Calibrated", tone: "ok" },
  { name: "ICU Ventilator", location: "ICU 4", status: "AMC active", tone: "ok" },
  { name: "Cardiac Monitor", location: "ICU 1", status: "Calibration due", tone: "due" },
  { name: "Defibrillator", location: "Emergency", status: "PM scheduled", tone: "ok" },
  { name: "Syringe Pump", location: "NICU", status: "CMC active", tone: "ok" },
];

const statusTone: Record<RegisterStatus, string> = {
  ok: "bg-success-soft text-success",
  due: "bg-warning-soft text-warning",
};

function FloatingNote({
  icon: Icon,
  title,
  detail,
  className,
}: {
  icon: typeof FileCheck2;
  title: string;
  detail: string;
  className: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 hidden animate-bob items-center gap-3 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-lg shadow-shadow lg:flex",
        className
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary-soft text-brand">
        <Icon className="size-4" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-foreground">{title}</span>
        <span className="block text-xs text-subtle-foreground">{detail}</span>
      </span>
    </div>
  );
}

/** Hero illustration: a sample of the audit-ready register behind our asset management service. */
export function AssetRegisterMock() {
  return (
    <div aria-hidden className="theme-light relative">
      <FloatingNote
        icon={FileCheck2}
        title="Certificate issued"
        detail="Infusion pump · NABH norms"
        className="-top-14 right-6"
      />
      <FloatingNote
        icon={CalendarCheck}
        title="Preventive visit done"
        detail="OT lights · next visit scheduled"
        className="-bottom-14 left-6 [animation-delay:-3s]"
      />

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-shadow">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
          </span>
          <span className="rounded-md bg-inset px-2.5 py-1 font-mono text-xs text-foreground">
            asset-register
          </span>
          <span className="ml-auto text-xs text-subtle-foreground">Sample</span>
        </div>

        <ul className="divide-y divide-border">
          {sampleAssets.map((asset) => (
            <li key={asset.name} className="flex items-center justify-between gap-3 px-4 py-3.5">
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-foreground">
                  {asset.name}
                </span>
                <span className="block text-xs text-subtle-foreground">{asset.location}</span>
              </span>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 text-xs font-medium",
                  statusTone[asset.tone]
                )}
              >
                {asset.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
