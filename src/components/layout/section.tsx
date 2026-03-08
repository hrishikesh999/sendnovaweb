import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray";
}

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-28",
        background === "gray" ? "bg-slate-50" : "bg-white",
        className
      )}
    >
      {children}
    </section>
  );
}
