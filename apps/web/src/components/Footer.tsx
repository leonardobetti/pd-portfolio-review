import { ContactEmail } from "./ContactEmail";
import { InstallCommand } from "./InstallCommand";
import { RevealSection } from "./RevealSection";

const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/leonardobetti" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leobetti/" },
] as const;

export function Footer() {
  return (
    <footer>
      <RevealSection id="credits" className="section">
        <div className="container">
          <h2 className="h2">Credits</h2>
          <p className="mt-5 max-w-[52ch] text-muted-strong">
            Informed by{" "}
            <a
              href="https://uxfol.io/state-of-ux-portfolios-2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              UXfolio&apos;s State of UX Portfolios 2026
            </a>
            . Not affiliated with UXfolio. Incorporates principles from{" "}
            <a
              href="https://github.com/kemiljk/skills/tree/main/skills/hiring-manager-bar"
              target="_blank"
              rel="noopener noreferrer"
            >
              hiring-manager-bar
            </a>{" "}
            by{" "}
            <a
              href="https://karlkoch.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Karl Koch
            </a>
            .
          </p>
        </div>
      </RevealSection>

      <RevealSection className="section border-t border-border pt-16 pb-10">
        <div className="container flex flex-col gap-16">
          <div className="w-full">
            <p className="text-lead text-muted-strong">
              Install the skill and review a portfolio.
            </p>
            <div className="mt-5 w-full">
              <InstallCommand />
            </div>
          </div>

          <nav
            aria-label="Author links"
            className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-border pt-8 text-small text-muted"
          >
            <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-2 text-small">
              <a
                href="https://leonardobetti.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small font-bold text-white hover:text-white"
              >
                Leonardo Betti
              </a>
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small"
                >
                  {link.label}
                </a>
              ))}
              <ContactEmail />
            </div>
            <a
              href="https://github.com/leonardobetti/pd-portfolio-review/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto shrink-0 text-small"
            >
              MIT Licence
            </a>
          </nav>
        </div>
      </RevealSection>
    </footer>
  );
}
