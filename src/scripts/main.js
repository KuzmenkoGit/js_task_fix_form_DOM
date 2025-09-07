'use strict';

const inputsForm = document.querySelectorAll('form input');

inputsForm.forEach((input) => {
  const nameInput = input.name;
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', input.id);
  labelElement.textContent = nameInput;

  input.before(labelElement);
  input.placeholder = capitalize(nameInput);
});
