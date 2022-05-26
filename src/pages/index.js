import './index.css';

import { openEdit, openAdd, settings, editForm, addForm, serverRequestConfig } from '../scripts/utils/consts.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js'
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js'
import Api from '../scripts/components/Api';


const editFormValidation = new FormValidator(settings, editForm);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(settings, addForm);
addFormValidation.enableValidation();

const bigPhoto = new PopupWithImage('.view');
bigPhoto.setEventListeners();

const serverRequest = new Api(serverRequestConfig);

const userInformation = new UserInfo('.profile__header', '.profile__description', '.profile__avatar');


serverRequest.get('users/me')
  .then((result) => {
    userInformation.setUserInfo(result)
  });

const section = new Section(
  {
    renderer: (element) => {
      const photoCard = createCard(element);
      section.addItem(photoCard);
    }
  },
  '.elements__gallery')

serverRequest.get('cards')
  .then((result) => {
    section.renderItems(result);
  })
  .catch((err) => {
    console.log(err);
  });







const addFormClass = new PopupWithForm(
  function (inputsData, evt) {
    evt.preventDefault();
    inputsData = { name: inputsData.place, link: inputsData.link };
    serverRequest.postNewCard(inputsData)
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
    serverRequest.patchUserInfo(inputsData);
    userInformation.setUserInfo(inputsData);
    profileFormClass.close();
    editFormValidation.disactivateButtonState();
  }, '.edit'
);

profileFormClass.setEventListeners();

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
  } else {
    serverRequest.deleteLikeCard(this._cardId)
      .then(res => {
        this._getLikesNumber(res.likes);
      })
  }
}

function createCard(data) {
  const photoCard = new Card({ data }, handleCardClick, cardLikesServerRequest);
  return photoCard.getCard()
}

openAdd.addEventListener('click', function () {
  addFormClass.open();
})

openEdit.addEventListener('click', changeHeader);


