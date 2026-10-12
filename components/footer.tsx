"use client";

import { useState } from "react";
import { useT } from "./language-provider";
import { Container } from "./container";

export function Footer() {
  const t = useT();
  const [open, setOpen] = useState(false);
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-[26px] font-mono text-[0.76rem] text-faint">
        <span>{t.footer.left}</span>
        {/* easter egg */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-faint transition hover:text-dim"
          aria-expanded={open}
        >
          {open ? "// a data format, not a person" : "who is json?"}
        </button>
        <span>{t.footer.right}</span>
      </Container>
    </footer>
  );
}
