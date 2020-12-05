var randomNumber1 = Math.floor(Math.random()*6)+1;

var img1Source = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute('src', img1Source);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var img2Source = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute('src', img2Source);

if (randomNumber1===randomNumber2) {
  document.querySelector("h1").textContent = "Draw";
} else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").textContent = "Player1 Wins";
} else {
  document.querySelector("h1").textContent = "Player2 Wins";
}
