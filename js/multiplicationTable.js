import { isEmpty, isDecimal, clearInputs, showAlert } from "./utilities.js";
const number = document.querySelector("#number");
const buttonResult = document.querySelector("#button-result");
const buttonClear = document.querySelector("#button-clear");
const ionList = document.querySelector("#ionList");

buttonClear.addEventListener("click", () => {
  clearInputs(number);
  clearInputs(ionList);
});

buttonResult.addEventListener("click", () => {
  if (isEmpty(number.value)) {
    showAlert("Error", "Por favor, ingrese un número");
    return;
  }
  let num = parseFloat(number.value);
  if (isDecimal(num)) {
    showAlert("Error", "Por favor, ingrese un número entero");
    return;
  }

  num = parseInt(num);

  clearInputs(ionList);
  for (let i = 1; i <= 13; i++) {
    const ionItem = document.createElement("ion-item");
    const ionLabel = document.createElement("ion-label");
    ionLabel.innerHTML = i + " x " + num + " = " + i * num;
    ionItem.appendChild(ionLabel);
    ionList.appendChild(ionItem);
  }
});
