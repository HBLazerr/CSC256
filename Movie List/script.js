// Assign variables to movie input and movie list
const movieInput = document.getElementById("movieInput");
const movieList = document.getElementById("movieList");

// Create movies array
let movies = [];


// Function to update the displayed movie list
function updateMovieList() {
    // Clear the current displayed list
    movieList.innerHTML = "";

    // Sort array
    movies.sort();

    // Adds each movie in the array to list
    for (const movie of movies) {
        // Create list item
        // .textContent - sets the text of the list item
        const li = document.createElement("li");
        li.textContent = movie;

        movieList.appendChild(li);
    }
}


// Adds a movie to existing list
function addMovie() {
    // Get the value of movie input
    // .toUpperCase() - converts input to all uppercase
    const movie = movieInput.value.toUpperCase();

    // Evaluates if movie value is empty
    if (movie == "") {
        alert("Please enter a movie");
    } else {
        // Add movie to movie array
        movies.push(movie);
        movieInput.value = ""; // clears input box after add

        // Update shown list
        updateMovieList();
    }
}


// Removes all movies from the array and updates the list
function clearList() {
    // Set movies array to empty
    movies = [];

    // Update shown list
    updateMovieList();
}