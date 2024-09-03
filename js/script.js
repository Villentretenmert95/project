'use strict';
//-----------------------------------------------------------------------------------------------------
// Код возьмите из предыдущего домашнего задания
// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++){
//         const lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               filmMark = +prompt('На сколько оцените его?', '').trim();
//         if (lastFilm != null && filmMark != null && lastFilm != '' && filmMark != '' && lastFilm.length <= 50){
//             personalMovieDB.movies[lastFilm] = filmMark;
//             console.log('OK');
//         } else {
//             console.log('Error');
//             i--;
            
//         }
//     };
// }

// rememberMyFilms();
//-----------------------------------------------------------------------------------------------------
// let k = 0;

// while(k < 2){
//     const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//           filmMark = +prompt('На сколько оцените его?', '');
//     if (lastFilm != null && filmMark != null && lastFilm != '' && filmMark != '' && lastFilm.length <= 50){
//         personalMovieDB.movies[lastFilm] = filmMark;
//         console.log('OK');
//     } else {
//         console.log('Error');
//         k--;
//     }
//     k++;
// }

// do {
//     const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//     filmMark = +prompt('На сколько оцените его?', '');
//     if (lastFilm != null && filmMark != null && lastFilm != '' && filmMark != '' && lastFilm.length <= 50){
//         personalMovieDB.movies[lastFilm] = filmMark;
//         console.log('OK');
//     } else {
//         console.log('Error');
//         k--;
//     }    
//     k++;
// } while (k < 2);

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10){
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count > 30){
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
    
// }

// detectPersonalLevel();

// function showMyDB(hidden){
//     if (!hidden){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     for (let i = 1; i <= 3; i++){
//         personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`, ''));
//     };
// }
// writeYourGenres();

// const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('New test method');
//     }
// };

// console.log(options.name);

// // delete options.name;

// // console.log(options);
// let counter = 0;
// for (let key in options) {
//     counter++;
//     if (typeof options[key] === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }
// }
// console.log(counter);

// console.log(Object.keys(options).length);
// options.makeTest();

// //Деструктуризация
// const {border, bg} = options.colors;

// console.log(border, bg);
// console.log(Object.getOwnPropertyDescriptors(options));
// console.log(Object.keys(options));

// const arr = [1, 2, 3, 6, 8];

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// //только с масивоподобными сущностями массив строка мап и тд
// for (let value of arr){
//     console.log(value);
// }
//item элемент массива, i номер по порядку, arr ссылка на массив который перебираем
// arr.forEach(function(item, i, arr){ 
//     console.log(`${i}: ${item}: ${arr}`);  
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b){
//     return a - b;
// };

// const numbers = {
//     a: 1,
//     b: 2,
//     c: {
//         x: 3,
//         y: 4
//     }
// };

// //поверхностная копия
// function copy(mainObj){
//     const newObj = {}
//     for (let item in mainObj){
//         newObj[item] = mainObj[item];
//     }
//     return newObj;
// };

// const newNumbers = copy(numbers);
// newNumbers.b = 20;
// newNumbers.c.x = 30;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 5,
//     e: 6
// };
// //поверхностная копия аналог в виде метода
// console.log(Object.assign(numbers, add));
// console.log(Object.assign({}, add));

//Поверхностная копия массива через срез
// const oldArray = ['a', 'b', 'c', ['d', 'e']];
// const newArray = oldArray.slice();

// newArray[3][1] = 'adwadawd';
// console.log(oldArray);
// console.log(newArray);

// //Опертор разворота spread
// const videos = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...videos, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// //spread поверхностная копия массива
// const array = ['a', 'b'];
// const newArr = [...array];
// console.log(newArr);
// //spread поверхностная копия обьекта
// const q = {
//     one: 1,
//     two: 2,
//     three: {
//         a: 4,
//         b: 5
//     }
// };

// const newObj = {...q};
// newObj.one = 7;
// newObj.three.a = 3;
// console.log(q);
// console.log(newObj);
//Практика -----------------------------------------------------------------------------------------------
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan){
//         const {age} = plan;
//         const {languages} = plan.skills;
//         return `Мне ${age} и я владею языками: ` + languages.join(' ').toUpperCase();
//     }
// };

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     let result = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs){
//         result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return result;
// }

// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// const family = [];

// function showFamily(arr) {
//     if (arr.length < 1) return 'Cемья пуста';
//     return 'Семья состоит из: ' + arr.join(' ');
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }

// console.log(standardizeStrings(favoriteCities));

// const someString = 'This is some strange string';

// function reverse(str) {
//     let result = '';
//     typeof str !== 'string' ? result = 'Ошибка!' : result = str.split('').reverse().join('');
//     return result;
// }

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//     arr.forEach( key => {
//         if (key !== missingCurr) {
//             str += `${key}\n`;
//         }
//     })
//     return str;
// }
//-----------------------------------------------------------------------------------------------

const a = {
    one: 'test'
};

a.two = 'test2';

console.log(a);