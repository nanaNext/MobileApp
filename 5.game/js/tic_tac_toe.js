"use strict";

let flag = "pen-flag"; 
let counter = 9; 
const squares = document.getElementsByClassName("square");
const squaresArray = Array.from(squares);
const squaresBox = document.getElementById("squaresBox");
const newgamebtn_display = document.getElementById("newgame-btn");
const newgamebtn = document.getElementById("btn90");

const lineArray = [
  JudgLine(squaresArray, ["a_1", "a_2", "a_3"]),
  JudgLine(squaresArray, ["b_1", "b_2", "b_3"]),
  JudgLine(squaresArray, ["c_1", "c_2", "c_3"]),
  JudgLine(squaresArray, ["a_1", "b_1", "c_1"]),
  JudgLine(squaresArray, ["a_2", "b_2", "c_2"]),
  JudgLine(squaresArray, ["a_3", "b_3", "c_3"]),
  JudgLine(squaresArray, ["a_1", "b_2", "c_3"]),
  JudgLine(squaresArray, ["a_3", "b_2", "c_1"]),
];
let winningLine = null;

const msgtxt1 = '<p class="image"><img src="img/penguins.jpg" width=61px height=61px></p><p class="text">Penguins Attack!(your turn)</p>';
const msgtxt2 = '<p class="image"><img src="img/whitebear.jpg" width=61px height=61px></p><p class="text">WhiteBear Attack!(computer turn)</p>';
const msgtxt3 = '<p class="image"><img src="img/penguins.jpg" width=61px height=61px></p><p class="text animate__animated animate__lightSpeedInRight">Penguins Win!!</p>';
const msgtxt4 = '<p class="image"><img src="img/whitebear.jpg" width=61px height=61px></p><p class="text animate__animated animate__lightSpeedInLeft">WhiteBear Win!!</p>';
const msgtxt5 = '<p class="image"><img src="img/penguins.jpg" width=61px height=61px><img src="img/whitebear.jpg" width=61px height=61px></p><p class="text animate__bounceIn">Draw!!</p>';

let gameSound = ["sound/click_sound1.mp3", "sound/click_sound2.mp3", "sound/penwin_sound.mp3", "sound/bearwin_sound.mp3", "sound/draw_sound.mp3"];


function JudgLine(targetArray, idArray) {
  return targetArray.filter(function (e) {
    return idArray.includes(e.id);
  });
}

window.addEventListener("DOMContentLoaded", function () {
  setMessage("pen-turn");
  squaresArray.forEach((square) => square.classList.add("js-clickable"));
  
  squaresArray.forEach((square) => {
    square.addEventListener("click", () => {
      if (square.classList.contains("js-clickable")) {
        let gameOverFlg = isSelect(square);
        if (gameOverFlg === "0") {
          squaresBox.classList.add("js-unclickable");
          setTimeout(bearTurn, 1000);
        }
      }
    });
  });
}, false);

function isWinner(symbol) {
  const result = lineArray.some((line) => {
    const subResult = line.every((square) =>
      symbol === "penguins"
        ? square.classList.contains("js-pen-checked")
        : square.classList.contains("js-bear-checked")
    );
    if (subResult) {
      winningLine = line;
    }
    return subResult;
  });
  return result;
}

function isSelect(selectSquare) {
  let gameOverflg = "0";

  if (flag === "pen-flag") {
    playSound(0);
    selectSquare.classList.add("js-pen-checked", "js-unclickable");
    selectSquare.classList.remove("js-clickable");
    if (isWinner("penguins")) {
      setMessage("pen-win");
      gameOver("penguins");
      return "1";
    }
    setMessage("bear-turn");
    flag = "bear-flag";
  } else {
    playSound(1);
    selectSquare.classList.add("js-bear-checked", "js-unclickable");
    selectSquare.classList.remove("js-clickable");
    if (isWinner("bear")) {
      setMessage("bear-win");
      gameOver("bear");
      return "1";
    }
    setMessage("pen-turn");
    flag = "pen-flag";
  }
  counter--;
  if (counter === 0) {
    setMessage("draw");
    gameOver("draw");
    return "1";
  }
  return gameOverflg;
}

function setMessage(id) {
  const msgtext = {
    "pen-turn": msgtxt1,
    "bear-turn": msgtxt2,
    "pen-win": msgtxt3,
    "bear-win": msgtxt4,
    "draw": msgtxt5,
  };
  document.getElementById("msgtext").innerHTML = msgtext[id] || msgtxt1;
}

function gameOver(status) {
  let w_sound = gameSound[status === "penguins" ? 2 : status === "bear" ? 3 : 4];
  playSound(null, w_sound);

  squaresBox.classList.add("js-unclickable");
  newgamebtn_display.classList.remove("js-hidden");

  if (winningLine) {
    winningLine.forEach((square) =>
      square.classList.add(status === "penguins" ? "js-pen_highLight" : "js-bear_highLight")
    );
  }

  const snowColor = status === "penguins" ? "rgb(255,240,245)" : "rgb(175,238,238)";
  if (status !== "draw") {
    $(document).snowfall({
      flakeColor: snowColor,
      maxSpeed: 3,
      minSpeed: 1,
      maxSize: 20,
      minSize: 10,
      round: true,
    });
  }
}

newgamebtn.addEventListener("click", function () {
  flag = "pen-flag";
  counter = 9;
  winningLine = null;

  squaresArray.forEach((square) => {
    square.classList.remove(
      "js-pen-checked",
      "js-bear-checked",
      "js-unclickable",
      "js-pen_highLight",
      "js-bear_highLight"
    );
    square.classList.add("js-clickable");
  });

  squaresBox.classList.remove("js-unclickable");
  setMessage("pen-turn");
  newgamebtn_display.classList.add("js-hidden");
  $(document).snowfall("clear");
});

function bearTurn() {
  let bearTurnEnd = "0";

  while (bearTurnEnd === "0") {
    bearTurnEnd = isReach("bear");
    if (bearTurnEnd === "1") break;

    bearTurnEnd = isReach("penguins");
    if (bearTurnEnd === "1") break;

    const bearSquare = squaresArray.filter((square) =>
      square.classList.contains("js-clickable")
    );
    let n = Math.floor(Math.random() * bearSquare.length);
    isSelect(bearSquare[n]);
    bearTurnEnd = "1";
  }

  squaresBox.classList.remove("js-unclickable");
}

function isReach(status) {
  let bearTurnEnd = "0";

  lineArray.some((line) => {
    let bearCheckCnt = 0,
      penCheckCnt = 0,
      emptySquare = null;

    line.forEach((square) => {
      if (square.classList.contains("js-bear-checked")) bearCheckCnt++;
      else if (square.classList.contains("js-pen-checked")) penCheckCnt++;
      else if (square.classList.contains("js-clickable")) emptySquare = square;
    });

    if (
      (status === "bear" && bearCheckCnt === 2 && penCheckCnt === 0) ||
      (status === "penguins" && bearCheckCnt === 0 && penCheckCnt === 2)
    ) {
      if (emptySquare) {
        isSelect(emptySquare);
        bearTurnEnd = "1";
      }
      return true;
    }
    return false;
  });

  return bearTurnEnd;
}

function playSound(index, path = null) {
  let music = new Audio(path || gameSound[index]);
  music.play();
}
