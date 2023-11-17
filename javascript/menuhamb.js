document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.querySelector('.navbar__menu');

    // Función para manejar clic y eventos táctiles
    const toggleMenu = function () {
        navbarMenu.classList.toggle('active');
    };

    // Agrega el evento de clic
    menuToggle.addEventListener('click', toggleMenu);

    // Agrega el evento táctil
    menuToggle.addEventListener('touchstart', toggleMenu);
});
