import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray";
  style?: React.CSSProperties;
}

export function Section({
  children,
  className,
  id,
  background = "white",
  style,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-28",
        background === "gray" ? "bg-slate-50" : "bg-white",
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
}
