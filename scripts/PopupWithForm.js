import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(callbackFunction, popupSelector) {
    super(popupSelector);
    this._callbackFunction = callbackFunction;
    this._popupSelector = popupSelector;
  }

  _getInputValues() {
    // собирает данные всех полей формы.


  }

  setEventListeners() {
    // должен добавлять обработчик сабмита формы.
    super.setEventListeners();

    this._popupSelector.addEventListener('submit', this._callbackFunction);
  }

  close() {
    super.close();



    // при закрытии попапа форма должна ещё и сбрасываться.
  }
}