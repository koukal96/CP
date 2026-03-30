// Mobilní menu
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// FAQ Akordeon (Funguje v Safari i Chrome)
document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const item = trigger.parentElement;
        item.classList.toggle('active');
        
        const icon = trigger.querySelector('.icon');
        icon.innerText = item.classList.contains('active') ? '-' : '+';
    });
});

// Počítadla
const counters = document.querySelectorAll('.num');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/\s/g, '');
        const inc = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc).toLocaleString('cs-CZ');
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target.toLocaleString('cs-CZ');
        }
    };
    
    // Spustit při scrollu (zjednodušeno)
    updateCount();
});
