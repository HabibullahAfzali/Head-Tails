let headsScore = 0;
let tailsScore = 0;
let crossCounter = 0;
let facesCounter = 0;

function flipCoin() {
  document.querySelector("button").disabled = true;
  const random = Math.random();
  const result = random < 0.5 ? "heads" : "tails";

  const coin = document.getElementById("coin");

  coin.style.animation = "spin 1s ease-in-out";
  setTimeout(() => {
    coin.style.animation = "";

    coin.className = result;
    document.querySelector("button").disabled = false;

    if (result === "heads") {
      headsScore++;
      document.getElementById(
        "heads-score"
      ).textContent = `Heads: ${headsScore}`;
      facesCounter++;
      document.getElementById("message").textContent = "It is head! you win!";
      document.getElementById("message").style.color = "green";
    } else {
      tailsScore++;
      document.getElementById(
        "tails-score"
      ).textContent = `Tails: ${tailsScore}`;
      crossCounter++;
      document.getElementById("message").textContent = "It is tail! Try again.";
      document.getElementById("message").style.color = "red";
    }

    document.getElementById(
      "cross-counter"
    ).textContent = `Cross Counter: ${crossCounter}`;
    document.getElementById(
      "faces-counter"
    ).textContent = `Faces Counter: ${facesCounter}`;
  }, 1000);
}

function resetGame() {
  headsScore = 0;
  tailsScore = 0;
  crossCounter = 0;
  facesCounter = 0;

  document.getElementById("heads-score").textContent = `Heads: ${headsScore}`;
  document.getElementById("tails-score").textContent = `Tails: ${tailsScore}`;
  document.getElementById(
    "cross-counter"
  ).textContent = `Cross Counter: ${crossCounter}`;
  document.getElementById(
    "faces-counter"
  ).textContent = `Faces Counter: ${facesCounter}`;
}
