"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { Project } from "@/lib/content";

/**
 * Project visual. Priority: a looping muted `video` (shown as its `poster` still
 * under reduced motion), then a real `image` screenshot, then an honest,
 * palette-locked placeholder plate (NOT a fake product screenshot).
 */
export function Plate({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; // force-muted so autoplay is allowed
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);

  return (
    <div
      style={{ aspectRatio: project.plateAspect ?? "16 / 10" }}
      className="relative overflow-hidden rounded-card border border-line transition duration-[350ms] ease-out-expo group-hover:-translate-y-[5px] group-hover:border-faint"
    >
      {project.video ? (
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          autoPlay={!reduce}
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`${project.name} preview`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : project.image ? (
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 760px) 100vw, 60vw"
          className="object-cover"
        />
      ) : (
        <div className={`plate-${project.variant} absolute inset-0 grid place-items-center`}>
          <span className="font-display text-[clamp(3rem,9vw,6rem)] font-extrabold tracking-[-0.05em] text-ink opacity-[0.07]">
            {project.name[0]}
          </span>
        </div>
      )}
    </div>
  );
}
