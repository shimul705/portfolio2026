import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

type ButtonVariant = "primary" | "accent" | "secondary" | "inverse" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:opacity-90 shadow-sm",
  secondary:
    "border border-border bg-surface text-foreground hover:border-accent hover:text-accent",
  accent: "bg-accent text-accent-fg hover:opacity-90 shadow-sm",
  inverse: "border border-white/20 bg-white/5 text-white hover:border-white/50",
  ghost: "text-muted hover:text-foreground",
};

export function ButtonLink({
  href,
  variant = "primary",
  external,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
    buttonStyles[variant],
    className,
  );
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type BadgeTone = "neutral" | "accent" | "success" | "warning";

const badgeTones: Record<BadgeTone, string> = {
  neutral: "border border-border bg-surface-2 text-muted",
  accent: "bg-accent-soft text-accent",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
        badgeTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        )}
        <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {description && <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <Container className="relative py-16 sm:py-20">
        <p className="animate-fade-up mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up text-3xl font-semibold tracking-tight sm:text-5xl" style={{ animationDelay: "60ms" }}>
          {title}
        </h1>
        {description && (
          <p
            className="animate-fade-up mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            {description}
          </p>
        )}
        {children && (
          <div className="animate-fade-up mt-8" style={{ animationDelay: "180ms" }}>
            {children}
          </div>
        )}
      </Container>
    </header>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-2xl border border-border bg-surface", className)}>{children}</div>;
}
