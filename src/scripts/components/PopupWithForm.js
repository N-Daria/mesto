import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(callbackFunction, popupSelector) {
    super(popupSelector);
    this._callbackFunction = callbackFunction;
    this._inputs = Array.from(this._popupSelector.querySelectorAll('input'));
    this._button = document.querySelector(popupSelector).querySelector('.popup__button');
    this._buttonText = this._button.textContent;
    this._form = this._popupSelector.querySelector('form');
  }

  _getInputValues() {
    const inputsValues = {};
    this._inputs.forEach((el) => {
      inputsValues[el.name] = el.value;
    });
    return inputsValues
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupSelector.addEventListener('submit', () => {
      this._callbackFunction(this._getInputValues(), event)
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  changeButtonText(config) {
    if (config) {
      this._button.textContent = 'Сохранение...';
    }
    else {
      this._button.textContent = `${this._buttonText}`;
    }
  }

}