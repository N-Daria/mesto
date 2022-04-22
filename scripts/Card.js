import { openView, popupViewImage, popupViewTitle, cardTemplate } from './consts.js';
import { openPopup } from './utils.js';

export class Card {
  constructor(name, link) {
    this._link = link;
    this._name = name;
  }

  _generateTemplate() {
    const card = cardTemplate.content.querySelector('.elements__card').cloneNode(true);
    return card;
  }

  getCard() {
    this._card = this._generateTemplate();
    const elementPhoto = this._card.querySelector('.elements__photo');
    this._elementLike = this._card.querySelector('.elements__like');
    const elementRemove = this._card.querySelector('.elements__remove');

    elementPhoto.setAttribute('src', this._link);
    this._card.querySelector('.elements__text').textContent = this._name;
    elementPhoto.setAttribute('alt', this._name);

    elementPhoto.addEventListener('click', () => this._viewPhoto());
    this._elementLike.addEventListener('click', () => this._likeCard());
    elementRemove.addEventListener('click', () => this._removeCard());

    return this._card;
  }

  _likeCard() {
    this._elementLike.classList.toggle('elements__like_active');
  }

  _removeCard() {
    this._card.remove();
  }

  _viewPhoto() {
    popupViewImage.alt = this._name;
    popupViewImage.src = this._link;
    popupViewTitle.textContent = this._name;
    openPopup(openView);
  }
}