/* =========================================================
   main.js — Navbar interaktif, active nav, footer year,
   serta merender konten dinamis: Tentang, Filosofi, Materi & Testimoni
   ========================================================= */

/* ---------- Navbar toggle (mobile) & Auto-Close ---------- */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navMenu.querySelectorAll('.navbar__link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
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
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => observer.observe(section));

/* ---------- Tahun otomatis di footer ---------- */
document.getElementById('currentYear').textContent = new Date().getFullYear();

/* ---------- Helper fetch JSON ---------- */
export async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Gagal memuat ${path} (status ${res.status})`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

/* ---------- F-02: Render Tentang ---------- */
async function renderTentang() {
  const container = document.getElementById('tentangContainer');
  const data = await fetchJSON('data/tentang.json');
  if (!data) return;
  container.innerHTML = `
    <p class="tentang__text">${data.teks}</p>
    <blockquote class="tentang__quote">"${data.quote}"</blockquote>
  `;
}

/* ---------- F-03: Render Filosofi ---------- */
async function renderFilosofi() {
  const container = document.getElementById('filosofiContainer');
  const data = await fetchJSON('data/filosofi.json');
  if (!data || !data.items) return;
  container.innerHTML = data.items.map(item => `
    <div class="filosofi__card">
      <h3>${item.judul}</h3>
      <p>${item.deskripsi}</p>
    </div>
  `).join('');
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

/* ---------- F-08: Render Testimoni (+ Tombol Selengkapnya) ---------- */
let testimoniIsExpanded = false;
const TESTIMONI_LIMIT = 4;

async function renderTestimoni() {
  const container = document.getElementById('testimoniContainer');

  const existingBtn = document.getElementById('testimoniMoreBtn');
  if (existingBtn) existingBtn.remove();

  const data = await fetchJSON('data/testimoni.json');
  if (!data || !data.items || data.items.length === 0) {
    container.innerHTML = '<p>Belum ada testimoni.</p>';
    return;
  }

  const items = data.items;
  const shouldLimit = !testimoniIsExpanded && items.length > TESTIMONI_LIMIT;
  const itemsToShow = shouldLimit ? items.slice(0, TESTIMONI_LIMIT) : items;

  container.innerHTML = itemsToShow
    .map(
      (t) => `
      <div class="testimoni__card">
        <p class="testimoni__quote">"${t.isi}"</p>
        <p class="testimoni__nama">— ${t.nama}</p>
      </div>`
    )
    .join('');

  if (shouldLimit) {
    const sisa = items.length - TESTIMONI_LIMIT;
    const moreBtn = document.createElement('button');
    moreBtn.id = 'testimoniMoreBtn';
    moreBtn.className = 'btn-selengkapnya';
    moreBtn.textContent = `Selengkapnya (${sisa} testimoni lagi) →`;
    moreBtn.addEventListener('click', () => {
      testimoniIsExpanded = true;
      renderTestimoni();
    });
    container.insertAdjacentElement('afterend', moreBtn);
  } else if (testimoniIsExpanded && items.length > TESTIMONI_LIMIT) {
    const lessBtn = document.createElement('button');
    lessBtn.id = 'testimoniMoreBtn';
    lessBtn.className = 'btn-selengkapnya';
    lessBtn.textContent = `← Sembunyikan sebagian`;
    lessBtn.addEventListener('click', () => {
      testimoniIsExpanded = false;
      renderTestimoni();
    });
    container.insertAdjacentElement('afterend', lessBtn);
  }
}

// Inisialisasi
renderTentang();
renderFilosofi();
renderMateri();
renderTestimoni();