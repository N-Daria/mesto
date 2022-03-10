let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');
let openPopup = document.querySelector('.profile__edit');

let form = document.querySelector('.popup__container');

let name = document.querySelector('.popup__name');
let info = document.querySelector('.popup__description');

let profileHeader = document.querySelector('.profile__header');
let profileInfo = document.querySelector('.profile__description');

function popupShow() {
  popup.classList.toggle('popup_opened');
}

openPopup.addEventListener('click', popupShow);
closePopup.addEventListener('click', popupShow);

name.value = profileHeader.textContent;
info.value = profileInfo.textContent;

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  profileHeader.textContent = name.value;
  profileInfo.textContent = info.value;

  popupShow();
})