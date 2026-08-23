# Design.md — EIT Website

Dokumentasi desain untuk landing page "eit" (studio/agency digital). Dokumen ini menjelaskan struktur, aset, tipografi, warna, dan interaksi/animasi yang digunakan agar tampilan hasil implementasi persis seperti referensi.

---

## 1. Color Palette

| Nama | Hex | Penggunaan |
|---|---|---|
| Primary Blue | `#286DE6` | Background navbar & hero section |
| Cream / Off-white | `#F3F0E9` | Background section utama (body), warna teks/logo di atas biru |
| Black | `#000000` | Teks heading, teks portofolio, footer teks kontras |
| Accent Blue | `#0188FE` | Background box "IT. WORKS.", checker pattern, aksen footer |

---

## 2. Typography

- **Font utama:** `Zen Dots` (Google Fonts)
  - Digunakan untuk **semua** teks: navbar (ABOUT US, WORK, CONTACT), heading hero ("WE BUILD DIGITAL STUFF THAT ACTUALLY HITS"), label "IT. WORKS.", daftar portofolio (WarungMart, SIMATOK, Glicoo, Symphony), serta teks footer (INSTAGRAM, email).
  - Karakter khas font ini (bulat, futuristik, huruf "O" berbentuk seperti donat) harus dipertahankan — jangan diganti font fallback kecuali Zen Dots gagal dimuat, fallback: `monospace`.
- **Letter spacing:** heading besar menggunakan tracking sedikit lebar (`letter-spacing: 0.02em` – `0.04em`) agar sesuai gaya display font ini.
- **Text transform:** navbar & label menggunakan `UPPERCASE`.

---

## 3. Asset SVG (placeholder — tidak dibuat filenya, hanya ditandai lokasi & fungsinya)

Semua aset berikut **belum dibuat sebagai file SVG sungguhan**, hanya ditandai sebagai referensi nama file yang perlu dibuat oleh desainer/engineer:

| Nama File | Lokasi Penempatan | Deskripsi |
|---|---|---|
| `logo.svg` | Navbar, kiri atas | Logo kecil "eit" (versi mini, monokrom cream) untuk navbar |
| `hero.svg` | Hero section | Tulisan besar "eit" (typography-as-logo) warna cream `#F3F0E9` di atas background biru `#286DE6` |
| `heroflower.svg` | Hero section, kanan dari tulisan "eit" | Ikon bunga 8 kelopak (seperti bintang/kembang), warna cream, elemen dekoratif yang berputar |
| `footer.svg` | Footer, full-width background | Ilustrasi pola dekoratif (motif zig-zag berisi karakter berulang membentuk bentuk seperti huruf "W"/gelombang), gradasi biru muda ke biru tua sebagai transisi menuju footer paling bawah |
| `product1.svg`, `product2.svg`, `product3.svg`, `product4.svg` | Muncul saat hover pada tiap item portofolio | Preview visual/mockup produk (WarungMart → product1.svg, SIMATOK → product2.svg, Glicoo → product3.svg, Symphony → product4.svg), muncul di samping/atas nama produk saat di-hover |

Elemen yang **dibuat manual (bukan SVG, pakai CSS/HTML)**:
- Garis vertikal lurus di bawah navbar/hero (divider tipis, warna hitam, tinggi ± 250px, tebal 1px).
- Checker pattern (kotak-kotak biru `#286DE6` & `#0188FE`) di sekeliling box "IT. WORKS." — dibuat dengan CSS `background: repeating pattern` atau grid `<div>` kotak selang-seling.
- Box "IT. WORKS." — bentuk heksagon/ribbon (persegi dengan sudut terpotong) warna `#0188FE`, teks cream di tengah.

---

## 4. Struktur Layout (Section by Section)

### 4.1 Navbar
- Background: `#286DE6`
- Kiri: `logo.svg` (kecil)
- Kanan: menu `ABOUT US` · `WORK` · `CONTACT` (Zen Dots, cream, uppercase)
- Posisi: fixed/sticky top, full width.

### 4.2 Hero Section
- Background: `#286DE6`, tinggi ± 100vh (mengisi layar penuh area atas)
- Konten utama: `hero.svg` (tulisan "eit" raksasa) di kiri, `heroflower.svg` di kanan sejajar vertikal dengan huruf "t".
- Warna elemen: cream `#F3F0E9`.

### 4.3 Divider / Garis
- Background: `#F3F0E9`
- Garis vertikal hitam tipis di tengah, sebagai transisi visual antara hero dan heading.

### 4.4 Heading Statement
- Teks: **"WE BUILD DIGITAL STUFF THAT ACTUALLY HITS"**
- Warna: `#000000`, font Zen Dots, ukuran besar, rata kanan (right-aligned), 3 baris.

### 4.5 "IT. WORKS." Banner
- Full width strip.
- Kotak-kotak checker biru (`#286DE6` selang-seling `#0188FE`) di kiri & kanan.
- Box tengah bentuk ribbon/heksagon `#0188FE` bertuliskan **"IT. WORKS."** warna cream.

### 4.6 Portfolio List
- Background: `#F3F0E9`
- Daftar vertikal, rata tengah, dipisahkan bullet `•` hitam di antara tiap item:
  1. WarungMart
  2. SIMATOK
  3. Glicoo
  4. Symphony
- Font Zen Dots, hitam, ukuran cukup besar.

### 4.7 Footer
- Background: `footer.svg` (gradasi biru muda → biru tua, dengan motif dekoratif pola karakter berulang membentuk gelombang/zigzag).
- Kiri bawah: `INSTAGRAM`
- Kanan bawah: `eitworksofc@gmail.com`
- Garis horizontal tipis menghubungkan/menjadi separator antara kedua teks tersebut.
- Warna teks: hitam/cream (kontras dengan gradasi background di titik tersebut).

---

## 5. Interaksi & Animasi

### 5.1 Navbar
- **Hover state:** menu yang di-hover tetap terang (opacity 100%), sementara menu lain (yang tidak di-hover) mengalami **blur + dim** (opacity turun, `filter: blur(2px)` + `opacity: 0.4`).
- Transisi halus: `transition: all 0.3s ease`.

### 5.2 Heroflower.svg
- **Rotasi berkelanjutan (continuous spin):** animasi `rotate 360deg` infinite loop, durasi ± 12–20 detik per putaran, linear timing (`animation-timing-function: linear`), tidak pernah berhenti selama halaman terbuka.

### 5.3 Heading "WE BUILD DIGITAL STUFF THAT ACTUALLY HITS" & "IT. WORKS."
- Kedua elemen ini punya animasi **fade in–fade out (hilang timbul)** bergantian secara periodik (opacity 0 ↔ 1, dengan transisi halus, misalnya siklus 3–4 detik).
- **Pengecualian:** teks di dalam box **"IT. WORKS." tetap selalu terlihat (fixed, tidak ikut fade)** — hanya heading besar di atasnya yang mengalami efek hilang timbul.

### 5.4 Daftar Portofolio
- Transisi teks portofolio: setiap nama produk (WarungMart, SIMATOK, Glicoo, Symphony) muncul dengan animasi **fade/slide-in sesuai urutan** saat section masuk viewport (scroll-triggered reveal), staggered delay antar item (misal delay 0.1–0.2s per item).
- **Hover per item:** saat kursor hover di salah satu nama produk, tampilkan gambar preview terkait:
  - Hover `WarungMart` → tampilkan `product1.svg`
  - Hover `SIMATOK` → tampilkan `product2.svg`
  - Hover `Glicoo` → tampilkan `product3.svg`
  - Hover `Symphony` → tampilkan `product4.svg`
  - Gambar muncul dengan transisi fade + scale kecil (`opacity 0→1`, `scale 0.9→1`), posisi bisa mengikuti kursor atau muncul di area kosong samping list.

### 5.5 Footer
- `footer.svg` (background gradasi + motif) muncul dengan **transisi fade-in perlahan** (opacity 0 → 1, durasi ± 1–1.5s, ease-in) saat section footer masuk ke viewport (scroll reveal), memberi efek footer "menyala" secara bertahap.

---

## 6. Ringkasan Teknis Implementasi

- Gunakan `IntersectionObserver` (atau setara di framework yang dipakai) untuk trigger animasi scroll-reveal pada heading, portofolio list, dan footer.
- Gunakan CSS `@keyframes` untuk: rotasi flower, fade in-out heading, fade-in footer.
- Gunakan CSS `:hover` + `transition` untuk efek blur navbar dan preview produk.
- Semua warna didefinisikan sebagai CSS variables:
  ```css
  :root {
    --color-primary-blue: #286DE6;
    --color-cream: #F3F0E9;
    --color-black: #000000;
    --color-accent-blue: #0188FE;
  }
  ```
- Font di-load via Google Fonts:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" rel="stylesheet">
  ```