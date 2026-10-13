import { coreStack } from "../../lib/data/skills";

export function StackMarquee() {
  const items = [...coreStack, ...coreStack];
  return (
    <section aria-label="Tech stack" className="relative border-y border-border bg-surface py-5">
      <div
        className="overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)" }}
      >
        <ul className="animate-marquee flex w-max gap-10 pr-10 hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <li
              key={`${item}-${i}`}
              aria-hidden={i >= coreStack.length}
              className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
