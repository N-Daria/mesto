import { openEdit, popupView, popupEdit, editForm, profileHeader, profileInfo, name, info, elementsGallery, openAdd, popupAdd, addForm, place, link, initialCards, settings, formsList } from './consts.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js'
// import { openPopup, closePopup } from './utils.js';

import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';


const editFormValidation = new FormValidator(settings, formsList[0]);
const addFormValidation = new FormValidator(settings, formsList[1]);

const popupAddClass = new Popup(popupAdd);
const popupEditClass = new Popup(popupEdit);
const popupViewClass = new Popup(popupView);

const AddFormClass = new PopupWithForm(
  function (evt) {
    evt.preventDefault();
    const photoCard = createCard(place.value, link.value);
    addCard(photoCard.getCard());
    popupAddClass.close();
    addForm.reset();
    addFormValidation.disactivateButtonState();
  }, popupAdd
);

AddFormClass.setEventListeners();

const ProfileFormClass = new PopupWithForm(
  function (evt) {
    evt.preventDefault();
    profileHeader.textContent = name.value;
    profileInfo.textContent = info.value;
    popupEditClass.close();
    editFormValidation.disactivateButtonState();
  }, popupEdit
);

ProfileFormClass.setEventListeners();


function changeHeader() {
  editFormValidation.resetErrors();
  popupEditClass.open();
  name.value = profileHeader.textContent;
  info.value = profileInfo.textContent;
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