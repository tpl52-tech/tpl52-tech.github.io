"use client";

import { site } from "@/lib/content";
import { useT } from "./language-provider";
import { Container } from "./container";
import { Reveal } from "./reveal";

export function About() {
  const t = useT();
  const e = site.education;

  return (
    <section id="about" className="py-[clamp(72px,11vh,132px)]">
      <Container>
        <Reveal className="mb-[clamp(32px,5vw,56px)]">
          <h2 className="font-display text-[clamp(1.9rem,1.3rem+2.4vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.01em]">
            {t.about.heading}
          </h2>
        </Reveal>

        <Reveal>
          <div className="max-w-[760px] border-t border-line pt-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-[clamp(1.4rem,1.1rem+0.8vw,1.8rem)] font-semibold tracking-[-0.01em]">
                {e.school}
              </h3>
              <span className="text-[0.95rem] text-dim">
                {t.about.expected} {e.graduation}
              </span>
            </div>
            <p className="mt-1 text-dim">{e.detail}</p>
            <p className="mt-4 text-[1.1rem] text-ink">{e.degree}</p>

            <div className="mt-9">
              <p className="text-[0.82rem] font-semibold text-faint">{t.about.activities}</p>
              <ul className="mt-3 flex flex-wrap gap-[7px]">
                {e.activities.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-line px-[12px] py-[6px] text-[0.82rem] text-dim"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
