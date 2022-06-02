var currentScore = 0;

function increase() {
  console.log("mein sikh lunga jaldi hi");
  currentScore = currentScore + 1;
  var score = document.querySelector(".score");
  score.innerText = currentScore;
}

function decrease() {
  currentScore = currentScore - 1;
  var score = document.querySelector(".score");
  score.innerText = currentScore;
}

function reset() {
  currentScore = currentScore - currentScore;
  var score = document.querySelector(".score");
  score.innerText = currentScore;
}

var increaseBtn = document.querySelector(".increase-btn");
increaseBtn.addEventListener("click", increase);

var decreaseBtn = document.querySelector(".decrease-btn");
decreaseBtn.addEventListener("click", decrease);

var resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", reset);
