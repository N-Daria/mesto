import { cardTemplate } from '../utils/consts.js';

export default class Card {
  constructor({ data }, handleCardClick, cardLikesServerRequest) {
    this._link = data.link;
    this._name = data.name;
    this._handleCardClick = handleCardClick;

    this._elementLikeNumber = data.likes;
    this._cardLikesServerRequest = cardLikesServerRequest;
    this._cardId = data._id;
    this._count = 0;
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

    elementPhoto.addEventListener('click', () => this._handleCardClick());
    this._elementLike.addEventListener('click', () => this._likeCard());
    elementRemove.addEventListener('click', () => this._removeCard());
    this._getLikesNumber(this._elementLikeNumber);

    return this._card;
  }

  _getLikesNumber(res) {
    const elementLikeNumber = this._card.querySelector('.elements__like-number');
    elementLikeNumber.textContent = res.length;
  }

  _likeCard() {
    this._cardLikesServerRequest(this._cardId);
    this._elementLike.classList.toggle('elements__like_active');
  }

  _removeCard() {
    this._card.remove();
    this._element = null;
  }
}