"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function NProgressBar() {
  return (
    <ProgressBar
      height="2px"
      color="#2547D0"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
