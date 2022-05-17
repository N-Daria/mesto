import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(callbackFunction, popupSelector) {
    super(popupSelector);
    this._callbackFunction = callbackFunction;
    this._inputs = Array.from(this._popupSelector.querySelectorAll('input'));
  }

  _getInputValues() {
    this._inputsValues = {};
    this._inputs.forEach((el) => {
      this._inputsValues[el.id] = el.value;
    });
    return this._inputsValues
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupSelector.addEventListener('submit', () => this._callbackFunction(this._getInputValues(), event));
  }

  close() {
    super.close();
    this._popupSelector.querySelector('form').reset();
  }

}