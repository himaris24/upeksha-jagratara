/* =========================================================
   main.js — Navbar interaktif, active nav, footer year,
   render Materi (F-04) & Testimoni (F-08)
   ========================================================= */

/* ---------- Navbar toggle (mobile) ---------- */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Tutup menu mobile setiap kali link diklik
navMenu.querySelectorAll('.navbar__link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Active nav saat scroll ---------- */
const sections = document.querySelectorAll('main section[id], footer[id]');
const navLinks = document.querySelectorAll('.navbar__link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    });
  },
  { rootMargin: '-40% 0px -55% 0px' } // aktif saat section ada di tengah viewport
);

sections.forEach((section) => observer.observe(section));

/* ---------- Tahun otomatis di footer ---------- */
document.getElementById('currentYear').textContent = new Date().getFullYear();

/* ---------- Helper fetch JSON (dipakai ulang di semua file JS) ---------- */
export async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Gagal memuat ${path} (status ${res.status})`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return null; // caller wajib cek null
  }
}

/* ---------- F-04: Render Materi ---------- */
async function renderMateri() {
  const container = document.getElementById('materiContainer');
  const data = await fetchJSON('data/materi.json');
  if (!data) {
    container.innerHTML = '<p>Materi belum bisa dimuat.</p>';
    return;
  }

  const kategori = [
    { key: 'dasar', label: 'Dasar' },
    { key: 'teknik', label: 'Teknik' },
    { key: 'pembentukan_diri', label: 'Pembentukan Diri' },
  ];

  container.innerHTML = kategori
    .map(
      (k) => `
      <div class="card materi__card">
        <h3>${k.label}</h3>
        <ul>
          ${data[k.key].map((item) => `<li>✓ ${item}</li>`).join('')}
        </ul>
      </div>`
    )
    .join('');
}

/* ---------- F-08: Render Testimoni ---------- */
async function renderTestimoni() {
  const container = document.getElementById('testimoniContainer');
  const data = await fetchJSON('data/testimoni.json');
  if (!data || data.length === 0) {
    container.innerHTML = '<p>Belum ada testimoni.</p>';
    return;
  }

  container.innerHTML = data
    .map(
      (t) => `
      <div class="testimoni__card">
        <p class="testimoni__quote">"${t.isi}"</p>
        <p class="testimoni__nama">— ${t.nama}</p>
      </div>`
    )
    .join('');
}

renderMateri();
renderTestimoni();