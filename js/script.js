// lesson 3


//task 1
let num = 0;
while (num <= 100) {
    let check = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(num);
    num++;
}

//task 2


const basketItems = ['Фен', 'Мышка', 'Батарейка', 'Клавиатура'];
const ItemsCost = [
    ['Фен', 1100],
    ['Мышка', 1000],
    ['Клавиатура', 1500],
    ['Батарейка', 100]
];



const getItemPrice = (item, array) => {
    const items = [];
    const costs = [];

    for (let i = 0; i < array.length; i++) {
        items.push(array[i][0]);
        costs.push(array[i][1]);
    }

    return costs[items.indexOf(item)];
};

const countBasketPrice = (basketArr, costArr) => {
    let totalCost = 0;
    for (let i = 0; i < basketArr.length; i++) {

        totalCost += getItemPrice(basketArr[i], costArr);
    }
    return totalCost;
};
console.log('Массив корзины: ' + basketItems);
console.log('Массив стоимости каждого товара: ' + ItemsCost);
console.log('Вывод полной стоимости корзины: ' + countBasketPrice(basketItems, ItemsCost));