'use strict';

//1
/*
//Написать функцию с названием searchArrayWord и ищет слово в массиве. Она принимает 2 параметра - 
//1) Слово которое нужно найти
//2) Массив в котором находятся элементы со словами. Например ['Кот', 'Собака', 'Жираф' ]
//Функция должна вернуть true или false
*/

function searchArrayWord(word, array) {
    for(let i = 0; i < array.length; i++) {
        if(array.indexOf(word) != -1) {
            return true;
        }
        return false;
    } 
}
let animals = ['Кот', 'Собака', 'Жираф'];
console.log(searchArrayWord('Жираф', animals));



//2 Определить среднее арифмитическое чисел из массива.


var arr = [1, 2, 3, 7, 6, 9];
var summ = 0;
for(var i = 0; i<arr.length; i++) {
summ += arr[i];
};

var result=summ/arr.length;
console.log(result);


//3 Перевернуть элементы массива задом наперед. Не используя reverse(мы еще не учили его) var arr2 = [1, 3, 5, 6, 7, 9];

var arr2 = [1, 3, 5, 6, 7, 9];

for (var i = 0; i < arr2.length / 2; i++) {  
  
  var index = arr2[i]; 
  var x = arr2[arr2.length - i - 1];
  arr2[arr2.length - i - 1] = index;
  arr2[i] = x;
  console.log(arr2);
}

/*
//С помощью reverse
var arr2 = [1, 3, 5, 6, 7, 9];
var reverse=[];
for (var i = arr2.length-1; i >= 0; i-- ) {
    reverse.push(arr2[i])
    }
    arr2 = reverse
    console.log(arr2);
*/


//4 Дан объект {html:'HTML', css: 'CSS', js: 'ECMA'}
//Нужно получить массив ключей этого объекта и отобразить в консоли.

var obj = {html:'HTML', css: 'CSS', js: 'ECMA'};
console.log(Object.keys(obj)); // консоль: ['0', '1', '2']

/*5. Создайте объект описывающий Заказ на сайте.
Создать можно любым из способов - даже просто написать консрукцию var obj = {...}. 
Главное учесть, что единицы измерения обычно не записываются в объект, а 
записываются просто цифры переведенные к общей единице измерения(например кг переводятся в граммы).

В нем должно храниться:
- Имя покупателя
- Телефон покупателя
- Адрес покупателя
- Общая сумма заказа
- Общий вес заказа
- Купленные товары:
1 товар - Чашка \ 100 грн. \ вес 200 грамм
2 товар - Ложка \ 30 грн. \ вес 100 грамм
3 товар - Чайник \ 550 грн. \ вес 2 кг
4 товар - Кружка \ 150 грн \ вес 400 грамм
 */

var myObj = {
    'name' : 'Lilia',
    'phone' : '668779898',
    'adress' : 'Poltava',
    'total cost' : '+380',
    'total weight' : '2700',
    'buying goods' : [
        {
            'type' : 'Чашка',
            'price' : '100',
            'weight' : '200'
        },
        {
            'type' : 'Ложка',
            'price' : '30',
            'weight' : '100'
        },
        {
            'type' : 'Чайник',
            'price' : '550',
            'weight' : '2000'
        },
        {
            'type' : 'Кружка',
            'price' : '150',
            'weight' : '400'
        }
    ] 
}
console.log(myObj);
