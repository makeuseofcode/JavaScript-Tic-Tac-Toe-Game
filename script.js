let playerSymbol = "X";
let gameEnded = false
let winPositions = [
	[1, 2, 3], [4, 5, 6], 
	[7, 8, 9], [1, 4, 7], 
	[2, 5, 8], [3, 6, 9], 
	[1, 5, 9], [3, 5, 7]
];


for (let i = 1; i <= 9; i++) {
	// Whenever a player clicks on a cell
	document.getElementById(i.toString()).addEventListener(
		"click", 
		function() {
			if (this.innerHTML === "" && !gameEnded) {
				// Display either "X" or "O" in the cell, and style it
				this.innerHTML = playerSymbol;
				this.classList.add(playerSymbol.toLowerCase());
				
				// Check if a player has won
				checkWin();
				
				// Swap the symbol to the other one for the next turn
				if (playerSymbol === "X")
					playerSymbol = "O"
				else
					playerSymbol = "X"
			}
		}
	);
}

function checkWin() {
	for (let i = 0; i < winPositions.length; i++) {
		if (
			document.getElementById(winPositions[i][0]).innerHTML === playerSymbol &&
			document.getElementById(winPositions[i][1]).innerHTML === playerSymbol &&
			document.getElementById(winPositions[i][2]).innerHTML === playerSymbol
		) {
			document.getElementById(winPositions[i][0]).classList.add("win");
			document.getElementById(winPositions[i][1]).classList.add("win");
			document.getElementById(winPositions[i][2]).classList.add("win"); 
			gameEnded = true;
			setTimeout(function() {
				alert(playerSymbol + " wins!");
			}, 500);
		}
	}
}

document.getElementById("reset").addEventListener(
    "click", 
	function() {
		for (let i = 1; i <= 9; i++) {
			document.getElementById(i.toString()).innerHTML = "";
			document.getElementById(i.toString()).classList.remove("x");
			document.getElementById(i.toString()).classList.remove("o");
			document.getElementById(i.toString()).classList.remove("win");
			gameEnded = false;
		}
	}
);