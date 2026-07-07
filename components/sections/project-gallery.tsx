"use client";

import { useState } from "react";

export function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div
        className="mb-3 overflow-hidden rounded-lg border"
        style={{ borderColor: "var(--card-border)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[selected]}
          alt={`${title} screenshot ${selected + 1}`}
          className="aspect-video w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className="overflow-hidden rounded-md border-2"
            style={{
              borderColor:
                selected === index ? "var(--accent)" : "var(--card-border)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              className="aspect-video w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
