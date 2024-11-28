"use strict";

const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");

let counter = 0;

const updateCounterDisplay = () => {
  counterElement.textContent = counter;
};

incrementButton.addEventListener("click", () => {
  counter++;
  updateCounterDisplay();
});

resetButton.addEventListener("click", () => {
  counter = 0;
  updateCounterDisplay();
});

updateCounterDisplay();
