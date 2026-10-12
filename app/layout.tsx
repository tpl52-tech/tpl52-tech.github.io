import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { site } from "@/lib/content";
import { dict } from "@/lib/i18n";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

// Editorial serif for display type (the L'Oreal-style elegance). Body stays
// SF Pro (system), so headings feel luxe while text stays clean.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.role}`,
  description: dict.en.hero.bio[0],
};

// Set the saved theme before paint so there is no flash of the wrong palette.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
