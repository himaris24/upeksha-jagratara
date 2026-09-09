/* =========================================================
   gallery.js — Render Dokumentasi (F-07): grid, filter dinamis, modal,
   + limit 4 foto di mobile dengan tombol "Selengkapnya"
   ========================================================= */
import { fetchJSON } from './main.js';

let galeriData = [];
let kategoriData = [];
let isExpanded = false;
const MOBILE_LIMIT = 4;

const container = document.getElementById('galeriContainer');
const filterContainer = document.getElementById('galeriFilter');
const modal = document.getElementById('galeriModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');

function isMobile() {
  return window.matchMedia('(max-width: 767px)').matches;
}

function formatTanggal(iso) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/* ---------- Ambil & Render Kategori secara Dinamis ---------- */
async function initFilter() {
  const data = await fetchJSON('data/kategori.json');
  if (!data || !data.items) {
    kategoriData = [
      { id: 'latihan', label: 'Latihan' },
      { id: 'kegiatan', label: 'Kegiatan' },
      { id: 'prestasi', label: 'Prestasi' },
      { id: 'tempat', label: 'Tempat' }
    ];
  } else {
    kategoriData = data.items;
  }

  let html = `<button class="filter-btn is-active" data-filter="semua">Semua</button>`;
  kategoriData.forEach((kat) => {
    html += `<button class="filter-btn" data-filter="${kat.id}">${kat.label}</button>`;
  });
  filterContainer.innerHTML = html;

  const filterButtons = filterContainer.querySelectorAll('.filter-btn');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      isExpanded = false;
      const filter = btn.dataset.filter;
      const filtered =
        filter === 'semua' ? galeriData : galeriData.filter((f) => f.kategori === filter);
      renderGaleri(filtered);
    });
  });
}

/* ---------- Render grid foto ---------- */
function renderGaleri(items) {
  const existingBtn = document.getElementById('galeriMoreBtn');
  if (existingBtn) existingBtn.remove();

  if (!items || items.length === 0) {
    container.innerHTML = '<p>Tidak ada foto pada kategori ini.</p>';
    return;
  }

  const shouldLimit = isMobile() && !isExpanded && items.length > MOBILE_LIMIT;
  const itemsToShow = shouldLimit ? items.slice(0, MOBILE_LIMIT) : items;

  container.innerHTML = itemsToShow
    .map((foto, index) => {
      let cleanPath = foto.gambar || '';
      if (cleanPath.startsWith('/')) {
        cleanPath = cleanPath.substring(1);
      }

      return `
      <img
        src="${cleanPath}"
        alt="${foto.judul}"
        loading="lazy"
        data-index="${index}"
        title="${foto.judul} — ${formatTanggal(foto.tanggal_upload)}"
      >`;
    })
    .join('');

  container.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => openModal(itemsToShow[img.dataset.index]));
  });

  if (shouldLimit) {
    const sisa = items.length - MOBILE_LIMIT;
    const moreBtn = document.createElement('button');
    moreBtn.id = 'galeriMoreBtn';
    moreBtn.className = 'btn-selengkapnya';
    moreBtn.textContent = `Selengkapnya (${sisa} foto lagi) →`;
    moreBtn.addEventListener('click', () => {
      isExpanded = true;
      renderGaleri(items);
    });
    container.insertAdjacentElement('afterend', moreBtn);
  }
}

/* ---------- Modal lightbox ---------- */
function openModal(foto) {
  let cleanPath = foto.gambar || '';
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.substring(1);
  }

  modalImage.src = cleanPath;
  modalImage.alt = foto.judul;
  modalCaption.textContent = `${foto.judul} — ${formatTanggal(foto.tanggal_upload)}`;
  modal.hidden = false;
}

function closeModal() {
  modal.hidden = true;
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ---------- Init ---------- */
async function initGaleri() {
  await initFilter();
  const data = await fetchJSON('data/galeri.json');
  if (!data || !data.items) {
    container.innerHTML = '<p>Dokumentasi belum bisa dimuat.</p>';
    return;
  }
  galeriData = data.items;
  renderGaleri(galeriData);
}

initGaleri();