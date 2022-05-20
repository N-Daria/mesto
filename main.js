/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  function Card(_ref, handleCardClick) {
    var data = _ref.data;

    _classCallCheck(this, Card);

    this._link = data.link;
    this._name = data.name;
    this._handleCardClick = handleCardClick;
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

      var elementRemove = this._card.querySelector('.elements__remove');

      elementPhoto.setAttribute('src', this._link);
      this._card.querySelector('.elements__text').textContent = this._name;
      elementPhoto.setAttribute('alt', this._name);
      elementPhoto.addEventListener('click', function () {
        return _this._handleCardClick();
      });

      this._elementLike.addEventListener('click', function () {
        return _this._likeCard();
      });

      elementRemove.addEventListener('click', function () {
        return _this._removeCard();
      });
      return this._card;
    }
  }, {
    key: "_likeCard",
    value: function _likeCard() {
      this._elementLike.classList.toggle('elements__like_active');
    }
  }, {
    key: "_removeCard",
    value: function _removeCard() {
      this._card.remove();

      this._element = null;
    }
  }]);

  return Card;
}();



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
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._inputsValues = {};

      this._inputs.forEach(function (el) {
        _this2._inputsValues[el.id] = el.value;
      });

      return this._inputsValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._popupSelector.addEventListener('submit', function () {
        return _this3._callbackFunction(_this3._getInputValues(), event);
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._popupSelector.querySelector('form').reset();
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
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._items.forEach(function (element) {
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
  function UserInfo(profileHeader, profileInfo) {
    _classCallCheck(this, UserInfo);

    this._profileHeader = document.querySelector(profileHeader);
    this._profileInfo = document.querySelector(profileInfo);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__.name.value = this._profileHeader.textContent;
      _utils_consts_js__WEBPACK_IMPORTED_MODULE_0__.info.value = this._profileInfo.textContent;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(inputsData) {
      this._profileHeader.textContent = inputsData['name-input'];
      this._profileInfo.textContent = inputsData['description-input'];
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
/* harmony export */   "addForm": () => (/* binding */ addForm),
/* harmony export */   "cardTemplate": () => (/* binding */ cardTemplate),
/* harmony export */   "editForm": () => (/* binding */ editForm),
/* harmony export */   "info": () => (/* binding */ info),
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "openAdd": () => (/* binding */ openAdd),
/* harmony export */   "openEdit": () => (/* binding */ openEdit),
/* harmony export */   "popupEdit": () => (/* binding */ popupEdit),
/* harmony export */   "popupView": () => (/* binding */ popupView),
/* harmony export */   "popupViewImage": () => (/* binding */ popupViewImage),
/* harmony export */   "popupViewTitle": () => (/* binding */ popupViewTitle),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
var openEdit = document.querySelector('.profile__edit');
var popupEdit = document.querySelector('.edit');
var editForm = popupEdit.querySelector('.editForm');
var name = editForm.querySelector('input[name="name"]');
var info = editForm.querySelector('input[name="description"]');
var cardTemplate = document.querySelector('#card');
var addForm = document.querySelector('.addForm');
var openAdd = document.querySelector('.profile__add');
var popupView = document.querySelector('.view');
var popupViewImage = popupView.querySelector('.popup__photo');
var popupViewTitle = popupView.querySelector('.popup__info');
var initialCards = [// {
  //   name: 'Архыз',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  // },
  // {
  //   name: 'Челябинская область',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  // },
  // {
  //   name: 'Иваново',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  // },
  // {
  //   name: 'Камчатка',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  // },
  // {
  //   name: 'Холмогорский район',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  // },
  // {
  //   name: 'Байкал',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  // }
];
var settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
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








var editFormValidation = new _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.settings, _scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.editForm);
editFormValidation.enableValidation();
var addFormValidation = new _scripts_components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.settings, _scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.addForm);
addFormValidation.enableValidation();
var userInformation = new _scripts_components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]('.profile__header', '.profile__description');
var bigPhoto = new _scripts_components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.view');
bigPhoto.setEventListeners(); // fetch('https://nomoreparties.co/v1/cohort-41/users/cards', {
//   headers: {
//     authorization: '96eScBoG1MCkXSTAIKIfYXL2ymBZP2Ce'
//   }
// })
// .then(res => res.json())
// .then(res => console.log(res))

fetch('https://nomoreparties.co/v1/cohort-41/users/cards', {
  headers: {
    authorization: '96eScBoG1MCkXSTAIKIfYXL2ymBZP2Ce'
  }
}).then(function (res) {
  return res.json();
}).then(function (result) {
  console.log(result);
}); // class Api  {
//   fetch('https://nomoreparties.co/v1/cohort-41/users/me')
// }

var addFormClass = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](function (inputsData, evt) {
  evt.preventDefault();
  inputsData = {
    name: inputsData['place-input'],
    link: inputsData['link-input']
  };
  var photoCard = createCard(inputsData);
  section.addItem(photoCard);
  addFormClass.close();
  addFormValidation.disactivateButtonState();
}, '.add');
addFormClass.setEventListeners();
var profileFormClass = new _scripts_components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](function (inputsData, evt) {
  evt.preventDefault();
  userInformation.setUserInfo(inputsData);
  profileFormClass.close();
  editFormValidation.disactivateButtonState();
}, '.edit');
profileFormClass.setEventListeners();
var section = new _scripts_components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  items: _scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.initialCards,
  renderer: function renderer(element) {
    var photoCard = createCard(element);
    section.addItem(photoCard);
  }
}, '.elements__gallery');

function changeHeader() {
  editFormValidation.resetErrors();
  profileFormClass.open();
  userInformation.getUserInfo();
}

function handleCardClick() {
  bigPhoto.open(this._link, this._name);
}

function createCard(data) {
  var photoCard = new _scripts_components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    data: data
  }, handleCardClick);
  return photoCard.getCard();
}

_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.openAdd.addEventListener('click', function () {
  addFormClass.open();
});
_scripts_utils_consts_js__WEBPACK_IMPORTED_MODULE_1__.openEdit.addEventListener('click', changeHeader);
window.addEventListener('load', function () {
  section.renderItems();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsSUFBSW5JLG1FQUFKLENBQVM7SUFBRUUsSUFBSSxFQUFKQTtFQUFGLENBQVQsRUFBbUJELGVBQW5CLENBQWxCO0VBQ0EsT0FBT2tJLFNBQVMsQ0FBQ1UsT0FBVixFQUFQO0FBQ0Q7O0FBRURoQyw4RUFBQSxDQUF5QixPQUF6QixFQUFrQyxZQUFZO0VBQzVDbUIsWUFBWSxDQUFDVyxJQUFiO0FBQ0QsQ0FGRDtBQUlBbEMsK0VBQUEsQ0FBMEIsT0FBMUIsRUFBbUNnQyxZQUFuQztBQUVBSyxNQUFNLENBQUMzSCxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0VBQzFDa0gsT0FBTyxDQUFDVSxXQUFSO0FBQ0QsQ0FGRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy91dGlscy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FyZFRlbXBsYXRlIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHsgZGF0YSB9LCBoYW5kbGVDYXJkQ2xpY2sgKSB7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICB9XHJcblxyXG4gIF9nZW5lcmF0ZVRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgY2FyZCA9IGNhcmRUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fY2FyZCcpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmQgPSB0aGlzLl9nZW5lcmF0ZVRlbXBsYXRlKCk7XHJcbiAgICBjb25zdCBlbGVtZW50UGhvdG8gPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fcGhvdG8nKTtcclxuICAgIHRoaXMuX2VsZW1lbnRMaWtlID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2xpa2UnKTtcclxuICAgIGNvbnN0IGVsZW1lbnRSZW1vdmUgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fcmVtb3ZlJyk7XHJcblxyXG4gICAgZWxlbWVudFBob3RvLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5fbGluayk7XHJcbiAgICB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fdGV4dCcpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgIGVsZW1lbnRQaG90by5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHRoaXMuX25hbWUpO1xyXG5cclxuICAgIGVsZW1lbnRQaG90by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2hhbmRsZUNhcmRDbGljaygpKTtcclxuICAgIHRoaXMuX2VsZW1lbnRMaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fbGlrZUNhcmQoKSk7XHJcbiAgICBlbGVtZW50UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fcmVtb3ZlQ2FyZCgpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY2FyZDtcclxuICB9XHJcblxyXG4gIF9saWtlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnRMaWtlLmNsYXNzTGlzdC50b2dnbGUoJ2VsZW1lbnRzX19saWtlX2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgX3JlbW92ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9jYXJkLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmlucHV0U2VsZWN0b3IpKTtcclxuICAgIHRoaXMuX2Zvcm1CdXR0b24gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChmb3JtSW5wdXQpID0+IHtcclxuICAgICAgZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2lzVmFsaWQoZm9ybUlucHV0KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF9pc1ZhbGlkKGZvcm1JbnB1dCkge1xyXG4gICAgaWYgKGZvcm1JbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihmb3JtSW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoZm9ybUlucHV0LCBmb3JtSW5wdXQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGZvcm1JbnB1dCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Zvcm1JbnB1dC5pZH0tZXJyb3JgKTtcclxuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoZm9ybUlucHV0KSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Zvcm1JbnB1dC5pZH0tZXJyb3JgKTtcclxuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICB9XHJcblxyXG4gIF9oYXNJbnZhbGlkSW5wdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XHJcbiAgICAgIHRoaXMuZGlzYWN0aXZhdGVCdXR0b25TdGF0ZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlQnV0dG9uU3RhdGUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGVCdXR0b25TdGF0ZSgpIHtcclxuICAgIHRoaXMuX2Zvcm1CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIHRoaXMuX2Zvcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRpc2FjdGl2YXRlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICB0aGlzLl9mb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9mb3JtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlc2V0RXJyb3JzKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGZvcm1JbnB1dCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihmb3JtSW5wdXQpO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fY2xvc2VCdXR0b24gPSB0aGlzLl9wb3B1cFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKTtcclxuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlKCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpO1xyXG5cclxuICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQgPT09IGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoY2FsbGJhY2tGdW5jdGlvbiwgcG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9jYWxsYmFja0Z1bmN0aW9uID0gY2FsbGJhY2tGdW5jdGlvbjtcclxuICAgIHRoaXMuX2lucHV0cyA9IEFycmF5LmZyb20odGhpcy5fcG9wdXBTZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIHRoaXMuX2lucHV0c1ZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIHRoaXMuX2lucHV0c1ZhbHVlc1tlbC5pZF0gPSBlbC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0c1ZhbHVlc1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4gdGhpcy5fY2FsbGJhY2tGdW5jdGlvbih0aGlzLl9nZXRJbnB1dFZhbHVlcygpLCBldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IHsgcG9wdXBWaWV3SW1hZ2UsIHBvcHVwVmlld1RpdGxlIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RzLmpzJztcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5leHBvcnQgZGVmYXVsdCAgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKVxyXG4gIH1cclxuICBvcGVuKGxpbmssIG5hbWUpIHtcclxuICAgIHBvcHVwVmlld0ltYWdlLmFsdCA9IG5hbWU7XHJcbiAgICBwb3B1cFZpZXdJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgcG9wdXBWaWV3VGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7bmFtZSBhcyBuYW1lU2VsZWN0b3IsIGluZm8gYXMgaW5mb3JtYXRpb25TZWxlY3Rvcn0gZnJvbSAnLi4vdXRpbHMvY29uc3RzLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHByb2ZpbGVIZWFkZXIsIHByb2ZpbGVJbmZvKSB7XHJcbiAgICB0aGlzLl9wcm9maWxlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlSGVhZGVyKTtcclxuICAgIHRoaXMuX3Byb2ZpbGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlSW5mbyk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIG5hbWVTZWxlY3Rvci52YWx1ZSA9IHRoaXMuX3Byb2ZpbGVIZWFkZXIudGV4dENvbnRlbnQ7XHJcbiAgICBpbmZvcm1hdGlvblNlbGVjdG9yLnZhbHVlID0gdGhpcy5fcHJvZmlsZUluZm8udGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyhpbnB1dHNEYXRhKSB7XHJcbiAgICB0aGlzLl9wcm9maWxlSGVhZGVyLnRleHRDb250ZW50ID0gaW5wdXRzRGF0YVsnbmFtZS1pbnB1dCddO1xyXG4gICAgdGhpcy5fcHJvZmlsZUluZm8udGV4dENvbnRlbnQgPSBpbnB1dHNEYXRhWydkZXNjcmlwdGlvbi1pbnB1dCddO1xyXG4gIH1cclxuXHJcbn0iLCJleHBvcnQgY29uc3Qgb3BlbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZWRpdCcpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcclxuZXhwb3J0IGNvbnN0IGVkaXRGb3JtID0gcG9wdXBFZGl0LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Rm9ybScpO1xyXG5leHBvcnQgY29uc3QgbmFtZSA9IGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYW1lXCJdJyk7XHJcbmV4cG9ydCBjb25zdCBpbmZvID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJyk7XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmQnKTtcclxuZXhwb3J0IGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkRm9ybScpO1xyXG5leHBvcnQgY29uc3Qgb3BlbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3B1cFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldycpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBWaWV3SW1hZ2UgPSBwb3B1cFZpZXcucXVlcnlTZWxlY3RvcignLnBvcHVwX19waG90bycpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBWaWV3VGl0bGUgPSBwb3B1cFZpZXcucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbmZvJyk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIC8vIHtcclxuICAvLyAgIG5hbWU6ICfQkNGA0YXRi9C3JyxcclxuICAvLyAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZydcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIG5hbWU6ICfQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAvLyAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvY2hlbHlhYmluc2stb2JsYXN0LmpwZydcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIG5hbWU6ICfQmNCy0LDQvdC+0LLQvicsXHJcbiAgLy8gICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2l2YW5vdm8uanBnJ1xyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgbmFtZTogJ9Ca0LDQvNGH0LDRgtC60LAnLFxyXG4gIC8vICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnJ1xyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgbmFtZTogJ9Cl0L7Qu9C80L7Qs9C+0YDRgdC60LjQuSDRgNCw0LnQvtC9JyxcclxuICAvLyAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2hvbG1vZ29yc2t5LXJheW9uLmpwZydcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIG5hbWU6ICfQkdCw0LnQutCw0LsnLFxyXG4gIC8vICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9iYWlrYWwuanBnJ1xyXG4gIC8vIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxyXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fYnV0dG9uJyxcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9kaXNhYmxlZCcsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X2Vycm9yJyxcclxuICBlcnJvckNsYXNzOiAncG9wdXBfX2lucHV0LWVycm9yX2FjdGl2ZSdcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCB7IG9wZW5FZGl0LCBvcGVuQWRkLCBpbml0aWFsQ2FyZHMsIHNldHRpbmdzLCBlZGl0Rm9ybSwgYWRkRm9ybSB9IGZyb20gJy4uL3NjcmlwdHMvdXRpbHMvY29uc3RzLmpzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL0NhcmQuanMnO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi9zY3JpcHRzL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcydcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vc2NyaXB0cy9jb21wb25lbnRzL1VzZXJJbmZvLmpzJ1xyXG5cclxuY29uc3QgZWRpdEZvcm1WYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZ3MsIGVkaXRGb3JtKTtcclxuZWRpdEZvcm1WYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGFkZEZvcm1WYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZ3MsIGFkZEZvcm0pO1xyXG5hZGRGb3JtVmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCB1c2VySW5mb3JtYXRpb24gPSBuZXcgVXNlckluZm8oJy5wcm9maWxlX19oZWFkZXInLCAnLnByb2ZpbGVfX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG5jb25zdCBiaWdQaG90byA9IG5ldyBQb3B1cFdpdGhJbWFnZSgnLnZpZXcnKTtcclxuICBiaWdQaG90by5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAvLyBmZXRjaCgnaHR0cHM6Ly9ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC00MS91c2Vycy9jYXJkcycsIHtcclxuICAvLyAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgYXV0aG9yaXphdGlvbjogJzk2ZVNjQm9HMU1Da1hTVEFJS0lmWVhMMnltQlpQMkNlJ1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pXHJcbiAgLy8gLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcblxyXG5cclxuICBmZXRjaCgnaHR0cHM6Ly9ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC00MS91c2Vycy9jYXJkcycsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogJzk2ZVNjQm9HMU1Da1hTVEFJS0lmWVhMMnltQlpQMkNlJ1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIH0pOyBcclxuXHJcbiAgLy8gY2xhc3MgQXBpICB7XHJcblxyXG5cclxuICAvLyAgIGZldGNoKCdodHRwczovL25vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTQxL3VzZXJzL21lJylcclxuICAgIFxyXG4gIC8vIH1cclxuXHJcbmNvbnN0IGFkZEZvcm1DbGFzcyA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIGZ1bmN0aW9uIChpbnB1dHNEYXRhLCBldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaW5wdXRzRGF0YSA9IHsgbmFtZTogaW5wdXRzRGF0YVsncGxhY2UtaW5wdXQnXSwgbGluazogaW5wdXRzRGF0YVsnbGluay1pbnB1dCddIH07XHJcbiAgICBjb25zdCBwaG90b0NhcmQgPSBjcmVhdGVDYXJkKGlucHV0c0RhdGEpO1xyXG4gICAgc2VjdGlvbi5hZGRJdGVtKHBob3RvQ2FyZCk7XHJcbiAgICBhZGRGb3JtQ2xhc3MuY2xvc2UoKTtcclxuICAgIGFkZEZvcm1WYWxpZGF0aW9uLmRpc2FjdGl2YXRlQnV0dG9uU3RhdGUoKTtcclxuICB9LCAnLmFkZCdcclxuKTtcclxuXHJcbmFkZEZvcm1DbGFzcy5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgcHJvZmlsZUZvcm1DbGFzcyA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIGZ1bmN0aW9uIChpbnB1dHNEYXRhLCBldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdXNlckluZm9ybWF0aW9uLnNldFVzZXJJbmZvKGlucHV0c0RhdGEpO1xyXG4gICAgcHJvZmlsZUZvcm1DbGFzcy5jbG9zZSgpO1xyXG4gICAgZWRpdEZvcm1WYWxpZGF0aW9uLmRpc2FjdGl2YXRlQnV0dG9uU3RhdGUoKTtcclxuICB9LCAnLmVkaXQnXHJcbik7XHJcblxyXG5wcm9maWxlRm9ybUNsYXNzLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcclxuICAgIHJlbmRlcmVyOiAoZWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBwaG90b0NhcmQgPSBjcmVhdGVDYXJkKGVsZW1lbnQpO1xyXG4gICAgICBzZWN0aW9uLmFkZEl0ZW0ocGhvdG9DYXJkKTtcclxuICAgIH1cclxuICB9LFxyXG4gICcuZWxlbWVudHNfX2dhbGxlcnknKVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSGVhZGVyKCkge1xyXG4gIGVkaXRGb3JtVmFsaWRhdGlvbi5yZXNldEVycm9ycygpO1xyXG4gIHByb2ZpbGVGb3JtQ2xhc3Mub3BlbigpO1xyXG4gIHVzZXJJbmZvcm1hdGlvbi5nZXRVc2VySW5mbygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYXJkQ2xpY2soKSB7XHJcbiAgYmlnUGhvdG8ub3Blbih0aGlzLl9saW5rLCB0aGlzLl9uYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XHJcbiAgY29uc3QgcGhvdG9DYXJkID0gbmV3IENhcmQoeyBkYXRhIH0sIGhhbmRsZUNhcmRDbGljayk7XHJcbiAgcmV0dXJuIHBob3RvQ2FyZC5nZXRDYXJkKClcclxufVxyXG5cclxub3BlbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBhZGRGb3JtQ2xhc3Mub3BlbigpO1xyXG59KVxyXG5cclxub3BlbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VIZWFkZXIpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgc2VjdGlvbi5yZW5kZXJJdGVtcygpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImNhcmRUZW1wbGF0ZSIsIkNhcmQiLCJoYW5kbGVDYXJkQ2xpY2siLCJkYXRhIiwiX2xpbmsiLCJsaW5rIiwiX25hbWUiLCJuYW1lIiwiX2hhbmRsZUNhcmRDbGljayIsImNhcmQiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImNsb25lTm9kZSIsIl9jYXJkIiwiX2dlbmVyYXRlVGVtcGxhdGUiLCJlbGVtZW50UGhvdG8iLCJfZWxlbWVudExpa2UiLCJlbGVtZW50UmVtb3ZlIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2xpa2VDYXJkIiwiX3JlbW92ZUNhcmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJfZWxlbWVudCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwiX2Zvcm1CdXR0b24iLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9zZXR0aW5ncyIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJmb3JtSW5wdXQiLCJfaXNWYWxpZCIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsImVycm9yIiwiZG9jdW1lbnQiLCJpZCIsImFkZCIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJzb21lIiwiaW5wdXRFbGVtZW50IiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FjdGl2YXRlQnV0dG9uU3RhdGUiLCJhY3RpdmF0ZUJ1dHRvblN0YXRlIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImRpc2FibGVkIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwU2VsZWN0b3IiLCJfY2xvc2VCdXR0b24iLCJjbG9zZSIsImJpbmQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiUG9wdXBXaXRoRm9ybSIsImNhbGxiYWNrRnVuY3Rpb24iLCJfY2FsbGJhY2tGdW5jdGlvbiIsIl9pbnB1dHMiLCJfaW5wdXRzVmFsdWVzIiwiZWwiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwicG9wdXBWaWV3SW1hZ2UiLCJwb3B1cFZpZXdUaXRsZSIsIlBvcHVwV2l0aEltYWdlIiwiYWx0Iiwic3JjIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJlbGVtZW50IiwicHJlcGVuZCIsIm5hbWVTZWxlY3RvciIsImluZm8iLCJpbmZvcm1hdGlvblNlbGVjdG9yIiwiVXNlckluZm8iLCJwcm9maWxlSGVhZGVyIiwicHJvZmlsZUluZm8iLCJfcHJvZmlsZUhlYWRlciIsIl9wcm9maWxlSW5mbyIsImlucHV0c0RhdGEiLCJvcGVuRWRpdCIsInBvcHVwRWRpdCIsImVkaXRGb3JtIiwiYWRkRm9ybSIsIm9wZW5BZGQiLCJwb3B1cFZpZXciLCJpbml0aWFsQ2FyZHMiLCJmb3JtU2VsZWN0b3IiLCJlZGl0Rm9ybVZhbGlkYXRpb24iLCJlbmFibGVWYWxpZGF0aW9uIiwiYWRkRm9ybVZhbGlkYXRpb24iLCJ1c2VySW5mb3JtYXRpb24iLCJiaWdQaG90byIsInNldEV2ZW50TGlzdGVuZXJzIiwiZmV0Y2giLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImFkZEZvcm1DbGFzcyIsImV2dCIsInByZXZlbnREZWZhdWx0IiwicGhvdG9DYXJkIiwiY3JlYXRlQ2FyZCIsInNlY3Rpb24iLCJhZGRJdGVtIiwicHJvZmlsZUZvcm1DbGFzcyIsInNldFVzZXJJbmZvIiwiY2hhbmdlSGVhZGVyIiwicmVzZXRFcnJvcnMiLCJvcGVuIiwiZ2V0VXNlckluZm8iLCJnZXRDYXJkIiwid2luZG93IiwicmVuZGVySXRlbXMiXSwic291cmNlUm9vdCI6IiJ9