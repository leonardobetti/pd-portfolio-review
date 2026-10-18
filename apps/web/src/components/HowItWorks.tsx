import { MaskText } from "./MaskText";
import { RevealSection } from "./RevealSection";

const STEPS = [
  {
    title: "Give it the URL",
    body: "Point the skill at the portfolio you want reviewed. Add a target role, and a password if the site is protected.",
  },
  {
    title: "It reads like a hiring reviewer",
    body: "Home, work list, a couple of projects, About and contact. Roughly thirty seconds for the first scan, then a careful pass.",
  },
  {
    title: "You get a scored report",
    body: "Strengths, mistakes, red flags and a short list of prioritised fixes, each tied to something on the site.",
  },
] as const;

export function HowItWorks() {
  return (
    <RevealSection id="how-it-works" className="section">
      <div className="container">
        <MaskText
          as="h2"
          className="h2 max-w-[16ch]"
          lines={["How it works"]}
        />
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.08em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="h3 mt-3">{step.title}</h3>
              <p className="mt-3 text-muted-strong">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
