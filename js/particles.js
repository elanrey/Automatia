function initializeParticles() {
    const stars = document.querySelectorAll('.hero-particles .star');

    stars.forEach(star => {
        // Set initial random position and size
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.opacity = Math.random();

        // Animate
        animateStar(star);
    });
}

function animateStar(star) {
    const duration = Math.random() * 5 + 5; // 5 to 10 seconds
    const delay = Math.random() * 5; // 0 to 5 seconds delay

    star.animate([
        { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: Math.random() },
        { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: Math.random() }
    ], {
        duration: duration * 1000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out',
        delay: delay * 1000
    });
}
