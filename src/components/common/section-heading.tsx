import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-slate-600 md:text-xl",
            align === "center" && "mx-auto max-w-3xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
