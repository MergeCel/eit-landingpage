# PRD.md — EIT Landing Page

## 1. Informasi Dokumen

| Field | Detail |
|---|---|
| **Nama Produk** | EIT Website (Landing Page) |
| **Jenis** | Static landing page (single-page, section-based) |
| **Platform Target** | Web (desktop-first, responsive-friendly) |
| **Referensi Desain** | `DESIGN.md` + mockup `Reference/MacBook Pro 14_ - 3 (1).png` |
| **Status** | Draft |
| **Audience** | Calon klien digital agency/studio (studio "eit") |
| **Tujuan Bisnis** | Menampilkan portofolio & kontak studio untuk menarik klien |

---

## 2. Ringkasan (Executive Summary)

Landing page satu halaman untuk studio digital "eit" yang menampilkan statement besar (*"WE BUILD DIGITAL STUFF THAT ACTUALLY HITS"*), banner interaktif *"IT. WORKS."*, daftar portofolio (WarungMart, SIMATOK, Glicoo, Symphony), dan footer kontak. Visual futuristik memakai font **Zen Dots**, palet biru–cream, dan penuh animasi scroll-reveal serta efek hover. Dibangun dengan arsitektur **MVC** menggunakan **React** (frontend) + **Node/Express** (backend) + **Vite** (build tool), seluruhnya berbahasa JavaScript.

---

## 3. Tujuan & Sasaran (Goals / Objectives)

- **G1 — Visual Fidelity:** Hasil implementasi harus tampak persis seperti mockup dan spesifikasi di `DESIGN.md`.
- **G2 — Single Page UX:** Navigasi halus dalam satu halaman (ABOUT US, WORK, CONTACT) dengan CSS smooth scroll.
- **G3 — Animasi Fluid:** Scroll-reveal, spinner flower, dan efek hover bekerja lancar (≥ 60fps).
- **G4 — Konten Dinamis:** Daftar portofolio & kontak dikelola backend (Express API) sehingga mudah di-update tanpa edit kode komponen.
- **G5 — Responsive:** Tampil baik di desktop, tablet, dan mobile.

### Non-Goals (di luar lingkup)
- Tidak ada autentikasi / login.
- Tidak ada CMS atau halaman admin.
- Tidak ada e-commerce / checkout.
- Tidak ada integrasi payment.
- Tidak ada SEO terintegrasi multi-halaman.

---

## 4. Persona & User Stories

### Persona
- **P1. Calon Klien (Owner bisnis/startup):** Mencari studio untuk membuat website/aplikasi. Ingin tahu kredibilitas studio & cara kontak.
- **P2. Desainer/Recruiter kreatif:** Menilai estetika & kualitas pengerjaan studio.

### User Stories
| ID | Sebagai... | Saya ingin... | Agar... |
|---|---|---|---|
| US-1 | Calon Klien | melihat statement/value prop studio | memahami positioning studio dalam 5 detik |
| US-2 | Calon Klien | melihat daftar produk yang pernah dibuat | menilai kredibilitas & pengalaman riil |
| US-3 | Calon Klien | melihat preview produk saat hover | tergoda mengeksplorasi tiap karya |
| US-4 | Calon Klien | menemukan kontak (Instagram & email) | mudah menghubungi studio |
| US-5 | Pengunjung umum | halaman terasa hidup & futuristik | kesan memorable & premium |

---

## 5. Persona MVP (Scope)

Seluruh section pada `DESIGN.md` masuk MVP:

1. **Navbar** — logo + menu ABOUT US · WORK · CONTACT, blur-hover effect.
2. **Hero Section** — tulisan "eit" raksasa + spinner flower.
3. **Divider** — garis vertikal hitam tipis.
4. **Heading Statement** — *"WE BUILD DIGITAL STUFF THAT ACTUALLY HITS"*, animasi fade in-out.
5. **"IT. WORKS." Banner** — checker pattern + ribbon box (teks box tetap statis).
6. **Portfolio List** — WarungMart, SIMATOK, Glicoo, Symphony + hover preview.
7. **Footer** — gradasi + motif, INSTAGRAM & email, fade-in reveal.
8. **Backend API** (Express) — menyediakan data portofolio & kontak.

---

## 6. Requirement Fungsional (Functional Requirements / FR)

| ID | Requirement | Kriteria Accept | Sumber |
|---|---|---|---|
| FR-1 | Menampilkan navbar ber-background `#286DE6`, logo di kiri, menu kanan | Menu: ABOUT US · WORK · CONTACT, warna cream, uppercase, font Zen Dots | DESIGN 4.1 |
| FR-2 | Hover pada satu menu membuat menu lain blur(2px)+dim(opacity .4), transisi .3s | Efek aktif saat hover, halus | DESIGN 5.1 |
| FR-3 | Hero menampilkan tulisan "eit" raksasa + flower berputar | Warna cream di atas biru; flower contournously rotate (12–20s/putaran) | DESIGN 4.2, 5.2 |
| FR-4 | Menampilkan garis vertikal tipis hitam sebagai divider | Tinggi ±250px, tebal 1px, background cream | DESIGN 4.3 |
| FR-5 | Heading statement 3 baris, rata kanan, warna hitam | Teks *"WE BUILD DIGITAL STUFF THAT ACTUALLY HITS"* | DESIGN 4.4 |
| FR-6 | Animasi fade in-out pada heading & (element luar box) | Siklus 3–4s; heading hilang timbul | DESIGN 5.3 |
| FR-7 | Banner "IT. WORKS." full-width dengan checker pattern kiri-kanan | Checker `#286DE6` selang-seling `#0188FE` | DESIGN 4.5 |
| FR-8 | Box ribbon "IT. WORKS." warna `#0188FE`, teks cream **tetap visible** | Box tidak ikut fade | DESIGN 4.5, 5.3 |
| FR-9 | Daftar portofolio vertikal rata tengah, bullet `•` pemisah | Item: WarungMart, SIMATOK, Glicoo, Symphony | DESIGN 4.6 |
| FR-10 | Item portofolio scroll-reveal staggered (delay 0.1–0.2s) | Muncul bertahap saat section di viewport | DESIGN 5.4 |
| FR-11 | Hover per item menampilkan preview produk (fade + scale .9→1) | WarungMart→product1, SIMATOK→product2, Glicoo→product3, Symphony→product4 | DESIGN 5.4 |
| FR-12 | Footer gradasi biru muda→tua + motif, fade-in slow (1–1.5s) | INSTAGRAM kiri, email kanan, separator garis | DESIGN 4.7, 5.5 |
| FR-13 | Backend menyediakan data portofolio & kontak via Express API | GET `/api/portfolio`, GET `/api/contact` dll. | FR Pemilik |
| FR-14 | Scroll smooth antar-section menu | Klik ABOUT US/WORK/CONTACT scroll ke section tujuan | G2 |

---

## 7. Requirement Non-Fungsional (Non-Functional Requirements / NFR)

| ID | Type | Requirement |
|---|---|---|
| NFR-1 | Performance | First render cepat; animasi ≥ 60fps; bundle dioptimasi Vite (lazy-load komponen section bila perlu) |
| NFR-2 | Respondiveness | Responsive di breakpoint standar (≥1024, 768, 480 px) |
| NFR-3 | Aksesibilitas | Semantik HTML, link kontak yang valid, kontras teks cukup |
| NFR-4 | Maintainability | Kode struktur MVC rapi, komponen reusable, CSS variables global |
| NFR-5 | Portability | Build statis (Vite) siap deploy ke hosting statis; backend dideploy terpisah (opsional) |
| NFR-6 | Font fallback | Jika Zen Dots gagal, fallback `monospace` |

---

## 8. Arsitektur & Struktur Folder (MVC — JS, React, Node, Express, Vite)

Monorepo 2 paket: **`frontend`** (React + Vite) & **`backend`** (Node + Express). Pola MVC dipisah tegas per layer:

- **Model** → `backend/src/model/`
- **View** → `frontend/src/view/` (komponen React)
- **Controller** → `backend/src/controller/`
- **Route** → `backend/src/route/`

Frontend (View) mengonsumsi backend (Model/Controller) via REST API.

```
EIT/
├── DESIGN.md
├── PRD.md
├── README.md
├── package.json                # root scripts (concurrently dev, build, start)
├── .gitignore
│
├── frontend/                   # VIEW (React + Vite)
│   ├── index.html              # load Google Fonts (Zen Dots)
│   ├── vite.config.js
│   ├── package.json
│   ├── public/
│   │   └── assets/             # logo.svg, hero.svg, heroflower.svg, footer.svg,
│   │       └── products/       #   product1..4.svg (disediakan desainer)
│   └── src/
│       ├── main.jsx
│       ├── App.jsx             # Compose seluruh section
│       ├── api/
│       │   └── client.js       # fetch ke backend API (axios/fetch)
│       ├── styles/
│       │   ├── variables.css   # CSS vars (--color-primary-blue, dsb.)
│       │   └── global.css      # reset, font, base
│       ├── hooks/
│       │   ├── useReveal.js    # IntersectionObserver scroll-reveal hook
│       │   └── useHoverBlur.js # navbar blur-dim effect
│       └── view/               # LAYER VIEW: komponen React
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── Divider.jsx
│           ├── Heading.jsx
│           ├── WorksBanner.jsx
│           ├── PortfolioList.jsx
│           ├── PortfolioItem.jsx   # hover preview produk
│           └── Footer.jsx
│
└── backend/                    # MODEL + CONTROLLER (Node + Express)
    ├── package.json
    ├── .env.example            # PORT, dsb.
    └── src/
        ├── index.js            # entry: bootstrap express
        ├── config/
        │   └── app.js          # express app, middleware, CORS, routes
        ├── data/
        │   └── seed.js         # seed data portofolio & kontak
        ├── model/              # LAYER MODEL (data)
        │   ├── portfolio.model.js
        │   └── contact.model.js
        ├── controller/         # LAYER CONTROLLER (logika bisnis)
        │   ├── portfolio.controller.js
        │   └── contact.controller.js
        └── route/              # LAYER ROUTE (URL mapping)
            ├── portfolio.route.js
            └── contact.route.js
```

### Respon API (suggested)
- `GET /api/portfolio` → `[{ id, name, slug, preview, year }]`
- `GET /api/contact` → `{ instagram, email }`
- `GET /api/health` → `{ status: "ok" }`

---

## 9. Wireframe / Section Flow (Textual)

```
┌─────────────────────────────────────────────────────┐
│  NAVBAR (fixed top, bg #286DE6)  logo · ABOUT US WORK CONTACT │
├─────────────────────────────────────────────────────┤
│  HERO (bg #286DE6, ~100vh):  "eit" raksasa   🌸flower │
├─────────────────────────────────────────────────────┤
│  DIVIDER: garis vertikal hitam                       │
├─────────────────────────────────────────────────────┤
│  HEADING: "WE BUILD DIGITAL STUFF THAT ACTUALLY HITS" │
├─────────────────────────────────────────────────────┤
│  BANNER: [checker] [ IT. WORKS. ]  [checker]         │
├─────────────────────────────────────────────────────┤
│  PORTFOLIO:  • WarungMart • SIMATOK • Glicoo • Symphony │
├─────────────────────────────────────────────────────┤
│  FOOTER: gradient+motif  INSTAGRAM ───── email       │
└─────────────────────────────────────────────────────┘
```

---

## 10. Logika Data & Interaksi

- **Scroll reveal:** `IntersectionObserver` di `useReveal` menambahkan class `.is-visible` → memicu keyframe fade/slide.
- **Navbar blur:** `useHoverBlur` — item tak di-hover diberi `filter: blur(2px)` + `opacity:.4` via CSS `:hover` parent + transition.
- **Spinner flower:** CSS `@keyframes spin { to { transform: rotate(360deg) } }`, `animation: spin 16s linear infinite`.
- **Heading fade:** CSS `@keyframes fadePulse { 0%,100%{opacity:1} 50%{opacity:0} }`; **box "IT. WORKS."** diberi class terpisah *tanpa* animasi.
- **Hover preview produk:** mouseenter item → tampilkan `productN.svg` dengan `opacity` + `scale` transition; posisi mengikuti kursor atau area kosong.
- **Portfolio data:** dimuat dari Express API di `App` (mount) → diteruskan ke `PortfolioList`.

---

## 11. Aset yang Dibutuhkan (Assets)

| Aset | Lokasi | Status | Sumber |
|---|---|---|---|
| `logo.svg` | `client/public/assets/` | Perlu dibuat (desainer) | DESIGN 3 |
| `hero.svg` (tulisan "eit") | `client/public/assets/` | Perlu dibuat | DESIGN 3 |
| `heroflower.svg` | `client/public/assets/` | Perlu dibuat | DESIGN 3 |
| `footer.svg` | `client/public/assets/` | Perlu dibuat | DESIGN 3 |
| `product1..4.svg` | `client/public/assets/products/` | Perlu dibuat | DESIGN 3 |
| Font Zen Dots | Google Fonts (index.html) | Online | DESIGN 6 |

Checker pattern & ribbon box dibuat via CSS (bukan SVG).

---

## 12. Prioritas & Milestone

| Milestone | Scope | Durasi (est.) |
|---|---|---|
| M1 — Scaffold | Setup monorepo, Vite client, Express server, struktur folder MVC | 1–2 hari |
| M2 — Static Layout | Semua section tanpa animasi (warna, font, posisi sesuai DESIGN) | 2–3 hari |
| M3 — Backend API | Model + Controller + Routes portofolio & kontak | 1 hari |
| M4 — Integrasi Data | Client fetch API untuk render portofolio & kontak | 1 hari |
| M5 — Animasi/Interaksi | Scroll-reveal, spinner, fade, hover blur & preview | 2–3 hari |
| M6 — Responsive & Polish | Breakpoint, fallback, performance, build final | 2 hari |

---

## 13. Definisi Selesai (Definition of Done / DoD)

- [ ] Seluruh FR (FR-1 s.d. FR-14) terpenuhi & berjalan tanpa error.
- [ ] NFR terpenuhi (60fps animasi, responsif, aksesibilitas dasar).
- [ ] Font Zen Dots termuat; fallback `monospace` bila gagal.
- [ ] Data portofolio & kontak bersumber dari Express API (bukan hardcoded di komponen).
- [ ] Struktur folder mengikuti pola MVC sebagaimana §8.
- [ ] Build produksi (Vite `build`) sukses; dev server & API berjalan via satu perintah root.
- [ ] Kode dibersihkan dari komentar temp & nilai hardcode berlebihan.

---

## 14. Acceptance Criteria (Gambaran per Section)

| Section | Kriteria Terima |
|---|---|
| Navbar | Fixed top, bg `#286DE6`, blur-dim hover, smooth scroll ke section |
| Hero | "eit" raksasa + flower berputar, warna cream di atas biru |
| Divider | Garis vertikal 1px hitam ≈250px di tengah |
| Heading | 3 baris rata kanan hitam, fade in-out periodik |
| IT. WORKS. | Checker biru kiri-kanan, ribbon `#0188FE`, teks statis |
| Portfolio | 4 item + bullet, stagger reveal, hover preview produk |
| Footer | Gradasi + motif, fade-in, INSTAGRAM & email dengan separator |
