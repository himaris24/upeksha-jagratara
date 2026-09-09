# Upeksha Jagratara — Website Akademi Pencak Silat

**"Ketenangan yang Penuh Kewaspadaan"**

Website resmi Akademi Pencak Silat Upeksha Jagratara. Dibangun sebagai website statis (tanpa backend/database) yang berfungsi sebagai identitas digital akademi sekaligus media informasi bagi calon siswa, anggota, dan masyarakat umum.

**Status:** V1 — Static Academy Website · **Versi Dokumen:** 1.0 (Final)

---

## 🥋 Tentang Upeksha Jagratara

Nama **Upeksha Jagratara** terbentuk pada **2 Januari 2023**, hasil diskusi dua orang pendiri. Nama ini berarti:

> **"Jiwa yang tenang dan selalu waspada"**

Identitas visual akademi terinspirasi dari dua simbol:
- **Ombak** — melambangkan ketenangan, keteguhan, dan kemampuan beradaptasi.
- **Karambit** — senjata dengan ketajaman luar dan dalam, menjadi pengingat filosofi Setia Hati: menjaga tindakan lahir dan batin agar tidak melukai diri sendiri maupun orang lain.

## 🎯 Tujuan Website

- Memperkenalkan identitas dan filosofi Upeksha Jagratara
- Memberikan informasi latihan secara jelas (jadwal, materi, agenda)
- Menampilkan kegiatan dan dokumentasi akademi
- Memberikan informasi lokasi dan kontak
- Membangun kepercayaan calon siswa lewat testimoni
- Mengarahkan calon siswa untuk menghubungi akademi

Website ini bukan sekadar halaman informasi — dirancang sebagai identitas digital akademi yang membujuk pengunjung untuk bergabung. Detail kebutuhan produk lengkap ada di [`PRD.md`](./PRD.md).

## 🚀 Teknologi yang Digunakan

Dibangun **100% statis**, tanpa database dan tanpa backend server:

- **HTML5** — struktur konten semantik
- **CSS3** — styling, Flexbox/Grid, responsif, custom properties
- **JavaScript (Vanilla)** — DOM manipulation & interaksi UI (mobile nav, smooth scroll, gallery filter)
- **JSON** — sumber data (jadwal, agenda, materi, galeri, testimoni), diambil lewat `fetch()`

**Tidak menggunakan:** Database, Backend, Login/Register, Admin panel, CRUD, Authentication, Framework.

Cocok untuk hosting gratis via **GitHub Pages**.

## 🧭 Konsep Website

Single-page landing page — pengunjung menggulir dari atas ke bawah tanpa berpindah halaman:

```
Hero → Tentang → Filosofi → Apa yang Dipelajari → Jadwal → Agenda
→ Dokumentasi → Testimoni → Lokasi → CTA Bergabung → Kontak/Footer
```

Detail wireframe & spesifikasi tiap section ada di [`DESIGN.md`](./DESIGN.md).

## ✨ Fitur

| Section | Detail |
|---|---|
| **Profil & Filosofi** | Sejarah nama, makna, dan simbol (ombak, karambit) |
| **Apa yang Dipelajari** | Materi Dasar, Teknik, Pembentukan Diri |
| **Jadwal** | Card, diambil dari `jadwal.json` |
| **Agenda** | Dinamis, terurut berdasarkan tanggal, dari `agenda.json` |
| **Dokumentasi** | Galeri dengan kategori, filter, modal gambar, tanggal upload |
| **Testimoni** | Social proof untuk membangun kepercayaan calon siswa |
| **Lokasi** | Google Maps Embed + tombol buka di Maps |
| **Kontak** | WhatsApp (CTA utama), Instagram, Email |

## 📂 Struktur Direktori

```
upeksha-jagratara/
├── index.html              # Halaman utama (single page)
├── css/
│   └── style.css           # Semua styling & responsive design
├── js/
│   ├── main.js              # Navbar, smooth scroll, active nav, footer year
│   ├── gallery.js           # Filter & modal galeri dokumentasi
│   └── agenda.js            # Render dinamis jadwal & agenda dari JSON
├── data/
│   ├── jadwal.json          # Data jadwal latihan
│   ├── agenda.json          # Data agenda kegiatan
│   ├── materi.json          # Data materi latihan
│   ├── galeri.json          # Data dokumentasi foto
│   └── testimoni.json       # Data testimoni anggota
├── assets/
│   ├── logo/                # Logo akademi
│   ├── images/               # Foto-foto latihan & kegiatan
│   └── icons/                 # Icon UI
├── PRD.md                   # Product Requirements Document
├── DESIGN.md                # Dokumen desain & identitas visual
└── README.md                 # Dokumen ini
```

## 🎨 Identitas Visual (ringkas)

**Palet:** Deep Ocean Blue (primary) · Dark Navy (teks) · Off-White (background) · Muted Gold (aksen, secukupnya)

**Simbol:** Ombak sebagai *visual language* (pembatas antar section) · Karambit sebagai ornamen kecil — **tidak dominan**, agar website tetap terlihat sebagai akademi, bukan toko senjata.

Spesifikasi lengkap (tipografi, wireframe, breakpoint) ada di [`DESIGN.md`](./DESIGN.md).

## 📱 Responsive Design

Dirancang untuk **mobile, tablet, dan desktop**, dengan navigasi mobile menggunakan hamburger menu.

## 🛠️ Cara Menjalankan di Komputer Lokal

Karena menggunakan `fetch()` API untuk mengambil data JSON, website ini **harus** dijalankan lewat local server — tidak bisa hanya klik 2x file `index.html`, karena `fetch()` butuh HTTP server, bukan `file://`.

**Opsi A — VS Code Live Server (paling mudah):**
1. Install ekstensi **Live Server** di VS Code
2. Buka folder proyek ini di VS Code
3. Klik kanan `index.html` → **Open with Live Server**

**Opsi B — Python HTTP server:**
```bash
python -m http.server 8000
```
Lalu akses `http://localhost:8000`

## 🔄 Update Konten

Semua konten yang sering berubah (jadwal, agenda, materi, galeri, testimoni) disimpan di file JSON pada folder `data/`. Untuk memperbarui konten, cukup edit file JSON terkait — **tidak perlu menyentuh HTML atau JavaScript**.

Contoh menambah agenda baru di `data/agenda.json`:
```json
{
  "title": "Latihan Gabungan",
  "date": "2026-09-12",
  "location": "Lapangan Utama"
}
```

## 🌐 Deployment

Direkomendasikan menggunakan **GitHub Pages**:
1. Push repository ke GitHub
2. Masuk ke **Settings → Pages**
3. Pilih branch `main` dan folder root (`/`)
4. Website otomatis live di `https://<username>.github.io/upeksha-jagratara/`

## 🚫 Batasan Versi 1 (V1)

Website versi ini sengaja tidak menyertakan:
- ❌ Login / Register
- ❌ Halaman admin / dashboard
- ❌ Database & backend
- ❌ Form submit dengan penyimpanan data (kontak cukup via WhatsApp)
- ❌ Sistem pendaftaran online

Alasan & rencana pengembangan lanjutan ada di [`PRD.md`](./PRD.md).

## 🗺️ Roadmap

```
V1  Static Academy Website
 ↓
V2  Polish + SEO + Performance
 ↓
V3  Pendaftaran Online
 ↓
V4  Backend + Database
 ↓
V5  Academy Management System
```

## 📄 Dokumen Terkait

- [`PRD.md`](./PRD.md) — Kebutuhan produk, fitur, data model, dan batasan proyek
- [`DESIGN.md`](./DESIGN.md) — Identitas visual, wireframe, dan spesifikasi UI

## 👨‍💻 Kontributor

Dikembangkan oleh tim internal Upeksha Jagratara sebagai project pembelajaran RPL (HTML/CSS/JS murni, Git & GitHub, component thinking, data-driven rendering).

## 📜 Lisensi

Project ini dibuat untuk keperluan internal akademi dan portofolio pembelajaran.

```
26_upeksha_jagratara
├─ DESIGN.md
├─ PRD.md
├─ README.md
├─ STITCH-PROMPTS-V3-REFERENCE-MATCH.md
├─ UJ.ApizdeDitor_20260904_221451_0000.pdf
├─ netlify.toml
├─ public
│  ├─ admin
│  │  ├─ config.yml
│  │  └─ index.html
│  ├─ assets
│  │  ├─ icons
│  │  ├─ images
│  │  │  ├─ image.webp
│  │  │  └─ o2sn.jpg
│  │  └─ logo
│  │     ├─ favicon.png
│  │     ├─ logo-full-lockup.png
│  │     ├─ logo-navbar.png
│  │     └─ og-image.png
│  ├─ css
│  │  └─ style.css
│  ├─ data
│  │  ├─ agenda.json
│  │  ├─ galeri.json
│  │  ├─ jadwal.json
│  │  ├─ kategori.json
│  │  ├─ materi.json
│  │  └─ testimoni.json
│  ├─ index.html
│  ├─ js
│  │  ├─ agenda.js
│  │  ├─ components
│  │  │  └─ jadwal-card.js
│  │  ├─ gallery.js
│  │  └─ main.js
│  ├─ robots.txt
│  └─ sitemap.xml
└─ stitch_upeksha_jagratara_design_system.zip

```