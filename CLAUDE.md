# CLAUDE.md

Personal academic website of Jeremy Baffou (PhD student, EPFL LTS4), served at https://jerbaf.github.io.
Visually modelled on https://oliverphilcox.github.io (al-folio theme), but rebuilt from scratch to be minimal.

## Principles

- Keep it minimal. No gem theme, no Sass, no JS frameworks, no CDNs, no analytics.
- GitHub Pages builds the site natively from `main` (Settings → Pages → Deploy from branch, `/` root).
  There is no GitHub Actions workflow, so only plugins on the GitHub Pages whitelist work. `_config.yml` enables only
  `jekyll-seo-tag`, but Pages also force-enables its default plugins (e.g. jekyll-optional-front-matter), so any
  `.md` file in the repo gets published, even without front matter. Add non-site files to `exclude:` in `_config.yml`.
- The CV is the source of truth for content. Only use the files that
  `/Users/jeremy/Documents/Perso/official/cv/template/cv-llt.tex` includes (research-interest, education,
  publications/own-bib.bib, research-experience, academic-services, awards, side-activities, skills).
  `employment.tex`, `misc.tex` and `referee*.tex` are template placeholders: never use them.
  Don't invent facts. Anything on the site should be traceable to the CV or to a verified public source.
- Deliberate choices: there is no Talks page (removed on request, Nov 2026); talks are only mentioned in `research.md`.
  The NeurIPS 2025 NPGML workshop website is not linked because its domain lapsed into spam. Link the OpenReview pages instead.

## Commands

The local preview needs Ruby 3.3 (Homebrew `ruby@3.3`, keg-only). Ruby 4 can't install the `github-pages` gem.

```bash
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle config set --local path vendor/bundle   # once per clone (.bundle/ is gitignored)
bundle install                   # gems go to vendor/bundle (gitignored)
bundle exec jekyll serve         # http://localhost:4000
bundle exec jekyll build         # outputs to _site/
```

## Layout

- `_config.yml`: name, tagline, social links (`socials:`; an empty value hides that icon), `author_name` (bolded in author lists).
- `index.md` (About, `layout: about`), `publications.md`, `research.md`, `cv.md`, `404.html`.
  Navbar entries come from `nav: true` + `nav_order` in each page's front matter.
- `_data/publications.yml`: one entry per paper. `selected: true` shows it on the home page; `links` is a map of label → URL.
- `_layouts/`: `default` (shell), `page` (title), `about` (home: photo, bio, selected papers, socials).
- `_includes/`: `header`, `publication` (one paper), `social`, `icon` (inline Font Awesome SVGs, CC BY 4.0).
- `assets/css/main.css`: all styles. Theme colours are CSS variables at the top: light by default, dark via
  `prefers-color-scheme` or the `data-theme` attribute set by `assets/js/main.js` (theme toggle + mobile menu). Accent `#b6073f` matches the CV.
- `assets/fonts/`: self-hosted Roboto (latin; 300, 300 italic, 400, 700).
- `assets/pdf/cv.pdf`: copy of the compiled CV.

## Common updates

- **New paper**: add an entry at the top of `_data/publications.yml`. Use the same author spelling as `author_name`.
- **Refresh the CV**: after recompiling the LaTeX CV,
  `cp /Users/jeremy/Documents/Perso/official/cv/template/cv-llt.pdf assets/pdf/cv.pdf`.
- **Google Scholar / ORCID**: fill `socials.scholar` / `socials.orcid` in `_config.yml`. The icons appear automatically.
