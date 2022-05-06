import { openEdit, popupEdit, editForm, profileHeader, profileInfo, name, info, elementsGallery, openAdd, popupAdd, addForm, place, link, closeButtons, overlayPopup, initialCards, settings, formsList } from './consts.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js'
import { openPopup, closePopup } from './utils.js';

import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';

const editFormValidation = new FormValidator(settings, formsList[0]);
const addFormValidation = new FormValidator(settings, formsList[1]);

function changeHeader() {
  editFormValidation.resetErrors();
  openPopup(popupEdit);
  name.value = profileHeader.textContent;
  info.value = profileInfo.textContent;
  editFormValidation.enableValidation();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileHeader.textContent = name.value;
  profileInfo.textContent = info.value;
  closePopup(popupEdit);
  editFormValidation.disactivateButtonState();
}

function addCard(card) {
  elementsGallery.prepend(card);
}

function createCard(name, link) {
  const photoCard = new Card(name, link);
  return photoCard;
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const photoCard = createCard(place.value, link.value);
  addCard(photoCard.getCard());
  closePopup(popupAdd);
  addForm.reset();
  addFormValidation.disactivateButtonState();
}

closeButtons.forEach(function (element) {
  element.addEventListener('click', function (event) {
    closePopup(event.target.closest('.popup'))
  })
})

openEdit.addEventListener('click', changeHeader);

editForm.addEventListener('submit', handleProfileFormSubmit);

openAdd.addEventListener('click', function () {
  addFormValidation.enableValidation();
  openPopup(popupAdd);
})

addForm.addEventListener('submit', handleAddFormSubmit);

// overlayPopup.forEach(function (element) {
//   element.addEventListener('click', function (event) {
//     if (event.currentTarget === event.target) {
//       closePopup(event.target.closest('.popup'));
//     }
//   });
// })

window.addEventListener('load', function () {
  initialCards.forEach((element) => {
    const photoCard = createCard(element.name, element.link);
    addCard(photoCard.getCard());
  })
});