export default function addCart() {
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
