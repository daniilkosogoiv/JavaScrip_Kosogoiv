//task 1

function number(userNum) {
    let enter = [];
    let ccm = ['сотни: ', 'десятки: ', 'единицы: '];

    if (userNum >= 0 && userNum <= 999) {
        userNum_conv = userNum.toString();
        for (let cnt = userNum_conv.length - 1; cnt >= 0; cnt--) {
            enter += ccm[cnt] + userNum_conv[cnt] + '\n';
        }
        return enter;
    } else {
        return 'Please enter correct number :)';
    }
}

console.log(number(prompt('Enter your number')))






//task 2
function Item(product, image, price, quantity, discount = 0) {
    this.product = product;
    this.image = `../img/${image}.png`;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.finalPrice = function() {
        if (this.discount != 0) {
            return this.price - this.price * this.discount / 100;
        } else {
            return this.price;
        }
    }
    this.showMyChart = function() {
        return `${this.product} (количество: ${this.quantity})`;
    }
}

let shoppingCart = []

shoppingCart.push(
    new Item('product_name_1', 'product_imge_1', 95, 2)
);
shoppingCart.push(
    new Item('product_name_2', 'product_imge_2', 17, 5, 10)
);
shoppingCart.push(
    new Item('product_name_3', 'product_imge_3', 17.5, 6)
);
shoppingCart.push(
    new Item('product_name_4', 'product_imge_4', 32, 1)
);
shoppingCart.push(
    new Item('product_name_5', 'product_imge_5', 22, 10, 25)
);

// console.log(shoppingCart)

function finalChart(shoppingCart) {
    console.log('Ваш заказ: ')
    shoppingCart.forEach(val => {
        console.log(`${val.showMyChart()}.
    Цена с учетом скидки: ${val.finalPrice()}.
    Стоимость позиции: ${val.quantity * val.finalPrice()}`);
    });
}
finalChart(shoppingCart);


function finalCost(shoppingCart) {
    return shoppingCart.reduce(function(acc, shoppingCart) {
        return acc + (shoppingCart.finalPrice() * shoppingCart.quantity)
    }, 0)
};
console.log(('Конечная стоимость заказа: ' + finalCost(shoppingCart)).toUpperCase());