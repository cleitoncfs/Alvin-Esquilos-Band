// JavaScript para controlar o menu hambúrguer
document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const menuHamburgerMenu = document.querySelector('.menu-hamburger-menu');

    menuHamburger.addEventListener('click', () => {
        menuHamburger.classList.toggle('active');
        menuHamburgerMenu.classList.toggle('active');
    });
});
