import { MaskText } from "./MaskText";
import { RevealSection } from "./RevealSection";

const AREAS = [
  { area: "Access and format", points: 15 },
  { area: "First scan", points: 15 },
  { area: "Project choice and cards", points: 15 },
  { area: "Thinking and decisions", points: 20 },
  { area: "Outcomes and ownership", points: 15 },
  { area: "Voice, AI use, visual quality", points: 10 },
  { area: "About, consistency, NDA handling", points: 10 },
] as const;

const BANDS = [
  { range: "80+", label: "Ready to send" },
  { range: "60 to 79", label: "Send after fixes" },
  { range: "40 to 59", label: "Needs work first" },
  { range: "Under 40", label: "Rebuild" },
] as const;

export function Score() {
  return (
    <RevealSection id="score" className="section">
      <div className="container">
        <MaskText as="h2" className="h2 max-w-[14ch]" lines={["The score"]} />
        <p className="mt-5 max-w-[42ch] text-muted-strong">
          Out of 100. Weights are this skill&apos;s own, informed by{" "}
          <a
            href="https://uxfol.io/state-of-ux-portfolios-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            UXfolio 2026
          </a>{" "}
          rankings. A broken link, or a locked one with no password, scores 0.
          Each confirmed red flag costs 3 points.
        </p>

        <div className="mt-12 overflow-x-auto" data-lenis-prevent>
          <table className="w-full min-w-[28rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border text-small text-muted">
                <th className="py-3 pr-4 font-medium">Area</th>
                <th className="py-3 text-right font-medium">Points</th>
              </tr>
            </thead>
            <tbody>
              {AREAS.map((row) => (
                <tr key={row.area} className="border-b border-border/70">
                  <td className="py-3.5 pr-4 text-muted-strong">{row.area}</td>
                  <td className="py-3.5 text-right tabular-nums text-foreground">
                    {row.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BANDS.map((band) => (
            <div key={band.range} className="border-t border-border pt-4">
              <p className="text-small text-accent">{band.range}</p>
              <p className="mt-1 text-muted-strong">{band.label}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
