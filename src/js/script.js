// Плавная прокрутка для навигации
document.querySelectorAll('nav a, .hero-content a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            if (window.innerWidth <= 768) {
                document.getElementById('navMenu').classList.remove('active');
                document.getElementById('burgerMenu').classList.remove('active');
            }
        } else {
            window.location.href = targetId;
        }
    });
});

// Обработка формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Бургер меню
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

burgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Закрытие меню при клике вне его области
document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-menu') && !e.target.closest('.burger-menu') && 
        navMenu.classList.contains('active') && window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Закрытие меню при изменении размера окна
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Класс для body при загрузке для плавной анимации
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});