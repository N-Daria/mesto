const openEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.edit');
const editForm = popupEdit.querySelector('.editForm');
const profileHeader = document.querySelector('.profile__header');
const profileInfo = document.querySelector('.profile__description');
const name = editForm.querySelector('input[name="name"]');
const info = editForm.querySelector('input[name="description"]');

const elementsGallery = document.querySelector('.elements__gallery');
const cardTemplate = document.querySelector('#card');
const openAdd = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.add');
const addForm = popupAdd.querySelector('.addForm');
const place = addForm.querySelector('input[name="place"]');
const link = addForm.querySelector('input[name="link"]');

const openView = document.querySelector('.view');
const popupViewImage = openView.querySelector('.popup__photo');
const popupViewTitle = openView.querySelector('.popup__info');

const closeButtons = document.querySelectorAll('.popup__close');
const overlayPopup = document.querySelectorAll('.popup');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

export { openEdit, popupEdit, editForm, profileHeader, profileInfo, name, info, elementsGallery, cardTemplate, openAdd, popupAdd, addForm, place, link, openView, popupViewImage, popupViewTitle, closeButtons, overlayPopup, initialCards, settings }