//your JS code here. If required.
 const submitBtn = document.getElementById("submit");
    const game = document.getElementById("game");
    const form = document.getElementById("player-form");
    const message = document.querySelector(".message");
    const cells = document.querySelectorAll(".cell");

    let player1 = "";
    let player2 = "";
    let currentPlayer = 1;
    let gameOver = false;

    const winPatterns = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [1,5,9],
      [3,5,7]
    ];

    submitBtn.addEventListener("click", () => {
      player1 = document.getElementById("player-1").value;
      player2 = document.getElementById("player-2").value;

      if (!player1 || !player2) {
        alert("Please enter both player names");
        return;
      }

      form.style.display = "none";
      game.style.display = "block";
      message.textContent = `${player1}, you're up`;
    });

    cells.forEach(cell => {
      cell.addEventListener("click", () => {
        if (cell.textContent || gameOver) return;

        if (currentPlayer === 1) {
          cell.textContent = "x";
          if (checkWinner("x")) {
            message.textContent = `${player1} congratulations you won!`;
            gameOver = true;
            return;
          }
          currentPlayer = 2;
          message.textContent = `${player2}, you're up`;
        } else {
          cell.textContent = "o";
          if (checkWinner("o")) {
            message.textContent = `${player2} congratulations you won!`;
            gameOver = true;
            return;
          }
          currentPlayer = 1;
          message.textContent = `${player1}, you're up`;
        }
      });
    });

    function checkWinner(symbol) {
      return winPatterns.some(pattern =>
        pattern.every(id =>
          document.getElementById(id.toString()).textContent === symbol
        )
      );
    }