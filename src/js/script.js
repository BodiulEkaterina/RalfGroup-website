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

// Функционал фильтрации проектов
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.tab-btn');
    const projects = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс к нажатой кнопке
            button.classList.add('active');
            
            // Получаем категорию для фильтрации
            const filterCategory = button.getAttribute('data-category');
            
            // Фильтруем проекты
            projects.forEach(project => {
                const projectCategory = project.getAttribute('data-category');
                
                if (filterCategory === 'all' || filterCategory === projectCategory) {
                    project.style.display = 'block';
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    project.style.opacity = '0';
                    project.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Добавьте эту строку в обработчик DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    initProjectFilter(); // Добавьте эту строку вместо initProjectTabs()
});