import { MaskText } from "./MaskText";
import { RevealSection } from "./RevealSection";

const SKILL_FOLDER_URL =
  "https://github.com/leonardobetti/pd-portfolio-review/tree/main/skills/pd-portfolio-review";

const CLAUDE_URL = "https://claude.ai";

const CLAUDE_SKILLS_URL = "https://claude.ai/customize/skills";

const CLAUDE_HELP_URL =
  "https://support.claude.com/en/articles/12512180-use-skills-in-claude";

const STEPS = [
  {
    title: "Get the skill folder",
    body: (
      <>
        Open the{" "}
        <a href={SKILL_FOLDER_URL} target="_blank" rel="noopener noreferrer">
          pd-portfolio-review
        </a>{" "}
        folder on GitHub. Download the repo ZIP, then keep only that folder. Zip
        the folder itself, so the archive opens to a{" "}
        <code className="mono">pd-portfolio-review</code> folder with{" "}
        <code className="mono">SKILL.md</code> inside.
      </>
    ),
  },
  {
    title: "Turn on code execution in Claude.ai",
    body: (
      <>
        Go to Settings → Capabilities and enable{" "}
        <strong className="font-medium text-foreground">
          Code execution and file creation
        </strong>
        . Skills need this on.
      </>
    ),
  },
  {
    title: "Upload the ZIP",
    body: (
      <>
        Open{" "}
        <a href={CLAUDE_SKILLS_URL} target="_blank" rel="noopener noreferrer">
          Customize → Skills
        </a>
        , click +, then Create skill → Upload a skill. Choose your ZIP file.
        Toggle{" "}
        <strong className="font-medium text-foreground">
          pd-portfolio-review
        </strong>{" "}
        on when it appears.
      </>
    ),
  },
  {
    title: "Ask for a review",
    body: (
      <>
        Start a chat and paste something like{" "}
        <em className="italic">
          &ldquo;Review this portfolio: https://yoursite.com&rdquo;
        </em>
        , adding a target role if you have one. Claude should pick up the skill
        and walk the site like a hiring reviewer.
      </>
    ),
  },
] as const;

export function UseInClaude() {
  return (
    <RevealSection id="use-in-claude" className="section">
      <div className="container">
        <p className="mb-4 text-xs uppercase tracking-[0.08em] text-accent">
          Browser
        </p>
        <MaskText
          as="h2"
          className="h2 max-w-[18ch]"
          lines={["Use it in Claude.ai"]}
        />
        <p className="mt-5 max-w-[48ch] text-muted-strong">
          No terminal. Upload the skill in{" "}
          <a href={CLAUDE_URL} target="_blank" rel="noopener noreferrer">
            Claude.ai
          </a>
          , then review a portfolio in chat. Built for designers who would
          rather click than type install commands.
        </p>

        <ol className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.08em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="h3 mt-3">{step.title}</h3>
              <p className="mt-3 text-muted-strong">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-[48ch] text-small text-muted">
          See Anthropic&apos;s guide on{" "}
          <a href={CLAUDE_HELP_URL} target="_blank" rel="noopener noreferrer">
            using skills in Claude
          </a>
          .
        </p>
      </div>
    </RevealSection>
  );
}
