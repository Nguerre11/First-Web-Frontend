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
//main-container-products
// arr
const productList =[];
productList.push({
    name:'Bike',
    price:120,
    image:'Product/Bike.jpg',
});
productList.push({
    name:'TV',
    price:100,
    image:'Product/Bike.jpg',
});
productList.push({
    name:'Tablet',
    price:70,
    image:'Product/Bike.jpg',
});
productList.push({
    name:'Bike',
    price:120,
    image:'Product/Bike.jpg',
});
productList.push({
    name:'TV',
    price:100,
    image:'Product/Bike.jpg',
});
productList.push({
    name:'Tablet',
    price:70,
    image:'Product/Bike.jpg',
});
productList.push({
    name:'Bike',
    price:120,
    image:'Product/Bike.jpg',
});
productList.push({
    name:'TV',
    price:100,
    image:'Product/Bike.jpg',
});
productList.push({
    name:'Tablet',
    price:70,
    image:'Product/Bike.jpg',
});
//layout-for-of
function renderProducts(arr)
{
    for(product of arr){
        const cardsContainer=document.querySelector('.cards-container');
        const productCard = document.createElement('div');
        productCard.classList.add('product-card-order');
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const informationDiv =document.createElement('div');
        informationDiv.classList.add('buy-information');
        const priceParagraph=document.createElement('p');
        const nameParagraph=document.createElement('p');
    priceParagraph.innerText= '$'+ product.price;
        nameParagraph.innerText = product.name;
        informationDiv.append(priceParagraph,nameParagraph);
    
        const figure =document.createElement('figure');
        figure.classList.add('buy-Logo');
        const LogoImage =document.createElement('img');
        LogoImage.setAttribute('src', './Icons/Platzi_YardSale_Icons/bt_add_to_cart.svg' );
        figure.append(LogoImage);
        productCard.append(productImg,informationDiv,figure);
        cardsContainer.appendChild(productCard);
    
        
    
    
    
    }    

}
renderProducts(productList);

