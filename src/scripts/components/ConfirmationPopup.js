import Popup from "./Popup";

export default class ConfirmationPopup extends Popup {
  constructor(popupSelector, callbackFunction) {
    super(popupSelector);
    this._confirmButton = document.querySelector(popupSelector).querySelector('.popup__button')
    this._callbackFunction = callbackFunction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener('click', () => {
      this._callbackFunction(this._cardData);
    })
  }

  giveCardData(cardId, cardElement) {
    this._cardData = { cardId, cardElement };
    return this._cardData
  }

}
