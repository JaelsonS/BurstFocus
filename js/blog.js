const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', function() {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            menu.style.display = 'none';
        }
    });
});
window.addEventListener('scroll', function() {
    const cabecalho = document.querySelector('.cabecalho');
    if (window.scrollY > 50) {
        cabecalho.style.padding = '10px 0';
        cabecalho.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        cabecalho.style.padding = '15px 0';
        cabecalho.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});
window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});