"use client";

import { site } from "@/lib/content";
import { useT } from "./language-provider";

/** A logo rendered as a flat tint via CSS mask of its transparent PNG, so it
    reads on the dark page (and flips with the theme). No box. */
function MaskLogo({
  src,
  width,
  height,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  const mask = `url("${src}")`;
  return (
    <span
      aria-hidden
      className={`float-logo ${className}`}
      style={{ width, height, WebkitMaskImage: mask, maskImage: mask }}
    />
  );
}

// Logo + float position + size, in site.workedAt order
// (reuse, dorsia, ewb-usa, ewb-cornell, cornell). Positions stay in the gutters.
const FLOAT = [
  { top: "23%", left: "12%", rot: -6, dur: 7.5, delay: 0, w: 158, h: 138 },
  { top: "28%", right: "13%", rot: 5, dur: 8.6, delay: 0.9, w: 208, h: 33 },
  { top: "49%", left: "11%", rot: 4, dur: 8.0, delay: 1.7, w: 172, h: 132 },
  { top: "60%", right: "12%", rot: -5, dur: 9.2, delay: 0.5, w: 150, h: 144 },
  { top: "71%", left: "15%", rot: 6, dur: 7.8, delay: 1.2, w: 150, h: 149 },
] as const;

/** Desktop: logos drift around the contact section. */
export function FloatingLogos() {
  const t = useT();
  return (
    <div
      aria-label={t.workedAt}
      className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
    >
      {site.workedAt.map((logo, i) => {
        const p = FLOAT[i % FLOAT.length];
        return (
          <div
            key={logo.name}
            className="absolute"
            style={{
              top: p.top,
              left: "left" in p ? p.left : undefined,
              right: "right" in p ? p.right : undefined,
              transform: `rotate(${p.rot}deg)`,
            }}
          >
            <div
              className="float-chip"
              style={{ animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }}
            >
              <MaskLogo src={logo.src} width={p.w} height={p.h} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Small screens: a tidy centered row (no room to float). */
export function LogoStrip() {
  const t = useT();
  return (
    <div className="mt-[clamp(44px,8vw,64px)] lg:hidden">
      <p className="mb-6 text-center font-mono text-[0.68rem] uppercase tracking-[0.18em] text-faint">
        {t.workedAt}
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-[clamp(20px,5vw,40px)] gap-y-5">
        {site.workedAt.map((logo, i) => {
          const p = FLOAT[i % FLOAT.length];
          const h = 42;
          return (
            <li key={logo.name}>
              <MaskLogo src={logo.src} width={(h * p.w) / p.h} height={h} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
