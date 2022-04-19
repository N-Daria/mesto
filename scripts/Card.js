import { cardTemplate, openView, popupViewImage,  popupViewTitle } from './consts.js';
import {openPopup} from './index.js';

class Card {
  constructor(name, link) {
    this._link = link;
    this._name = name;
    this._alt = name;
  }

  _generateTemplate() {
    const _card = cardTemplate.content.querySelector('.elements__card').cloneNode(true);
    return _card;
  }

  getCard() {
    const _card = this._generateTemplate();
    const _elementPhoto = _card.querySelector('.elements__photo');
    const _elementLike = _card.querySelector('.elements__like');
    const _elementRemove = _card.querySelector('.elements__remove');

    _elementPhoto.setAttribute('src', this._link);
    _card.querySelector('.elements__text').textContent = this._name;
    _elementPhoto.setAttribute('alt', this._name);

    _elementPhoto.addEventListener('click', () => this._viewPhoto(this._name, this._link));
    _elementLike.addEventListener('click', this._likeCard);
    _elementRemove.addEventListener('click', this._removeCard);

    return _card;
  }

  _likeCard(event) {
    event.target.classList.toggle('elements__like_active');
  }

  _removeCard(event) {
    const _card = event.target.closest('.elements__card');
    _card.remove();
  }

  _viewPhoto() {
    popupViewImage.alt = this._name;
    popupViewImage.src = this._link;
    popupViewTitle.textContent = this._name;
    openPopup(openView);
  }
}

export {Card}