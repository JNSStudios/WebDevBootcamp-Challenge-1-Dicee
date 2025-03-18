// create array of paths to dice images
diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// create variables for the random numbers
var randomNumber1 = 0;
var randomNumber2 = 0;

// generate the random numbers. loop is done to prevent a draw
while(randomNumber1 === randomNumber2) {
    randomNumber1 = Math.floor(Math.random() * 6);
    randomNumber2 = Math.floor(Math.random() * 6);
}

// update each dice image
document.querySelector(".img1").setAttribute("src", diceImages[randomNumber1]);
document.querySelector(".img2").setAttribute("src", diceImages[randomNumber2]);

// update the winner text
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👑 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 👑";
}
