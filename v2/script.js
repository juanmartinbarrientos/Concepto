document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on load
    setTimeout(() => {
        document.querySelectorAll('.hero-v2 .element-fade-up').forEach(el => {
            el.classList.add('visible-v2');
        });
    }, 100);

    // Navbar scroll effect
    const nav = document.querySelector('.nav-v2');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled-v2');
        } else {
            nav.classList.remove('scrolled-v2');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-v2');
            }
        });
    }, observerOptions);

    // Initialise elements to animate on scroll
    // Filtering out the hero elements that we already animated
    const scrollElements = document.querySelectorAll('section .element-fade-up');
    scrollElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
