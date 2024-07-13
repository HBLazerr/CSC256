// Array of pieces - checkersboard
arrPieces = [
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    ['w', null, 'w', null, 'w', null, 'w', null],
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null]
]

var secretSpan = document.createElement("selectedSquare");

// Creates checkerboard
function createCheckersBoard(checkersboard) {
    // Loop to build rows (8)
    for (var i = 0; i < 8; i++) {
        // Loop to build columns (8)
        for (var j = 0; j < 8; j++) {
            // Create cell (checker square) & assign class name
            var cell = document.createElement("div");

            cell.className = "cell";
            cell.setAttribute("id", "div" + i + j);

            // Evaluate whether cell should be even or odd
            // % - returns the remainder of the division; if remainder is 0, cell is even
            if ((i + j) % 2 == 1) {
                cell.classList.add("checkersBg");
                cell.addEventListener("click", movePiece);
            }

            // Add cell to checkers board
            checkersboard.appendChild(cell);

            // Evaluate if cell contains a piece
            if (arrPieces[i][j]) {
                createPiece("piece" + i + j, "checkerPiece-" + arrPieces[i][j], cell);
            }
        }
    }
}

// Creates a checker piece
function createPiece(id, pieceClass, theSquare) {
    // Create new piece
    var newPiece = document.createElement("div");

    // Add attributes to piece
    newPiece.setAttribute("id", id);
    // apply normal checker piece class to piece
    newPiece.classList.add("checkerPiece");
    // use value passed in to create white or black piece
    newPiece.classList.add(pieceClass);
    // add onclick event to handle piece movement
    newPiece.addEventListener("click", savePieceId);
    // add piece to square
    theSquare.appendChild(newPiece);
}

// Handles piece movement
function movePiece(event) {
    console.log("moving");

    // Get id of clicked square
    var newSquareId = event.target.id;
    
    // Remove 'piece' and 'div' from id
    newSquareId = newSquareId.replace("piece", "").replace("div", "");

    // Get id of selected piece from hidden span
    var selPieceId = secretSpan.textContent;

    // Check if clicked square is same as selected square
    if (newSquareId != selPieceId) {
        // create square where piece was originally placed
        var oldSquare = document.getElementById("div" + selPieceId);
        // create piece to be moved
        var oldPiece = document.getElementById("piece" + selPieceId);

        // create class of piece color
        var oldPieceColorClass = oldPiece.classList[1];

        // Remove piece from og square
        oldSquare.removeChild(oldPiece);

        // create square where piece will be moved
        var newSquare = document.getElementById("div" + newSquareId);

        // Creates new piece at new square with same color as og piece
        createPiece("piece" + newSquare, oldPieceColorClass, newSquare);
        
        // Clear hidden span
        secretSpan.textContent = "";
    }
}

// Handles piece id save in hidden span
function savePieceId(event) {
    // Save id of selected piece
    var selectedPieceId = event.target.id;
    // Remove 'piece' from id
    selectedPieceId = selectedPieceId.replace("piece", "");
    // Save id in hidden span
    secretSpan.textContent = selectedPieceId;
    // Display id in console
    console.log("selectedPieceId: " + selectedPieceId);
}