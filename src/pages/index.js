import './index.css';

import { openEdit, openAdd, settings, editForm, addForm, serverRequestConfig, PhotoChangeForm, openPhotoChange, popupPhotoProfile, confirmDelete } from '../scripts/utils/consts.js';
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
        addFormClass.changeButtonText(false);
      })
      .catch((err) => {
        console.log(err);
      });
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
        profileFormClass.changeButtonText(false);
      }
      )
      .catch((err) => {
        console.log(err);
      });
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
        profilePhotoFormClass.changeButtonText(false);
        profilePhotoFormClass.close();
        PhotoChangeFormValidation.disactivateButtonState();
      })
      .catch((err) => {
        console.log(err);
      });
  }, '.photoProfile'
);

profilePhotoFormClass.setEventListeners();

serverRequest.get('users/me')
  .then((result) => {
    userInformation.setUserInfo(result);
    userInformation.setUserPhoto(result);
    userId = result._id;
  })
  .catch((err) => {
    console.log(err);
  })

serverRequest.get('cards')
  .then((result) => {
    section.renderItems(result);
  })
  .catch((err) => {
    console.log(err);
  });

function changeHeader() {
  editFormValidation.resetErrors();
  profileFormClass.open();
  userInformation.getUserInfo();
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
  serverRequest.deleteLikeCard(cardId)
    .then(() => {
      deletePopup.close();
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

function createCard(data) {
  const photoCard = new Card(data, handleCardClick, cardLikesServerRequest, openPopupDelete, userId);
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