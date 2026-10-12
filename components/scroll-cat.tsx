"use client";

import { useEffect, useRef, useState } from "react";

/**
 * An elegant grey (GitHub-cat colored) side-profile cat that follows you down
 * the page by JUMPING from one piece of text to the next (headings +
 * [data-cat-perch]) so it stays on screen: it stretches, leaps along an arc,
 * and squashes on landing. Rides the text while idle; tail sways and it blinks.
 * Desktop only, and it sits still under reduced-motion.
 */
export function ScrollCat() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const W = 62,
    H = 47;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    if (reduce || !wide) return;

    const el = ref.current!;
    const NAV_H = 84;
    let raf = 0;
    let curX = 120,
      curY = window.innerHeight * 0.4;
    let face = 1;
    let current: HTMLElement | null = null;
    let platforms: HTMLElement[] = [];
    let jumping = false,
      jumpT = 0,
      fromX = curX,
      fromY = curY,
      jumpH = 40,
      landTimer = 0;

    const collect = () => {
      platforms = Array.from(
        document.querySelectorAll<HTMLElement>("h1, h2, h3, [data-cat-perch]")
      );
    };
    collect();
    const ro = new ResizeObserver(collect);
    ro.observe(document.body);

    const onScreen = (r: DOMRect) =>
      r.bottom > NAV_H + 8 && r.top < window.innerHeight - 8;
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    function perchPos(p: HTMLElement) {
      const r = p.getBoundingClientRect();
      const vw = window.innerWidth;
      let x = r.left + Math.min(28, r.width * 0.06);
      let y = r.top - H + 10;
      x = Math.max(10, Math.min(vw - W - 10, x));
      y = Math.max(NAV_H, Math.min(window.innerHeight - H - 8, y));
      return { x, y };
    }

    setEnabled(true);

    function tick() {
      const vh = window.innerHeight,
        vw = window.innerWidth;

      if (!jumping) {
        let keep = false;
        if (current) {
          const r = current.getBoundingClientRect();
          if (onScreen(r) && r.top > NAV_H && r.top < vh * 0.82) keep = true;
        }
        if (!keep) {
          const band = vh * 0.4;
          let best: HTMLElement | null = null,
            bestD = Infinity;
          for (const p of platforms) {
            const r = p.getBoundingClientRect();
            if (!onScreen(r) || r.top < NAV_H + 8) continue;
            const d = Math.abs(r.top - band);
            if (d < bestD) {
              bestD = d;
              best = p;
            }
          }
          if (best && best !== current) {
            const tp = perchPos(best);
            fromX = curX;
            fromY = curY;
            jumpH = Math.max(28, Math.min(88, Math.hypot(tp.x - fromX, tp.y - fromY) * 0.5));
            if (Math.abs(tp.x - fromX) > 2) face = tp.x > fromX ? 1 : -1;
            current = best;
            jumping = true;
            jumpT = 0;
            el.classList.add("jumping");
          }
        }
      }

      let tx: number, ty: number;
      if (current && onScreen(current.getBoundingClientRect())) {
        const tp = perchPos(current);
        tx = tp.x;
        ty = tp.y;
      } else {
        tx = vw - W - 26;
        ty = vh - H - 26;
      }

      if (jumping) {
        jumpT += 0.042;
        const t = Math.min(1, jumpT);
        const e = ease(t);
        curX = fromX + (tx - fromX) * e;
        curY = fromY + (ty - fromY) * e - jumpH * Math.sin(Math.PI * t);
        if (jumpT >= 1) {
          jumping = false;
          el.classList.remove("jumping");
          el.classList.add("landing");
          clearTimeout(landTimer);
          landTimer = window.setTimeout(() => el.classList.remove("landing"), 280);
        }
      } else {
        curX += (tx - curX) * 0.3;
        curY += (ty - curY) * 0.3;
      }

      el.style.transform = `translate3d(${curX}px, ${curY}px, 0) scaleX(${face})`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      clearTimeout(landTimer);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="cat pointer-events-none fixed left-0 top-0 z-40"
      style={{
        width: W,
        height: H,
        willChange: "transform",
        opacity: enabled ? 1 : 0,
        transition: "opacity 500ms ease",
      }}
    >
      <svg className="cat-svg" viewBox="0 0 180 136" width={W} height={H} overflow="visible">
        {/* graceful curled tail (behind the body) */}
        <path
          className="cat-tail"
          fill="none"
          stroke="var(--cat-body)"
          strokeWidth="9"
          strokeLinecap="round"
          d="M46 59 C26 56 10 32 18 16 C23 6 38 4 44 14"
        />
        {/* body (gentle flat back, no rising neck) */}
        <path
          fill="var(--cat-body)"
          d="M155 58 C120 56 70 56 48 58 C45 58 44 58 44 60 C42 72 44 84 43 96 C42 108 40 120 43 132 L53 132 C55 118 55 108 59 102 C74 96 98 96 114 98 C120 99 124 100 124 108 L124 132 L134 132 C136 118 135 88 137 72 C138 66 140 62 146 61 C150 60 153 60 155 60 C157 60 157 59 155 58 Z"
        />
        {/* forward-facing head (doubled size), resting on the body (no neck) */}
        <path fill="var(--cat-body)" d="M120 12 L110 -24 L136 6 Z" />
        <path fill="var(--cat-body)" d="M172 12 L182 -24 L156 6 Z" />
        <ellipse cx="146" cy="34" rx="30" ry="27" fill="var(--cat-body)" />
        <g className="cat-eyes">
          <ellipse cx="134" cy="30" rx="5" ry="6.2" fill="var(--bg)" />
          <ellipse cx="158" cy="30" rx="5" ry="6.2" fill="var(--bg)" />
        </g>
        <path d="M146 44 l-5 -6 l10 0 Z" fill="var(--bg)" />
      </svg>
    </div>
  );
}
