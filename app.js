// ========== ARTWORK DATA ==========
// Each artwork uses an inline SVG as its "painting" for a self-contained experience
const artworks = [
  {
    id:1, title:"Celestial Drift", artist:"Elara Voss", category:"Abstract",
    desc:"A meditation on cosmic movement — layered gradients evoke nebulae collapsing and reforming in slow, eternal cycles.",
    svg:`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="a1" cx="30%" cy="40%"><stop offset="0%" stop-color="#7c3aed"/><stop offset="60%" stop-color="#1e1b4b"/><stop offset="100%" stop-color="#08060e"/></radialGradient></defs><rect fill="url(#a1)" width="400" height="500"/><circle cx="120" cy="180" r="90" fill="rgba(167,139,250,0.15)"/><circle cx="280" cy="320" r="120" fill="rgba(59,130,246,0.1)"/><circle cx="200" cy="250" r="40" fill="rgba(244,114,182,0.2)"/></svg>`
  },
  {
    id:2, title:"Golden Hour", artist:"Marcus Chen", category:"Landscape",
    desc:"Warm amber light spills across rolling terrain, capturing the fleeting beauty of dusk in geometric forms.",
    svg:`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="b1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="50%" stop-color="#b45309"/><stop offset="100%" stop-color="#1c1917"/></linearGradient></defs><rect fill="url(#b1)" width="400" height="500"/><circle cx="200" cy="160" r="60" fill="rgba(251,191,36,0.4)"/><path d="M0 320 Q100 280 200 310 Q300 340 400 300 L400 500 L0 500Z" fill="rgba(120,53,15,0.5)"/><path d="M0 380 Q150 350 250 370 Q350 390 400 360 L400 500 L0 500Z" fill="rgba(41,37,36,0.7)"/></svg>`
  },
  {
    id:3, title:"Neon Requiem", artist:"Yuki Tanaka", category:"Digital",
    desc:"Electric blues and magentas pulse through a digital dreamscape — a requiem for the analog world rendered in pure light.",
    svg:`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><rect fill="#0a0a1a" width="400" height="500"/><line x1="0" y1="200" x2="400" y2="200" stroke="rgba(6,182,212,0.3)" stroke-width="1"/><line x1="0" y1="250" x2="400" y2="250" stroke="rgba(6,182,212,0.2)" stroke-width="1"/><line x1="0" y1="300" x2="400" y2="300" stroke="rgba(6,182,212,0.15)" stroke-width="1"/><line x1="100" y1="200" x2="50" y2="500" stroke="rgba(6,182,212,0.2)" stroke-width="1"/><line x1="200" y1="200" x2="200" y2="500" stroke="rgba(6,182,212,0.25)" stroke-width="1"/><line x1="300" y1="200" x2="350" y2="500" stroke="rgba(6,182,212,0.2)" stroke-width="1"/><circle cx="200" cy="120" r="50" fill="rgba(236,72,153,0.25)"/><circle cx="200" cy="120" r="25" fill="rgba(236,72,153,0.4)"/></svg>`
  },
  {
    id:4, title:"Marble Solitude", artist:"Anastasia Petrov", category:"Sculpture",
    desc:"Inspired by classical sculpture, this piece explores isolation through fragmented geometric forms carved from digital marble.",
    svg:`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="d1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d4d0dc"/><stop offset="100%" stop-color="#44403c"/></linearGradient></defs><rect fill="#1a1820" width="400" height="500"/><rect x="150" y="100" width="100" height="280" rx="8" fill="url(#d1)" opacity="0.8"/><rect x="170" y="80" width="60" height="60" rx="30" fill="url(#d1)" opacity="0.7"/><rect x="130" y="200" width="140" height="20" rx="4" fill="url(#d1)" opacity="0.5"/><rect x="175" y="380" width="50" height="40" rx="4" fill="url(#d1)" opacity="0.6"/><rect x="140" y="410" width="120" height="12" rx="3" fill="url(#d1)" opacity="0.4"/></svg>`
  },
  {
    id:5, title:"Verdant Pulse", artist:"Kofi Asante", category:"Nature",
    desc:"Life forces itself upward through layers of emerald and jade — a celebration of organic growth and resilience.",
    svg:`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="e1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#052e16"/><stop offset="100%" stop-color="#14532d"/></linearGradient></defs><rect fill="url(#e1)" width="400" height="500"/><ellipse cx="200" cy="480" rx="180" ry="60" fill="rgba(5,46,22,0.8)"/><path d="M200 450 Q200 200 180 100 Q200 120 220 100 Q200 200 200 450Z" fill="#15803d" opacity="0.9"/><path d="M200 350 Q140 300 110 250 Q160 280 200 350Z" fill="#16a34a" opacity="0.6"/><path d="M200 300 Q260 240 290 200 Q240 250 200 300Z" fill="#22c55e" opacity="0.5"/><circle cx="200" cy="90" r="30" fill="rgba(74,222,128,0.25)"/></svg>`
  },
  {
    id:6, title:"Fractured Light", artist:"Ingrid Holm", category:"Abstract",
    desc:"Prisms of color shatter across a void, each fragment holding a different emotional frequency — joy, grief, wonder.",
    svg:`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><rect fill="#0c0a15" width="400" height="500"/><polygon points="200,80 280,250 120,250" fill="rgba(124,58,237,0.4)"/><polygon points="150,200 250,200 280,350 120,350" fill="rgba(59,130,246,0.3)"/><polygon points="100,300 300,300 330,450 70,450" fill="rgba(236,72,153,0.2)"/><line x1="200" y1="80" x2="200" y2="450" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><circle cx="200" cy="250" r="8" fill="rgba(255,255,255,0.3)"/></svg>`
  },
  {
    id:7, title:"Ocean Memory", artist:"Liam Byrne", category:"Landscape",
    desc:"Deep indigo waters hold the weight of forgotten histories. The horizon is a thin thread between remembering and letting go.",
    svg:`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1e1b4b"/><stop offset="40%" stop-color="#1e3a5f"/><stop offset="100%" stop-color="#0c1929"/></linearGradient></defs><rect fill="url(#g1)" width="400" height="500"/><ellipse cx="300" cy="80" r="20" fill="rgba(199,210,254,0.15)"/><path d="M0 250 Q50 240 100 255 Q150 270 200 250 Q250 230 300 248 Q350 265 400 252 L400 500 L0 500Z" fill="rgba(30,58,138,0.4)"/><path d="M0 300 Q80 285 160 305 Q240 325 320 300 Q360 288 400 295 L400 500 L0 500Z" fill="rgba(15,23,42,0.6)"/></svg>`
  },
  {
    id:8, title:"Circuit Dreams", artist:"Priya Sharma", category:"Digital",
    desc:"Where silicon meets consciousness — intricate pathways of light suggest the nascent thoughts of an awakening machine mind.",
    svg:`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><rect fill="#0a0e1a" width="400" height="500"/><line x1="50" y1="100" x2="200" y2="100" stroke="#22d3ee" stroke-width="1.5" opacity="0.4"/><line x1="200" y1="100" x2="200" y2="250" stroke="#22d3ee" stroke-width="1.5" opacity="0.4"/><line x1="200" y1="250" x2="350" y2="250" stroke="#22d3ee" stroke-width="1.5" opacity="0.3"/><line x1="100" y1="200" x2="100" y2="400" stroke="#a78bfa" stroke-width="1" opacity="0.3"/><line x1="100" y1="400" x2="300" y2="400" stroke="#a78bfa" stroke-width="1" opacity="0.3"/><line x1="300" y1="150" x2="300" y2="400" stroke="#34d399" stroke-width="1" opacity="0.25"/><circle cx="200" cy="100" r="5" fill="#22d3ee" opacity="0.7"/><circle cx="200" cy="250" r="5" fill="#22d3ee" opacity="0.6"/><circle cx="100" cy="400" r="5" fill="#a78bfa" opacity="0.6"/><circle cx="300" cy="400" r="5" fill="#34d399" opacity="0.5"/><rect x="170" y="220" width="60" height="60" rx="4" fill="none" stroke="rgba(167,139,250,0.3)" stroke-width="1"/></svg>`
  },
  {
    id:9, title:"Crimson Aria", artist:"Sofia Morales", category:"Abstract",
    desc:"Deep reds sing from the canvas in overlapping waves — an opera of color that crescendos at the burning centre.",
    svg:`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="i1" cx="50%" cy="45%"><stop offset="0%" stop-color="#dc2626"/><stop offset="50%" stop-color="#7f1d1d"/><stop offset="100%" stop-color="#0c0a0a"/></radialGradient></defs><rect fill="url(#i1)" width="400" height="500"/><circle cx="200" cy="225" r="80" fill="rgba(239,68,68,0.2)"/><circle cx="200" cy="225" r="45" fill="rgba(252,165,165,0.15)"/><circle cx="200" cy="225" r="15" fill="rgba(255,255,255,0.1)"/></svg>`
  }
];

const categories = ['All', ...new Set(artworks.map(a => a.category))];
let currentFilter = 'All';
let currentIndex = 0;
let slideshowInterval = null;
let musicPlaying = false;
let audioCtx = null;

// ========== CONFIG & ELEMENT SDK ==========
const defaultConfig = {
  gallery_title: 'Virtual Art Gallery',
  gallery_subtitle: 'A curated journey through timeless masterpieces and contemporary visions, brought to life in an immersive digital space.',
  background_color: '#08060e',
  surface_color: 'rgba(255,255,255,0.04)',
  text_color: '#f0ecf7',
  accent_color: '#a78bfa',
  muted_color: '#9890a8',
  font_family: 'Playfair Display',
  font_size: 16
};

function applyConfig(config) {
  const t = (k) => config[k] || defaultConfig[k];
  document.getElementById('mainTitle').textContent = t('gallery_title');
  document.getElementById('mainSubtitle').textContent = t('gallery_subtitle');
  document.getElementById('galleryHeading').textContent = 'The Collection';

  const font = t('font_family');
  const baseSize = t('font_size');
  document.getElementById('mainTitle').style.fontFamily = `${font}, serif`;
  document.getElementById('galleryHeading').style.fontFamily = `${font}, serif`;
  document.getElementById('mainTitle').style.fontSize = `${baseSize * 3}px`;
  document.getElementById('mainSubtitle').style.fontSize = `${baseSize * 1.1}px`;

  // Apply colors
  document.body.style.background = t('background_color');
  document.querySelectorAll('.art-card').forEach(c => {
    c.style.background = t('surface_color');
    c.querySelector('.card-info h3').style.color = t('text_color');
    c.querySelector('.card-info p').style.color = t('muted_color');
    c.querySelector('.card-info h3').style.fontFamily = `${font}, serif`;
  });
}


// ========== RENDER FILTERS ==========
function renderFilters() {
  const bar = document.getElementById('filterBar');
  bar.innerHTML = '';
  categories.forEach(cat => {
    const chip = document.createElement('button');
    chip.className = 'filter-chip' + (cat === currentFilter ? ' active' : '');
    chip.textContent = cat;
    chip.addEventListener('click', () => { currentFilter = cat; renderFilters(); renderGrid(); });
    bar.appendChild(chip);
  });
}

// ========== RENDER GRID ==========
function renderGrid() {
  const grid = document.getElementById('artGrid');
  grid.innerHTML = '';
  const filtered = currentFilter === 'All' ? artworks : artworks.filter(a => a.category === currentFilter);
  filtered.forEach((art, i) => {
    const card = document.createElement('div');
    card.className = 'art-card';
    card.innerHTML = `<div class="card-img-wrap">${art.svg}</div><div class="card-info"><h3>${art.title}</h3><p>${art.artist}</p></div>`;
    card.addEventListener('click', () => openModal(artworks.indexOf(art)));
    grid.appendChild(card);
    // Staggered reveal
    setTimeout(() => card.classList.add('revealed'), 80 * i);
  });
}

// ========== MODAL ==========
function openModal(index) {
  currentIndex = index;
  const art = artworks[index];
  document.getElementById('modalImg').innerHTML = art.svg;
  document.getElementById('modalCat').textContent = art.category;
  document.getElementById('modalTitle').textContent = art.title;
  document.getElementById('modalArtist').textContent = art.artist;
  document.getElementById('modalDesc').textContent = art.desc;
  document.getElementById('modal').classList.add('open');
}
function closeModal() {
  document.getElementById('modal').classList.remove('open','fullscreen');
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => { if(e.target === e.currentTarget) closeModal(); });
document.getElementById('prevBtn').addEventListener('click', () => openModal((currentIndex - 1 + artworks.length) % artworks.length));
document.getElementById('nextBtn').addEventListener('click', () => openModal((currentIndex + 1) % artworks.length));
document.getElementById('fullscreenBtn').addEventListener('click', () => document.getElementById('modal').classList.toggle('fullscreen'));

// Keyboard nav
document.addEventListener('keydown', e => {
  if (!document.getElementById('modal').classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') openModal((currentIndex - 1 + artworks.length) % artworks.length);
  if (e.key === 'ArrowRight') openModal((currentIndex + 1) % artworks.length);
});

// ========== SLIDESHOW ==========
document.getElementById('slideshowBtn').addEventListener('click', function() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
    this.classList.remove('active');
    document.getElementById('slideshowIndicator').classList.remove('visible');
  } else {
    openModal(0);
    slideshowInterval = setInterval(() => openModal((currentIndex + 1) % artworks.length), 3500);
    this.classList.add('active');
    document.getElementById('slideshowIndicator').classList.add('visible');
  }
});

// ========== AMBIENT MUSIC (Web Audio API) ==========
document.getElementById('musicBtn').addEventListener('click', function() {
  const bars = this.querySelector('.music-bars');
  if (!musicPlaying) {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Create a soft ambient drone
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc1.type = 'sine'; osc1.frequency.value = 174;
    osc2.type = 'sine'; osc2.frequency.value = 220;
    gain.gain.value = 0.06;
    osc1.connect(gain); osc2.connect(gain); gain.connect(audioCtx.destination);
    osc1.start(); osc2.start();
    this._oscs = [osc1, osc2]; this._gain = gain;
    bars.classList.remove('paused');
    musicPlaying = true;
  } else {
    if (this._oscs) this._oscs.forEach(o => o.stop());
    bars.classList.add('paused');
    musicPlaying = false;
  }
});

// ========== ENTER GALLERY ==========
document.getElementById('enterBtn').addEventListener('click', () => {
  const landing = document.getElementById('landing');
  const gallery = document.getElementById('gallery');
  landing.classList.add('exit');
  setTimeout(() => {
    landing.style.display = 'none';
    gallery.classList.add('visible');
    requestAnimationFrame(() => gallery.classList.add('show'));
    renderFilters();
    renderGrid();
  }, 700);
});

// ========== LOADER ==========
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 600);
  lucide.createIcons();
});