'use strict';

const inputsForm = document.querySelectorAll('form input');

inputsForm.forEach((input, index) => {
  const nameInput = input.name;
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');

  if (!input.id) {
     input.id = `input-${input.name || 'field'}-${index}`;
  }
  labelElement.htmlFor = input.id
  labelElement.textContent = nameInput;

  input.placeholder = capitalize(nameInput);
  input.parentElement.append(labelElement)

});
