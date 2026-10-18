import { MaskText } from "./MaskText";
import { RevealSection } from "./RevealSection";

const ITEMS = [
  {
    q: "What if the portfolio is password protected?",
    a: "Pass the password with the request. Without it, a locked site scores 0 and the review stops until you send access.",
  },
  {
    q: "Is this affiliated with UXfolio?",
    a: "No. The skill draws on their published 2026 research. It is an independent reading of that report, not an official UXfolio product.",
  },
  {
    q: "Which agents does it run on?",
    a: "Cursor, Claude Code and Codex via the terminal install, or Claude.ai in the browser by uploading the skill ZIP. Same package either way.",
  },
  {
    q: "What does it actually judge?",
    a: "The portfolio as a hiring artefact: access, first scan, project choice, thinking, outcomes, voice and AI framing, About and NDA handling. It does not judge whether you should be hired.",
  },
  {
    q: "Will it rewrite my case studies?",
    a: "Only if you ask. The default report names what to change and where. It quotes your site rather than inventing replacement copy.",
  },
] as const;

export function FAQ() {
  return (
    <RevealSection id="faq" className="section">
      <div className="container">
        <MaskText as="h2" className="h2" lines={["Questions"]} />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {ITEMS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lead text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-6">
                  {item.q}
                  <span
                    aria-hidden
                    className="mt-1 text-muted transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-[52ch] text-muted-strong">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
