// --- 1. Mobilní Menu (Hamburger) ---
// Vybere elementy
const mobileMenu = document.querySelector('#mobileMenu');
const navLinks = document.querySelector('#navLinks');

// Přidá událost kliknutí
mobileMenu.addEventListener('click', () => {
    // Přepne třídu pro zobrazení/skrytí menu na mobilu
    navLinks.classList.toggle('nav-active');
    
    // Animace hamburger menu (křížek)
    mobileMenu.classList.toggle('toggle');
});


// --- 2. Interaktivní Mapa (Leaflet.js) ---
// Přesné souřadnice pro Věrovany 94 (Sídlo společnosti)
const verovanyCoords = [49.450889, 17.311747]; 

// Inicializace mapy: [souřadnice], přiblížení
const map = L.map('map', {
    scrollWheelZoom: false // Zakáže zoomování kolečkem myši při scrollování stránky
}).setView(verovanyCoords, 14);

// Přidání moderních a čistých mapových podkladů (CartoDB Light)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Vytvoření vlastního červeného špendlíku (shodný s barvou loga)
const customIcon = L.divIcon({
    className: 'custom-pin', 
    html: '<div style="background-color:#e30613; width:20px; height:20px; border-radius:50%; border:3px solid white; box-shadow:0 0 10px rgba(0,0,0,0.3);"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

// Přidání markeru (špendlíku) do mapy
L.marker(verovanyCoords, {icon: customIcon}).addTo(map)
    .bindPopup('<b>Control Point s.r.o.</b><br>Sídlo společnosti Věrovany.')
    .openPopup();
