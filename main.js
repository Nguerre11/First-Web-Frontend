const menu = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.nav-email');
const menuMobile = document.querySelector('.mobile-menu')
const IconHam = document.querySelector('.menu')
navEmail.addEventListener('click',block);
IconHam.addEventListener('click',blocks);
function block()
{
    menu.classList.toggle('inactive');
}

function blocks()
{
    menuMobile.classList.toggle('inactive');
}