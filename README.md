# EIT Website

Landing page untuk studio digital "eit". Arsitektur **MVC** (JavaScript): React + Vite untuk **View** (frontend) dan Node + Express untuk **Model/Controller** (backend).

> Frontend bersifat **mandiri** (data produk & tim di-hardcode di `src/data/`) sehingga bisa dideploy sebagai static site tanpa backend.

## Struktur Proyek (MVC)

```
EIT/
├── frontend/             # VIEW — React + Vite
│   ├── public/assets/      # Aset desain (SVG, PNG, foto produk)
│   └── src/
│       ├── pages/          # Halaman (Home, About, ProductDetail)
│       ├── view/           # Komponen React (Navbar, Hero, PortfolioList, dsb.)
│       ├── data/           # Data statis (products.js)
│       ├── hooks/          # Custom hooks (useReveal, useHashRoute)
│       ├── api/            # Client fetch ke backend (opsional, belum dipakai)
│       └── styles/         # CSS variables & global styling
└── backend/              # MODEL + CONTROLLER — Node + Express (API)
    └── src/
        ├── model/          # Layer MODEL: data (portfolio, contact)
        ├── controller/     # Layer CONTROLLER: logika bisnis
        ├── route/          # Definisi route API
        ├── config/         # Setup express app & middleware
        └── data/           # Seed data awal
```

## Cara Menjalankan

```bash
npm run install:all   # install deps frontend & backend
npm run dev           # jalankan frontend (Vite) + backend (Express) bersamaan
```

- Frontend (View): http://localhost:5173
- Backend (API): http://localhost:4000/api

## Build & Deploy (Frontend Only)

Frontend dapat dideploy tanpa backend:

```bash
cd frontend
npm run build         # output ke frontend/dist/
```

Host `dist/` di layanan static hosting (Netlify, Vercel, Cloudflare Pages). Karena menggunakan `BrowserRouter`, aktifkan SPA fallback agar route seperti `/work/:slug` tidak 404 saat refresh:

- **Netlify**: file `frontend/public/_redirects` berisi `/* /index.html 200`
- **Vercel**: rewrite `/(.*)` → `/index.html`
- **Cloudflare Pages**: otomatis
