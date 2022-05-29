// import { cardTemplate } from '../utils/consts.js';

export default class Card {
  constructor(data, cardTemplate, handleCardClick, cardLikesServerRequest, openPopupDelete, userId) {
    this._link = data.link;
    this._name = data.name;
    this._handleCardClick = handleCardClick;
    this._elementLikeNumber = data.likes;
    this._cardLikesServerRequest = cardLikesServerRequest;
    this._cardId = data._id;
    this.openPopupDelete = openPopupDelete;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardTemplate = document.querySelector(cardTemplate);
  }

  _generateTemplate() {
    const card = this._cardTemplate.content.querySelector('.elements__card').cloneNode(true);
    return card;
  }

  getCard() {
    this._card = this._generateTemplate();
    this._elementPhoto = this._card.querySelector('.elements__photo');
    this._elementLike = this._card.querySelector('.elements__like');

    this._elementPhoto.setAttribute('src', this._link);
    this._card.querySelector('.elements__text').textContent = this._name;
    this._elementPhoto.setAttribute('alt', this._name);

    this._setEventListeners();
    this._getLikesNumber(this._elementLikeNumber);

    return this._card;
  }

  _setEventListeners() {
    this._elementPhoto.addEventListener('click', () => this._handleCardClick());
    this._elementLike.addEventListener('click', () => this._likeCard());

    const elementRemove = this._card.querySelector('.elements__remove');

    if (this._ownerId === this._userId) {
      elementRemove.addEventListener('click', () => this._openPopupDelete());
    } else {
      elementRemove.remove();
    }
  }

  _getLikesNumber(res) {
    const elementLikeNumber = this._card.querySelector('.elements__like-number');
    elementLikeNumber.textContent = res.length;
  }

  _likeCard() {
    this._cardLikesServerRequest(this._cardId);
    this._elementLike.classList.toggle('elements__like_active');
  }

  _openPopupDelete() {
    this.openPopupDelete(this._cardId, this._card);
  }

}