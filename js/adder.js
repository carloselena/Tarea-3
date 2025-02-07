import { isEmpty, clearInputs, showAlert } from "./utilities.js";

const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const buttonSum = document.querySelector("#button-sum");
const buttonClear = document.querySelector("#button-clear");
const result = document.querySelector("#result");

const sum = (num1, num2) => num1 + num2;

buttonSum.addEventListener("click", () => {
  if (isEmpty(number1.value) || isEmpty(number2.value)) {
    showAlert("Formato incorrecto", "Por favor, ingrese dos números");
    return;
  }
  const num1 = parseFloat(number1.value);
  const num2 = parseFloat(number2.value);
  const total = sum(num1, num2);
  result.textContent = `${num1} + ${num2 < 0 ? "(" : ""}${num2}${
    num2 < 0 ? ")" : ""
  } = ${total}`;
  clearInputs(number1);
  clearInputs(number2);
});

buttonClear.addEventListener("click", () => {
  clearInputs(number1);
  clearInputs(number2);
  clearInputs(result);
});
