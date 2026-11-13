# jerbaf.github.io

Source of my personal website, https://jerbaf.github.io. It's a small Jekyll site built natively by GitHub Pages.
The design is adapted from [al-folio](https://github.com/alshedivat/al-folio).

```bash
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"   # Ruby 3.3, as on GitHub Pages
bundle install && bundle exec jekyll serve           # http://localhost:4000
```

Content lives in `_config.yml` (name, tagline, description, contact links), `index.md`, `research.md`, `_data/publications.yml`, `_data/talks.yml` and `assets/pdf/cv.pdf`.
