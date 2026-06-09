"use client";

import type { ReactNode } from "react";

/** Page shell — content renders immediately so navigation never feels stuck. */
export default function Template({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
