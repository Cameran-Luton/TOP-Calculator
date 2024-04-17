let numberOne = 0;
let operation = "";
let numberTwo = 0;

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
