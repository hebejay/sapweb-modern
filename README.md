# 🛡️ Iron-Man Sky · 铁人网络

A modern rewrite of [sapweb](https://github.com/hebejay/sapweb) — a personal/family website with poetry, photo gallery, video links, baby milestones, and a guestbook.

## ✨ Changes from the original

- 🎨 **Modern responsive design** — works on mobile, tablet, desktop
- 🕰️ **Live clock** — preserved the original feature
- 📷 **Gallery layout** — photos in a nice grid
- 📜 **Poetry cards** — Chinese classics with better typography
- 🛠️ **VMWare tips** — preserved from original
- 💬 **Persistent guestbook** — saves to localStorage so entries survive reloads
- 🚀 **Vercel-ready** — zero config, deploy in 2 clicks

## 🚀 Deploy to Vercel

### One-click (easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhebejay%2Fsapweb)

### Manual

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your repo — Vercel auto-detects it's a static site
4. Click **Deploy** — done ✅

Your site will be live at `https://your-project.vercel.app`

> **Note about videos:** The original repo's video files (`.mp4`, `.avi`, `.mov`) are large. They'll serve fine from Vercel, but may be slow to load. The `images/` folder should work perfectly.

## 🏗️ Project structure

```
├── index.html          → Main page (new design)
├── style.css           → All styles
├── script.js           → Clock, guestbook, navigation logic
├── vercel.json         → Vercel config (static site)
├── 1-1.htm             → Original sub-page (preserved)
├── 1-2.htm             → Original sub-page (preserved)
├── 2-1.htm             → Original sub-page with video
├── images/             → Photos
├── shared/website_3/   → Baby site (original)
└── movi/               → Video files
```

## 📝 License

Original content © Jayson / sapweb team. This is a UI rewrite of the same project.
