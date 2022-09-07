const numberOfFilms = +prompt("How many films have you already watched?",'');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const q1 = prompt("One of the last movies you watched?",""),
      q2 = prompt("How much would you rate it?",""),
      q3 = prompt("One of the last movies you watched?",""),
      q4 = prompt("How much would you rate it?","");

personalMovieDB.movies[q1] = q2;
personalMovieDB.movies[q3] = q4;

console.log (personalMovieDB);