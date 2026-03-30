// 1. Transparent Navbar on Scroll
window.onscroll = function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

// 2. Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const update = () => {
        const count = +counter.innerText;
        const speed = target / 100;
        if (count < target) {
            counter.innerText = Math.ceil(count + speed);
            setTimeout(update, 20);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    update();
});

// 3. Terminal Text Loop
const terminalLines = [
    "> Inicializuji energetickou síť...",
    "> Testuji transformátory 200kW...",
    "> Synchronizace s GRID v94...",
    "> Připravuji sloty pro e-tahače..."
];
let lineIdx = 0;
setInterval(() => {
    document.getElementById('termText').innerText = terminalLines[lineIdx];
    lineIdx = (lineIdx + 1) % terminalLines.length;
}, 3000);

// 4. Cookies close
function closeCookies() {
    document.getElementById('cookieBar').style.display = 'none';
}
