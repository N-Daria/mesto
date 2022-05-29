import './index.css';

import { openEdit, openAdd, settings, editForm, addForm, serverRequestConfig, PhotoChangeForm, openPhotoChange, userNameInput, userInfoInput, popupPhotoProfile, confirmDelete } from '../scripts/utils/consts.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js'
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js'
import Api from '../scripts/components/Api';
import ConfirmationPopup from '../scripts/components/ConfirmationPopup.js';

let userId = '';

const editFormValidation = new FormValidator(settings, editForm);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(settings, addForm);
addFormValidation.enableValidation();

const PhotoChangeFormValidation = new FormValidator(settings, PhotoChangeForm);
PhotoChangeFormValidation.enableValidation();

const bigPhoto = new PopupWithImage('.view');
bigPhoto.setEventListeners();

const serverRequest = new Api(serverRequestConfig);

const userInformation = new UserInfo('.profile__header', '.profile__description', '.profile__avatar');

const deletePopup = new ConfirmationPopup('.delete', deleteCard)
deletePopup.setEventListeners();

const section = new Section(
  {
    renderer: (element) => {
      const photoCard = createCard(element);
      section.addItem(photoCard);
    }
  },
  '.elements__gallery')

const addFormClass = new PopupWithForm(
  function (inputsData, evt) {
    evt.preventDefault();
    addFormClass.changeButtonText(true);
    inputsData = { name: inputsData.place, link: inputsData.link };
    serverRequest.postNewCard(inputsData)
      .then((res) => {
        const photoCard = createCard(res);
        section.addItem(photoCard);
        addFormValidation.disactivateButtonState();
        addFormClass.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addFormClass.changeButtonText(false);
      })
  }, '.add'
);

addFormClass.setEventListeners();

const profileFormClass = new PopupWithForm(
  function (inputsData, evt) {
    evt.preventDefault();
    profileFormClass.changeButtonText(true);
    serverRequest.patchUserInfo(inputsData)
      .then((res) => {
        userInformation.setUserInfo(res);
        editFormValidation.disactivateButtonState();
        profileFormClass.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profileFormClass.changeButtonText(false);
      })
  }, '.edit'
);

profileFormClass.setEventListeners();

const profilePhotoFormClass = new PopupWithForm(
  function (inputsData, evt) {
    evt.preventDefault();
    profilePhotoFormClass.changeButtonText(true);
    serverRequest.patchUserPhoto(inputsData)
      .then(res => {
        userInformation.setUserPhoto(inputsData);
        PhotoChangeFormValidation.disactivateButtonState();
        profilePhotoFormClass.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profilePhotoFormClass.changeButtonText(false);
      })
  }, '.photoProfile'
);

profilePhotoFormClass.setEventListeners();

Promise.all([serverRequest.get('users/me'), serverRequest.get('cards')])
  .then(([userData, cards]) => {
    userInformation.setUserInfo(userData);
    userInformation.setUserPhoto(userData);
    userId = userData._id;

    section.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

function changeHeader() {
  editFormValidation.resetErrors();
  profileFormClass.open();
  userNameInput.value = (userInformation.getUserInfo()).name;
  userInfoInput.value = (userInformation.getUserInfo()).info;
}

function handleCardClick() {
  bigPhoto.open(this._link, this._name);
}

function cardLikesServerRequest() {
  if (!(this._elementLike.classList.contains('elements__like_active'))) {
    serverRequest.likeCard(this._cardId)
      .then(res => {
        this._getLikesNumber(res.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    serverRequest.deleteLikeCard(this._cardId)
      .then(res => {
        this._getLikesNumber(res.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function openPopupDelete(cardId, cardElement) {
  deletePopup.open(cardId, cardElement);
}

function deleteCard(cardId, cardElement) {
  serverRequest.deleteCard(cardId)
    .then(() => {
      deletePopup.close();
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

function createCard(data) {
  const photoCard = new Card(data, '#card', handleCardClick, cardLikesServerRequest, openPopupDelete, userId);
  return photoCard.getCard()
}

openAdd.addEventListener('click', function () {
  addFormValidation.resetErrors();
  addFormClass.open();
})

openEdit.addEventListener('click', changeHeader);

openPhotoChange.addEventListener('click', function () {
  PhotoChangeFormValidation.resetErrors();
  profilePhotoFormClass.open();
})