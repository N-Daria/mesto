const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const openPopup = document.querySelector('.profile__edit');

const form = document.querySelector('.popup__container');

const name = form.querySelector('input[name="name"]');
const info = form.querySelector('input[name="description"]');

const profileHeader = document.querySelector('.profile__header');
const profileInfo = document.querySelector('.profile__description');

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





function renderCard(name, link) {
  const elements__gallery = document.querySelector('.elements__gallery');
  const card = document.querySelector('#card').content.firstElementChild.cloneNode(true);

  card.querySelector('.elements__photo').setAttribute('src', link);
  card.querySelector('.elements__text').textContent = name;

  elements__gallery.append(card);
}

window.addEventListener('load', function () {

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

  initialCards.forEach(function (element) {
    renderCard(element.name, element.link);
  })
})
