 const submit = document.getElementById("submit");
    const form = document.getElementById("form");
    const game = document.getElementById("game");
    const message = document.querySelector(".message");
    const cells = document.querySelectorAll(".cell");

    let player1 = "";
    let player2 = "";
    let turn = 1;
    let gameOver = false;

    const wins = [
      [1,2,3],[4,5,6],[7,8,9],
      [1,4,7],[2,5,8],[3,6,9],
      [1,5,9],[3,5,7]
    ];

    submit.addEventListener("click", () => {
      player1 = document.getElementById("player1").value;
      player2 = document.getElementById("player2").value;

      if (!player1 || !player2) return;

      form.style.display = "none";
      game.style.display = "block";
      message.textContent = `${player1}, you're up`;
    });

    cells.forEach(cell => {
      cell.addEventListener("click", () => {
        if (cell.textContent || gameOver) return;

        const symbol = turn === 1 ? "x" : "o";
        const name = turn === 1 ? player1 : player2;

        cell.textContent = symbol;

        if (checkWin(symbol)) {
          message.textContent = `${name} congratulations you won!`;
          gameOver = true;
          return;
        }

        turn = turn === 1 ? 2 : 1;
        message.textContent =
          turn === 1
            ? `${player1}, you're up`
            : `${player2}, you're up`;
      });
    });

    function checkWin(symbol) {
      return wins.some(pattern =>
        pattern.every(id =>
          document.getElementById(id).textContent === symbol
        )
      );
    }