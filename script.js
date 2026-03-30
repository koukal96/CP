// 1. STICKY NAVBAR EFEKT
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (header) {
        window.scrollY > 50 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    }
});

// 2. MOBILNÍ MENU
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.innerText = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.innerText = '☰';
        });
    });
}

// 3. INTERAKTIVNÍ POČÍTADLA (OPRAVENO: Procenta jen u HVO a CO2)
const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; 
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;

        const updateCounter = () => {
            frame++;
            const progress = frame / totalFrames;
            const currentValue = Math.round(target * progress);

            if (frame < totalFrames) {
                // OPRAVA: Procento přidáváme JEN pokud je cílová hodnota 100 nebo 90
                if (target === 100 || target === 90) {
                    counter.innerText = currentValue + " %";
                } else {
                    counter.innerText = currentValue.toLocaleString('cs-CZ');
                }
                requestAnimationFrame(updateCounter);
            } else {
                // FINÁLNÍ STAV po doběhnutí animace
                if (target === 100 || target === 90) {
                    counter.innerText = target.toLocaleString('cs-CZ') + " %";
                } else {
                    counter.innerText = target.toLocaleString('cs-CZ');
                }
            }
        };
        updateCounter();
    });
};

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
            animateCounters();
            hasAnimated = true;
        }
    }, { threshold: 0.3 });
    observer.observe(statsSection);
}

// 4. COOKIE LIŠTA
const acceptBtn = document.getElementById('acceptCookiesBtn');
if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
        const banner = document.getElementById('cookieBanner');
        if (banner) banner.style.display = 'none';
    });
}

// 5. ODESLÁNÍ FORMULÁŘE
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        if (!btn) return;
        
        const originalText = btn.innerText;
        btn.innerText = "Odesíláme...";
        btn.style.background = "#00e676";
        
        setTimeout(() => {
            btn.innerText = "Zpráva odeslána ✓";
            e.target.reset();
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "";
            }, 3000);
        }, 1500);
    });
}

// 6. FAQ AKORDEON (Safari-friendly)
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const answer = item.querySelector('.faq-answer');
        
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if(otherItem !== item) {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }
            }
        });

        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});
