const container = document.querySelector('#container');

let shoppingCart = []
let emptyBasket = '<p>Корзина пуста</p>'

function Item(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity
}

shoppingCart.push(
    new Item('товар_1', 19, 121)
);
shoppingCart.push(
    new Item('товар_2', 100, 1)
);
shoppingCart.push(
    new Item('товар_3', 21, 5)
);
shoppingCart.push(
    new Item('товар_4', 17, 17)
);



// выводим перечень товаров в корзине, если корзина не пуста
if (shoppingCart == 0) {
    container.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyBasket}</div>`);
} else {
    for (const iterator of shoppingCart) {
        container.insertAdjacentHTML('beforeend',
            `<div class="prod_item">
        <span>Продукт - ${iterator.product}</span> 
        <span>Цена за 1 шт. - ${iterator.price} руб</span>
        <span>Количество - ${iterator.quantity}</span>

        </div>`);
    }
}

// возвращает итоговую сумму
function finalChart(shoppingCart) {
    return shoppingCart.reduce(function(acc, shoppingCart) {
        return acc + shoppingCart.quantity
    }, 0)
};

// возвращает итоговое количество
function finalCost(shoppingCart) {
    return shoppingCart.reduce(function(acc, shoppingCart) {
        return acc + (shoppingCart.price * shoppingCart.quantity)
    }, 0)
};

// выводим итоговое количество и сумму
if (shoppingCart != 0) {
    const totalPrice = container.insertAdjacentHTML('beforeend',
        `<hr><div class="prod_item total">В корзине: ${finalChart(shoppingCart)} товаров на сумму 
    ${finalCost(shoppingCart)} рублей</div>`);
}