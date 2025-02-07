import { numbersToLetters } from "./numbersDictionary.js";
import { isEmpty, isDecimal, clearInputs, showAlert } from "./utilities.js";

const twoDigits = (twoDigitsStr) => {
  let response = "";
  response += numbersToLetters.tens[twoDigitsStr[0]];
  if (twoDigitsStr[1] > 0) {
    response += ` y ${numbersToLetters.units[twoDigitsStr[1]].toLowerCase()}`;
  }
  return response;
};

const converter = (number) => {
  if (number == 1000) return "Mil";
  if (number == 100) return "Cien";

  if (number <= 9) {
    return numbersToLetters.units[number];
  } else if (number <= 29) {
    return numbersToLetters.exceptions[number];
  }

  const numberStr = number.toString();
  const totalDigits = numberStr.length;

  let response = "";

  if (totalDigits == 2) {
    response = twoDigits(numberStr);
  }

  if (totalDigits == 3) {
    response += numbersToLetters.hundreds[numberStr[0]];
    if (numberStr[1] > 0) {
      const twoDigitsStr = numberStr.slice(1);
      const twoDigitsNumber = parseInt(twoDigitsStr);
      if (twoDigitsNumber <= 29) {
        response += ` ${numbersToLetters.exceptions[
          twoDigitsNumber
        ].toLowerCase()}`;
      } else {
        response += ` ${twoDigits(twoDigitsStr).toLowerCase()}`;
      }
    } else if (numberStr[2] > 0) {
      const oneDigitStr = numberStr.slice(2);
      const oneDigit = parseInt(oneDigitStr);

      response += ` ${numbersToLetters.units[oneDigit].toLowerCase()}`;
    }
  }

  return response;
};

const number = document.querySelector("#number");
const buttonConvert = document.querySelector("#button-convert");
const buttonClear = document.querySelector("#button-clear");
const result = document.querySelector("#result");

buttonClear.addEventListener("click", () => {
  clearInputs(number);
  clearInputs(result);
});

buttonConvert.addEventListener("click", () => {
  clearInputs(result);
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
  if (num < 1 || num > 1000) {
    showAlert("Error", "Por favor, ingrese un número del 1 al 1000");
    return;
  }

  const response = converter(num);
  result.textContent = response;
});
