// Sets nickname to div where chessboard goes
var chessboard = document.getElementById("cbContainer");

// Creates chessboard
function createChessboard() {
    // Loop to build rows (8)
    for (var i = 0; i < 8; i++) {
        // Loop to build columns (8)
        for (var j = 0; j < 8; j++) {
            // Create cell (chess square) & assign class name
            var cell = document.createElement("div");
            cell.className = "cell";

            // Evaluate whether cell should be even or odd
            // % - returns the remainder of the division; if remainder is 0, cell is even
            if ((i + j) % 2 == 0) {
                cell.style.backgroundColor = "black";
            }

            // Add cell to chessboard
            chessboard.appendChild(cell);
        }
    }
}

// Calls createChessboard to create chessboard
createChessboard();