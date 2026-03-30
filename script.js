// Mapa
const coords = [49.450889, 17.311747];
const map = L.map('map', {scrollWheelZoom: false, zoomControl: false}).setView(coords, 14);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);
const icon = L.divIcon({className: 'status-dot'});
L.marker(coords, {icon}).addTo(map);

// Interaktivní pohyb karet (tilt efekt simulace)
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Automatický Glitch efekt pro H1
const mainTitle = document.querySelector('.glitch-text');
setInterval(() => {
    mainTitle.style.opacity = Math.random() > 0.95 ? '0.5' : '1';
}, 100);
// 1. Logika pro změnu vzhledu navigace při scrollování
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Mapa - Nastavení pro Věrovany 94
const coords = [49.450889, 17.311747];
const map = L.map('map', {scrollWheelZoom: false}).setView(coords, 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

const marker = L.marker(coords).addTo(map);
marker.bindPopup("<b>Control Point s.r.o.</b><br>Věrovany 94").openPopup();
