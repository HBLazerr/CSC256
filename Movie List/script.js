// Assign variables to movie input and movie list
const movieInput = document.getElementById("movieInput");
const movieList = document.getElementById("movieList");


// Adds a movie to existing list
function addMovie() {
    // Get the value of movie input
    // .toUpperCase() - converts input to all uppercase
    const movie = movieInput.value.toUpperCase();

    // Evaluates if movie value is empty
    if (movie == "") {
        alert("Please enter a movie");
    } else {
        movieInput.value = "";  // clear input box after add
        movieList.innerHTML += "<li>" + movie + "</li>";  // add movie [to ol] as list item(li)
    }
}

// Removes all list items from movie list
function clearList() {
    movieList.innerHTML = "";  // clear innerHTML of movie list
}