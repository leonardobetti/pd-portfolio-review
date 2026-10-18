import { MaskText } from "./MaskText";
import { RevealSection } from "./RevealSection";

const TAGS = [
  {
    name: "Rendered",
    body: "Seen on the live page in a browser.",
  },
  {
    name: "Source",
    body: "Read in the HTML, metadata or text, but not seen rendered.",
  },
  {
    name: "Unverified",
    body: "Likely but unconfirmed. Listed under open checks. Never a red flag.",
  },
] as const;

export function Criteria() {
  return (
    <RevealSection id="criteria" className="section">
      <div className="container">
        <MaskText
          as="h2"
          className="h2 max-w-[18ch]"
          lines={["What it judges"]}
        />
        <p className="mt-5 max-w-[48ch] text-muted-strong">
          Checks follow{" "}
          <a
            href="https://uxfol.io/state-of-ux-portfolios-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            UXfolio&apos;s State of UX Portfolios 2026
          </a>
          : access, finding the right project, case studies, NDA work and AI
          use. This skill opens with a thirty-second first scan (the skill&apos;s
          choice, not a finding from the report), then goes deeper. Figures are
          cited as given.
        </p>
        <p className="mt-4 max-w-[48ch] text-muted-strong">
          It only judges what is on the page. Seniority comes from scope and
          decisions, not polish. A famous client is not proof of quality, and
          style alone is not proof of AI.
        </p>

        <h3 className="h3 mt-12">Evidence tags</h3>
        <ul className="mt-6 grid gap-8 md:grid-cols-3">
          {TAGS.map((tag) => (
            <li key={tag.name} className="border-t border-border pt-5">
              <p className="text-small text-accent">{tag.name}</p>
              <p className="mt-2 text-muted-strong">{tag.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  );
}
