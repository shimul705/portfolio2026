import Link from "next/link";

export function Hero() {
  return (
    <div className="text-center">
      <p
        className="mb-3 font-mono text-sm"
        style={{ color: "var(--accent)" }}
      >
        Full-stack developer
      </p>
      <h1 className="mb-4 text-3xl font-medium leading-tight sm:text-4xl">
        I build fast, reliable products from front end to infrastructure
      </h1>
      <p
        className="mx-auto mb-8 max-w-xl"
        style={{ color: "var(--muted)" }}
      >
        React and Next.js on the surface, Node and MongoDB underneath, and the
        DevOps to ship and run it all myself.
      </p>
      <div className="flex justify-center gap-3">
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
  );
}
