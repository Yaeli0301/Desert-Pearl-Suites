import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium uppercase tracking-luxe transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:shadow-glow hover:-translate-y-0.5",
  outline:
    "border border-ink/35 text-ink hover:-translate-y-0.5 hover:border-gold",
  // For use on dark backgrounds — light border + light text, always visible.
  outlineLight:
    "border border-cream/55 text-cream hover:-translate-y-0.5 hover:bg-cream hover:text-ink",
  ghost: "text-ink hover:text-gold-deep",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-7 py-3.5 text-[11px]",
  lg: "px-9 py-4 text-xs",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsLink = CommonProps &
  ComponentProps<typeof Link> & { href: string };

type ButtonAsButton = CommonProps &
  ComponentProps<"button"> & { href?: undefined };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonAsLink | ButtonAsButton) {
  const classes = cn(base, variants[variant], sizes[size], className);

  // Light sheen that sweeps across on hover for primary buttons.
  const inner = (
    <>
      {variant === "primary" ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gold-sheen transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
        />
      ) : null}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if ("href" in props && props.href !== undefined) {
    return (
      <Link className={classes} {...(props as ButtonAsLink)}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {inner}
    </button>
  );
}
