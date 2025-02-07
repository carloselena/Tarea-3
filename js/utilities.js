const isEmpty = (str) => !str.trim().length;

const isDecimal = (num) => num % 1 > 0;

const clearInputs = (element) => {
  if (element.tagName == "ION-LABEL" || element.tagName == "ION-LIST") {
    element.textContent = "";
    return;
  }
  element.value = "";
};

const showAlert = (header, message) => {
  const alert = document.createElement("ion-alert");
  alert.header = header;
  alert.message = message;
  alert.buttons = ["Ok"];

  document.body.appendChild(alert);
  return alert.present();
};

export { isEmpty, isDecimal, clearInputs, showAlert };
