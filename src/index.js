'use strict';

//чекбокс
const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach(function(element) {
    element.addEventListener('change', function(){
        if (this.checked === true){
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
        console.log(this.checked);
    });
    
});

//end чекбокс

//Корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});

//end Корзина

//работа с товаром
const cards = document.querySelectorAll('.goods .card');
const cardWrapper = document.querySelector('.cart-wrapper');
const cardEmpty = document.getElementById('cart-empty'); 
const countGoods = document.querySelector('.counter');

cards.forEach((card) => {
 const btn = card.querySelector('button');
 btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cardWrapper.appendChild(cardClone);
        cardEmpty.remove();
        showData();
 });
});

function showData() {
    const cardsCard = cardWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCard.length;
    console.log(cardsCard.length);
}
// end  работа с товаром