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
