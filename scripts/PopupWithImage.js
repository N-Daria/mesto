import { popupViewImage, popupViewTitle } from './consts.js';
import Popup from './Popup.js';

class PopupWithImage extends Popup {
  open(link, name) {
    popupViewImage.alt = name;
    popupViewImage.src = link;
    popupViewTitle.textContent = name;
    super.open();
  }
}

export default PopupWithImage