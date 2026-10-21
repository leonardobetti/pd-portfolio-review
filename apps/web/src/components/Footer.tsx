import { ContactEmail } from "./ContactEmail";
import { InstallCommand } from "./InstallCommand";
import { RevealSection } from "./RevealSection";

const FOOTER_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/leonardobetti",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leobetti/",
    icon: LinkedInIcon,
  },
] as const;

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 fill-current md:hidden"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 fill-current md:hidden"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
            className="flex w-full flex-nowrap items-center justify-between gap-x-3 border-t border-border pt-8 text-small text-muted md:gap-x-6"
          >
            <div className="flex min-w-0 flex-nowrap items-center gap-x-3 text-small md:gap-x-5">
              <a
                href="https://leonardobetti.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-small font-bold text-white hover:text-white"
              >
                Leonardo Betti
              </a>
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex shrink-0 items-center text-small"
                >
                  <span className="hidden md:inline">{link.label}</span>
                  <link.icon />
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
              MIT
            </a>
          </nav>
        </div>
      </RevealSection>
    </footer>
  );
}
