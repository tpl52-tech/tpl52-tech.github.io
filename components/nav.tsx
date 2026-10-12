"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { useT, useVariant } from "./language-provider";
import { LangToggle } from "./lang-toggle";
import { Container } from "./container";

export function Nav() {
  const t = useT();
  const variant = useVariant();
  const [active, setActive] = useState("");
  const [pinned, setPinned] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const el = document.documentElement;
    const resolve = (): "light" | "dark" => {
      const attr = el.getAttribute("data-theme");
      if (attr === "dark" || attr === "light") return attr;
      return "dark";
    };
    setMode(resolve());

    const sentinel = document.getElementById("top-sentinel");
    const ioPin = sentinel
      ? new IntersectionObserver(([e]) => setPinned(!e.isIntersecting))
      : null;
    if (sentinel && ioPin) ioPin.observe(sentinel);

    const ioSpy = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    site.nav.forEach((n) => {
      const s = document.getElementById(n.id);
      if (s) ioSpy.observe(s);
    });

    return () => {
      ioPin?.disconnect();
      ioSpy.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const next = mode === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setMode(next);
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          pinned
            ? "border-b border-line bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <Container>
          <div className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center gap-4">
            <a
              href="#top"
              className="justify-self-start font-display text-[1.2rem] font-semibold tracking-[-0.01em]"
            >
              {site.shortName}
            </a>

            <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
              {site.nav.map((n) => {
                const on = active === n.id;
                return (
                  <a
                    key={n.id}
                    href={n.href}
                    className={`font-display text-[1.02rem] transition ${
                      on ? "text-ink" : "text-dim hover:text-ink"
                    }`}
                  >
                    {t.nav[n.id]}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 justify-self-end">
              <a
                href={variant === "pm" ? "/" : "/pm/"}
                className="hidden rounded-full border border-line px-[13px] py-[7px] font-mono text-[0.78rem] text-dim transition hover:border-faint hover:text-ink sm:inline-flex"
              >
                {variant === "pm" ? t.switcher.toSwe : t.switcher.toPm}
              </a>
              <LangToggle />
              <button
                onClick={toggleTheme}
                aria-label={t.ui.theme}
                className="rounded-full border border-line px-[13px] py-[7px] text-[0.78rem] text-dim transition hover:border-faint hover:text-ink"
              >
                {mode === "dark" ? t.ui.light : t.ui.dark}
              </button>
              <a
                href="#contact"
                className="hidden rounded-full bg-btn px-4 py-[9px] text-[0.85rem] text-btn-ink transition active:translate-y-px active:scale-[0.985] sm:inline-flex"
              >
                {t.cta.getInTouch}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
