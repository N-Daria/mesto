import { openEdit, popupEdit, name, info, elementsGallery, openAdd, popupAdd, place, link, initialCards, settings, formsList } from './consts.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js'
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js'

const editFormValidation = new FormValidator(settings, formsList[0]);
const addFormValidation = new FormValidator(settings, formsList[1]);
const userInformation = new UserInfo(name, info);

const popupAddClass = new Popup(popupAdd);
const popupEditClass = new Popup(popupEdit);

const AddFormClass = new PopupWithForm(
  function (evt) {
    evt.preventDefault();
    const newCardData = { name: place.value, link: link.value };
    const photoCard = createCard(newCardData);
    section.addItem(photoCard.getCard());
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

const section = new Section(
  {
    items: initialCards,
    renderer: (element) => { 
      const photoCard = createCard(element);
      section.addItem(photoCard.getCard());
    }
  },
  elementsGallery)

function changeHeader() {
  editFormValidation.resetErrors();
  popupEditClass.open();
  userInformation.getUserInfo();
  editFormValidation.enableValidation();
}

function handleCardClick() {
  const bigPhoto = new PopupWithImage();
  bigPhoto.open(this._link, this._name);
}

openAdd.addEventListener('click', function () {
  addFormValidation.enableValidation();
  popupAddClass.open();
})

openEdit.addEventListener('click', changeHeader);

window.addEventListener('load', function () {
  section.renderItems();
});

function createCard(data) {
  const photoCard = new Card({ data }, handleCardClick);
  return photoCard
}
