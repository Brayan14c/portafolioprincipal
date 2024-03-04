document.querySelector('.toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});


const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});
