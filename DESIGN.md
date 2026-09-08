# Design Document
## Website Akademi Pencak Silat Upeksha Jagratara

**Versi Dokumen:** 1.0 (Final) · **Status:** V1 — Static Academy Website
**Dokumen terkait:** [`README.md`](./README.md) · [`PRD.md`](./PRD.md)

---

## 1. Prinsip Desain

Website harus terasa:

- **Tenang** — mencerminkan makna "jiwa yang tenang"
- **Waspada / Tegas** — mencerminkan "selalu waspada"
- **Berwibawa** — bukan website klub biasa, tapi akademi
- **Tradisional namun modern** — menghormati filosofi pencak silat, tapi tampil kontemporer
- **Tidak ramai** — informasi padat tapi tetap scannable, banyak whitespace

Hindari kesan: website sekolah generik, atau website toko senjata (akibat elemen karambit yang terlalu dominan).

## 2. Identitas Visual

### 2.1 Palet Warna

| Warna | Peran | Makna |
|---|---|---|
| **Deep Ocean Blue** | Primary (tombol, aksen utama, link) | Ketenangan |
| **Dark Navy** | Teks utama, header | Kedisiplinan & kewibawaan |
| **Off-White** | Background | Bersih, nyaman dibaca, memberi ruang napas |
| **Muted Gold** | Aksen sekunder (garis, ikon, highlight kecil — secukupnya) | Nilai & prestasi |

> **Aturan penting:** jangan menjadikan seluruh halaman didominasi biru. Gunakan off-white sebagai dasar agar biru dan gold terasa sebagai aksen bermakna, bukan monoton.

### 2.2 Tipografi

- Maksimal 2 jenis font: satu untuk heading (tegas, sedikit kokoh), satu untuk body text (mudah dibaca).
- Ukuran heading berjenjang jelas (H1 hero > H2 section title > H3 sub-bagian).
- Hindari font dekoratif berlebihan — kejelasan lebih penting daripada gaya.

### 2.3 Elemen Simbolis

| Elemen | Perlakuan |
|---|---|
| **Ombak** | *Visual language* — garis lengkung sebagai pembatas antar section (section divider), bukan gambar ombak literal yang besar |
| **Karambit** | Ornamen kecil (ikon di navbar/footer atau aksen di hero), **tidak boleh** menjadi elemen dominan agar tidak terkesan seperti website senjata |
| **Siluet pesilat** | Opsional di background hero, transparansi rendah, tidak mengganggu keterbacaan teks |

## 3. Struktur Halaman & Wireframe Konsep

Single-page dengan navigasi scroll. Urutan section mengikuti F-01–F-12 di [`PRD.md`](./PRD.md):

```
┌─────────────────────────────────────────┐
│ NAVBAR (sticky)                          │
│ [Logo] Upeksha Jagratara      ☰ (mobile) │
├─────────────────────────────────────────┤
│ HERO                                     │
│  UPEKSHA JAGRATARA                       │
│  "Ketenangan yang Penuh Kewaspadaan"     │
│  [Lihat Jadwal]  [Temukan Lokasi]        │
├─────────────────────────────────────────┤
│ TENTANG                                  │
│  Histori nama — 2 Januari 2023           │
├─────────────────────────────────────────┤
│ FILOSOFI                                 │
│  🌊 Ombak     🗡️ Karambit                │
├─────────────────────────────────────────┤
│ APA YANG DIPELAJARI                      │
│  [Dasar]   [Teknik]   [Pembentukan Diri] │
├─────────────────────────────────────────┤
│ JADWAL LATIHAN                           │
│  [Selasa] [Kamis] [Minggu] — card        │
├─────────────────────────────────────────┤
│ AGENDA KEGIATAN                          │
│  Timeline / list, sort by tanggal        │
├─────────────────────────────────────────┤
│ DOKUMENTASI                              │
│  [Semua][Latihan][Kegiatan][Tempat]      │
│  Grid foto + tanggal + modal             │
├─────────────────────────────────────────┤
│ TESTIMONI                                │
│  "..." — 3 s.d. 5 kutipan singkat        │
├─────────────────────────────────────────┤
│ LOKASI                                   │
│  [Google Maps Embed]                     │
│  [Buka di Google Maps]                   │
├─────────────────────────────────────────┤
│ CTA BERGABUNG                            │
│  "Siap Memulai Latihan?"                 │
│  [Hubungi via WhatsApp]                  │
├─────────────────────────────────────────┤
│ FOOTER                                   │
│  WA · Instagram · Email · © tahun aktif  │
└─────────────────────────────────────────┘
```

### 3.1 Navbar

- **Desktop:** logo + nama akademi di kiri, menu horizontal di kanan (Beranda, Tentang, Jadwal, Materi, Agenda, Dokumentasi, Kontak)
- **Mobile:** logo di kiri, hamburger icon di kanan → menu dropdown/overlay
- Sticky di top saat scroll, dengan highlight menu aktif sesuai section yang sedang dilihat (active navigation)

### 3.2 Hero

- Headline besar: nama akademi
- Subheadline: slogan filosofi
- Deskripsi singkat 1–2 kalimat
- Dua tombol CTA: satu ke section Jadwal, satu ke section Lokasi
- Visual background opsional: siluet halus pesilat/ombak (transparansi rendah)

### 3.3 Jadwal & Agenda

- Jadwal ditampilkan sebagai card per hari (bukan tabel kaku) agar lebih modern dan mobile-friendly
- Agenda ditampilkan sebagai list/timeline terurut dari tanggal terdekat
- Keduanya di-render dinamis dari `jadwal.json` dan `agenda.json` (lihat struktur data di `PRD.md` §8)

### 3.4 Dokumentasi (Galeri)

- Grid foto responsif
- Tombol filter kategori (Semua, Latihan, Kegiatan, Prestasi, Tempat)
- Setiap foto menampilkan judul singkat dan tanggal (diisi manual di JSON)
- Klik foto membuka modal (lightbox) untuk tampilan lebih besar

### 3.5 Testimoni

- Maksimal 3–5 kutipan, ditampilkan sebagai card dengan sedikit variasi warna latar agar menonjol
- Fokus pada kredibilitas (social proof), bukan dekorasi

## 4. Responsive Design

| Breakpoint | Target Perangkat | Perlakuan |
|---|---|---|
| `> 1024px` | Desktop | Navbar horizontal penuh, grid multi-kolom (jadwal, materi, galeri) |
| `768px – 1024px` | Tablet | Grid menyesuaikan jadi 2 kolom |
| `< 768px` | Mobile | Navbar hamburger, semua grid menjadi 1 kolom, tombol CTA full-width |

Gunakan pendekatan **mobile-first**, atau minimal pastikan pengujian dilakukan di kedua ukuran sejak awal pengembangan.

## 5. Fitur JavaScript

### 5.1 Wajib (V1)
- Toggle navbar mobile (hamburger menu)
- Smooth scroll saat klik menu navigasi
- Active navigation highlight sesuai section yang sedang dilihat
- Render dinamis jadwal, agenda, dan testimoni dari file JSON (`fetch()`)
- Filter kategori pada galeri dokumentasi
- Modal/lightbox saat foto galeri diklik
- Tahun otomatis di footer (`new Date().getFullYear()`)

### 5.2 Opsional (V2 ke atas)
- Scroll animation (fade-in/slide-in saat elemen masuk viewport)
- Dark mode toggle
- Tombol back-to-top
- Lazy loading gambar

## 6. Prinsip UI Tambahan

- **Whitespace lebih penting dari dekorasi** — beri ruang antar section agar tidak terasa padat.
- **Satu CTA utama per section** bila memungkinkan — hindari terlalu banyak tombol bersaing dalam satu pandangan.
- **Konsistensi komponen** — card jadwal, card agenda, dan card materi sebaiknya menggunakan gaya visual yang serupa (border-radius, shadow, spacing) agar terasa satu sistem desain.
- **Ikon secukupnya** — gunakan ikon sederhana (WhatsApp, lokasi, kalender) untuk mempercepat pemindaian visual, bukan sebagai dekorasi berlebihan.

## 7. Referensi Section-to-Data Mapping

| Section | Sumber Data |
|---|---|
| Jadwal Latihan | `data/jadwal.json` |
| Agenda Kegiatan | `data/agenda.json` |
| Apa yang Dipelajari | `data/materi.json` |
| Dokumentasi | `data/galeri.json` |
| Testimoni | `data/testimoni.json` |
| Kontak & Lokasi | Hardcoded di HTML (statis, jarang berubah) |

Struktur field tiap file JSON ada di [`PRD.md`](./PRD.md) §8.
