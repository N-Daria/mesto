import Popup from "./Popup";

export default class ConfirmationPopup extends Popup {
  constructor(popupSelector, callbackFunction) {
    super(popupSelector);
    this._confirmButton = document.querySelector(popupSelector).querySelector('.popup__button')
    this._callbackFunction = callbackFunction;
  }

  close() {
    super.close();
    this._confirmButton.removeEventListener('click', this._callbackFunction)
  }

  open(cardId, cardElement) {
    super.open();
    this._confirmButton.addEventListener('click', () => {
      this._callbackFunction(cardId, cardElement)
    })
  }

}
