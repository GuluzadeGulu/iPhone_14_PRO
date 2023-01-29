const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.header__logo');

button.addEventListener('click', ()=>{
    menu.classList.toggle('menu-open');
    logo.classList.toggle('hide-logo');
    button.classList.toggle('exit');
})