/* let randomNumber1 = Math.random() * 6;

randomNumber1 = Math.floor(randomNumber1) + 1;

let image1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".dice .img1").setAttribute("src", image1);
 */

//Create a number.

let randomNumber1 = Math.random() * 6;

randomNumber1 = Math.floor(randomNumber1) + 1;

let image1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".dice .img1").setAttribute("src", image1);

let randomNumber2 = Math.random() * 6;

randomNumber2 = Math.floor(randomNumber2) + 1;

let image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img2").setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 2 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
