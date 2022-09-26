"use strict";

document.querySelector("#result").textContent = " ";

document.querySelector("#check").addEventListener("click", function () {
  let value = Number(document.querySelector(".input-no").value);
  console.log(value);
  const number = new Number(value);
  console.log(number);
  document.querySelector("#result").textContent = number.toString(2);
});

document.querySelector("#clear").addEventListener("click", function () {
  document.querySelector("#result").textContent = " ";
  document.querySelector(".input-no").value = " ";
});
