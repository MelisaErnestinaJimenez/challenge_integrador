document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.querySelector('.navbar__menu');

    const toggleMenu = function () {
        navbarMenu.classList.toggle('active');
    };

    menuToggle.addEventListener('touchstart', toggleMenu);
});
