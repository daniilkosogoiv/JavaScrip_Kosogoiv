//ls 1

// task 1
let celsius = prompt('Температура в градусах по Цельсию ', ' ');
let messageCel;
let messageFar;
messageCel = ' градусов по Цельсию = ';
messageFar = ' градусов по Фаренгейту'
farengeit = celsius * 1.8 + 32;
alert(celsius + messageCel + farengeit + messageFar);



// task 2 
let admin;
let name;

admin = "Василий";
name = admin;
alert(name); //Не могу разобраться из-за чего зачеркивается "name"


//task 3 
//1000+"108"=1000108




//ls 2
//task 1
var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // 2 т.к "++" перед переменной означают прибавление +1
d = b++;
alert(d); // 1 т.к "++" после переменной означают прибавление единицы, но выводим предыдущее состояние переменной 
c = (2 + ++a);
alert(c); // 5 т.к в первом примере переменная "а" у нас стала = 2, прибавили с помощью "++" еще 1 и потом еще +2, отсюда и = 5
d = (2 + b++);
alert(d); // 4 т.к переменная "b" у нас равнялась во втором примере 2, но выводили мы предыдущее состояние (1), то сейчас мы прибавили еще "1" и предшествующее состояние = 2. 2+2=4
alert(a); // 3 исход действий над переменной
alert(b); // 3 исход действий над переменной

//task 2
var a = 2;
var x = 1 + (a *= 2); // а *=2  >>> a = a * 2


//task 3

var a = 1;
var b = 2;
if (a > 0 && b > 0) {
    x = a - b;
    alert(x);
} else if (a < 0 && b < 0) {
    x = a * b;
    alert(x);
} else if (a > 0 && b < 0 || a < 0 && b > 0) {
    x = a + b;
    alert(x);
}

//task 4
a = +prompt('Укажите число от 1 до 15');
switch (a) {
    case 1:
        alert('Число 1');
        break;
    case 2:
        alert('Число 2');
        break;
    case 3:
        alert('Число 3');
        break;
    case 4:
        alert('Число 4');
        break;
    case 5:
        alert('Число 5');
        break;
    case 6:
        alert('Число 6');
        break;
    case 7:
        alert('Число 7');
        break;
    case 8:
        alert('Число 8');
        break;
    case 9:
        alert('Число 9');
        break;
    case 10:
        alert('Число 10');
        break;
    case 11:
        alert('Число 11');
        break;
    case 12:
        alert('Число 12');
        break;
    case 13:
        alert('Число 13');
        break;
    case 14:
        alert('Число 14');
        break;
    case 15:
        alert('Число 15');
        break;
}


//task 5
var a = 3;
var b = 4;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a + b;
}


//task 6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
    }
}