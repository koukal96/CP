// 1. STICKY NAVBAR EFEKT
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. MOBILNÍ MENU
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.innerText = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Zavření menu po kliknutí na odkaz (na mobilu)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.innerText = '☰';
    });
});

// 3. INTERAKTIVNÍ POČÍTADLA (Spustí se až když k nim doscrolluješ)
const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 sekundy animace
        const increment = target / (duration / 16); // 60 FPS
        let currentCount = 0;

        const updateCounter = () => {
            currentCount += increment;
            if (currentCount < target) {
                counter.innerText = Math.ceil(currentCount).toLocaleString('cs-CZ');
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString('cs-CZ');
            }
        };
        updateCounter();
    });
};

// Intersection Observer zjistí, že je sekce vidět na obrazovce
const statsSection = document.querySelector('.stats-section');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated) {
        animateCounters();
        hasAnimated = true;
    }
}, { threshold: 0.5 });

if (statsSection) {
    observer.observe(statsSection);
}

// 4. COOKIE LIŠTA
function acceptCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
}

// 5. ZABRÁNĚNÍ ODESLÁNÍ FORMULÁŘE (Zatím jen efekt)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = "Odesíláme...";
    btn.style.background = "#00e676";
    btn.style.color = "#111";
    
    setTimeout(() => {
        btn.innerText = "Zpráva odeslána ✓";
        e.target.reset();
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "";
            btn.style.color = "";
        }, 3000);
    }, 1500);
});
