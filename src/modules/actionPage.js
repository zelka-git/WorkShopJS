import filter from './filter';
export default function actionPage() {
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
/*
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
*/

discountCheckbox.addEventListener('click', filter);
min.addEventListener('change', filter);  
max.addEventListener('change', filter);
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
