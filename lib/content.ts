/**
 * Language-independent structure: things that do not change between English,
 * French, and Korean (names, links, tech tags, image paths). All translatable
 * copy lives in lib/i18n.ts.
 *
 * To make it yours: change name/email, drop a portrait in /public and set
 * `photo`, and drop project shots in /public/work and set each `image`.
 */

export type Project = {
  id: string;
  name: string;
  tech: string[];
  href: string;
  /** e.g. "/work/prism.png" once added. Undefined shows the placeholder plate. */
  image?: string;
  /** Looping muted preview clip (e.g. "/work/borderless.mp4"). Takes priority
      over `image`; shows `poster` as the still frame / reduced-motion fallback. */
  video?: string;
  poster?: string;
  /** No public repo: show the muted "source private" note instead of a link. */
  privateSource?: boolean;
  /** CSS aspect-ratio for the plate (e.g. "1012 / 1070"). Defaults to "16 / 10". */
  plateAspect?: string;
  variant: "p1" | "p2" | "p3" | "p4";
  span: "wide" | "narrow" | "full";
};

/** A place I've worked. One company can hold several roles (newest first).
    Facts live here; the bullet prose is translated in lib/i18n.ts keyed by role id. */
export type ExperienceJob = {
  id: string;
  company: string;
  location: string;
  roles: { id: string; title: string; period: string }[];
};

export const site = {
  name: "Tess (Hyunsuh) Lee",
  shortName: "Tess Lee",
  role: "Software engineer",
  email: "tpl52@cornell.edu",
  /** Portrait photo (background-removed cutout). Set to undefined to show the
      Fourier epicycles instead. */
  photo: "/headshot-cutout.png" as string | undefined,

  nav: [
    { id: "work", href: "#work" },
    { id: "about", href: "#about" },
    { id: "contact", href: "#contact" },
  ] as const,

  projects: [
    { id: "reuse", name: "Finger Lakes ReUse App", tech: ["React Native", "Expo", "PostgreSQL", "Stripe"], href: "#", privateSource: true, image: "/work/reuse-poster.jpg", video: "/work/reuse.mp4", poster: "/work/reuse-poster.jpg", plateAspect: "650 / 760", variant: "p1", span: "wide" },
    { id: "borderless", name: "Borderless", tech: ["TypeScript", "Postgres", "GitHub API", "Linear", "AI agents"], href: "https://github.com/tpl52-tech/borderless", image: "/work/borderless-poster.jpg", video: "/work/borderless.mp4", poster: "/work/borderless-poster.jpg", variant: "p2", span: "narrow" },
    { id: "greenlight", name: "Greenlight", tech: ["TypeScript", "React", "Supabase", "Postgres"], href: "https://github.com/tpl52-tech/greenlight", image: "/work/greenlight-poster.jpg", video: "/work/greenlight.mp4", poster: "/work/greenlight-poster.jpg", variant: "p3", span: "full" },
  ] satisfies Project[],

  // Work history. Dates kept in English (like the Education dates), bullets
  // translated in lib/i18n.ts under experience.bullets, keyed by role id.
  experience: [
    {
      id: "dorsia",
      company: "Dorsia",
      location: "New York, NY",
      roles: [
        { id: "dorsia-swe", title: "Software Engineering Intern", period: "June 2026 - Present" },
      ],
    },
    {
      id: "ewb",
      company: "Engineers Without Borders Cornell",
      location: "Ithaca, NY",
      roles: [
        { id: "ewb-lead", title: "Software Development Lead", period: "Jan. 2026 - Present" },
        { id: "ewb-backend", title: "Backend Developer", period: "Jan. 2025 - Jan. 2026" },
      ],
    },
  ] satisfies ExperienceJob[],

  socials: [
    { label: "GitHub", href: "https://github.com/tpl52-tech" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tesshyunsuh" },
  ],

  // Logos of places the user has worked (processed to transparent PNGs in
  // /public/logos). Shown as a light-tile strip above the footer.
  workedAt: [
    { name: "Ithaca ReUse Center", src: "/logos/reuse.png" },
    { name: "Dorsia", src: "/logos/dorsia.png" },
    { name: "Engineers Without Borders USA", src: "/logos/ewb-usa.png" },
    { name: "Engineers Without Borders, Cornell", src: "/logos/ewb-cornell.png" },
    { name: "Cornell University", src: "/logos/cornell.png" },
  ],

  skills: ["React", "TypeScript", "WebGL", "Motion", "Figma", "Node"],

  education: {
    school: "Cornell University",
    detail: "College of Arts and Sciences, Ithaca, NY",
    degree: "BA in Computer Science and Mathematics, Minor in Business",
    graduation: "May 2028",
    coursework: [
      "Object-Oriented Programming & Data Structures",
      "Functional Programming (Advanced)",
      "Real Analysis",
      "Complex Analysis (In Progress)",
      "Finance",
    ],
    activities: [
      "Engineers Without Borders Cornell",
      "Women in Computing at Cornell (WICC)",
      "Cornell Speech and Debate",
    ],
  },
};

export function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
