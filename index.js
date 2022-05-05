/* let randomNumber1 = Math.random() * 6;

randomNumber1 = Math.floor(randomNumber1) + 1;

let image1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".dice .img1").setAttribute("src", image1);
 */

//Create a number.
document.querySelector(".playButton").addEventListener("click", function () {
  let randomNumber1 = Math.random() * 6;

  randomNumber1 = Math.floor(randomNumber1) + 1;

  let image1 = "images/dice" + randomNumber1 + ".png";

  document.querySelector(".dice .img1").setAttribute("src", image1);

  let randomNumber2 = Math.random() * 6;

  randomNumber2 = Math.floor(randomNumber2) + 1;

  let image2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".dice .img2").setAttribute("src", image2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Nestor Wins!";
  }
  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Guest Wins!";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  }
});
