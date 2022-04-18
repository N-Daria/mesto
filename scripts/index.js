// import * as consts from './ js';
// import * as card from './ js';

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', clossingWithEsc);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', clossingWithEsc);
}

function clossingWithEsc() {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function changeHeader() {
  openPopup(popupEdit);
  name.value = profileHeader.textContent;
  info.value = profileInfo.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  if (editForm.querySelector('.popup__button_edit').disabled === false) {
    profileHeader.textContent = name.value;
    profileInfo.textContent = info.value;
    closePopup(popupEdit);
  }
}

function addCard(card) {
  elementsGallery.prepend(card);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const addButton = addForm.querySelector('.popup__button_add');

  if (addForm.querySelector('.popup__button_add').disabled === false) {
    const photoCard = new Card(place.value, link.value);
    addCard(photoCard.getCard());
    closePopup(popupAdd);
    addForm.reset();
    addButton.disabled = true;
    addButton.classList.add('popup__button_disabled');
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
    const photoCard = new Card(element.name, element.link)
    addCard(photoCard.getCard());
  })
});

overlayPopup.forEach(function (element) {
  element.addEventListener('click', function (event) {
    if (event.currentTarget === event.target) {
      closePopup(event.target.closest('.popup'));
    }
  });
})
