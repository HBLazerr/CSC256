// Array of words
var arrWords = ['STAR', 'PLANET', 'MOON', 'ASTEROID', 'GALAXY', 'ALIEN'];
// Get table element from html and assign to variable
var table = document.getElementById("table");

// Builds a 10x10 table with empty cells and appends it to the html table element
function buildTable(table) {

    // Loops through each row
    for (var i = 0; i < 10; i++) {
        // Creates a new row element
        var row = document.createElement("tr"); // tr means Table Row

        // Loops through each column in the row
        for (var j = 0; j < 10; j++) {
            var col = document.createElement("td"); // td means Table Data Cell

            // Appends cell to row
            row.appendChild(col);
        }

        // Appends row to table
        table.appendChild(row); 
    }
}

/**
 *  Creates clues for crossword puzzle based on:
 * 
 *  wordIndex - index of the word in the arrWords array.
 *  direction - direction of clue (across or down).
 *  startingRow - starting row index
 *  startingCol - starting column index
 *  table - table element from html
 */
function buildClues(wordIndex, direction, startingRow, startingCol, table) {
    // Loops through each character in the word
    for (var i = 0; i < arrWords[wordIndex].length; i++) {
        // Get the row and column indices based on direction
        var tr;
        var td;
        var rowIndex = 0;
        var colIndex = 0;
        
        // Evaluate the row and column indices based on direction
        if (direction == "across") {
            rowIndex = startingRow;
            colIndex = startingCol + i;
        } else if (direction == "down") {
            rowIndex = startingRow + i;
            colIndex = startingCol;
        } else {
            console.log("what's going on here?");
        }

        // Get and assign row & cell elements
        tr = table.rows[rowIndex];
        td = tr.cells[colIndex];

        // Set text of cell to current character in the word
        td.textContent = arrWords[wordIndex][i].toUpperCase();
        td.classList.add("letter");
    }
}

// Build the table and the clues
buildTable(table);
// Place the words on the grid
buildClues(0, "across", 1, 0, table);   // STAR
buildClues(1, "across", 5, 4, table);   // PLANET
buildClues(2, "down", 2, 7, table);     // MOON
buildClues(3, "across", 3, 2, table);   // ASTEROID
buildClues(4, "down", 0, 2, table);     // GALAXY
buildClues(5, "down", 5, 6, table);     // ALIEN