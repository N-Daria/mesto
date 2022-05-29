import Popup from './Popup.js';
export default  class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector)
    this._popupViewImage = document.querySelector('.popup__photo');
    this._popupViewTitle = document.querySelector('.popup__info');
  }
  
  open(link, name) {
    this._popupViewImage.alt = name;
    this._popupViewImage.src = link;
    this._popupViewTitle.textContent = name;
    super.open();
  }
}

