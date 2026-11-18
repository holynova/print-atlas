<p align="right"><a href="README.md">中文</a></p>

<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="Print Atlas — an atlas of printmaking and newspaper reproduction; on the right, a rosette of overprinted CMYK dots and a row of halftone dots growing larger">
</p>

<p align="center">
  <a href="https://xiaosang.cc/print-atlas/">▶ Live Demo</a>
  ·
  <a href="https://holynova.github.io/print-atlas/">GitHub Pages Mirror</a>
  ·
  <a href="https://github.com/holynova/print-atlas">GitHub Repository</a>
</p>

Print Atlas is an interactive guide to printmaking and newspaper reproduction: from woodcut gouge marks to the four-color dots trembling on newsprint. Seven print languages, each with three specimens (figures, landscape, sheep) and a bilingual image prompt you can copy with one click; four transfer processes, each explained in a three-step diagram.

## Screenshot

<p align="center">
  <img src="./assets/readme/screenshot.png" width="700" alt="Homepage: text on the left, image on the right, headline 'Images are not copied, they are pressed', with a palace case image in CMYK halftone style">
</p>

## Contents

**Seven print languages** (3 specimens + a Chinese–English prompt each, one-click copy):

| # | Language | What to look for |
|---|------|------------------|
| 01 | 木刻新闻插图 Woodcut news illustration | Gouge marks and bold black-and-white |
| 02 | 钢笔排线插图 Pen hatching | Line density becoming grey scale |
| 03 | 黑白半调网点 Black-and-white halftone | One color, countless dots |
| 04 | CMYK 四色套印 CMYK four-color overprint | Four colors layered into one image |
| 05 | 石版画 Lithography | The soft haze of oil repelling water |
| 06 | 丝网印刷 Screen printing | Color blocks and ink bleed |
| 07 | 蚀刻与飞尘法 Etching & aquatint | Grooves and random grain |

- **21 specimens**: 7 languages × 3 subjects (figures / landscape / sheep), the same subject re-plated seven ways; specimens are artistic reconstructions meant to show the marks of each medium, not copies of original photographs.
- **14 prompts**: one Chinese and one English image-generation prompt per language, copyable with a button click, ready to generate illustrations in the same style.
- **Four transfer processes**: 凸版 relief (ink on raised surfaces), 凹版 intaglio (ink in grooves), 平版 planographic (oil vs. water), 孔版 stencil (ink through mesh) — each with a three-step illustrated diagram and an observation question.
- **Screening exhibit**: halftone dots growing from light to dark, and a CMYK rosette diagram.
- **Magnifier**: a four-texture comparison table — regular dots, parallel and cross lines, four-color dots, random grain; see the texture and you can guess the process.

## In Preparation

The offline halftone generator (split your own photo into four ink layers to observe screen angles, dot gain, and misregistration) is not built yet; the site marks it 「筹备中」 ("In preparation").

## Run Locally

A pure static site, zero build — just open `index.html`, or serve it statically:

```bash
python3 -m http.server 4174
# Open http://localhost:4174
```

Syntax check: `node --check app.js` (see the `check` script in `package.json`).

## Tech

- Pure HTML + CSS + JS, zero build, zero dependencies; `app.js` re-renders the taxonomy and lab sections from a data table after load (the 7 languages' specimens and prompts all live in the `types` array).
- Scroll-reveal animations (Intersection Observer, respects `prefers-reduced-motion`); prompt copying uses the Clipboard API with an `execCommand` fallback.
- The repo is about 76 MB, mostly 25 specimen and process images at 1536×1024.

```
index.html              Entry: hero, navigation, magnifier texture table, gallery close
app.js                  Data table + dynamic rendering (seven languages, process lab, copy buttons)
style.css               Main styles (warm-paper editorial look)
museum-lab.css          Process lab styles
atlas-redesign.css      Taxonomy wall styles (loaded dynamically by app.js)
atlas-motion.css        Scroll-reveal animations
atlas-prompt.css        Prompt panel styles
compact-gallery.css     Compact specimen layout
assets/                 21 specimens + 4 process images + preview images
```
