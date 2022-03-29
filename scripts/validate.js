function enableValidation() {
  document.querySelectorAll('.form').forEach((formElement) => {
    formElement.addEventListener('submit', setEventListeners(formElement));
  })
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const formButton = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, formButton);

  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formInput);
      toggleButtonState(inputList, formButton)
    });
  })
}

function isValid(formInput) {
  if (formInput.validity.valid) {
    hideInputError(formInput);
  } else {
    showInputError(formInput, formInput.validationMessage);
  }
}

function showInputError(element, errorMessage) {
  const error = document.querySelector(`.${element.id}-error`);

  element.classList.add('popup__input_error');
  error.textContent = errorMessage;
  error.classList.add('popup__input-error_active');
}

function hideInputError(element) {
  const error = document.querySelector(`.${element.id}-error`);

  element.classList.remove('popup__input_error');
  error.classList.remove('popup__input-error_active');
  error.textContent = '';
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, formButton) {
  if (hasInvalidInput(inputList)) {
    formButton.classList.add('popup__button_disabled');
  } else {
    formButton.classList.remove('popup__button_disabled');
  }
}

enableValidation();