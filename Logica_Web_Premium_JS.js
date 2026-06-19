// Inicialización del Carrusel Swiper const swiper = new Swiper('.mySwiper', { loop: true,
autoplay: { delay: 3000, }, effect: 'fade', }); // Interacción básica de navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click',
function(e) { e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth' }); }); });