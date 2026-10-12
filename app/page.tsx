import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollCat } from "@/components/scroll-cat";

export default function Page() {
  return (
    <>
      <span id="top-sentinel" aria-hidden className="absolute top-0 h-px w-px" />
      <ScrollCat />
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
