import { popupViewImage, popupViewTitle } from '../utils/consts.js';
import Popup from './Popup.js';
export default  class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector)
  }
  open(link, name) {
    popupViewImage.alt = name;
    popupViewImage.src = link;
    popupViewTitle.textContent = name;
    super.open();
  }
}