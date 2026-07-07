import Link from "next/link";

export function Hero() {
  return (
    <div className="text-center">
      <p className="mb-3 font-mono text-sm text-blue-600 dark:text-blue-400">
        Full-stack developer
      </p>
      <h1 className="mb-4 text-3xl font-medium leading-tight sm:text-4xl">
        I build fast, reliable products from front end to infrastructure
      </h1>
      <p className="mx-auto mb-8 max-w-xl text-neutral-600 dark:text-neutral-400">
        React and Next.js on the surface, Node and MongoDB underneath, and the
        DevOps to ship and run it all myself.
      </p>
      <div className="flex justify-center gap-3">
        <Link
          href="/projects"
          className="rounded-md bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          View my work
        </Link>
        <Link
          href="/resume"
          className="rounded-md border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          Download resume
        </Link>
      </div>
    </div>
  );
}
