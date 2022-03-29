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

let photoCard;

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

  if (!(editForm.querySelector('.popup__button_edit').classList.contains('popup__button_disabled'))) {
    profileHeader.textContent = name.value;
    profileInfo.textContent = info.value;
    closePopup(popupEdit);
  }
}

function likeCard(evt) {
  evt.target.classList.toggle('elements__like_active');
}

function removeCard(event) {
  const card = event.target.closest('.elements__card');
  card.remove();
}

function viewPhoto(name, link) {
  popupViewImage.alt = name;
  popupViewImage.src = link;
  popupViewTitle.textContent = name;
  openPopup(openView);
}

function renderCard(name, link) {
  const card = cardTemplate.content.querySelector('.elements__card').cloneNode(true);
  const elementPhoto = card.querySelector('.elements__photo');
  const elementLike = card.querySelector('.elements__like');
  const elementRemove = card.querySelector('.elements__remove');

  elementPhoto.setAttribute('src', link);
  card.querySelector('.elements__text').textContent = name;
  elementPhoto.setAttribute('alt', name);

  elementPhoto.addEventListener('click', () => viewPhoto(name, link));
  elementLike.addEventListener('click', () => likeCard(event));
  elementRemove.addEventListener('click', removeCard);
  return card;
}

function addCard(card) {
  elementsGallery.prepend(card);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  if (!(addForm.querySelector('.popup__button_add').classList.contains('popup__button_disabled'))) {
    photoCard = renderCard(place.value, link.value);
    addCard(photoCard);
    closePopup(popupAdd);
    addForm.reset();
  }
}

closeButtons.forEach(function (element) {
  element.addEventListener('click', function (event) {
    closePopup(event.target.closest('.popup'))
  })
})

openEdit.addEventListener('click', changeHeader);

editForm.addEventListener('submit', handleProfileFormSubmit);

openAdd.addEventListener('click', function () {
  openPopup(popupAdd);
})

addForm.addEventListener('submit', handleAddFormSubmit);

window.addEventListener('load', function () {
  initialCards.forEach(function (element) {
    photoCard = renderCard(element.name, element.link);
    addCard(photoCard);
  })
});


const overlayPopup = document.querySelectorAll('.popup');

overlayPopup.forEach(function (element) {
  element.addEventListener('click', function (event) {
    if (event.currentTarget === event.target) {
      closePopup(event.target.closest('.popup'));
    }
  });
})

// overlayPopup.forEach(function (element) {
//   element.addEventListener('keydown', function (event) {
//     console.log(event.key);
//     // debugger
//     if (event.key === 'Escape') {
//       closePopup(event.target.closest('.popup'));
//     }
//   });
// })