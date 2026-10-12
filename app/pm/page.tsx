import type { Metadata } from "next";
import { site } from "@/lib/content";
import { dictPM } from "@/lib/i18n";
import { PageShell } from "@/components/page-shell";

// PM-focused version of the site. Same facts and components as "/"; the copy
// comes from dictPM, selected by LanguageProvider for this path.
export const metadata: Metadata = {
  title: `${site.name} · Aspiring product manager`,
  description: dictPM.en.hero.bio[0],
};

export default function PmPage() {
  return <PageShell />;
}
