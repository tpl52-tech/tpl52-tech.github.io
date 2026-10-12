"use client";

import { site } from "@/lib/content";
import { useT } from "./language-provider";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { CopyEmail } from "./copy-email";
import { HeartPlot } from "./heart-plot";
import { FloatingLogos, LogoStrip } from "./logo-wall";

export function Contact() {
  const t = useT();
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[clamp(72px,11vh,132px)] text-center"
    >
      <FloatingLogos />
      <Container className="relative z-10">
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(2.1rem,1.4rem+3.2vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.01em]">
            {t.contact.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mx-auto mt-[18px] max-w-[46ch] text-dim">{t.contact.sub}</p>
        </Reveal>
        <Reveal delay={0.1}>
          {/* (8) a function that draws a heart */}
          <HeartPlot hint="draw the heart" />
        </Reveal>
        <Reveal delay={0.14}>
          <CopyEmail email={site.email} copy={t.ui.copy} copied={t.ui.copied} />
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-[28px] flex flex-wrap justify-center gap-[22px]">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="group relative pb-[3px] font-mono text-[0.85rem] text-dim transition hover:text-ink"
              >
                {s.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-accent transition-transform duration-[250ms] ease-out-expo group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </Reveal>
        <LogoStrip />
      </Container>
    </section>
  );
}
