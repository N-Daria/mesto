import { openEdit, popupView, popupEdit, editForm, name, info, elementsGallery, openAdd, popupAdd, addForm, place, link, initialCards, settings, formsList } from './consts.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js'

import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js'


const editFormValidation = new FormValidator(settings, formsList[0]);
const addFormValidation = new FormValidator(settings, formsList[1]);

const popupAddClass = new Popup(popupAdd);
const popupEditClass = new Popup(popupEdit);
const popupViewClass = new Popup(popupView);

const userInformation = new UserInfo(name, info);

const AddFormClass = new PopupWithForm(
  function (evt) {
    evt.preventDefault();
    const photoCard = createCard(place.value, link.value);
    addCard(photoCard.getCard());
    AddFormClass.close();
    addFormValidation.disactivateButtonState();
  }, popupAdd
);

AddFormClass.setEventListeners();

const ProfileFormClass = new PopupWithForm(
  function (evt) {
    evt.preventDefault();
    userInformation.setUserInfo();
    popupEditClass.close();
    editFormValidation.disactivateButtonState();
  }, popupEdit
);

ProfileFormClass.setEventListeners();

function changeHeader() {
  editFormValidation.resetErrors();
  popupEditClass.open();
  userInformation.getUserInfo();
  editFormValidation.enableValidation();
}


openAdd.addEventListener('click', function () {
  addFormValidation.enableValidation();
  popupAddClass.open();
})

openEdit.addEventListener('click', changeHeader);


window.addEventListener('load', function () {
  initialCards.forEach((element) => {
    const photoCard = createCard(element.name, element.link);
    addCard(photoCard.getCard());
  })
});

function addCard(card) {
  elementsGallery.prepend(card);
}

function createCard(name, link) {
  const photoCard = new Card(name, link);
  return photoCard;
}