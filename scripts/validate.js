function enableValidation(settings) {
  document.querySelectorAll(settings.formSelector).forEach((formElement) => {
    setEventListeners(formElement, settings);
  })
}

function setEventListeners(formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const formButton = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, formButton, settings);

  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formInput, settings);
      toggleButtonState(inputList, formButton, settings)
    });
  })
}

function isValid(formInput, settings) {
  if (formInput.validity.valid) {
    hideInputError(formInput, settings);
  } else {
    showInputError(formInput, formInput.validationMessage, settings);
  }
}

function showInputError(element, errorMessage, settings) {
  const error = document.querySelector(`.${element.id}-error`);

  element.classList.add(settings.inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(settings.errorClass);
}

function hideInputError(element, settings) {
  const error = document.querySelector(`.${element.id}-error`);

  element.classList.remove(settings.inputErrorClass);
  error.classList.remove(settings.errorClass);
  error.textContent = '';
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, formButton, settings) {
  if (hasInvalidInput(inputList)) {
    formButton.classList.add(settings.inactiveButtonClass);
    formButton.disabled = true;
  } else {
    formButton.classList.remove(settings.inactiveButtonClass);
    formButton.disabled = false;
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
});