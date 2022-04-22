export const openEdit = document.querySelector('.profile__edit');
export const popupEdit = document.querySelector('.edit');
export const editForm = popupEdit.querySelector('.editForm');
export const profileHeader = document.querySelector('.profile__header');
export const profileInfo = document.querySelector('.profile__description');
export const name = editForm.querySelector('input[name="name"]');
export const info = editForm.querySelector('input[name="description"]');

export const elementsGallery = document.querySelector('.elements__gallery');
export const cardTemplate = document.querySelector('#card');
export const openAdd = document.querySelector('.profile__add');
export const popupAdd = document.querySelector('.add');
export const addForm = popupAdd.querySelector('.addForm');
export const place = addForm.querySelector('input[name="place"]');
export const link = addForm.querySelector('input[name="link"]');

export const openView = document.querySelector('.view');
export const popupViewImage = openView.querySelector('.popup__photo');
export const popupViewTitle = openView.querySelector('.popup__info');

export const closeButtons = document.querySelectorAll('.popup__close');
export const overlayPopup = document.querySelectorAll('.popup');

export const initialCards = [
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

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};


export const formsList = Array.from(document.querySelectorAll(settings.formSelector));