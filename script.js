// Initialize AOS (Animate On Scroll) for smooth animations
AOS.init({
    duration: 1000, // Animation duration in ms
    once: true,     // Animate only once per element
});

// Initialize Swiper for the testimonial slider
const swiper = new Swiper('.testimonials', {
    loop: true, // Infinite loop
    autoplay: {
        delay: 5000, // Auto-slide every 5 seconds
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 20,
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Handle inquiry form submission (basic client-side handling; integrate with backend for real
