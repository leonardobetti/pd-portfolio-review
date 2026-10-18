import { MaskText } from "./MaskText";
import { RevealSection } from "./RevealSection";

export function Evals() {
  return (
    <RevealSection id="evals" className="section">
      <div className="container">
        <MaskText as="h2" className="h2 max-w-[12ch]" lines={["Evals"]} />
        <p className="mt-5 max-w-[46ch] text-muted-strong">
          Twenty-seven cases adapted from{" "}
          <a
            href="https://karlkoch.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karl Koch
          </a>
          &apos;s{" "}
          <a
            href="https://github.com/kemiljk/skills/tree/main/skills/hiring-manager-bar"
            target="_blank"
            rel="noopener noreferrer"
          >
            hiring-manager-bar
          </a>
          . They cover access failures, linked credits, password gates and case
          studies that only load on hover.
        </p>
        <p className="mt-4 max-w-[46ch] text-muted-strong">
          Run them by hand: open a case in{" "}
          <code className="mono">skills/pd-portfolio-review/evals/</code>, give
          the skill the request and fixture evidence, then compare the report to
          what you expect. I haven&apos;t automated this yet.
        </p>
      </div>
    </RevealSection>
  );
}
