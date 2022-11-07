/* = = = = = = = = = = = Global Variables = = = = = = = = = = = */

// Player Turn and Game Over switch.
let playerXTurn = true; // true = Player X's turn | false = Player O's turn
let playing = true; // true = Continue playing | false = Game over

// Add on click event listeners to each box.
// While playing, get the ID of a box when clicked
// and pass it to the game.occupyBox function.
const selection = document.querySelectorAll(".box");
selection.forEach((box) => {
    box.addEventListener("click", e => {
        const boxID = e.target.id;
        if (playing) {
            game.occupyBox(boxID);
        }
    });
});

/* = = = = = = = = = = = Tic Tac Toe Game = = = = = = = = = = = */
const game = {
    // Occupy an empty box with an X or O, and alternate player turns.
    occupyBox(boxID) {
        console.log(boxID);

        // Store boxID in a variable for readability
        this.box = document.getElementById(`${boxID}`);

        // X or O will fill a vacant box.
        if (playerXTurn && this.box.value == null) {
            this.box.innerText = "X";
            // Pass turn to Player O.
            playerXTurn = false;
            // Player O turn display message.
            document.querySelector(".winnerText").innerText = "Player O's turn.";
            // Check for winner.
            game.checkWinner();
        } else if (!playerXTurn && this.box.value == null) {
            this.box.innerText = "O";
            // Pass turn to Player X.
            playerXTurn = true;
            // Player X display message.
            document.querySelector(".winnerText").innerText = "Player X's turn.";
            // Check for winner.
            game.checkWinner();
        } else {
            return;
        }
    },

    // Check all cells to determine if there is a winner.
    checkWinner() {
        // Initialize variables for readability.
        this.box1 = document.getElementById("one").innerText;
        this.box2 = document.getElementById("two").innerText;
        this.box3 = document.getElementById("three").innerText;
        this.box4 = document.getElementById("four").innerText;
        this.box5 = document.getElementById("five").innerText;
        this.box6 = document.getElementById("six").innerText;
        this.box7 = document.getElementById("seven").innerText;
        this.box8 = document.getElementById("eight").innerText;
        this.box9 = document.getElementById("nine").innerText;

        // Player X winning outcomes.
        if ((this.box1 == "X" && this.box2 == "X" && this.box3 == "X") ||
            (this.box4 == "X" && this.box5 == "X" && this.box6 == "X") ||
            (this.box7 == "X" && this.box8 == "X" && this.box9 == "X") ||
            (this.box1 == "X" && this.box4 == "X" && this.box7 == "X") ||
            (this.box2 == "X" && this.box5 == "X" && this.box8 == "X") ||
            (this.box3 == "X" && this.box6 == "X" && this.box9 == "X") ||
            (this.box1 == "X" && this.box5 == "X" && this.box9 == "X") ||
            (this.box3 == "X" && this.box5 == "X" && this.box7 == "X")) {
                console.log("Player X wins");
                // Game over switch.
                playing = false;
                // Player X winner display message.
                document.querySelector(".winnerText").innerText = "Player X Wins! - Game Over";
            }
        // Player O winning outcomes.
        else if ((this.box1 == "O" && this.box2 == "O" && this.box3 == "O") ||
            (this.box4 == "O" && this.box5 == "O" && this.box6 == "O") ||
            (this.box7 == "O" && this.box8 == "O" && this.box9 == "O") ||
            (this.box1 == "O" && this.box4 == "O" && this.box7 == "O") ||
            (this.box2 == "O" && this.box5 == "O" && this.box8 == "O") ||
            (this.box3 == "O" && this.box6 == "O" && this.box9 == "O") ||
            (this.box1 == "O" && this.box5 == "O" && this.box9 == "O") ||
            (this.box3 == "O" && this.box5 == "O" && this.box7 == "O")) {
                console.log("Player O wins");
                // Game over switch.
                playing = false;
                // Player O winner display message.
                document.querySelector(".winnerText").innerText = "Player O Wins! - Game Over";
            }
        
        else if (this.box1 && this.box2 && this.box3 &&
            this.box4 && this.box5 && this.box6 &&
            this.box7 && this.box8 && this.box9) {
                console.log("Draw");
                // Game over switch.
                playing = false;
                // Draw display message.
                document.querySelector(".winnerText").innerText = "Draw - Game Over";
            }
    }
}

/* = = = = = = = = = = = Reset Game = = = = = = = = = = = */
// Add on click event listener for reset button.
document.querySelector(".restart").addEventListener("click", reset);
// Reload page when reset button is clicked.
function reset() {
    document.location.reload();
}
