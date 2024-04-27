let numberOne = null;
let operation = null;
let numberTwo = null;
let numTwoActive = false;
let activeOperator = null;

function addition(numOne, numTwo) {
  return numOne + numTwo;
}

function subtraction(numOne, numTwo) {
  return numOne - numTwo;
}

function multiplication(numOne, numTwo) {
  return numOne * numTwo;
}

function division(numOne, numTwo) {
  return (numOne / numTwo).toPrecision(4);
}

function operate(numOne, numTwo, operator) {
  console.log(numOne, numTwo);
  switch (operator) {
    case "+":
      return addition(numOne, numTwo);

    case "-":
      return subtraction(numOne, numTwo);

    case "*":
      return multiplication(numOne, numTwo);

    case "/":
      return division(numOne, numTwo);

    default:
      break;
  }
}

const display = document.querySelector(".display");
function updateDisplay(value) {
  if (display.textContent == "0" || display.textContent == "-0") {
    display.textContent = display.textContent == "-0" ? -value : value;
    if (!numTwoActive) {
      numberOne = Number(display.textContent);
    } else {
      numberTwo = Number(display.textContent);
    }
  } else {
    display.textContent += value;
    if (!numTwoActive) {
      numberOne = Number(display.textContent);
    } else {
      numberTwo = Number(display.textContent);
    }
  }
}

function keyChecker(key) {
  if (!isNaN(key) && display.textContent.length <= 6) {
    updateDisplay(key);
    console.log("number");
  }
  if (key === "AC") {
    display.textContent = "0";
    if (!isNaN(numberOne)) {
      numberOne = 0;
      console.log(numberOne);
    }
    if (!isNaN(numberTwo)) {
      numTwoActive = false;
      numberTwo = 0;
      console.log(numberTwo);
    }
  }

  function equals() {
    if (!isNaN(numberTwo)) {
      let answer = operate(numberOne, numberTwo, activeOperator);
      display.textContent = answer.toString().slice(0, 8);
      numberOne = Number(display.textContent);
      numberTwo = null;
      numTwoActive = false;
    }
  }
  function add() {
    numTwoActive = true;
    activeOperator = "+";
    display.textContent = "0";
  }
  function subtract() {
    numTwoActive = true;
    activeOperator = "-";
    display.textContent = "0";
  }
  function multiply() {
    numTwoActive = true;
    activeOperator = "*";
    display.textContent = "0";
  }
  function divide() {
    numTwoActive = true;
    activeOperator = "/";
    display.textContent = "0";
  }

  if (key === "+/-") {
    if (display.textContent[0] != "-") {
      display.textContent = "-" + display.textContent;
      if (!numTwoActive) {
        numberOne = Number(display.textContent);
      } else {
        numberTwo = Number(display.textContent);
      }
    } else if (display.textContent[0] == "-") {
      display.textContent = display.textContent.slice(1);
      if (!numTwoActive) {
        numberOne = Number(display.textContent);
      } else {
        numberTwo = Number(display.textContent);
      }
    }
  }
  if (key === "%") {
    display.textContent = Number(display.textContent) / 100;
    if (!numTwoActive) {
      numberOne = Number(display.textContent);
    } else {
      numberTwo = Number(display.textContent);
    }
  }
  if (key === "/") {
    if (!numTwoActive) {
      divide();
    } else {
      equals();
      divide();
    }
  }
  if (key === "*") {
    if (!numTwoActive) {
      multiply();
    } else {
      equals();
      multiply();
    }
  }
  if (key === "-") {
    if (!numTwoActive) {
      subtract();
    } else {
      equals();
      subtract();
    }
  }
  if (key === "+") {
    if (!numTwoActive) {
      add();
    } else {
      equals();
      add();
    }
  }
  if (key === "=") {
    equals();
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
