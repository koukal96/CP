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
