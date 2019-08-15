'use strict';

//чекбокс

function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach(function (element) {
        element.addEventListener('change', function () {
            if (this.checked === true) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
            //console.log(this.checked);
        });

    });
}


//end чекбокс

//Корзина

function toggleCard() {
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

}



//end Корзина

//работа с товаром

function addCart() {
    const cards = document.querySelectorAll('.goods .card');
    const cardWrapper = document.querySelector('.cart-wrapper');
    const cardEmpty = document.getElementById('cart-empty');
    const countGoods = document.querySelector('.counter');

    cards.forEach((card) => {
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cardWrapper.appendChild(cardClone);

            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cardsCard = cardWrapper.querySelectorAll('.card');
        const cardsPrice = cardWrapper.querySelectorAll('.card-price');
        const cardTotal = document.querySelector('.cart-total span');

        countGoods.textContent = cardsCard.length;
        let sum = 0;
        countGoods.textContent = cardsCard.length;

        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
            console.log(sum);
        });
        cardTotal.textContent = sum;
        if (cardsCard.length !== 0) {
            cardEmpty.remove();
        } else {
            cardWrapper.appendChild(cardEmpty);
        }
        //console.log(cardsCard.length);
    }
}




// end  работа с товаром

//фильтр акции
function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        goods = document.getElementById('.goods'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');

 /*       
//фильтр по акции
    discountCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            if (discountCheckbox.checked) {
                if (!card.querySelector('.card-sale')) {
                    card.parentNode.style.display = 'none';
                }
            } else {
                card.parentNode.style.display = '';
            }
        });
    });
//фильтр по цене
    function filterPrice(){
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price');
            const price = parseFloat(cardPrice.textContent);
            if ( (min.value && price < min.value) || (max.value && price > max.value)){
                card.parentNode.style.display = 'none';
            }else{
                card.parentNode.style.display = '';
            }
        });
    }

    min.addEventListener('change', filterPrice);  
    max.addEventListener('change', filterPrice);
*/

//фильтр и по акции и по цене

function filterPriceStock(){
    cards.forEach((card) => {
        const cardPrice = card.querySelector('.card-price');
            const price = parseFloat(cardPrice.textContent);
            const conditionOne = discountCheckbox.checked && !card.querySelector('.card-sale');
            const conditionTwo = (min.value && price < min.value) || (max.value && price > max.value);
            if (conditionOne && conditionTwo){
                card.parentNode.style.display = 'none';
            }else if (conditionOne){
                card.parentNode.style.display = 'none';
            } else if (conditionTwo){
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
    });
}

discountCheckbox.addEventListener('click', filterPriceStock);
min.addEventListener('change', filterPriceStock);  
max.addEventListener('change', filterPriceStock);
//конец фильтра по цене и акции

    searchBtn.addEventListener('click', () =>{
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if(!searchText.test(title.textContent)){
                card.parentNode.style.display = 'none';
            }else{
                card.parentNode.style.display = '';
            }
        });
        
    });

}
//end фильтр акции

toggleCheckbox();
toggleCard();
addCart();
actionPage();