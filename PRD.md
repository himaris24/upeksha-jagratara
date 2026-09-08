# Product Requirements Document (PRD)
## Website Akademi Pencak Silat Upeksha Jagratara

**Versi Dokumen:** 1.0 (Final) · **Status:** V1 — Static Academy Website
**Dokumen terkait:** [`README.md`](./README.md) · [`DESIGN.md`](./DESIGN.md)

---

## 1. Latar Belakang

Upeksha Jagratara adalah akademi pencak silat yang dibentuk pada 2 Januari 2023. Saat ini akademi belum memiliki kehadiran digital resmi — informasi jadwal, kegiatan, dan materi latihan hanya tersebar lewat komunikasi informal (grup chat).

Dibutuhkan sebuah website yang:
1. Menjadi identitas resmi akademi di internet.
2. Memudahkan calon siswa mengenal akademi sebelum bergabung.
3. Berfungsi sebagai portofolio pembelajaran Rekayasa Perangkat Lunak (RPL) bagi tim pengembang.

## 2. Tujuan Produk

Website **bukan** sekadar "papan informasi pencak silat". Website harus membangun perjalanan psikologis calon siswa:

```
"Apa ini?" → "Siapa mereka?" → "Belajar apa?" → "Kapan latihan?"
→ "Aktif tidak?" → "Orang lain puas?" → "Di mana lokasinya?" → "Saya tertarik, hubungi."
```

Target akhir: pengunjung website menghubungi akademi melalui WhatsApp untuk bergabung.

## 3. Target Pengguna

| Persona | Kebutuhan |
|---|---|
| Calon siswa | Info jelas: apa yang dipelajari, jadwal, lokasi, cara bergabung |
| Orang tua calon siswa | Kredibilitas akademi, filosofi, testimoni |
| Anggota aktif | Info jadwal & agenda terbaru |
| Pengurus akademi | Kemudahan update konten tanpa harus paham coding |

## 4. Ruang Lingkup (Scope)

### 4.1 Termasuk (In Scope — V1)
Website statis satu halaman (single-page) yang menampilkan seluruh informasi akademi tanpa memerlukan backend atau database.

### 4.2 Tidak Termasuk (Out of Scope — V1)
- Login / Register / Autentikasi
- Dashboard admin / CMS
- Database & backend server
- Form submission dengan penyimpanan data (pendaftaran, komentar)
- Payment gateway
- Sistem presensi anggota

## 5. Batasan Teknis

| Aspek | Keputusan |
|---|---|
| Bahasa pemrograman | HTML, CSS, JavaScript (vanilla) |
| Penyimpanan data | File JSON statis (`data/*.json`), diambil via `fetch()` |
| Hosting | GitHub Pages (statis, gratis) |
| Struktur halaman | Single-page dengan navigasi scroll (bukan multi-page) |
| Database | Tidak digunakan pada V1 |

**Alasan tanpa database:** kompleksitas tidak sebanding dengan kebutuhan V1. Struktur data berbasis JSON dipilih agar mudah dimigrasikan ke backend nantinya (V4/V5) tanpa merombak arsitektur data dari nol.

## 6. Kebutuhan Fungsional (Functional Requirements)

| ID | Fitur | Deskripsi |
|---|---|---|
| F-01 | Hero Section | Menampilkan nama akademi, slogan, dan CTA utama |
| F-02 | Tentang Akademi | Sejarah nama Upeksha Jagratara (2 Januari 2023) & makna |
| F-03 | Filosofi | Penjelasan simbol ombak dan karambit |
| F-04 | Apa yang Dipelajari | Kategori materi: Dasar, Teknik, Pembentukan Diri |
| F-05 | Jadwal Latihan | Card hari/waktu/lokasi, di-render dari `jadwal.json` |
| F-06 | Agenda Kegiatan | List agenda, di-sort berdasarkan tanggal dari `agenda.json` |
| F-07 | Dokumentasi | Galeri foto dengan filter kategori dan tanggal upload manual |
| F-08 | Testimoni | 3–5 testimoni anggota dari `testimoni.json` |
| F-09 | Lokasi | Embed Google Maps + tombol buka di Maps |
| F-10 | CTA Bergabung | Ajakan bergabung dengan tombol WhatsApp |
| F-11 | Kontak & Footer | WhatsApp, Instagram, Email, tahun otomatis |
| F-12 | Navigasi Responsif | Navbar dengan hamburger menu di mobile |

## 7. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| ID | Kebutuhan | Detail |
|---|---|---|
| NF-01 | Responsif | Optimal di desktop, tablet, dan mobile (lihat breakpoint di `DESIGN.md`) |
| NF-02 | Performa | Tanpa dependency berat; loading cepat |
| NF-03 | Maintainability | Update konten cukup lewat edit file JSON, tanpa sentuh HTML/JS |
| NF-04 | Aksesibilitas dasar | Kontras warna cukup, struktur HTML semantik |
| NF-05 | Kompatibilitas | Berjalan baik di browser modern (Chrome, Firefox, Safari, Edge) |

## 8. Struktur Data (Data Model)

### `jadwal.json`
```json
[
  { "hari": "Selasa", "waktu": "19.00–21.00", "lokasi": "Lapangan Utama" }
]
```

### `agenda.json`
```json
[
  { "title": "Latihan Gabungan", "date": "2026-09-12", "location": "Lapangan Utama" }
]
```

### `materi.json`
```json
{
  "dasar": ["Kuda-kuda", "Sikap pasang", "Langkah", "Pukulan", "Tendangan"],
  "teknik": ["Elakan", "Tangkisan", "Jatuhan", "Kuncian", "Teknik senjata"],
  "pembentukan_diri": ["Disiplin", "Pengendalian emosi", "Kepercayaan diri", "Persaudaraan", "Tanggung jawab"]
}
```

### `galeri.json`
```json
[
  { "judul": "Latihan Rutin", "kategori": "latihan", "tanggal_upload": "2026-08-10", "gambar": "assets/images/latihan-01.jpg" }
]
```

### `testimoni.json`
```json
[
  { "nama": "Kadhang Upeksha Jagratara", "isi": "Latihan bukan hanya tentang kemampuan bertarung, tetapi bagaimana mengendalikan diri." }
]
```

> **Catatan:** karena tidak ada server, field `tanggal_upload` pada galeri harus diisi manual — tidak ada timestamp otomatis.

## 9. Struktur Halaman (Section Order)

1. Navbar (sticky)
2. Hero
3. Tentang Upeksha Jagratara
4. Filosofi & Identitas
5. Apa yang Dipelajari
6. Jadwal Latihan
7. Agenda Kegiatan
8. Dokumentasi
9. Testimoni
10. Lokasi
11. CTA Bergabung
12. Footer & Kontak

Spesifikasi visual tiap section ada di [`DESIGN.md`](./DESIGN.md).

## 10. Kriteria Sukses (Success Criteria)

- Website dapat diakses dan berfungsi penuh di desktop dan mobile.
- Seluruh data (jadwal, agenda, materi, galeri, testimoni) berhasil di-render dari JSON tanpa error.
- Pengunjung dapat dengan mudah menemukan cara menghubungi akademi (maksimal 2 klik dari halaman manapun).
- Website berhasil di-deploy dan dapat diakses publik via GitHub Pages.

## 11. Roadmap Pengembangan

| Versi | Fokus |
|---|---|
| **V1** | Static Academy Website — fondasi HTML/CSS/JS/JSON, semua section inti |
| **V2** | Polish — animasi scroll, SEO, favicon, Open Graph, optimasi loading |
| **V3** | Pendaftaran online (form, tanpa database penuh) |
| **V4** | Backend + Database — sistem data anggota, presensi, jadwal dinamis |
| **V5** | Academy Management System — dashboard admin, manajemen dokumentasi, pengumuman |

> Opsional pembelajaran tambahan: setelah V1 selesai, struktur yang sama dapat diimplementasikan ulang menggunakan static-site generator (Jekyll, kemudian Hugo) sebagai eksperimen belajar template & data-driven build process — tanpa mengubah UX atau urutan section yang sudah ditetapkan.

## 12. Referensi Filosofi & Identitas

- **Nama:** Upeksha Jagratara — terbentuk 2 Januari 2023 — berarti "Jiwa yang tenang dan selalu waspada"
- **Ombak:** simbol ketenangan, keteguhan, kemampuan beradaptasi
- **Karambit:** senjata dengan ketajaman luar dan dalam; filosofi Setia Hati — menjaga tindakan lahir dan batin agar tidak melukai diri sendiri maupun orang lain
