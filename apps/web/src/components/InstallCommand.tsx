"use client";

import { useState } from "react";

export const INSTALL_COMMAND =
  "npx skills add leonardobetti/pd-portfolio-review@pd-portfolio-review";

type InstallCommandProps = {
  className?: string;
};

export function InstallCommand({ className = "" }: InstallCommandProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      className={`flex w-full flex-col gap-3 sm:flex-row sm:items-stretch ${className}`}
    >
      <code className="mono flex min-w-0 flex-1 items-center overflow-x-auto whitespace-nowrap border border-border bg-surface px-4 py-3 text-muted-strong">
        {INSTALL_COMMAND}
      </code>
      <button
        type="button"
        onClick={copy}
        className="grid shrink-0 place-items-center border border-accent bg-accent-soft px-5 py-3 text-small font-medium text-foreground transition-colors hover:bg-accent hover:text-background"
      >
        <span className="invisible col-start-1 row-start-1" aria-hidden>
          Copy command
        </span>
        <span className="col-start-1 row-start-1">
          {copied ? "Copied" : "Copy command"}
        </span>
      </button>
    </div>
  );
}
