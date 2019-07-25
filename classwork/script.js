'use strict';
/*
console.log(Math.random() );//случайное число от 0 до 1

function getRandom(min, mix){
    return Math.random()*(max-min)+min;
}

console.log( getRandom(10, 20) );*/

//Спецсимволы

alert('Привет\nМир!');
console.log('\tПривет\nМир!\u003E');

//Экранирование спецсимволов
console.log('\tПрив\'ет\nМ\\ир!\u003E');

//Методы и свойства

//Доступ к символам

let text='Привет Мир';//вмешатся в текст нельзя,только перезаписать!!!!!

console.log( text.charAt(0) );//П вернется пустая строка

console.log( text[0]) ;//П undefined []-делит текст на массив

text=text[0]+text[4]+text[7];//Пем 

//toLowerCase()-делает символы в маленьком регистре
let rnt='';
for(let i=0; i<text.length; i++){//Выводит часть текста //ПЕМ
    if(i==2){
        rnt+=text[i].toLowerCase();
    }else{
        rnt+=text[i];
    }
}
text=rnt;
console.log(text);

//Поиск подстроки

let str='Apple Iphone';//Нa каком символе начинается слово Iphone (let str) -длина строки

console.log( str.indexOf('Iphone') );//6

console.log( str.indexOf('iphone') );//Регистр букв учитывается вернет -1

console.log( str.indexOf('Iph',9) );//-1

//LastIndexOf() - ищет с конца строки

//Метод взятия от строки

//substring(start,end*)

console.log( str.substring(8) );

console.log( str.substring(8,10) );//Не включает последний символ

//substr (start,symbol_num)

console.log( str.substr(8,4) );

//slice (start, end*)

console.log( str.slice(8,10) );

console.log( str.slice(-2,10) );// преобразует -2 в 0

console.log( str.substring(4,-1) );//r5tart стал end и наоборот

//В slice отрицаткльное значение отсчитывается от конца строки

console.log( str.slice(-2) );

console.log( str.slice(1, -1) );//не включает первый и последний символ

console.log( String.fromCharCode(1072) );//Задает функции //a таблица ЮНИКОДА!!!!!!

console.log( 'яблоко'.charCodeAt(0) );//1103 или я

//Объекты

let obj = new Object();//хранится объект

let obj2={};//пустой объект



let person={};

person.name='Иван';

console.log( person.name );//Иван

person.age=20;//возраст

console.log( person.name + '' + person.age );// Иван _ 35

delete person.age;//удаление возраста

if('name' in person){
    console.log('name есть');
}

if(person.age != undefined){//можно обратится к любой ячейке,даже к не существующей, вернет undefined
console.log('age нет');
}

person={
    'name':'Иван',//ключ+значение.Писать обязательно в кавычках без названия с использование чисел в начале
    'age':35
};
/*
//2вариант обращения внутри объекта
person={
    'name':'Иван',
    'age':35,
    'last name':'Иванов',
    'favorit music':'rock'
};*/

console.log ( person['last name'] );

let fm='favorit music';

console.log(person[fm] );//rock

//Многомерные объекты(объект в объекте)

let user={
'name':'Анна',
'height':180,
'size':{//внутри еще один объект
    'top':90,
    'middle':60,
    'bottom':90
},
'weight':70
};

console.log(user.size.middle);//60 1 вариант

console.log(user['size']['middle'] );//60 2 вариант

//Перебор свойств объекта
let counter=0;

for(let key in user){//перебор ключей на уровне user(увидит что есть size,но в него он не зайдет)
    console.log('Ключ: '+key+'значение:'+user[key] );

    if(typeof(user[key])=='object'){
        for(let key2 in user[key]){
            console.log('Ключ:'+key +'значение:'+user[key][key2]);
        }
    }

}
//В каком порядке перебираются свойства?//упорядочиваются по возрастанию

/*
'7'
'38'
'1'
*/

let admin=user;//копирование объекта

console.log( admin.name);//Анна

admin.name='Петр';

console.log( user.name);//Петр

//Клонирование объектов посмотреть по призентации и на сайте js!!!!!!!

//Массивы-тот же самый о\бъукт у которого нет ключей

//Массивы с числовыми индексами

let mass=[];

mass=['Яблоко','Груша','Апельсин'];

//Отсчет элементов начинается с 0

console.log( mass[1] );//Груша

mass[2]='Банан';

console.log( mass.length);//3

console.log( mass );//сколько элементов хранится в массиве!!!!!

let mass2=[1,'Текст',{'name':'Василий'},true];

//Метод pop-удаляет последний элемент из массива//выполняются очень быстро

mass.pop();//удаляем банан

//Метод push -добавляет элемент в конец массива//выполняются очень быстро

mass.push('Апельсин');

//Метод shift-удаляет из начала массива//выполняются очень медлено

mass.shift();

//Метод unshift-добавляет в начало массива//выполняются очень медлено

mass.unshift('Киви');

mass.unshift('Слива','Малина');//все что работает с массивом не работает на объект

let a=[];

a[0]='текст';
a[6]='текст';
//текст , , , , ,текст

a.length;//7 пустая ячейка тоже длина!!!!!!

for(let i =0; i< mass.length; i++){
    console.log(mass[i] );
}

mass.length=2;//с помощью length можно обрезать массив

let mass3=new Array('Яблоко','Груша');//срабатывает конструктор

let mass4= new Array(2); // undefined

let matrix=[
[1,2,3],
[4,5,6],
[7,8,9]
];

matrix[0][0]//1
matrix[1][1]//5














