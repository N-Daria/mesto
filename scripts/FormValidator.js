class FormValidator {
  constructor(settings, formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(settings.inputSelector));
    this._formButton = this._formElement.querySelector(settings.submitButtonSelector);
  }

  enableValidation() {
    this._toggleButtonState();
    this._inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        this._isValid(formInput);
        this._toggleButtonState()
      });
    })
  }

  _isValid(formInput) {
    if (formInput.validity.valid) {
      this._hideInputError(formInput);
    } else {
      this._showInputError(formInput, formInput.validationMessage);
    }
  }

  _showInputError(formInput, errorMessage) {
    const error = document.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(settings.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(settings.errorClass);
  }

  _hideInputError(formInput) {
    const error = document.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(settings.inputErrorClass);
    error.classList.remove(settings.errorClass);
    error.textContent = '';
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._formButton.classList.add(settings.inactiveButtonClass);
      this._formButton.disabled = true;
    } else {
      this._formButton.classList.remove(settings.inactiveButtonClass);
      this._formButton.disabled = false;
    }
  }

}
