
let output = document.getElementById("output");

let numMovies = +prompt("How many movies do you want to rate?");

let movies = [];

for (let i = 0; i < numMovies; i++) {
    let title = prompt("Enter the title of movie " + (i + 1));
    let rating = +prompt("Rate the movie (1-5):");

    while (rating < 1 || rating > 5) {
        rating = parseInt(prompt("Invalid rating! Please rate between 1 and 5:"));
    }

    movies.push({
        title: title,
        rating: rating
    });
}


movies.sort((a, b) => b.rating - a.rating);


let htmlContent = "<h3>Movies (sorted by rating):</h3><ul>";
for (let movie of movies) {
    htmlContent += `<li>${movie.title} - ${movie.rating}/5</li>`;
}
htmlContent += "</ul>";
htmlContent += `<h3>Highest Rated Movie:</h3><p>${movies[0].title} - ${movies[0].rating}/5</p>`;

output.innerHTML = htmlContent;


