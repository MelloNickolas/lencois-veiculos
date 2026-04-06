/* ============================================================
   LENÇÓIS VEÍCULOS — utils.js
   ============================================================ */

function formatPrice(v) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(v);
}
function formatKm(v) {
  return new Intl.NumberFormat('pt-BR').format(v) + ' km';
}
async function loadVehicles() {
  try {
    const r = await fetch('data/veiculos.json');
    if (!r.ok) throw new Error();
    return await r.json();
  } catch { return []; }
}
function getUrlParams() {
  const p = new URLSearchParams(window.location.search);
  return { id: p.get('id'), precoMin: p.get('precoMin'), precoMax: p.get('precoMax'), anoMin: p.get('anoMin'), anoMax: p.get('anoMax'), tipo: p.get('tipo'), busca: p.get('busca') };
}

/* Render de linha (estilo editorial) para a home */
function renderVehicleRow(v, index) {
  const img = v.galeria?.length
    ? `<img src="${v.galeria[0]}" alt="${v.nome}" loading="lazy" onerror="this.parentElement.style.background='var(--bg4)'">`
    : '';
  const idx = String(index + 1).padStart(2, '0');
  return `
  <article class="vehicle-row fade-up" onclick="window.location.href='veiculo.html?id=${v.id}'">
    <div class="row-index">${idx}.</div>
    <div class="row-img">${img}</div>
    <div class="row-info">
      <div class="row-brand">${v.marca} · ${v.ano}</div>
      <h3 class="row-name">${v.nome}</h3>
      <div class="row-specs">
        <span class="row-spec">${v.cambio}</span>
        <span class="row-spec">${v.combustivel}</span>
        <span class="row-spec">${formatKm(v.km)}</span>
        <span class="row-spec">${v.tipo}</span>
      </div>
    </div>
    <div class="row-right">
      <div class="row-price">${formatPrice(v.preco)}</div>
      <span class="row-cta">Ver detalhes <span class="row-arrow">↗</span></span>
    </div>
  </article>`;
}

/* Render card compacto para página carros (reutiliza row mas em grid) */
function renderVehicleCard(v, index) {
  return renderVehicleRow(v, index);
}

function initScrollReveal() {
  const els = document.querySelectorAll('.fade-up, .fade-left');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}
function initHeader() {
  const h = document.getElementById('header');
  if (!h) return;
  window.addEventListener('scroll', () => h.classList.toggle('scrolled', window.scrollY > 30), { passive: true });
}
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const mob = document.querySelector('.nav-mobile');
  if (!toggle || !mob) return;
  toggle.addEventListener('click', () => { toggle.classList.toggle('open'); mob.classList.toggle('open'); });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { toggle.classList.remove('open'); mob.classList.remove('open'); }));
}
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === path || (path === '' && a.getAttribute('href') === 'index.html'));
  });
}
document.addEventListener('DOMContentLoaded', () => { initHeader(); initMobileMenu(); setActiveNav(); initScrollReveal(); });
