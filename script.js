// SIMULACE INTERAKTIVNÍCH POČÍTADEL (PRO KM, HODINY A VÝKON)
const counters = document.querySelectorAll('.counter');
const speed = 200; // Rychlost animace

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    updateCount();
});

// INTERAKTIVNÍ MAPA (LEAFLET.JS)
// Přesné souřadnice pro Věrovany 94 (CP Hub)
const hubCoords = [49.450889, 17.311747]; 

// Inicializace mapy: [souřadnice], přiblížení
const map = L.map('map', {
    scrollWheelZoom: false, // Zakáže zoomování kolečkem
    zoomControl: false // Zakáže výchozí zoom tlačítka
}).setView(hubCoords, 14);

// Přidání tmavých mapových podkladů (CartoDB Dark Matter style)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

// Vytvoření high-tech červeného špendlíku (shodný s barvou loga)
const redDotIcon = L.divIcon({
    className: 'red-dot-pin',
    html: '<div style="background-color:#e30613; width:18px; height:18px; border-radius:50%; box-shadow:0 0 15px #e30613; border: 2px solid white;"></div>',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
});

// Přidání markeru do mapy
L.marker(hubCoords, {icon: redDotIcon}).addTo(map)
    .bindPopup('<b>CP HUB VĚROVANY 94</b>')
    .openPopup();
