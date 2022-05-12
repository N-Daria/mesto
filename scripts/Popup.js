import { popupView } from './consts.js';

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector || popupView;
    this._closeButton = this._popupSelector.querySelector('.popup__close');
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose() {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', this.close);

    document.addEventListener('keydown', this._handleEscClose);

    this._popupSelector.addEventListener('click', (event) => {
      if (event.currentTarget === event.target) {
        this.close();
      }
    });
  }
}
