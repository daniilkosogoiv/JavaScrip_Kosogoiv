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
function object(product, price, quantity, discount = 0) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.endprice = function() {
        if (this.discount != 0) {
            return this.price - this.price * this.discount / 100;
        } else {
            return this.price;
        }
    }
    this.number = function() {
        return `${this.product} (Quantity: ${this.quantity})`;
    }
}

let shopProduct = []

shopProduct.push(
    new object('Apple', 2, prompt("enter quantity Apple"))
);
shopProduct.push(
    new object('Orange', 1, prompt("enter quantity Orange"))
);
shopProduct.push(
    new object('Cherry', 13, prompt("enter quantity Cherry"))
);
shopProduct.push(
    new object('banana', 99, prompt("enter quantity banana"))
);
shopProduct.push(
    new object('Avacado', 28, prompt("enter quantity Avacado"))
);


function finalChart(shopProduct) {
    console.log('You order: ')
    shopProduct.forEach(val => {
        console.log(`${val.number()}.
        Discounted price: ${val.endprice()}.
    Cost: ${val.quantity * val.endprice()}`);
    });
}
finalChart(shopProduct);


function finalCost(shopProduct) {
    return shopProduct.reduce(function(acc, shopProduct) {
        return acc + (shopProduct.endprice() * shopProduct.quantity)
    }, 0)
};
console.log(('final price: ' + finalCost(shopProduct)).toUpperCase());