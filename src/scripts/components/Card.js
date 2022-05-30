export default class Card {
  constructor(config) {
    this._link = config.data.link;
    this._name = config.data.name;
    this._handleCardClick = config.handleCardClick;
    this._elementLikeNumber = config.data.likes;
    this._cardLikesServerRequest = config.cardLikesServerRequest;
    this._cardId = config.data._id;
    this._userId = config.userId;
    this._ownerId = config.data.owner._id;
    this._cardTemplate = document.querySelector(config.cardTemplate);
    this.handleDeleteClick = config.handleDeleteClick;
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
    this._elementLike.addEventListener('click', () => this._cardLikesServerRequest());

    const elementRemove = this._card.querySelector('.elements__remove');

    if (this._ownerId === this._userId) {
      elementRemove.addEventListener('click', () => {
        this.handleDeleteClick(this._cardId, this._card);
      });
    } else {
      elementRemove.remove();
    }
  }

  _getLikesNumber(res) {
    const elementLikeNumber = this._card.querySelector('.elements__like-number');
    elementLikeNumber.textContent = res.length;
  }

}