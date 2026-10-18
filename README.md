# portfolio-review

An AI skill that reviews portfolios for product designers. It also covers UX and UI design portfolios. It is based on the [State of UX Portfolios 2026](https://uxfol.io/state-of-ux-portfolios-2026) research by UXfolio.

When you ask for a review, it:

- asks for the portfolio URL first
- reads the site and its case studies as a hiring reviewer would
- returns a scored report with strengths, mistakes, red flags, other notes and fixes in priority order

Not affiliated with UXfolio. The scoring weights are this skill's own, not UXfolio's.

Part of the skill was inspired by Karl Koch's [hiring-manager-bar](https://github.com/kemiljk/skills/tree/main/skills/hiring-manager-bar) skill (MIT licence).

## Install

### With npx (easiest)

Needs Node.js 22 or later. Uses the [skills](https://www.npmjs.com/package/skills) CLI from [skills.sh](https://skills.sh).

```sh
npx skills add leonardobetti/portfolio-review
```

It asks which agents to install to. To skip the questions:

```sh
# This project, Claude Code only
npx skills add leonardobetti/portfolio-review -a claude-code -y

# All projects (user level), Cursor and Codex
npx skills add leonardobetti/portfolio-review -g -a cursor -a codex -y
```

### Manual

Each tool looks for a folder named `portfolio-review` with `SKILL.md` inside. Keep the `references` folder next to it: the skill reads it during a review.

Claude Code

- All projects: `~/.claude/skills/portfolio-review/SKILL.md`
- One project: `.claude/skills/portfolio-review/SKILL.md`

Cursor

- All projects: `~/.cursor/skills/portfolio-review/SKILL.md`
- One project: `.cursor/skills/portfolio-review/SKILL.md`
- Cursor also reads `.claude/skills` and `.agents/skills`

Codex and other agents using `.agents/skills`

- All projects: `~/.agents/skills/portfolio-review/SKILL.md`
- One project: `.agents/skills/portfolio-review/SKILL.md`

Clone (Claude Code example, change the path for your tool):

```sh
git clone https://github.com/leonardobetti/portfolio-review ~/.claude/skills/portfolio-review
```

Or just the skill files:

```sh
d=~/.claude/skills/portfolio-review; u=https://raw.githubusercontent.com/leonardobetti/portfolio-review/main
mkdir -p $d/references && curl -fsSL $u/SKILL.md -o $d/SKILL.md && curl -fsSL $u/references/uxfolio-2026.md -o $d/references/uxfolio-2026.md && curl -fsSL $u/references/report-template.md -o $d/references/report-template.md
```

Restart the tool or open a new chat so it picks up the skill.

## Use

```
Review this portfolio: https://example.com
```

You can also call it by name: `/portfolio-review` in Claude Code and Cursor, or `$portfolio-review` in Codex.

## Evals

Test cases are in [evals](evals). See [evals/README.md](evals/README.md) for how to run them.

## Licence

MIT
