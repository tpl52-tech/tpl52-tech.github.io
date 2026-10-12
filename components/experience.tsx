"use client";

import { site } from "@/lib/content";
import { useT } from "./language-provider";
import { Container } from "./container";
import { Reveal } from "./reveal";

export function Experience() {
  const t = useT();

  return (
    <section id="experience" className="py-[clamp(72px,11vh,132px)]">
      <Container>
        <Reveal className="mb-[clamp(32px,5vw,56px)]">
          <h2 className="font-display text-[clamp(1.9rem,1.3rem+2.4vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.01em]">
            {t.experience.heading}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-[clamp(32px,5vw,56px)]">
          {site.experience.map((job) => (
            <Reveal key={job.id}>
              <div className="max-w-[820px] border-t border-line pt-7">
                {/* company + location */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-[clamp(1.4rem,1.1rem+0.8vw,1.8rem)] font-semibold tracking-[-0.01em]">
                    {job.company}
                  </h3>
                  <span className="text-[0.95rem] text-dim">{job.location}</span>
                </div>

                {/* roles under this company, newest first */}
                <div className="mt-6 flex flex-col gap-8">
                  {job.roles.map((role) => (
                    <div key={role.id}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h4 className="text-[1.1rem] font-semibold text-ink">{role.title}</h4>
                        <span className="font-mono text-[0.8rem] text-faint">{role.period}</span>
                      </div>
                      <ul className="mt-3 list-disc space-y-2.5 pl-5 marker:text-faint">
                        {(t.experience.bullets[role.id] ?? []).map((b, i) => (
                          <li key={i} className="max-w-[72ch] pl-1 text-[1rem] leading-[1.65] text-dim">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
