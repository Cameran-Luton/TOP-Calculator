let numberOne = null;
let operation = null;
let numberTwo = null;

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

function operate(numOne, numTwo, operator) {
  switch (operator) {
    case "add":
      return add(numOne, numTwo);

    case "subtract":
      return subtract(numOne, numTwo);

    case "multiply":
      return multiply(numOne, numTwo);

    case "divide":
      return divide(numOne, numTwo);

    default:
      break;
  }
}

const display = document.querySelector(".display");
function updateDisplay(value) {
  if (display.textContent == "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function keyChecker(key) {
  if (!isNaN(key)) {
    updateDisplay(key);
    console.log("number");
  }
  if (key === "AC") {
    console.log("clear");
  }
  if (key === "+/-") {
    console.log("invert");
  }
  if (key === "%") {
    console.log("percent");
  }
  if (key === "/") {
    console.log("divide");
  }
  if (key === "*") {
    console.log("multiply");
  }
  if (key === "-") {
    console.log("subtract");
  }
  if (key === "+") {
    console.log("add");
  }
  if (key === "=") {
    console.log("equals");
  }
  if (key === ".") {
    console.log("decimal");
  }
}

const btn = document.querySelectorAll(".btn");
for (let index = 0; index < btn.length; index++) {
  btn[index].addEventListener("click", () => {
    keyChecker(btn[index].textContent);
  });
}
