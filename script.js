// Mobilní menu přepínání
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Animace ikonky
    menuBtn.classList.toggle('open');
});

// Zavření menu po kliku
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});

// Počítadla statistik
const counters = document.querySelectorAll('.num');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/\s/g, '');
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc).toLocaleString('cs-CZ');
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString('cs-CZ');
            }
        };
        updateCount();
    });
};

// Detekce scrollu pro aktivaci počítadel
let animated = false;
window.addEventListener('scroll', () => {
    const statsPos = document.querySelector('.stats-bar').getBoundingClientRect().top;
    if (statsPos < window.innerHeight && !animated) {
        startCounters();
        animated = true;
    }
});

// Safari FAQ fix (volitelné, details/summary funguje nativně, ale tohle přidá hladkost)
document.querySelectorAll('details').forEach((el) => {
  el.querySelector('summary').addEventListener('click', (e) => {
    // Pokud chcete mít otevřený jen jeden dotaz najednou:
    // document.querySelectorAll('details').forEach(d => { if(d !== el) d.removeAttribute('open'); });
  });
});
