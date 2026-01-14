import './style.css';

// Scripts moved from index.html
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    window.toggleMenu = function () {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    }

    // Smooth Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // Navbar Glass Effect on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = 'rgba(5, 5, 5, 0.5)';
        }
    });

    // CV Download Simulation
    window.downloadCV = function () {
        // In a real scenario, this would link to a PDF file
        const btn = event.currentTarget;
        const originalContent = btn.innerHTML;

        btn.innerHTML = '<i class="fas fa-check"></i> Descargando...';
        btn.classList.add('text-green-400');

        setTimeout(() => {
            alert("Simulación: Aquí se descargaría el CV de Alex Abensur.pdf");
            btn.innerHTML = originalContent;
            btn.classList.remove('text-green-400');
        }, 1000);
    }
});
