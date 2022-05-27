export const openEdit = document.querySelector('.profile__edit');
export const popupEdit = document.querySelector('.edit');
export const editForm = popupEdit.querySelector('.editForm');
export const name = editForm.querySelector('input[name="name"]');
export const info = editForm.querySelector('input[name="about"]');

export const cardTemplate = document.querySelector('#card');
export const addForm = document.querySelector('.addForm');
export const openAdd = document.querySelector('.profile__add');

export const popupView = document.querySelector('.view');
export const popupViewImage = popupView.querySelector('.popup__photo');
export const popupViewTitle = popupView.querySelector('.popup__info');

export const openPhotoChange = document.querySelector('.profile__image-container');
export const popupPhotoProfile = document.querySelector('.photoProfile');
export const PhotoChangeForm = popupPhotoProfile.querySelector('.PhotoChange');
export const photo = PhotoChangeForm.querySelector('.input[name="avatar"]')

// export const initialCards = [
// {
//   name: 'Архыз',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
// },
// {
//   name: 'Челябинская область',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
// },
// {
//   name: 'Иваново',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
// },
// {
//   name: 'Камчатка',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
// },
// {
//   name: 'Холмогорский район',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
// },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

export const serverRequestConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-41',
  authorization: 'de7c312c-842d-4e34-9281-7fe5527921f9'
}