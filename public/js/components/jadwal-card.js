/* =========================================================
   jadwal-card.js — Native Web Component
   Custom Element <jadwal-card hari="..." waktu="..." lokasi="...">
   Pakai <template> + Shadow DOM, TANPA framework/npm/build step.
   ========================================================= */

class JadwalCard extends HTMLElement {
  // Attribute yang mau di-observe perubahannya
  static get observedAttributes() {
    return ['hari', 'waktu', 'lokasi'];
  }

  connectedCallback() {
    // Ambil <template> dari HTML, clone isinya ke shadow DOM
    const template = document.getElementById('jadwal-card-template');
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this._render();
  }

  attributeChangedCallback() {
    // Kalau attribute berubah setelah element ke-mount, render ulang
    if (this.shadowRoot) this._render();
  }

  _render() {
    const shadow = this.shadowRoot;
    shadow.querySelector('h3').textContent = this.getAttribute('hari') ?? '';
    shadow.querySelector('.waktu').textContent = `🕒 ${this.getAttribute('waktu') ?? ''}`;
    shadow.querySelector('.lokasi').textContent = `📍 ${this.getAttribute('lokasi') ?? ''}`;
  }
}

// Daftarkan custom element — dari sini <jadwal-card> bisa dipakai di HTML manapun
customElements.define('jadwal-card', JadwalCard);