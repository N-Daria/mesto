/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/Api.js":
/*!***************************************!*\
  !*** ./src/scripts/components/Api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(config) {
    _classCallCheck(this, Api);

    this._url = config.url;
    this._authorization = config.authorization;
  }

  _createClass(Api, [{
    key: "get",
    value: function get(url) {
      return fetch("".concat(this._url, "/").concat(url), {
        headers: {
          authorization: this._authorization
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      });
    }
  }, {
    key: "patchUserInfo",
    value: function patchUserInfo(data) {
      return fetch("".concat(this._url, "/users/me"), {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      });
    }
  }, {
    key: "patchUserPhoto",
    value: function patchUserPhoto(data) {
      return fetch("".concat(this._url, "/users/me/avatar"), {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: data.avatar
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      });
    }
  }, {
    key: "postNewCard",
    value: function postNewCard(data) {
      return fetch("".concat(this._url, "/cards"), {
        method: 'POST',
        headers: {
          authorization: this._authorization,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard(cardId) {
      return fetch("".concat(this._url, "/cards/").concat(cardId, "/likes"), {
        method: 'PUT',
        headers: {
          authorization: this._authorization,
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      });
    }
  }, {
    key: "deleteLikeCard",
    value: function deleteLikeCard(cardId) {
      return fetch("".concat(this._url, "/cards/").concat(cardId), {
        method: 'DELETE',
        headers: {
          authorization: this._authorization,
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      });
    }
  }]);

  return Api;
}();



/***/ }),

/***/ "./src/scripts/components/Card.js":
/*!****************************************!*\
  !*** ./src/scripts/components/Card.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/consts.js */ "./src/scripts/utils/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Card = /*#__PURE__*/function () {
  function Card(data, handleCardClick, cardLikesServerRequest, openPopupDelete, userId) {
    _classCallCheck(this, Card);

    this._link = data.link;
    this._name = data.name;
    this._handleCardClick = handleCardClick;
    this._elementLikeNumber = data.likes;
    this._cardLikesServerRequest = cardLikesServerRequest;
    this._cardId = data._id;
    this.openPopupDelete = openPopupDelete;
    this._userId = userId;
    this._ownerId = data.owner._id;
  }

  _createClass(Card, [{
    key: "_generateTemplate",
    value: function _generateTemplate() {
      var card = _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__.cardTemplate.content.querySelector('.elements__card').cloneNode(true);
      return card;
    }
  }, {
    key: "getCard",
    value: function getCard() {
      var _this = this;

      this._card = this._generateTemplate();

      var elementPhoto = this._card.querySelector('.elements__photo');

      this._elementLike = this._card.querySelector('.elements__like');

      this._setElementRemove();

      elementPhoto.setAttribute('src', this._link);
      this._card.querySelector('.elements__text').textContent = this._name;
      elementPhoto.setAttribute('alt', this._name);
      elementPhoto.addEventListener('click', function () {
        return _this._handleCardClick();
      });

      this._elementLike.addEventListener('click', function () {
        return _this._likeCard();
      });

      this._getLikesNumber(this._elementLikeNumber);

      return this._card;
    }
  }, {
    key: "_getLikesNumber",
    value: function _getLikesNumber(res) {
      var elementLikeNumber = this._card.querySelector('.elements__like-number');

      elementLikeNumber.textContent = res.length;
    }
  }, {
    key: "_likeCard",
    value: function _likeCard() {
      this._cardLikesServerRequest(this._cardId);

      this._elementLike.classList.toggle('elements__like_active');
    }
  }, {
    key: "_setElementRemove",
    value: function _setElementRemove() {
      var _this2 = this;

      var elementRemove = this._card.querySelector('.elements__remove');

      if (this._ownerId === this._userId) {
        elementRemove.addEventListener('click', function () {
          return _this2._openPopupDelete();
        });
      } else {
        elementRemove.remove();
      }
    }
  }, {
    key: "_openPopupDelete",
    value: function _openPopupDelete() {
      this.openPopupDelete(this._cardId, this._card);
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/scripts/components/ConfirmationPopup.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/ConfirmationPopup.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmationPopup)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/scripts/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ConfirmationPopup = /*#__PURE__*/function (_Popup) {
  _inherits(ConfirmationPopup, _Popup);

  var _super = _createSuper(ConfirmationPopup);

  function ConfirmationPopup(popupSelector, callbackFunction) {
    var _this;

    _classCallCheck(this, ConfirmationPopup);

    _this = _super.call(this, popupSelector);
    _this._confirmButton = document.querySelector(popupSelector).querySelector('.popup__button');
    _this._callbackFunction = callbackFunction;
    return _this;
  }

  _createClass(ConfirmationPopup, [{
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(ConfirmationPopup.prototype), "close", this).call(this);

      this._confirmButton.removeEventListener('click', this._callbackFunction);
    }
  }, {
    key: "open",
    value: function open(cardId, cardElement) {
      var _this2 = this;

      _get(_getPrototypeOf(ConfirmationPopup.prototype), "open", this).call(this);

      this._confirmButton.addEventListener('click', function () {
        _this2._callbackFunction(cardId, cardElement);
      });
    }
  }]);

  return ConfirmationPopup;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scripts/components/FormValidator.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/FormValidator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formElement) {
    _classCallCheck(this, FormValidator);

    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(settings.inputSelector));
    this._formButton = this._formElement.querySelector(settings.submitButtonSelector);
    this._settings = settings;
  }

  _createClass(FormValidator, [{
    key: "enableValidation",
    value: function enableValidation() {
      var _this = this;

      this._toggleButtonState();

      this._inputList.forEach(function (formInput) {
        formInput.addEventListener('input', function () {
          _this._isValid(formInput);

          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "_isValid",
    value: function _isValid(formInput) {
      if (formInput.validity.valid) {
        this._hideInputError(formInput);
      } else {
        this._showInputError(formInput, formInput.validationMessage);
      }
    }
  }, {
    key: "_showInputError",
    value: function _showInputError(formInput, errorMessage) {
      var error = document.querySelector(".".concat(formInput.id, "-error"));
      formInput.classList.add(this._settings.inputErrorClass);
      error.textContent = errorMessage;
      error.classList.add(this._settings.errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(formInput) {
      var error = document.querySelector(".".concat(formInput.id, "-error"));
      formInput.classList.remove(this._settings.inputErrorClass);
      error.classList.remove(this._settings.errorClass);
      error.textContent = '';
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this.disactivateButtonState();
      } else {
        this.activateButtonState();
      }
    }
  }, {
    key: "activateButtonState",
    value: function activateButtonState() {
      this._formButton.classList.remove(this._settings.inactiveButtonClass);

      this._formButton.disabled = false;
    }
  }, {
    key: "disactivateButtonState",
    value: function disactivateButtonState() {
      this._formButton.classList.add(this._settings.inactiveButtonClass);

      this._formButton.disabled = true;
    }
  }, {
    key: "resetErrors",
    value: function resetErrors() {
      var _this2 = this;

      this._inputList.forEach(function (formInput) {
        _this2._hideInputError(formInput);
      });
    }
  }]);

  return FormValidator;
}();



/***/ }),

/***/ "./src/scripts/components/Popup.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/Popup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupSelector = document.querySelector(popupSelector);
    this._closeButton = this._popupSelector.querySelector('.popup__close');
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupSelector.classList.add('popup_opened');

      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupSelector.classList.remove('popup_opened');

      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose() {
      if (event.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._closeButton.addEventListener('click', this.close);

      this._popupSelector.addEventListener('click', function (event) {
        if (event.currentTarget === event.target) {
          _this.close();
        }
      });
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/scripts/components/PopupWithForm.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/PopupWithForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(callbackFunction, popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._callbackFunction = callbackFunction;
    _this._inputs = Array.from(_this._popupSelector.querySelectorAll('input'));
    _this._button = document.querySelector(popupSelector).querySelector('.popup__button');
    _this._buttonText = _this._button.textContent;
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputsValues = {};

      this._inputs.forEach(function (el) {
        inputsValues[el.name] = el.value;
      });

      return inputsValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._popupSelector.addEventListener('submit', function () {
        _this2._callbackFunction(_this2._getInputValues(), event);
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._popupSelector.querySelector('form').reset();
    }
  }, {
    key: "changeButtonText",
    value: function changeButtonText(config) {
      if (config) {
        this._button.textContent = 'Сохранение...';
      } else {
        this._button.textContent = "".concat(this._buttonText);
      }
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scripts/components/PopupWithImage.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/PopupWithImage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/consts.js */ "./src/scripts/utils/consts.js");
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    _classCallCheck(this, PopupWithImage);

    return _super.call(this, popupSelector);
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(link, name) {
      _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__.popupViewImage.alt = name;
      _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__.popupViewImage.src = link;
      _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__.popupViewTitle.textContent = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/scripts/components/Section.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/Section.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      items.forEach(function (element) {
        _this._renderer(element);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/scripts/components/UserInfo.js":
/*!********************************************!*\
  !*** ./src/scripts/components/UserInfo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
/* harmony import */ var _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/consts.js */ "./src/scripts/utils/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var UserInfo = /*#__PURE__*/function () {
  function UserInfo(profileHeader, profileInfo, profileAvatar) {
    _classCallCheck(this, UserInfo);

    this._profileHeader = document.querySelector(profileHeader);
    this._profileInfo = document.querySelector(profileInfo);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__.name.value = this._profileHeader.textContent;
      _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__.info.value = this._profileInfo.textContent;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._profileHeader.textContent = data.name;
      this._profileInfo.textContent = data.about;
    }
  }, {
    key: "setUserPhoto",
    value: function setUserPhoto(data) {
      this._profileAvatar.setAttribute('src', data.avatar);

      this._profileAvatar.setAttribute('alt', data.name);
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/scripts/utils/consts.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/consts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoChangeForm": () => (/* binding */ PhotoChangeForm),
/* harmony export */   "addForm": () => (/* binding */ addForm),
/* harmony export */   "cardTemplate": () => (/* binding */ cardTemplate),
/* harmony export */   "editForm": () => (/* binding */ editForm),
/* harmony export */   "info": () => (/* binding */ info),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "openAdd": () => (/* binding */ openAdd),
/* harmony export */   "openEdit": () => (/* binding */ openEdit),
/* harmony export */   "openPhotoChange": () => (/* binding */ openPhotoChange),
/* harmony export */   "photo": () => (/* binding */ photo),
/* harmony export */   "popupEdit": () => (/* binding */ popupEdit),
/* harmony export */   "popupPhotoProfile": () => (/* binding */ popupPhotoProfile),
/* harmony export */   "popupView": () => (/* binding */ popupView),
/* harmony export */   "popupViewImage": () => (/* binding */ popupViewImage),
/* harmony export */   "popupViewTitle": () => (/* binding */ popupViewTitle),
/* harmony export */   "serverRequestConfig": () => (/* binding */ serverRequestConfig),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
var openEdit = document.querySelector('.profile__edit');
var popupEdit = document.querySelector('.edit');
var editForm = popupEdit.querySelector('.editForm');
var name = editForm.querySelector('input[name="name"]');
var info = editForm.querySelector('input[name="about"]');
var cardTemplate = document.querySelector('#card');
var addForm = document.querySelector('.addForm');
var openAdd = document.querySelector('.profile__add');
var popupView = document.querySelector('.view');
var popupViewImage = popupView.querySelector('.popup__photo');
var popupViewTitle = popupView.querySelector('.popup__info');
var openPhotoChange = document.querySelector('.profile__image-container');
var popupPhotoProfile = document.querySelector('.photoProfile');
var PhotoChangeForm = popupPhotoProfile.querySelector('.PhotoChange');
var photo = PhotoChangeForm.querySelector('.input[name="avatar"]');
var settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};
var serverRequestConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-41',
  authorization: 'de7c312c-842d-4e34-9281-7fe5527921f9'
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/utils/consts.js */ "./src/scripts/utils/consts.js");
/* harmony import */ var _scripts_components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/components/Card.js */ "./src/scripts/components/Card.js");
/* harmony import */ var _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/components/FormValidator.js */ "./src/scripts/components/FormValidator.js");
/* harmony import */ var _scripts_components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/components/Section.js */ "./src/scripts/components/Section.js");
/* harmony import */ var _scripts_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components/PopupWithImage.js */ "./src/scripts/components/PopupWithImage.js");
/* harmony import */ var _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/components/PopupWithForm.js */ "./src/scripts/components/PopupWithForm.js");
/* harmony import */ var _scripts_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/components/UserInfo.js */ "./src/scripts/components/UserInfo.js");
/* harmony import */ var _scripts_components_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/components/Api */ "./src/scripts/components/Api.js");
/* harmony import */ var _scripts_components_ConfirmationPopup_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components/ConfirmationPopup.js */ "./src/scripts/components/ConfirmationPopup.js");










var userId = '';
var editFormValidation = new _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.settings, _scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.editForm);
editFormValidation.enableValidation();
var addFormValidation = new _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.settings, _scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.addForm);
addFormValidation.enableValidation();
var PhotoChangeFormValidation = new _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.settings, _scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.PhotoChangeForm);
PhotoChangeFormValidation.enableValidation();
var bigPhoto = new _scripts_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.view');
bigPhoto.setEventListeners();
var serverRequest = new _scripts_components_Api__WEBPACK_IMPORTED_MODULE_8__["default"](_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.serverRequestConfig);
var userInformation = new _scripts_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]('.profile__header', '.profile__description', '.profile__avatar');
var deletePopup = new _scripts_components_ConfirmationPopup_js__WEBPACK_IMPORTED_MODULE_9__["default"]('.delete', deleteCard);
deletePopup.setEventListeners();
var section = new _scripts_components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  renderer: function renderer(element) {
    var photoCard = createCard(element);
    section.addItem(photoCard);
  }
}, '.elements__gallery');
var addFormClass = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](function (inputsData, evt) {
  evt.preventDefault();
  addFormClass.changeButtonText(true);
  inputsData = {
    name: inputsData.place,
    link: inputsData.link
  };
  serverRequest.postNewCard(inputsData).then(function (res) {
    var photoCard = createCard(res);
    section.addItem(photoCard);
    addFormValidation.disactivateButtonState();
    addFormClass.close();
    addFormClass.changeButtonText(false);
  }).catch(function (err) {
    console.log(err);
  });
}, '.add');
addFormClass.setEventListeners();
var profileFormClass = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](function (inputsData, evt) {
  evt.preventDefault();
  profileFormClass.changeButtonText(true);
  serverRequest.patchUserInfo(inputsData).then(function (res) {
    userInformation.setUserInfo(res);
    editFormValidation.disactivateButtonState();
    profileFormClass.close();
    profileFormClass.changeButtonText(false);
  }).catch(function (err) {
    console.log(err);
  });
}, '.edit');
profileFormClass.setEventListeners();
var profilePhotoFormClass = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](function (inputsData, evt) {
  evt.preventDefault();
  profilePhotoFormClass.changeButtonText(true);
  serverRequest.patchUserPhoto(inputsData).then(function (res) {
    userInformation.setUserPhoto(inputsData);
    profilePhotoFormClass.changeButtonText(false);
    profilePhotoFormClass.close();
    PhotoChangeFormValidation.disactivateButtonState();
  }).catch(function (err) {
    console.log(err);
  });
}, '.photoProfile');
profilePhotoFormClass.setEventListeners();
serverRequest.get('users/me').then(function (result) {
  userInformation.setUserInfo(result);
  userInformation.setUserPhoto(result);
  userId = result._id;
}).catch(function (err) {
  console.log(err);
});
serverRequest.get('cards').then(function (result) {
  section.renderItems(result);
}).catch(function (err) {
  console.log(err);
});

function changeHeader() {
  editFormValidation.resetErrors();
  profileFormClass.open();
  userInformation.getUserInfo();
}

function handleCardClick() {
  bigPhoto.open(this._link, this._name);
}

function cardLikesServerRequest() {
  var _this = this;

  if (!this._elementLike.classList.contains('elements__like_active')) {
    serverRequest.likeCard(this._cardId).then(function (res) {
      _this._getLikesNumber(res.likes);
    }).catch(function (err) {
      console.log(err);
    });
  } else {
    serverRequest.deleteLikeCard(this._cardId).then(function (res) {
      _this._getLikesNumber(res.likes);
    }).catch(function (err) {
      console.log(err);
    });
  }
}

function openPopupDelete(cardId, cardElement) {
  deletePopup.open(cardId, cardElement);
}

function deleteCard(cardId, cardElement) {
  serverRequest.deleteLikeCard(cardId).then(function () {
    deletePopup.close();
    cardElement.remove();
  }).catch(function (err) {
    console.log(err);
  });
}

function createCard(data) {
  var photoCard = new _scripts_components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"](data, handleCardClick, cardLikesServerRequest, openPopupDelete, userId);
  return photoCard.getCard();
}

_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.openAdd.addEventListener('click', function () {
  addFormValidation.resetErrors();
  addFormClass.open();
});
_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.openEdit.addEventListener('click', changeHeader);
_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.openPhotoChange.addEventListener('click', function () {
  PhotoChangeFormValidation.resetErrors();
  profilePhotoFormClass.open();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxTQUFTa0csVUFBVCxDQUFvQmpKLE1BQXBCLEVBQTRCK0MsV0FBNUIsRUFBeUM7RUFDdkMrRixhQUFhLENBQUNrQyxjQUFkLENBQTZCaEwsTUFBN0IsRUFDR2hCLElBREgsQ0FDUSxZQUFNO0lBQ1ZnSyxXQUFXLENBQUM1RCxLQUFaO0lBQ0FyQyxXQUFXLENBQUNULE1BQVo7RUFDRCxDQUpILEVBS0d1SCxLQUxILENBS1MsVUFBQ0MsR0FBRCxFQUFTO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0VBQ0QsQ0FQSDtBQVFEOztBQUVELFNBQVNWLFVBQVQsQ0FBb0I3SixJQUFwQixFQUEwQjtFQUN4QixJQUFNNEosU0FBUyxHQUFHLElBQUlqSixtRUFBSixDQUFTWCxJQUFULEVBQWVZLGVBQWYsRUFBZ0NDLHNCQUFoQyxFQUF3REMsZUFBeEQsRUFBeUVDLE1BQXpFLENBQWxCO0VBQ0EsT0FBTzZJLFNBQVMsQ0FBQzhCLE9BQVYsRUFBUDtBQUNEOztBQUVEbEQsOEVBQUEsQ0FBeUIsT0FBekIsRUFBa0MsWUFBWTtFQUM1Q1csaUJBQWlCLENBQUNpQyxXQUFsQjtFQUNBckIsWUFBWSxDQUFDc0IsSUFBYjtBQUNELENBSEQ7QUFLQWpELCtFQUFBLENBQTBCLE9BQTFCLEVBQW1DK0MsWUFBbkM7QUFFQXpDLHNGQUFBLENBQWlDLE9BQWpDLEVBQTBDLFlBQVk7RUFDcERVLHlCQUF5QixDQUFDZ0MsV0FBMUI7RUFDQVAscUJBQXFCLENBQUNRLElBQXRCO0FBQ0QsQ0FIRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQ29uZmlybWF0aW9uUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy91dGlscy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIHRoaXMuX3VybCA9IGNvbmZpZy51cmw7XHJcbiAgICB0aGlzLl9hdXRob3JpemF0aW9uID0gY29uZmlnLmF1dGhvcml6YXRpb247XHJcbiAgfVxyXG5cclxuICBnZXQodXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS8ke3VybH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9hdXRob3JpemF0aW9uXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBwYXRjaFVzZXJJbmZvKGRhdGEpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L3VzZXJzL21lYCwge1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9hdXRob3JpemF0aW9uLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBhYm91dDogZGF0YS5hYm91dFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcGF0Y2hVc2VyUGhvdG8oZGF0YSkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9hdXRob3JpemF0aW9uLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGF2YXRhcjogZGF0YS5hdmF0YXIsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcG9zdE5ld0NhcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vY2FyZHNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fYXV0aG9yaXphdGlvbixcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgbGluazogZGF0YS5saW5rXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGlrZUNhcmQoY2FyZElkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl9hdXRob3JpemF0aW9uLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGRlbGV0ZUxpa2VDYXJkKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vY2FyZHMvJHtjYXJkSWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fYXV0aG9yaXphdGlvbixcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgY2FyZFRlbXBsYXRlIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIGhhbmRsZUNhcmRDbGljaywgY2FyZExpa2VzU2VydmVyUmVxdWVzdCwgb3BlblBvcHVwRGVsZXRlLCB1c2VySWQpIHtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgdGhpcy5fZWxlbWVudExpa2VOdW1iZXIgPSBkYXRhLmxpa2VzO1xyXG4gICAgdGhpcy5fY2FyZExpa2VzU2VydmVyUmVxdWVzdCA9IGNhcmRMaWtlc1NlcnZlclJlcXVlc3Q7XHJcbiAgICB0aGlzLl9jYXJkSWQgPSBkYXRhLl9pZDtcclxuICAgIHRoaXMub3BlblBvcHVwRGVsZXRlID0gb3BlblBvcHVwRGVsZXRlO1xyXG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xyXG4gICAgdGhpcy5fb3duZXJJZCA9IGRhdGEub3duZXIuX2lkO1xyXG4gIH1cclxuXHJcbiAgX2dlbmVyYXRlVGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBjYXJkID0gY2FyZFRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19jYXJkJykuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG5cclxuICBnZXRDYXJkKCkge1xyXG4gICAgdGhpcy5fY2FyZCA9IHRoaXMuX2dlbmVyYXRlVGVtcGxhdGUoKTtcclxuICAgIGNvbnN0IGVsZW1lbnRQaG90byA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19waG90bycpO1xyXG4gICAgdGhpcy5fZWxlbWVudExpa2UgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZScpO1xyXG4gICAgdGhpcy5fc2V0RWxlbWVudFJlbW92ZSgpO1xyXG5cclxuICAgIGVsZW1lbnRQaG90by5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMuX2xpbmspO1xyXG4gICAgdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX3RleHQnKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcbiAgICBlbGVtZW50UGhvdG8uc2V0QXR0cmlidXRlKCdhbHQnLCB0aGlzLl9uYW1lKTtcclxuXHJcbiAgICBlbGVtZW50UGhvdG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soKSk7XHJcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2xpa2VDYXJkKCkpO1xyXG4gICAgdGhpcy5fZ2V0TGlrZXNOdW1iZXIodGhpcy5fZWxlbWVudExpa2VOdW1iZXIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9jYXJkO1xyXG4gIH1cclxuXHJcbiAgX2dldExpa2VzTnVtYmVyKHJlcykge1xyXG4gICAgY29uc3QgZWxlbWVudExpa2VOdW1iZXIgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZS1udW1iZXInKTtcclxuICAgIGVsZW1lbnRMaWtlTnVtYmVyLnRleHRDb250ZW50ID0gcmVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIF9saWtlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRMaWtlc1NlcnZlclJlcXVlc3QodGhpcy5fY2FyZElkKTtcclxuICAgIHRoaXMuX2VsZW1lbnRMaWtlLmNsYXNzTGlzdC50b2dnbGUoJ2VsZW1lbnRzX19saWtlX2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgX3NldEVsZW1lbnRSZW1vdmUoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50UmVtb3ZlID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX3JlbW92ZScpO1xyXG5cclxuICAgIGlmICh0aGlzLl9vd25lcklkID09PSB0aGlzLl91c2VySWQpIHtcclxuICAgICAgZWxlbWVudFJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29wZW5Qb3B1cERlbGV0ZSgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnRSZW1vdmUucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb3BlblBvcHVwRGVsZXRlKCkge1xyXG4gICAgdGhpcy5vcGVuUG9wdXBEZWxldGUodGhpcy5fY2FyZElkLCB0aGlzLl9jYXJkKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtYXRpb25Qb3B1cCBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBjYWxsYmFja0Z1bmN0aW9uKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2NvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fYnV0dG9uJylcclxuICAgIHRoaXMuX2NhbGxiYWNrRnVuY3Rpb24gPSBjYWxsYmFja0Z1bmN0aW9uO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fY29uZmlybUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2NhbGxiYWNrRnVuY3Rpb24pXHJcbiAgfVxyXG5cclxuICBvcGVuKGNhcmRJZCwgY2FyZEVsZW1lbnQpIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIHRoaXMuX2NvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2NhbGxiYWNrRnVuY3Rpb24oY2FyZElkLCBjYXJkRWxlbWVudClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuaW5wdXRTZWxlY3RvcikpO1xyXG4gICAgdGhpcy5fZm9ybUJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGZvcm1JbnB1dCkgPT4ge1xyXG4gICAgICBmb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faXNWYWxpZChmb3JtSW5wdXQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKClcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgX2lzVmFsaWQoZm9ybUlucHV0KSB7XHJcbiAgICBpZiAoZm9ybUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1JbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihmb3JtSW5wdXQsIGZvcm1JbnB1dC52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoZm9ybUlucHV0LCBlcnJvck1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Zm9ybUlucHV0LmlkfS1lcnJvcmApO1xyXG4gICAgZm9ybUlucHV0LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yLnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihmb3JtSW5wdXQpIHtcclxuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Zm9ybUlucHV0LmlkfS1lcnJvcmApO1xyXG4gICAgZm9ybUlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuZXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgdGhpcy5kaXNhY3RpdmF0ZUJ1dHRvblN0YXRlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVCdXR0b25TdGF0ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgdGhpcy5fZm9ybUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fZm9ybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZGlzYWN0aXZhdGVCdXR0b25TdGF0ZSgpIHtcclxuICAgIHRoaXMuX2Zvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIHRoaXMuX2Zvcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRFcnJvcnMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoZm9ybUlucHV0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1JbnB1dCk7XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX3BvcHVwU2VsZWN0b3IucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZScpO1xyXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3B1cFNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX29wZW5lZCcpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UoKSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZSk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3RvcihjYWxsYmFja0Z1bmN0aW9uLCBwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2NhbGxiYWNrRnVuY3Rpb24gPSBjYWxsYmFja0Z1bmN0aW9uO1xyXG4gICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLl9wb3B1cFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xyXG4gICAgdGhpcy5fYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2J1dHRvbicpO1xyXG4gICAgdGhpcy5fYnV0dG9uVGV4dCA9IHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGlucHV0c1ZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGlucHV0c1ZhbHVlc1tlbC5uYW1lXSA9IGVsLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5wdXRzVmFsdWVzXHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2NhbGxiYWNrRnVuY3Rpb24odGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSwgZXZlbnQpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IucXVlcnlTZWxlY3RvcignZm9ybScpLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VCdXR0b25UZXh0KGNvbmZpZykge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSAn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9IGAke3RoaXMuX2J1dHRvblRleHR9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG59IiwiaW1wb3J0IHsgcG9wdXBWaWV3SW1hZ2UsIHBvcHVwVmlld1RpdGxlIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RzLmpzJztcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5leHBvcnQgZGVmYXVsdCAgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKVxyXG4gIH1cclxuICBcclxuICBvcGVuKGxpbmssIG5hbWUpIHtcclxuICAgIHBvcHVwVmlld0ltYWdlLmFsdCA9IG5hbWU7XHJcbiAgICBwb3B1cFZpZXdJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgcG9wdXBWaWV3VGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcclxuICAgIGl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgbmFtZSBhcyBuYW1lU2VsZWN0b3IsIGluZm8gYXMgaW5mb3JtYXRpb25TZWxlY3Rvcn0gZnJvbSAnLi4vdXRpbHMvY29uc3RzLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHByb2ZpbGVIZWFkZXIsIHByb2ZpbGVJbmZvLCBwcm9maWxlQXZhdGFyKSB7XHJcbiAgICB0aGlzLl9wcm9maWxlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlSGVhZGVyKTtcclxuICAgIHRoaXMuX3Byb2ZpbGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlSW5mbyk7XHJcbiAgICB0aGlzLl9wcm9maWxlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlQXZhdGFyKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgbmFtZVNlbGVjdG9yLnZhbHVlID0gdGhpcy5fcHJvZmlsZUhlYWRlci50ZXh0Q29udGVudDtcclxuICAgIGluZm9ybWF0aW9uU2VsZWN0b3IudmFsdWUgPSB0aGlzLl9wcm9maWxlSW5mby50ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVIZWFkZXIudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9wcm9maWxlSW5mby50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyUGhvdG8oZGF0YSkge1xyXG4gICAgdGhpcy5fcHJvZmlsZUF2YXRhci5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhdGEuYXZhdGFyKTtcclxuICAgIHRoaXMuX3Byb2ZpbGVBdmF0YXIuc2V0QXR0cmlidXRlKCdhbHQnLCBkYXRhLm5hbWUpO1xyXG4gIH1cclxuXHJcbn0iLCJleHBvcnQgY29uc3Qgb3BlbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdCcpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcclxuZXhwb3J0IGNvbnN0IGVkaXRGb3JtID0gcG9wdXBFZGl0LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Rm9ybScpO1xyXG5leHBvcnQgY29uc3QgbmFtZSA9IGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYW1lXCJdJyk7XHJcbmV4cG9ydCBjb25zdCBpbmZvID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFib3V0XCJdJyk7XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmQnKTtcclxuZXhwb3J0IGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkRm9ybScpO1xyXG5leHBvcnQgY29uc3Qgb3BlbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3B1cFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldycpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBWaWV3SW1hZ2UgPSBwb3B1cFZpZXcucXVlcnlTZWxlY3RvcignLnBvcHVwX19waG90bycpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBWaWV3VGl0bGUgPSBwb3B1cFZpZXcucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbmZvJyk7XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlblBob3RvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2ltYWdlLWNvbnRhaW5lcicpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBQaG90b1Byb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGhvdG9Qcm9maWxlJyk7XHJcbmV4cG9ydCBjb25zdCBQaG90b0NoYW5nZUZvcm0gPSBwb3B1cFBob3RvUHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcuUGhvdG9DaGFuZ2UnKTtcclxuZXhwb3J0IGNvbnN0IHBob3RvID0gUGhvdG9DaGFuZ2VGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dFtuYW1lPVwiYXZhdGFyXCJdJyk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcclxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX2J1dHRvbicsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19idXR0b25fZGlzYWJsZWQnLFxyXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF9lcnJvcicsXHJcbiAgZXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dC1lcnJvcl9hY3RpdmUnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyUmVxdWVzdENvbmZpZyA9IHtcclxuICB1cmw6ICdodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTQxJyxcclxuICBhdXRob3JpemF0aW9uOiAnZGU3YzMxMmMtODQyZC00ZTM0LTkyODEtN2ZlNTUyNzkyMWY5J1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCB7IG9wZW5FZGl0LCBvcGVuQWRkLCBzZXR0aW5ncywgZWRpdEZvcm0sIGFkZEZvcm0sIHNlcnZlclJlcXVlc3RDb25maWcsIFBob3RvQ2hhbmdlRm9ybSwgb3BlblBob3RvQ2hhbmdlLCBwb3B1cFBob3RvUHJvZmlsZSwgY29uZmlybURlbGV0ZSB9IGZyb20gJy4uL3NjcmlwdHMvdXRpbHMvY29uc3RzLmpzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL0NhcmQuanMnO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi9zY3JpcHRzL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcydcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL1VzZXJJbmZvLmpzJ1xyXG5pbXBvcnQgQXBpIGZyb20gJy4uL3NjcmlwdHMvY29tcG9uZW50cy9BcGknO1xyXG5pbXBvcnQgQ29uZmlybWF0aW9uUG9wdXAgZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL0NvbmZpcm1hdGlvblBvcHVwLmpzJztcclxuXHJcbmxldCB1c2VySWQgPSAnJztcclxuXHJcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBlZGl0Rm9ybSk7XHJcbmVkaXRGb3JtVmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBhZGRGb3JtVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBhZGRGb3JtKTtcclxuYWRkRm9ybVZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuY29uc3QgUGhvdG9DaGFuZ2VGb3JtVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBQaG90b0NoYW5nZUZvcm0pO1xyXG5QaG90b0NoYW5nZUZvcm1WYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGJpZ1Bob3RvID0gbmV3IFBvcHVwV2l0aEltYWdlKCcudmlldycpO1xyXG5iaWdQaG90by5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3Qgc2VydmVyUmVxdWVzdCA9IG5ldyBBcGkoc2VydmVyUmVxdWVzdENvbmZpZyk7XHJcblxyXG5jb25zdCB1c2VySW5mb3JtYXRpb24gPSBuZXcgVXNlckluZm8oJy5wcm9maWxlX19oZWFkZXInLCAnLnByb2ZpbGVfX2Rlc2NyaXB0aW9uJywgJy5wcm9maWxlX19hdmF0YXInKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVBvcHVwID0gbmV3IENvbmZpcm1hdGlvblBvcHVwKCcuZGVsZXRlJywgZGVsZXRlQ2FyZClcclxuZGVsZXRlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICByZW5kZXJlcjogKGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgcGhvdG9DYXJkID0gY3JlYXRlQ2FyZChlbGVtZW50KTtcclxuICAgICAgc2VjdGlvbi5hZGRJdGVtKHBob3RvQ2FyZCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAnLmVsZW1lbnRzX19nYWxsZXJ5JylcclxuXHJcbmNvbnN0IGFkZEZvcm1DbGFzcyA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIGZ1bmN0aW9uIChpbnB1dHNEYXRhLCBldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkRm9ybUNsYXNzLmNoYW5nZUJ1dHRvblRleHQodHJ1ZSk7XHJcbiAgICBpbnB1dHNEYXRhID0geyBuYW1lOiBpbnB1dHNEYXRhLnBsYWNlLCBsaW5rOiBpbnB1dHNEYXRhLmxpbmsgfTtcclxuICAgIHNlcnZlclJlcXVlc3QucG9zdE5ld0NhcmQoaW5wdXRzRGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBob3RvQ2FyZCA9IGNyZWF0ZUNhcmQocmVzKTtcclxuICAgICAgICBzZWN0aW9uLmFkZEl0ZW0ocGhvdG9DYXJkKTtcclxuICAgICAgICBhZGRGb3JtVmFsaWRhdGlvbi5kaXNhY3RpdmF0ZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgYWRkRm9ybUNsYXNzLmNsb3NlKCk7XHJcbiAgICAgICAgYWRkRm9ybUNsYXNzLmNoYW5nZUJ1dHRvblRleHQoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sICcuYWRkJ1xyXG4pO1xyXG5cclxuYWRkRm9ybUNsYXNzLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwcm9maWxlRm9ybUNsYXNzID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgZnVuY3Rpb24gKGlucHV0c0RhdGEsIGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwcm9maWxlRm9ybUNsYXNzLmNoYW5nZUJ1dHRvblRleHQodHJ1ZSk7XHJcbiAgICBzZXJ2ZXJSZXF1ZXN0LnBhdGNoVXNlckluZm8oaW5wdXRzRGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyhyZXMpO1xyXG4gICAgICAgIGVkaXRGb3JtVmFsaWRhdGlvbi5kaXNhY3RpdmF0ZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgcHJvZmlsZUZvcm1DbGFzcy5jbG9zZSgpO1xyXG4gICAgICAgIHByb2ZpbGVGb3JtQ2xhc3MuY2hhbmdlQnV0dG9uVGV4dChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sICcuZWRpdCdcclxuKTtcclxuXHJcbnByb2ZpbGVGb3JtQ2xhc3Muc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHByb2ZpbGVQaG90b0Zvcm1DbGFzcyA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIGZ1bmN0aW9uIChpbnB1dHNEYXRhLCBldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcHJvZmlsZVBob3RvRm9ybUNsYXNzLmNoYW5nZUJ1dHRvblRleHQodHJ1ZSk7XHJcbiAgICBzZXJ2ZXJSZXF1ZXN0LnBhdGNoVXNlclBob3RvKGlucHV0c0RhdGEpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgdXNlckluZm9ybWF0aW9uLnNldFVzZXJQaG90byhpbnB1dHNEYXRhKTtcclxuICAgICAgICBwcm9maWxlUGhvdG9Gb3JtQ2xhc3MuY2hhbmdlQnV0dG9uVGV4dChmYWxzZSk7XHJcbiAgICAgICAgcHJvZmlsZVBob3RvRm9ybUNsYXNzLmNsb3NlKCk7XHJcbiAgICAgICAgUGhvdG9DaGFuZ2VGb3JtVmFsaWRhdGlvbi5kaXNhY3RpdmF0ZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgJy5waG90b1Byb2ZpbGUnXHJcbik7XHJcblxyXG5wcm9maWxlUGhvdG9Gb3JtQ2xhc3Muc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbnNlcnZlclJlcXVlc3QuZ2V0KCd1c2Vycy9tZScpXHJcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgdXNlckluZm9ybWF0aW9uLnNldFVzZXJJbmZvKHJlc3VsdCk7XHJcbiAgICB1c2VySW5mb3JtYXRpb24uc2V0VXNlclBob3RvKHJlc3VsdCk7XHJcbiAgICB1c2VySWQgPSByZXN1bHQuX2lkO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSlcclxuXHJcbnNlcnZlclJlcXVlc3QuZ2V0KCdjYXJkcycpXHJcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgc2VjdGlvbi5yZW5kZXJJdGVtcyhyZXN1bHQpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VIZWFkZXIoKSB7XHJcbiAgZWRpdEZvcm1WYWxpZGF0aW9uLnJlc2V0RXJyb3JzKCk7XHJcbiAgcHJvZmlsZUZvcm1DbGFzcy5vcGVuKCk7XHJcbiAgdXNlckluZm9ybWF0aW9uLmdldFVzZXJJbmZvKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNhcmRDbGljaygpIHtcclxuICBiaWdQaG90by5vcGVuKHRoaXMuX2xpbmssIHRoaXMuX25hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYXJkTGlrZXNTZXJ2ZXJSZXF1ZXN0KCkge1xyXG4gIGlmICghKHRoaXMuX2VsZW1lbnRMaWtlLmNsYXNzTGlzdC5jb250YWlucygnZWxlbWVudHNfX2xpa2VfYWN0aXZlJykpKSB7XHJcbiAgICBzZXJ2ZXJSZXF1ZXN0Lmxpa2VDYXJkKHRoaXMuX2NhcmRJZClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLl9nZXRMaWtlc051bWJlcihyZXMubGlrZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXJ2ZXJSZXF1ZXN0LmRlbGV0ZUxpa2VDYXJkKHRoaXMuX2NhcmRJZClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB0aGlzLl9nZXRMaWtlc051bWJlcihyZXMubGlrZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblBvcHVwRGVsZXRlKGNhcmRJZCwgY2FyZEVsZW1lbnQpIHtcclxuICBkZWxldGVQb3B1cC5vcGVuKGNhcmRJZCwgY2FyZEVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVDYXJkKGNhcmRJZCwgY2FyZEVsZW1lbnQpIHtcclxuICBzZXJ2ZXJSZXF1ZXN0LmRlbGV0ZUxpa2VDYXJkKGNhcmRJZClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgZGVsZXRlUG9wdXAuY2xvc2UoKTtcclxuICAgICAgY2FyZEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEpIHtcclxuICBjb25zdCBwaG90b0NhcmQgPSBuZXcgQ2FyZChkYXRhLCBoYW5kbGVDYXJkQ2xpY2ssIGNhcmRMaWtlc1NlcnZlclJlcXVlc3QsIG9wZW5Qb3B1cERlbGV0ZSwgdXNlcklkKTtcclxuICByZXR1cm4gcGhvdG9DYXJkLmdldENhcmQoKVxyXG59XHJcblxyXG5vcGVuQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGFkZEZvcm1WYWxpZGF0aW9uLnJlc2V0RXJyb3JzKCk7XHJcbiAgYWRkRm9ybUNsYXNzLm9wZW4oKTtcclxufSlcclxuXHJcbm9wZW5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlSGVhZGVyKTtcclxuXHJcbm9wZW5QaG90b0NoYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBQaG90b0NoYW5nZUZvcm1WYWxpZGF0aW9uLnJlc2V0RXJyb3JzKCk7XHJcbiAgcHJvZmlsZVBob3RvRm9ybUNsYXNzLm9wZW4oKTtcclxufSkiXSwibmFtZXMiOlsiQXBpIiwiY29uZmlnIiwiX3VybCIsInVybCIsIl9hdXRob3JpemF0aW9uIiwiYXV0aG9yaXphdGlvbiIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiZGF0YSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImFib3V0IiwiYXZhdGFyIiwibGluayIsImNhcmRJZCIsImNhcmRUZW1wbGF0ZSIsIkNhcmQiLCJoYW5kbGVDYXJkQ2xpY2siLCJjYXJkTGlrZXNTZXJ2ZXJSZXF1ZXN0Iiwib3BlblBvcHVwRGVsZXRlIiwidXNlcklkIiwiX2xpbmsiLCJfbmFtZSIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfZWxlbWVudExpa2VOdW1iZXIiLCJsaWtlcyIsIl9jYXJkTGlrZXNTZXJ2ZXJSZXF1ZXN0IiwiX2NhcmRJZCIsIl9pZCIsIl91c2VySWQiLCJfb3duZXJJZCIsIm93bmVyIiwiY2FyZCIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvbmVOb2RlIiwiX2NhcmQiLCJfZ2VuZXJhdGVUZW1wbGF0ZSIsImVsZW1lbnRQaG90byIsIl9lbGVtZW50TGlrZSIsIl9zZXRFbGVtZW50UmVtb3ZlIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2xpa2VDYXJkIiwiX2dldExpa2VzTnVtYmVyIiwiZWxlbWVudExpa2VOdW1iZXIiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJlbGVtZW50UmVtb3ZlIiwiX29wZW5Qb3B1cERlbGV0ZSIsInJlbW92ZSIsIlBvcHVwIiwiQ29uZmlybWF0aW9uUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiY2FsbGJhY2tGdW5jdGlvbiIsIl9jb25maXJtQnV0dG9uIiwiZG9jdW1lbnQiLCJfY2FsbGJhY2tGdW5jdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYXJkRWxlbWVudCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwiX2Zvcm1CdXR0b24iLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9zZXR0aW5ncyIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJmb3JtSW5wdXQiLCJfaXNWYWxpZCIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsImVycm9yIiwiaWQiLCJhZGQiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwic29tZSIsImlucHV0RWxlbWVudCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJkaXNhY3RpdmF0ZUJ1dHRvblN0YXRlIiwiYWN0aXZhdGVCdXR0b25TdGF0ZSIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJkaXNhYmxlZCIsIl9wb3B1cFNlbGVjdG9yIiwiX2Nsb3NlQnV0dG9uIiwiY2xvc2UiLCJiaW5kIiwiX2hhbmRsZUVzY0Nsb3NlIiwiZXZlbnQiLCJrZXkiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiUG9wdXBXaXRoRm9ybSIsIl9pbnB1dHMiLCJfYnV0dG9uIiwiX2J1dHRvblRleHQiLCJpbnB1dHNWYWx1ZXMiLCJlbCIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJwb3B1cFZpZXdJbWFnZSIsInBvcHVwVmlld1RpdGxlIiwiUG9wdXBXaXRoSW1hZ2UiLCJhbHQiLCJzcmMiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJpdGVtcyIsImVsZW1lbnQiLCJwcmVwZW5kIiwibmFtZVNlbGVjdG9yIiwiaW5mbyIsImluZm9ybWF0aW9uU2VsZWN0b3IiLCJVc2VySW5mbyIsInByb2ZpbGVIZWFkZXIiLCJwcm9maWxlSW5mbyIsInByb2ZpbGVBdmF0YXIiLCJfcHJvZmlsZUhlYWRlciIsIl9wcm9maWxlSW5mbyIsIl9wcm9maWxlQXZhdGFyIiwib3BlbkVkaXQiLCJwb3B1cEVkaXQiLCJlZGl0Rm9ybSIsImFkZEZvcm0iLCJvcGVuQWRkIiwicG9wdXBWaWV3Iiwib3BlblBob3RvQ2hhbmdlIiwicG9wdXBQaG90b1Byb2ZpbGUiLCJQaG90b0NoYW5nZUZvcm0iLCJwaG90byIsImZvcm1TZWxlY3RvciIsInNlcnZlclJlcXVlc3RDb25maWciLCJjb25maXJtRGVsZXRlIiwiZWRpdEZvcm1WYWxpZGF0aW9uIiwiZW5hYmxlVmFsaWRhdGlvbiIsImFkZEZvcm1WYWxpZGF0aW9uIiwiUGhvdG9DaGFuZ2VGb3JtVmFsaWRhdGlvbiIsImJpZ1Bob3RvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJzZXJ2ZXJSZXF1ZXN0IiwidXNlckluZm9ybWF0aW9uIiwiZGVsZXRlUG9wdXAiLCJkZWxldGVDYXJkIiwic2VjdGlvbiIsInBob3RvQ2FyZCIsImNyZWF0ZUNhcmQiLCJhZGRJdGVtIiwiYWRkRm9ybUNsYXNzIiwiaW5wdXRzRGF0YSIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlQnV0dG9uVGV4dCIsInBsYWNlIiwicG9zdE5ld0NhcmQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlRm9ybUNsYXNzIiwicGF0Y2hVc2VySW5mbyIsInNldFVzZXJJbmZvIiwicHJvZmlsZVBob3RvRm9ybUNsYXNzIiwicGF0Y2hVc2VyUGhvdG8iLCJzZXRVc2VyUGhvdG8iLCJnZXQiLCJyZXN1bHQiLCJyZW5kZXJJdGVtcyIsImNoYW5nZUhlYWRlciIsInJlc2V0RXJyb3JzIiwib3BlbiIsImdldFVzZXJJbmZvIiwiY29udGFpbnMiLCJsaWtlQ2FyZCIsImRlbGV0ZUxpa2VDYXJkIiwiZ2V0Q2FyZCJdLCJzb3VyY2VSb290IjoiIn0=