'use strict';
//-----------------------------------------------------------------------------------------------------
// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while( this.count == '' ||  this.count == null || isNaN( this.count)){
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        }
    },
    toggleVisibleMyDB: function() {
        if (!this.privat){
            this.privat = true;
        } else {
            this.privat = false;
        }
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){
            const lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  filmMark = +prompt('На сколько оцените его?', '').trim();
            if (lastFilm != null && filmMark != null && lastFilm != '' && filmMark != '' && lastFilm.length <= 50){
                this.movies[lastFilm] = filmMark;
            } else {
                i--;
                
            }
        }
    },
    detectPersonalLevel: function(){
        if (this.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count <= 30){
            console.log("Вы классический зритель");
        } else if (this.count > 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i <= 3; i++){
            const genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
            if (genre != null && genre != ''){
                this.genres.push(genre);
            } else {
                i--;
            }
        };
        //item элемент массива, i номер по порядку, arr ссылка на массив который перебираем
        this.genres.forEach((item, i) => { 
                console.log(`Любимый жанр #${i+1}: - это ${item}`);  
        });
    }
 };

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

console.log(personalMovieDB);