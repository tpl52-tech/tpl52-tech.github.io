"use client";

import { site } from "@/lib/content";
import { useT } from "./language-provider";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { Plate } from "./plate";

/** GitHub "octocat" mark, inherits the current text color. */
function GitHubMark() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

/** Padlock, marking source that is intentionally kept private. */
function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

/** Small up-and-to-the-right arrow marking an external link. */
function ArrowOut() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Work() {
  const t = useT();
  return (
    <section id="work" className="py-[clamp(72px,11vh,132px)]">
      <Container>
        <Reveal className="mb-[clamp(40px,6vw,76px)]">
          <h2 className="font-display text-[clamp(1.9rem,1.3rem+2.4vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.01em]">
            {t.work.heading}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-[clamp(56px,9vw,120px)]">
          {site.projects.map((p, i) => {
            // Row 0: text left / plate right. Each following row flips sides.
            const flip = i % 2 === 1;
            const blurb = t.work.blurbs[p.id];
            // A real, public repo link (private/placeholder projects keep "#").
            const repo = p.href && p.href !== "#" ? p.href : null;
            const plateClass = `group block ${flip ? "md:order-1" : "md:order-2"}`;
            return (
              <Reveal key={p.id}>
                <div className="grid grid-cols-1 items-center gap-[clamp(22px,4vw,60px)] md:grid-cols-2">
                  {/* project plane */}
                  {repo ? (
                    <a href={repo} target="_blank" rel="noopener noreferrer" className={plateClass}>
                      <Plate project={p} />
                    </a>
                  ) : (
                    <div className={plateClass}>
                      <Plate project={p} />
                    </div>
                  )}

                  {/* explanation */}
                  <div className={flip ? "md:order-2" : "md:order-1"}>
                    <h3 className="mb-[16px] font-display text-[clamp(1.55rem,1.2rem+1vw,2.1rem)] font-semibold tracking-[-0.01em]">
                      {p.name}
                    </h3>
                    {blurb && (
                      <p className="mb-[20px] max-w-[52ch] text-[1rem] leading-[1.7] text-dim">
                        {blurb}
                      </p>
                    )}
                    {p.tech.length > 0 && (
                      <ul className="flex flex-wrap gap-[7px]">
                        {p.tech.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-line px-[11px] py-[6px] font-mono text-[0.74rem] text-dim"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                    {repo ? (
                      <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-[22px] inline-flex items-center gap-[9px] rounded-full border border-line px-[15px] py-[9px] text-[0.85rem] text-dim transition hover:border-faint hover:text-ink"
                      >
                        <GitHubMark />
                        {t.cta.viewRepo}
                        <ArrowOut />
                      </a>
                    ) : p.privateSource ? (
                      <p className="mt-[22px] inline-flex items-center gap-[8px] text-[0.85rem] text-dim">
                        <LockIcon />
                        {t.work.privateNote}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
