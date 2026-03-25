"use client";

import { useEffect, useState } from "react";

function formatNow(): string {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(new Date());
}

export function CurrentDateTime() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    setLabel(formatNow());
    const id = setInterval(() => setLabel(formatNow()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <p
      className="mt-4 text-sm tabular-nums text-slate-500"
      aria-live="polite"
      suppressHydrationWarning
    >
      {label ?? "—"}
    </p>
  );
}
