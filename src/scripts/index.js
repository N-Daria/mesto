import '../pages/index.css';

import { openEdit, profileHeader, profileInfo, openAdd, initialCards, settings, formsList } from './consts.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js'
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js'

const editFormValidation = new FormValidator(settings, formsList[0]);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(settings, formsList[1]);
addFormValidation.enableValidation();

const userInformation = new UserInfo(profileHeader, profileInfo);

const popupAddClass = new Popup('.add');
const popupEditClass = new Popup('.edit');
const bigPhoto = new PopupWithImage('.view');

const addFormClass = new PopupWithForm(
  function (inputsData, evt) {
    evt.preventDefault();
    inputsData = { name: inputsData['place-input'], link: inputsData['link-input'] };
    const photoCard = createCard(inputsData);
    section.addItem(photoCard);
    addFormClass.close();
    addFormValidation.disactivateButtonState();
  }, '.add'
);

addFormClass.setEventListeners();

const profileFormClass = new PopupWithForm(
  function (inputsData, evt) {
    evt.preventDefault();
    userInformation.setUserInfo(inputsData);
    popupEditClass.close();
    editFormValidation.disactivateButtonState();
  }, '.edit'
);

profileFormClass.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      const photoCard = createCard(element);
      section.addItem(photoCard);
    }
  },
  '.elements__gallery')

function changeHeader() {
  editFormValidation.resetErrors();
  popupEditClass.open();
  userInformation.getUserInfo();
}

function handleCardClick() {
  bigPhoto.open(this._link, this._name);
  bigPhoto.setEventListeners();
}

function createCard(data) {
  const photoCard = new Card({ data }, handleCardClick);
  return photoCard.getCard()
}

openAdd.addEventListener('click', function () {
  popupAddClass.open();
})

openEdit.addEventListener('click', changeHeader);

window.addEventListener('load', function () {
  section.renderItems();
});
