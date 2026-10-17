# portfolio-review

An agent skill that reviews a UX, UI or product design portfolio from a link.

- Asks for the URL first
- Reads the site and its case studies like a hiring reviewer
- Returns a scored report: strengths, mistakes, red flags, observations, fixes in priority order

Based on UXfolio's [State of UX Portfolios 2026](https://uxfol.io/state-of-ux-portfolios-2026). Not affiliated with UXfolio. The scoring weights are this skill's own, not UXfolio's.

## Install

Each tool looks for a folder named `portfolio-review` with `SKILL.md` inside.

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

Or just the file:

```sh
mkdir -p ~/.claude/skills/portfolio-review && curl -fsSL https://raw.githubusercontent.com/leonardobetti/portfolio-review/main/SKILL.md -o ~/.claude/skills/portfolio-review/SKILL.md
```

Restart the tool or open a new chat so it picks up the skill.

## Use

```
Review this portfolio: https://example.com
```

Or call it directly: `/portfolio-review` in Claude Code and Cursor, `$portfolio-review` in Codex.

## Licence

MIT
