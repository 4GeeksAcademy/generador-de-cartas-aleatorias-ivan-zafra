/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suits = ["♦", "♥", "♠", "♣"];

function random(len) {
  return Math.floor(Math.random() * len);
}

const randomNumb = numbers[random(numbers.length)];
const randomSuit = suits[random(suits.length)];

document.querySelector(".suittop").classList.add(randomSuit);
document.querySelector(".suitbot").classList.add(randomSuit);

document.querySelector(".number").innerText = randomNumb;
document.getElementById("top").innerText = randomSuit;
document.getElementById("bot").innerText = document.getElementById(
  "top"
).innerText;
