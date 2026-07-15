import Link from "next/link";

export function Hero() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div>
        <p
          className="mb-3 font-mono text-sm"
          style={{ color: "var(--accent)" }}
        >
          Hi, I&apos;m Shimul Mahmud
        </p>
        <h1 className="mb-4 text-3xl font-medium leading-tight sm:text-4xl">
          Full-stack developer building fast, reliable products end to end
        </h1>
        <p
          className="mb-8 max-w-md"
          style={{ color: "var(--muted)" }}
        >
          React and Next.js on the surface, Node and databases underneath,
          and the DevOps to ship and run it all myself.
        </p>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="rounded-md px-5 py-2 text-sm font-medium"
            style={{ background: "var(--button-bg)", color: "var(--button-fg)" }}
          >
            View my work
          </Link>
          <Link
            href="/resume"
            className="rounded-md border px-5 py-2 text-sm font-medium"
            style={{ borderColor: "var(--card-border)" }}
          >
            Download resume
          </Link>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div
          className="absolute -z-10 h-80 w-80 rounded-full opacity-25 blur-3xl sm:h-[26rem] sm:w-[26rem]"
          style={{ background: "var(--accent)" }}
        />
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/shimul4.png"
            alt="Shimul Mahmud"
            className="h-auto w-80 rounded-2xl object-cover sm:w-[26rem]"
          />
          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium shadow-md"
            style={{ background: "var(--accent)", color: "var(--button-fg)" }}
          >
            Available for opportunities
          </div>
        </div>
      </div>
    </div>
  );
}
