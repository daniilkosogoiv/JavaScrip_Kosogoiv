//task 2

if (!("a" in window)) { //if проверяет глобальную переменную "а", но переменная "а" объявленна локально. результат undefind
    var a = 1;
}
alert(a);




// "а" не объявленна глобально, следовательно ошибка
var b = function a(x) {
    x && a(--x);
};
alert(a);


//при создании переменной "a" ей не присваивается значение >>> вывод function a(x){return x * 2;}
function a(x) {
    return x * 2;
}
var a;
alert(a);
//аргументы функции = массив. второму элементу присвоено 10. Результат 10
function b(x, y, a) {
    arguments[2] = 10;

    alert(a);
}
b(1, 2, 3);


//метод call получил null, следовательно ссылается на глобальный объект window.a. Вывод obgect Window
function a() {
    alert(this);
}
a.call(null);



//task 1