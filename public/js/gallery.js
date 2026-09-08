/* =========================================================
   gallery.js — Render Dokumentasi (F-07): grid, filter, modal,
   + limit 4 foto di mobile dengan tombol "Selengkapnya"
   ========================================================= */
import { fetchJSON } from './main.js';

let galeriData = [];
let isExpanded = false;       // status "sudah klik Selengkapnya" untuk kategori aktif
const MOBILE_LIMIT = 4;

const container = document.getElementById('galeriContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('galeriModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');

/* ---------- Cek device mobile (breakpoint sama seperti DESIGN.md §4) ---------- */
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

/* ---------- Render grid foto (+ limit & tombol Selengkapnya kalau perlu) ---------- */
function renderGaleri(items) {
  // Bersihin tombol "Selengkapnya" lama biar gak dobel tiap re-render
  const existingBtn = document.getElementById('galeriMoreBtn');
  if (existingBtn) existingBtn.remove();

  if (items.length === 0) {
    container.innerHTML = '<p>Tidak ada foto pada kategori ini.</p>';
    return;
  }

  const shouldLimit = isMobile() && !isExpanded && items.length > MOBILE_LIMIT;
  const itemsToShow = shouldLimit ? items.slice(0, MOBILE_LIMIT) : items;

  container.innerHTML = itemsToShow
    .map(
      (foto, index) => `
      <img
        src="${foto.gambar}"
        alt="${foto.judul}"
        loading="lazy"
        data-index="${index}"
        title="${foto.judul} — ${formatTanggal(foto.tanggal_upload)}"
      >`
    )
    .join('');

  container.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => openModal(itemsToShow[img.dataset.index]));
  });

  // Tombol "Selengkapnya" — cuma dibikin kalau lagi dibatasi
  if (shouldLimit) {
    const sisa = items.length - MOBILE_LIMIT;
    const moreBtn = document.createElement('button');
    moreBtn.id = 'galeriMoreBtn';
    moreBtn.className = 'btn-selengkapnya';
    moreBtn.textContent = `Selengkapnya (${sisa} foto lagi) →`;
    moreBtn.addEventListener('click', () => {
      isExpanded = true;
      renderGaleri(items); // render ulang, kali ini full (isExpanded sudah true)
    });
    container.insertAdjacentElement('afterend', moreBtn);
  }
}

/* ---------- Filter kategori ---------- */
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    isExpanded = false; // ganti kategori → limit di-reset ke 4 lagi

    const filter = btn.dataset.filter;
    const filtered =
      filter === 'semua' ? galeriData : galeriData.filter((f) => f.kategori === filter);
    renderGaleri(filtered);
  });
});

/* ---------- Modal lightbox ---------- */
function openModal(foto) {
  modalImage.src = foto.gambar;
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
  const data = await fetchJSON('data/galeri.json');
  if (!data) {
    container.innerHTML = '<p>Dokumentasi belum bisa dimuat.</p>';
    return;
  }
  galeriData = data;
  renderGaleri(galeriData);
}

initGaleri();