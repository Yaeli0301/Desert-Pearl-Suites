import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Render the main title as h1 on hero-level sections, h2 elsewhere. */
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <Tag className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
