const menu = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.nav-email');
const menuMobile = document.querySelector('.mobile-menu');
const IconHam = document.querySelector('.menu');
/* checkout-shopping-cart */
const cart = document.querySelector('.shopping-car');
const aside = document.querySelector('.section-container');
/* defined inactive-stated */



navEmail.addEventListener('click',block);
IconHam.addEventListener('click',blockMobile);
cart.addEventListener('click',blockCart);


function block()
{
    menu.classList.toggle('inactive');
    aside.classList.add('inactive');
}


function blockMobile()
{ 
    menuMobile.classList.toggle('inactive');
     aside.classList.add('inactive');
}

function blockCart()
{
    aside.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    menu.classList.add('inactive');

}

