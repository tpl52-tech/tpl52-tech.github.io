"use client";

import { useState } from "react";

export function CopyEmail({
  email,
  copy,
  copied,
}: {
  email: string;
  copy: string;
  copied: string;
}) {
  const [done, setDone] = useState(false);

  const onCopy = () => {
    if (!navigator.clipboard?.writeText) return;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setDone(true);
        setTimeout(() => setDone(false), 1500);
      })
      .catch(() => {});
  };

  return (
    <span className="mt-[30px] inline-flex items-center gap-[10px] rounded-full border border-line py-[7px] pl-5 pr-[7px] font-mono text-[clamp(0.85rem,0.8rem+0.4vw,1rem)]">
      <span>{email}</span>
      <button
        onClick={onCopy}
        className="rounded-full bg-btn px-[15px] py-[9px] font-mono text-[0.78rem] text-btn-ink transition active:translate-y-px active:scale-[0.98]"
      >
        {done ? copied : copy}
      </button>
    </span>
  );
}
