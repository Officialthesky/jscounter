var currentScore = 0;

function increase() {
  console.log("mein sikh lunga jaldi hi");
  currentScore = currentScore + 1;
  var score = document.querySelector(".score");
  score.innerText = currentScore;
}

var increaseBtn = document.querySelector(".increase-btn");
increaseBtn.addEventListener("click", increase);
