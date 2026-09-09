/* =========================================================
   agenda.js — Render Jadwal (F-05) & Agenda (F-06)
   ⚠️ jadwal.json & agenda.json sekarang dibungkus { "items": [...] }
   ========================================================= */
import { fetchJSON } from './main.js';

/* ---------- F-05: Render Jadwal Latihan (pakai <jadwal-card> Web Component) ---------- */
async function renderJadwal() {
  const container = document.getElementById('jadwalContainer');
  const data = await fetchJSON('data/jadwal.json');
  if (!data || !data.items) {
    container.innerHTML = '<p>Jadwal belum bisa dimuat.</p>';
    return;
  }

  container.innerHTML = '';
  data.items.forEach((j) => {
    const card = document.createElement('jadwal-card');
    card.setAttribute('hari', j.hari);
    card.setAttribute('waktu', j.waktu);
    card.setAttribute('lokasi', j.lokasi);
    container.appendChild(card);
  });
}

/* ---------- F-06: Render Agenda Kegiatan (sort tanggal terdekat dulu) ---------- */
async function renderAgenda() {
  const container = document.getElementById('agendaContainer');
  const data = await fetchJSON('data/agenda.json');
  if (!data || !data.items) {
    container.innerHTML = '<p>Agenda belum bisa dimuat.</p>';
    return;
  }

  const sorted = [...data.items].sort((a, b) => new Date(a.date) - new Date(b.date));

  container.innerHTML = sorted
    .map((a) => {
      const tanggal = new Date(a.date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      return `
        <li class="agenda__item">
          <strong>${tanggal}</strong>
          <span>${a.title} — ${a.location}</span>
        </li>`;
    })
    .join('');
}

renderJadwal();
renderAgenda();