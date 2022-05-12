import { popupViewImage, popupViewTitle } from './consts.js';
import Popup from './Popup.js';
export default  class PopupWithImage extends Popup {
  open(link, name) {
    popupViewImage.alt = name;
    popupViewImage.src = link;
    popupViewTitle.textContent = name;
    super.open();
  }
}