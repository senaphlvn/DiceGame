//Random dice 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6));

var images = ["images/dice1.png" , "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomImg1 = images[randomNumber1];

document.querySelector(".img1").setAttribute("src" , randomImg1);

//Random dice 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6));

var images = ["images/dice1.png" , "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomImg2 = images[randomNumber2];

document.querySelector(".img2").setAttribute("src" , randomImg2);

//choosing winner
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Won!"
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Won! 🚩"
} else{
  document.querySelector("h1").innerHTML = "DRAW"
}
