let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');
let openPopup = document.querySelector('.profile__edit');

let form = document.querySelector('.popup__container');

let name = form.querySelector('input[name="name"]');
let info = form.querySelector('input[name="description"]');

let profileHeader = document.querySelector('.profile__header');
let profileInfo = document.querySelector('.profile__description');

function popupShow() {
  popup.classList.toggle('popup_opened');
}

function preventSubmit(evt) {
  evt.preventDefault();

  profileHeader.textContent = name.value;
  profileInfo.textContent = info.value;

  popupShow();
}

openPopup.addEventListener('click', function () {
  popupShow();
  name.value = profileHeader.textContent;
  info.value = profileInfo.textContent;
});

closePopup.addEventListener('click', function () {
  popupShow();
});

form.addEventListener('submit', preventSubmit);