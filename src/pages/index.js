import './index.css';

import { openEdit, openAdd, initialCards, settings, editForm, addForm } from '../scripts/utils/consts.js';
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

const userInformation = new UserInfo('.profile__header', '.profile__description');

const userInformationFromServer = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-41/users/me',
  headers: {
    headers: {
      authorization: 'de7c312c-842d-4e34-9281-7fe5527921f9'
    }
  }
}

const yy = new Api(userInformationFromServer);
// console.log(yy)

const ff = yy.get();

// console.log(ff)


// fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
//   headers: {
//     authorization: 'de7c312c-842d-4e34-9281-7fe5527921f9'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });




const bigPhoto = new PopupWithImage('.view');
bigPhoto.setEventListeners();

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
    profileFormClass.close();
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
  profileFormClass.open();
  userInformation.getUserInfo();
}

function handleCardClick() {
  bigPhoto.open(this._link, this._name);
}

function createCard(data) {
  const photoCard = new Card({ data }, handleCardClick);
  return photoCard.getCard()
}

openAdd.addEventListener('click', function () {
  addFormClass.open();
})

openEdit.addEventListener('click', changeHeader);

window.addEventListener('load', function () {
  section.renderItems();
});
