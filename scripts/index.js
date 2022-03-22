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

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function changeHeader() {
  openPopup(popupEdit);
  name.value = profileHeader.textContent;
  info.value = profileInfo.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileHeader.textContent = name.value;
  profileInfo.textContent = info.value;

  closePopup(popupEdit);
}

function likeCard(evt) {
  evt.target.classList.toggle('elements__like_active');
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

  openPopup(openView);
}

function renderCard(name, link) {
  const card = cardTemplate.content.querySelector('.elements__card').cloneNode(true);
  const elementPhoto = card.querySelector('.elements__photo');

  elementPhoto.setAttribute('src', link);
  card.querySelector('.elements__text').textContent = name;
  elementPhoto.setAttribute('alt', name);

  elementsGallery.prepend(card);
}

function addPlace(evt) {
  evt.preventDefault();
  renderCard(place.value, link.value);
  closePopup(popupAdd);
  addForm.reset();
}

openEdit.addEventListener('click', changeHeader);

editForm.addEventListener('submit', handleProfileFormSubmit);

document.querySelector('.page').addEventListener('click', function (event) {
  const ifClosePopup = event.target.classList.contains('popup__close');
  const ifLike = event.target.classList.contains('elements__like');
  const ifremove = event.target.classList.contains('elements__remove');
  const ifView = event.target.classList.contains('elements__photo');

  if (ifClosePopup) {
    closePopup(event.target.closest('.popup'));
  } if (ifLike) {
    likeCard(event);
  } if (ifremove) {
    removeCard(event.target.closest('.elements__card'));
  } if (ifView) {
    viewPhoto(event.target.closest('.elements__card'));
  } else {
    return
  }
})

openAdd.addEventListener('click', function () {
  openPopup(popupAdd);
})

addForm.addEventListener('submit', addPlace);

window.addEventListener('load', function () {

  initialCards.forEach(function (element) {
    renderCard(element.name, element.link);
  })
});
