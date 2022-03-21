const openEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup__edit');
const editForm = popupEdit.firstElementChild;
const profileHeader = document.querySelector('.profile__header');
const profileInfo = document.querySelector('.profile__description');
const name = editForm.querySelector('input[name="name"]');
const info = editForm.querySelector('input[name="description"]');

const openAdd = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup__add');
const addForm = popupAdd.firstElementChild;

const openView = document.querySelector('.popup__view');

function popupShow(popup) {
  popup.classList.toggle('popup_opened');
}

openEdit.addEventListener('click', function () {
  popupShow(popupEdit);
  name.value = profileHeader.textContent;
  info.value = profileInfo.textContent;
});

function preventEdit(evt) {
  evt.preventDefault();

  profileHeader.textContent = name.value;
  profileInfo.textContent = info.value;

  popupShow(popupEdit);
}

editForm.addEventListener('submit', preventEdit);

function likeCard(card) {
  card.classList.toggle('elements__like_active');
}

function removeCard(card) {
  card.remove();
}

function viewPhoto(photo) {
  const photoImg = photo.querySelector('.elements__photo').getAttribute('src');
  const photoInfo = photo.querySelector('.elements__text').textContent;
  const photoAlt = photo.querySelector('.elements__photo').getAttribute('alt')

  openView.querySelector('.popup__photo').setAttribute('alt', photoAlt);
  openView.querySelector('.popup__photo').setAttribute('src', photoImg);
  openView.querySelector('.popup__info').textContent = photoInfo;

  popupShow(openView);
}

document.querySelector('.page').addEventListener('click', function (event) {
  const ifClosePopup = event.target.classList.contains('popup__close');
  const ifLike = event.target.classList.contains('elements__like');
  const ifremove = event.target.classList.contains('elements__remove');
  const ifView = event.target.classList.contains('elements__photo');

  if (ifClosePopup) {
    popupShow(event.target.closest('.popup'));
  } if (ifLike) {
    likeCard(event.target);
  } if (ifremove) {
    removeCard(event.target.closest('.elements__card'));
  } if (ifView) {
    viewPhoto(event.target.closest('.elements__card'));
  } else {
    return
  }
})

openAdd.addEventListener('click', function () {
  popupShow(popupAdd);
})

function renderCard(name, link) {
  const elements__gallery = document.querySelector('.elements__gallery');
  const card = document.querySelector('#card').content.firstElementChild.cloneNode(true);

  card.querySelector('.elements__photo').setAttribute('src', link);
  card.querySelector('.elements__text').textContent = name;
  card.querySelector('.elements__photo').setAttribute('alt', name);

  elements__gallery.prepend(card);
}

function addPlace(evt) {
  evt.preventDefault();

  const place = addForm.querySelector('input[name="place"]');
  const link = addForm.querySelector('input[name="link"]');

  renderCard(place.value, link.value);
  popupShow(popupAdd);
}

addForm.addEventListener('submit', addPlace);

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
});
