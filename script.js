"use strict";

let mysterNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(mysterNumber);

let score = 20;
let highScore = 0;
let number;
//functions
function showMsg(msg) {
  document.querySelector(".message").textContent = msg;
}
function showScore(msg) {
  document.querySelector(".score").textContent = msg;
}
function showHighScore(msg) {
  document.querySelector(".highscore").textContent = msg;
}
function changeMsgColor(color) {
  document.querySelector(".message").style.color = color;
  document.querySelector(".message").style.fontWeight = "900";
}

function biggerMsg() {
  document.querySelector(".message").style.fontSize = "4em";
}
function hideQuestion() {
  document.querySelector(".number i").style.display = "none";
}
function showMysteryNumber() {
  document.querySelector(".mysteryNumber").textContent = mysterNumber;
  document.querySelector(".mysteryNumber").style.display = "block";
  document.querySelector(".mysteryNumber").style.color = "#66ffff";
  document.querySelector(".mysteryNumber").style.backgroundColor = "#43E890";
}
// the game logic

document.querySelector(".check").addEventListener("click", function () {
  //invalid question
  if (score > 1) {
    number = Number(document.querySelector(".guess").value);
    if (!number || number > 20 || number < 1) {
      showMsg("😝 type a valid number ");
    } else if (number !== mysterNumber) {
      showMsg(number > mysterNumber ? "↗↗too high" : "↘↘too low");
      score--;
      showScore(score);
      // player win
    } else {
      showMsg("🤩 you won");
      changeMsgColor("#43E890");
      biggerMsg();
      showMysteryNumber();
      if (score > highScore) highScore = score;
      showHighScore(highScore);
      hideQuestion();
    }
  } else {
    // player lost
    showMsg("😩 You lost");
    showScore(0);
    // make the msg bigger
    biggerMsg();
    //change the msg color #EB5937
    changeMsgColor("#EB5937");
  }
});

// reset button

document.querySelector(".reset").addEventListener("click", function () {
  score = 20;
  mysterNumber = Math.trunc(Math.random() * 20) + 1;
  showMsg("Type a number to start");
  document.querySelector(".message").style.color = "#f2d0c4";
  document.querySelector(".message").style.fontWeight = "400";
  document.querySelector(".message").style.fontSize = "2.5rem";
  document.querySelector(".number i").style.display = "block";
  showScore(score);
  document.querySelector(".mysteryNumber").style.display = "none";
});
