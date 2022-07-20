// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director); 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;
    moviesArray.filter((movie) => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
            count += 1;
        }
    })
    return count; 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    let sum = moviesArray.map((movie) => movie.score).reduce((acc, curr) => {return acc + curr});
    let average = sum / moviesArray.length;
    return Number(average.toFixed(2)); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const newArray = moviesArray.filter((movie)=> {
        if (movie.genre.includes("Drama")){
            return movie;
        }
    })
    let sum = newArray.map((movie) => movie.score).reduce((acc, curr) => {return acc + curr});
    let average = sum / newArray.length;
    return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedArray = [...moviesArray].sort((a, b) => a.year > b.year ? 1 : -1);
    return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedArray = [...moviesArray].map((movie) => movie.title);
    sortedArray.sort((a, b) => a > b ? 1 : -1);
    if (sortedArray.length > 20){
        return sortedArray.slice(0, 20);
    } else {
        return sortedArray;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
