document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    burgerBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });
});