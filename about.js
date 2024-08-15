document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal popup for contact form (if needed)
    const contactModal = document.getElementById('contact-modal');
    const contactBtns = document.querySelectorAll('.contact-btn');
    const closeBtn = document.querySelector('.close-btn');
    const contactForm = document.getElementById('contact-form');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            contactModal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Contact form submitted!');
        contactModal.style.display = 'none';
    });
});
