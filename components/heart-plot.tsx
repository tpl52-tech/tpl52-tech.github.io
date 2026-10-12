"use client";

import { useEffect, useRef, useState } from "react";

/**
 * (8) Live plot toy: the parametric curve
 *   x = 16 sin^3 t,  y = 13 cos t - 5 cos 2t - 2 cos 3t - cos 4t
 * which happens to draw a heart. The slider scrubs how much is drawn.
 * Minus signs are math minus, never em-dashes.
 */
export function HeartPlot({ hint }: { hint: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [t, setT] = useState(1);
  const tRef = useRef(1);
  tRef.current = t;

  // draw loop
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0,
      raf = 0,
      running = false;

    const css = (v: string, f: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(v).trim() || f;
    const heart = (tt: number) => ({
      x: 16 * Math.pow(Math.sin(tt), 3),
      y: 13 * Math.cos(tt) - 5 * Math.cos(2 * tt) - 2 * Math.cos(3 * tt) - Math.cos(4 * tt),
    });

    function size() {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    const ro = new ResizeObserver(size);
    ro.observe(canvas);

    function draw() {
      const accent = css("--accent", "#93c5fd");
      const line = css("--line", "#272a33");
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2,
        cy = h / 2 + 4,
        s = Math.min(w, h) / 38;
      const pulse = 1;

      ctx.strokeStyle = line;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, h);
      ctx.stroke();
      ctx.globalAlpha = 1;

      const tmax = tRef.current * 2 * Math.PI;
      const N = 360;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= N; i++) {
        const p = heart((i / N) * tmax);
        const px = cx + p.x * s * pulse,
          py = cy - p.y * s * pulse;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();

      const pe = heart(tmax);
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(cx + pe.x * s * pulse, cy - pe.y * s * pulse, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    const loop = () => {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      reduce ? draw() : loop();
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  // auto-draw once on mount
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setT(1);
      return;
    }
    let v = 0,
      id = 0;
    setT(0);
    const step = () => {
      v += 0.018;
      if (v >= 1) {
        setT(1);
        return;
      }
      setT(v);
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="mx-auto mt-[34px] w-full max-w-[380px] rounded-card border border-line bg-surface/40 p-5">
      <canvas ref={ref} className="block h-[180px] w-full" />
      <input
        type="range"
        min={0}
        max={1}
        step={0.001}
        value={t}
        onChange={(e) => setT(parseFloat(e.target.value))}
        aria-label={hint}
        className="mt-3 w-full accent-[var(--accent)]"
      />
      <p className="mt-3 text-left font-[ui-monospace,SFMono-Regular,Menlo,monospace] text-[0.72rem] leading-relaxed text-dim">
        x = 16 sin³t, y = 13 cos t - 5 cos 2t - 2 cos 3t - cos 4t
      </p>
    </div>
  );
}
