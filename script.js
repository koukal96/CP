const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const inc = target / 100;
    const update = () => {
        if(count < target) {
            count += inc;
            counter.innerText = Math.ceil(count).toLocaleString();
            setTimeout(update, 20);
        } else { counter.innerText = target.toLocaleString(); }
    };
    update();
});
