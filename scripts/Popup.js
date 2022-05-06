import { overlayPopup } from './consts.js';

class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    // this.close = close.bind(this);
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
    document.addEventListener('keydown', this._handleEscClose);

    this._popupSelector.addEventListener('click', (event) => {
      if (event.currentTarget === event.target) {
        this.close();
      }
    });
  }
}

export default Popup