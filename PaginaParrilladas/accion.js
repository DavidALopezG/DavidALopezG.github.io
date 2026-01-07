// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Animaciones al hacer scroll
const elements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
