"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage } from "../../types";
import { cn } from "../ui/primitives";

export function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [selected, setSelected] = useState(0);
  const current = images[selected];
  if (!current) return null;

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-2 shadow-sm">
        {/* Browser-style frame */}
        <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 truncate font-mono text-xs text-subtle">
            {current.kind === "mobile" ? "Mobile view · 390px" : `Screenshot ${selected + 1} of ${images.length}`}
          </span>
        </div>
        <div className={cn("relative", current.kind === "mobile" ? "flex justify-center bg-surface-2 py-6" : "aspect-[16/10]")}>
          {current.kind === "mobile" ? (
            <div className="relative aspect-[390/844] w-[230px] overflow-hidden rounded-[28px] border-[6px] border-foreground/90 shadow-xl">
              <Image src={current.src} alt={current.alt} fill sizes="230px" className="object-cover object-top" />
            </div>
          ) : (
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority={selected === 0}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover object-top"
            />
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelected(index)}
              aria-label={`Show screenshot ${index + 1} of ${title}`}
              aria-pressed={selected === index}
              className={cn(
                "relative aspect-[16/10] overflow-hidden rounded-xl border-2 bg-surface-2 transition-all",
                selected === index ? "border-accent" : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="160px"
                className={cn("object-cover", image.kind === "mobile" ? "object-top" : "object-top")}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
