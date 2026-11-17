<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="压印之间 Print Atlas — 版画与报刊印刷图鉴；右侧是 CMYK 四色圆点叠印成的玫瑰花结与一行由小变大的半调网点">
</p>

<p align="center">
  <a href="https://xiaosang.cc/print-atlas/">▶ 在线体验 Online Demo</a>
  ·
  <a href="https://holynova.github.io/print-atlas/">GitHub Pages 镜像</a>
  ·
  <a href="https://github.com/holynova/print-atlas">GitHub 仓库</a>
</p>

压印之间是一册给眼睛看的印刷学：从木头上的刀痕，到报纸上会颤动的四色小点，拆开版画、报刊复制和插图语言的每一层。七种印刷语言各配三幅图例（人物、风景、羊），每种附中英双语作图提示词，一键复制；四种转印关系各有三步工艺图解。

Print Atlas is an interactive guide to printmaking and newspaper reproduction: from woodcut gouge marks to the four-color dots trembling on newsprint. Seven print languages, each with three specimens (figures, landscape, sheep) and a bilingual image prompt you can copy with one click; four transfer processes, each explained in a three-step diagram.

## 截图 / Screenshots

<p align="center">
  <img src="./assets/readme/screenshot.png" width="700" alt="首页：左文右图，标题“图像不是被复制的，而是被压印的”，右侧是 CMYK 网点风格的宫殿案例图">
</p>

## 内容 / Contents

**七种印刷语言**（每种 3 幅图例 + 中英提示词，可一键复制）：

| # | 语言 | 看点 |
|---|------|------|
| 01 | 木刻新闻插图 | 刀痕与大黑白 |
| 02 | 钢笔排线插图 | 线的疏密成灰阶 |
| 03 | 黑白半调网点 | 一个颜色，无数圆点 |
| 04 | CMYK 四色套印 | 四色叠成一幅图 |
| 05 | 石版画 | 油水相斥的柔雾 |
| 06 | 丝网印刷 | 色块与漏墨 |
| 07 | 蚀刻与飞尘法 | 凹槽与随机颗粒 |

- **21 幅图例**：7 种语言 × 人物 / 风景 / 羊三组题材，同一主题换一副版；图例均为艺术化重构，帮助观察媒介痕迹，而非复制原始照片。
- **14 条提示词**：每种语言一中一英两条作图提示词，点按钮即复制，可直接用于生成同风格插图。
- **四种转印关系**：凸版（凸起处着墨）、凹版（凹槽存墨）、平版（油水相斥）、孔版（网孔漏墨），各配三步工艺图与一个观察问题。
- **网点小展柜**：黑白半调网点由小变大的灰阶示意，CMYK 四色网点叠印的玫瑰花结示意。
- **放大镜**：四种纹理对照表——规则圆点、平行与交叉线、四色小点、随机颗粒，看到纹理就能猜到工艺。

## 筹备中 / In Preparation

离线网点生成器（把自己的照片拆成四层墨，观察网角、网点增大与套印误差）尚未实现，站内标注为「筹备中」。

## 本地运行 / Run Locally

纯静态站，零构建，直接打开 `index.html` 即可；或起一个静态服务器：

```bash
python3 -m http.server 4174
# 打开 http://localhost:4174
```

语法检查：`node --check app.js`（见 `package.json` 的 `check` 脚本）。

## 技术 / Tech

- 纯 HTML + CSS + JS，零构建、零依赖；`app.js` 在加载后用 JS 重写分类与工艺两个展区（数据表驱动，7 种语言的图例与提示词都在 `types` 数组里）。
- 滚动渐入动画（Intersection Observer，遵循 `prefers-reduced-motion`）；复制提示词用 Clipboard API，失败时回退到 `execCommand`。
- 仓库约 76MB，体积主要来自 25 张 1536×1024 的图例与工艺图。

```
index.html              入口：首屏、导航、放大镜纹理表、展室收尾
app.js                  数据表 + 动态渲染（七种语言、工艺实验室、复制按钮）
style.css               主样式（暖纸底编辑风）
museum-lab.css          工艺实验室样式
atlas-redesign.css      分类墙样式（app.js 动态引入）
atlas-motion.css        滚动渐入动画
atlas-prompt.css        提示词面板样式
compact-gallery.css     图例紧凑排布
assets/                 21 张图例 + 4 张工艺图 + 预览图
```

## English

**Print Atlas** is an interactive atlas of printmaking and newspaper reproduction — how images get pressed onto paper rather than copied.

- **Seven print languages**: woodcut, pen hatching, black-and-white halftone, CMYK overprint, lithography, screen printing, etching & aquatint. Each has three specimens (figures, landscape, sheep) and a bilingual image-generation prompt (Chinese + English) with one-click copy — 21 specimens, 14 prompts.
- **Four transfer processes**: relief (ink on raised surfaces), intaglio (ink in grooves), planographic (oil vs. water), stencil (ink through mesh) — each with a three-step illustrated diagram and an observation question.
- **Screening exhibit**: halftone dots growing from light to dark, and a CMYK rosette diagram; plus a texture table matching dot/line/grain patterns to their process.
- **Not yet built**: the offline halftone generator (split your own photo into four ink layers) is marked "in preparation" on the site.
- **Run it**: pure static site, no build — open `index.html`, or `python3 -m http.server 4174`.
- **Tech**: vanilla HTML/CSS/JS, zero dependencies. `app.js` renders the taxonomy and lab sections from a data table; scroll-reveal via Intersection Observer (respects `prefers-reduced-motion`).

## 许可 / License

MIT（见 `package.json`；仓库内暂无 LICENSE 文件）。
