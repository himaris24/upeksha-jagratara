# Stitch Prompts V3 — Reference Match (Tranquil Ocean Style)

Referensi: `Blue_Website_Design_ideas...Tranquil_Ocean_Theme.jpeg`. Ini menggantikan gaya "tekstur batik" di V2 dengan gaya **editorial fotografi besar + gradasi biru**, tetap 1 prompt = 1 section.

**Ciri khas referensi yang wajib ditiru:**
- Background gradasi: biru langit cerah di atas → biru navy gelap di bawah (bukan solid warna rata)
- Hero: foto besar landscape/aksi, rounded corner besar (20-24px), melayang dengan shadow lembut di atas background gradasi — bukan foto mepet full-bleed tanpa jarak
- Navbar transparan menyatu di atas hero, logo kiri, menu tengah/kanan, tombol pill (rounded-full) di ujung kanan
- Headline pakai font serif/display elegan, bukan sans-serif tebal generik
- Panel split: foto besar rounded di satu sisi + teks di sisi lain, DAN di bawah teks ada strip 3 thumbnail foto kecil sejajar (detail khas referensi ini)
- Card grid: foto di atas (rounded), tag/label kecil melayang di atas foto, judul di bawah foto, lalu link kecil bertanda panah (bukan tombol besar)
- Semua tombol solid berbentuk pill (rounded-full), bukan kotak rounded-md biasa
- Footer sangat minim: cuma url/nama, beberapa link kecil, ikon sosial — tidak seramai footer biasa

Prompt di bawah **menggantikan** Global UI Contract lama untuk urusan visual (palet & larangan konten tetap sama), fokus ke *look* baru.

---

## 🔒 Global Visual Contract V3 (tempel di setiap prompt di bawah ini)

```
IDENTITAS BRAND (WAJIB): "Upeksha Jagratara", tagline "Ketenangan yang Penuh 
Kewaspadaan". Jangan pernah ganti nama atau tambah suffix apapun di belakangnya.

GAYA VISUAL ACUAN: Editorial fotografi besar dengan dominasi warna biru, gaya 
seperti travel/wellness premium website — BUKAN gaya SaaS kotak-kotak flat.

PALET & GRADASI:
- Background section memakai gradasi lembut: biru langit cerah (sky blue) di 
  bagian atas bertransisi ke deep ocean blue/dark navy di bagian bawah section
- Card/foto: background off-white/putih gading untuk area teks
- Aksen gold dipakai sangat sedikit (tag kecil, garis dekoratif)

FOTOGRAFI: setiap section yang memungkinkan HARUS punya foto besar bertema 
pencak silat (gerakan latihan, siluet kuda-kuda, tangan mengepal, tekstur 
seragam) — bukan kotak placeholder kosong, bukan ikon generik. Foto selalu 
rounded corner besar (20-24px radius) dan diberi shadow lembut (soft elevation) 
seolah "melayang" di atas background, ada jarak/padding dari tepi, TIDAK 
full-bleed mepet layar.

TIPOGRAFI: headline pakai font serif/display yang elegan dan sedikit playful 
(seperti majalah lifestyle), body text pakai sans-serif bersih. Eyebrow text 
kecil huruf kapital dengan letter-spacing lebar di atas tiap headline section.

TOMBOL: SEMUA tombol berbentuk pill (rounded-full, ujung benar-benar bulat), 
bukan rounded-md kotak. Tombol solid warna primary/off-white bergantian sesuai 
kontras background.

LINK KECIL: untuk aksi sekunder (misal "Lihat Semua"), gunakan link teks kecil 
dengan ikon panah (→) di sampingnya, bukan tombol besar.

JANGAN TAMPILKAN: tombol "Daftar"/"Register" apapun, footer generik SaaS 
(Kebijakan Privasi/Karir/Bantuan/dsb), form login/admin/database, karambit 
yang dibesarkan jadi elemen dominan (tetap kecil sebagai ornamen logo saja).
```

---

## 1. Navbar + Hero (gabung, karena di referensi menyatu)

### 🖥️ Desktop
```
[Global Visual Contract V3 di atas]

Buat mockup NAVBAR + HERO desktop (viewport ≥1440px) gaya editorial seperti 
referensi "Tranquil Ocean". 

Background: gradasi sky blue cerah di paling atas halaman.

Navbar: transparan menyatu dengan background biru langit, logo "Upeksha 
Jagratara" (dengan ikon karambit kecil) di kiri, menu (Beranda, Tentang, 
Jadwal, Materi, Agenda, Dokumentasi, Kontak) di tengah/kanan, tombol PILL putih 
solid "Hubungi Kami" dengan ikon WhatsApp kecil di ujung kanan.

Di bawah navbar: eyebrow text kecil huruf kapital "AKADEMI PENCAK SILAT" 
center, lalu headline besar font serif elegan "UPEKSHA JAGRATARA", subheadline 
italic "Ketenangan yang Penuh Kewaspadaan", deskripsi singkat 1 kalimat.

Di bawah teks hero: SATU foto besar landscape (rasio lebar, seperti foto 
latihan pencak silat di alam terbuka/lapangan saat golden hour) dengan rounded 
corner besar (20-24px), shadow lembut melayang, ada jarak dari tepi kiri-kanan 
layar (tidak full-bleed). Bagian bawah foto sedikit blend/fade ke warna navy 
gelap sebagai transisi ke section berikutnya (seperti referensi: bagian atas 
foto masih terang, bagian bawah menuju gelap).
```

### 📱 Mobile
```
[Global Visual Contract V3 di atas]

Buat mockup NAVBAR + HERO mobile (viewport 375px), gaya sama seperti desktop: 
navbar transparan dengan logo kiri + hamburger kanan, eyebrow text, headline 
serif "UPEKSHA JAGRATARA", subheadline, deskripsi singkat, tombol pill 
"Hubungi Kami" full-width, lalu satu foto besar rounded di bawahnya (rasio 
lebih portrait/persegi agar pas layar sempit) dengan shadow lembut dan fade ke 
navy di bagian bawah.
```

---

## 2. Tentang (split panel + thumbnail strip — detail khas referensi)

### 🖥️ Desktop
```
[Global Visual Contract V3 di atas]

Buat mockup SECTION "TENTANG" desktop (viewport ≥1440px), background navy 
gelap (lanjutan gradasi dari hero). Layout dua kolom seperti referensi:
Kolom kiri: SATU foto besar portrait (foto latihan/siluet pesilat), rounded 
corner besar, shadow lembut.
Kolom kanan: eyebrow text kecil "SEJARAH KAMI", headline serif "Upeksha 
Jagratara", paragraf singkat cerita nama terbentuk 2 Januari 2023 dan makna 
"Jiwa yang tenang dan selalu waspada", tombol pill "Baca Selengkapnya". DI 
BAWAH teks, tampilkan strip 3 thumbnail foto kecil sejajar horizontal (foto 
latihan/lokasi/kegiatan) dengan rounded corner kecil — detail ini WAJIB ada, 
meniru referensi persis.
Semua teks di kolom kanan berwarna putih/off-white karena background navy.
```

### 📱 Mobile
```
[Global Visual Contract V3 di atas]

Buat mockup SECTION "TENTANG" mobile (viewport 375px), background navy gelap. 
Stack vertikal: foto besar portrait rounded di atas, lalu eyebrow text, 
headline serif, paragraf singkat, tombol pill full-width, dan strip 3 
thumbnail foto kecil sejajar horizontal di paling bawah (scroll horizontal 
jika perlu). Teks putih/off-white.
```

---

## 3. Apa yang Dipelajari & Materi (card grid dengan tag + arrow-link)

### 🖥️ Desktop
```
[Global Visual Contract V3 di atas]

Buat mockup SECTION "APA YANG DIPELAJARI" desktop (viewport ≥1440px), 
background navy gelap. Eyebrow text "KURIKULUM KAMI" + headline serif di 
tengah atas. Di bawahnya grid 3 kolom, tiap kolom sebuah CARD gaya referensi:
foto di bagian atas card (rounded corner atas, foto gerakan silat berbeda tiap 
kartu — Dasar/Teknik/Pembentukan Diri), tag kecil melayang di pojok atas foto 
(misal "Dasar"), di bawah foto ada judul tebal ("Kuda-kuda, Pukulan, 
Tendangan..." ringkas) dan link kecil "Selengkapnya →" dengan ikon panah 
(BUKAN tombol besar). Card berlatar putih/off-white agar kontras dengan 
background navy, shadow lembut melayang.
```

### 📱 Mobile
```
[Global Visual Contract V3 di atas]

Buat mockup SECTION "APA YANG DIPELAJARI" mobile (viewport 375px), background 
navy gelap. Card (konten sama seperti desktop: Dasar/Teknik/Pembentukan Diri, 
foto+tag+judul+link panah) disusun stack vertikal full-width, style sama 
persis dengan versi desktop.
```

---

## 4. Testimoni (card grid gaya sama, isi kutipan + foto member)

### 🖥️ Desktop
```
[Global Visual Contract V3 di atas]

Buat mockup SECTION "TESTIMONI" desktop (viewport ≥1440px), background navy 
gelap. Eyebrow "KATA MEREKA" + headline serif di tengah atas. Grid 3 card 
putih/off-white rounded dengan shadow lembut: tiap card ada foto/avatar bulat 
kecil member di pojok atas, nama, peran (Siswa Senior/Anggota Baru/dsb), dan 
kutipan singkat di bawahnya dengan tanda kutip bergaya serif besar tipis di 
background card sebagai dekorasi halus.
```

### 📱 Mobile
```
[Global Visual Contract V3 di atas]

Buat mockup SECTION "TESTIMONI" mobile (viewport 375px), background navy 
gelap. Satu card testimoni per layar (carousel/swipe), style sama seperti 
desktop, indikator dot di bawah untuk testimoni lain.
```

---

## 5. Sisanya (Filosofi, Jadwal, Agenda, Dokumentasi, Lokasi, CTA, Footer)

Terapkan **Global Visual Contract V3** yang sama ke prompt section tersebut dari `STITCH-PROMPTS.md`/`STITCH-PROMPTS-V2-UPGRADE.md` sebelumnya, dengan penyesuaian:
- Background tetap ikut gradasi biru langit→navy sesuai posisi scroll section itu
- Semua tombol jadi bentuk pill
- Semua foto rounded besar + shadow lembut, tidak ada kotak placeholder kosong
- Aksi sekunder pakai link panah kecil, bukan tombol besar

**Khusus Footer** — ikuti gaya referensi yang SANGAT minim (bukan multi-kolom ramai):
```
Footer navy gelap, satu baris: nama domain/brand kecil di kiri ("upekshajagratara.com" 
gaya monospace kecil), 2-3 link teks kecil di tengah (Tentang, Jadwal, Kontak), 
dan 3 ikon sosial bulat kecil (WhatsApp, Instagram, Email) di kanan. Tidak ada 
kolom-kolom besar, sangat ringkas seperti referensi.
```

---

## ✅ Checklist Kecocokan dengan Referensi

- [ ] Background section pakai gradasi biru langit→navy, bukan warna solid rata
- [ ] Hero berupa foto besar rounded yang "melayang" dengan jarak dari tepi, bukan full-bleed mepet
- [ ] Semua tombol pill (rounded-full), tidak ada lagi tombol rounded-md kotak
- [ ] Headline pakai font serif/display, bukan sans-serif tebal generik
- [ ] Section Tentang punya strip 3 thumbnail foto kecil di bawah teks
- [ ] Card grid (Materi/Testimoni) pakai foto+tag+link panah kecil, bukan tombol besar
- [ ] Footer minim satu baris, bukan multi-kolom ramai
- [ ] Karambit tetap kecil sebagai ornamen logo — style baru ini tidak mengubah aturan itu
