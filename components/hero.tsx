"use client";

import Image from "next/image";
import { site } from "@/lib/content";
import { useT } from "./language-provider";
import { Container } from "./container";

export function Hero() {
  const t = useT();

  return (
    <section className="pb-[clamp(48px,8vw,100px)] pt-[clamp(28px,4vw,56px)]">
      <Container>
        <div className="grid grid-cols-1 items-start gap-[clamp(28px,5vw,64px)] md:grid-cols-[1.05fr_0.9fr]">
          {/* name block, top-left */}
          <div>
            <h1 className="font-display text-[clamp(2.1rem,1.4rem+2.6vw,3.5rem)] font-bold leading-[1.0] tracking-[-0.02em]">
              {site.name}
            </h1>
            <div className="mt-6 max-w-[56ch] space-y-4 text-[clamp(1rem,0.97rem+0.2vw,1.1rem)] leading-[1.6] text-dim">
              {t.hero.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-16 flex flex-wrap gap-3" data-cat-perch>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-btn px-[22px] py-[13px] font-mono text-[0.9rem] text-btn-ink transition hover:shadow-[0_10px_26px_-14px_rgba(0,0,0,0.5)] active:translate-y-px active:scale-[0.985]"
              >
                {t.cta.viewWork}
                <span className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                  ↗
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-line bg-bg px-[22px] py-[13px] font-mono text-[0.9rem] text-ink transition hover:border-faint active:translate-y-px active:scale-[0.985]"
              >
                {t.cta.getInTouch}
              </a>
            </div>
          </div>

          {/* portrait, right (fades into the page) */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] md:self-center">
            {site.photo && (
              <Image
                src={site.photo}
                alt={site.name}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 42vw"
                className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,#000_78%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000_78%,transparent)]"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
