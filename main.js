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
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
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
bigPhoto.setEventListeners();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1UsT0FBVixFQUFQO0FBQ0Q7O0FBRUR2Qiw4RUFBQSxDQUF5QixPQUF6QixFQUFrQyxZQUFZO0VBQzVDVSxZQUFZLENBQUNXLElBQWI7QUFDRCxDQUZEO0FBSUF6QiwrRUFBQSxDQUEwQixPQUExQixFQUFtQ3VCLFlBQW5DO0FBRUFLLE1BQU0sQ0FBQ2xILGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVk7RUFDMUN5RyxPQUFPLENBQUNVLFdBQVI7QUFDRCxDQUZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL3V0aWxzL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYXJkVGVtcGxhdGUgfSBmcm9tICcuLi91dGlscy9jb25zdHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoeyBkYXRhIH0sIGhhbmRsZUNhcmRDbGljayApIHtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuXHJcbiAgX2dlbmVyYXRlVGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBjYXJkID0gY2FyZFRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19jYXJkJykuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG5cclxuICBnZXRDYXJkKCkge1xyXG4gICAgdGhpcy5fY2FyZCA9IHRoaXMuX2dlbmVyYXRlVGVtcGxhdGUoKTtcclxuICAgIGNvbnN0IGVsZW1lbnRQaG90byA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19waG90bycpO1xyXG4gICAgdGhpcy5fZWxlbWVudExpa2UgPSB0aGlzLl9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZScpO1xyXG4gICAgY29uc3QgZWxlbWVudFJlbW92ZSA9IHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19yZW1vdmUnKTtcclxuXHJcbiAgICBlbGVtZW50UGhvdG8uc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLl9saW5rKTtcclxuICAgIHRoaXMuX2NhcmQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX190ZXh0JykudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG4gICAgZWxlbWVudFBob3RvLnNldEF0dHJpYnV0ZSgnYWx0JywgdGhpcy5fbmFtZSk7XHJcblxyXG4gICAgZWxlbWVudFBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5faGFuZGxlQ2FyZENsaWNrKCkpO1xyXG4gICAgdGhpcy5fZWxlbWVudExpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9saWtlQ2FyZCgpKTtcclxuICAgIGVsZW1lbnRSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9yZW1vdmVDYXJkKCkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9jYXJkO1xyXG4gIH1cclxuXHJcbiAgX2xpa2VDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudExpa2UuY2xhc3NMaXN0LnRvZ2dsZSgnZWxlbWVudHNfX2xpa2VfYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBfcmVtb3ZlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuaW5wdXRTZWxlY3RvcikpO1xyXG4gICAgdGhpcy5fZm9ybUJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGZvcm1JbnB1dCkgPT4ge1xyXG4gICAgICBmb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faXNWYWxpZChmb3JtSW5wdXQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKClcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgX2lzVmFsaWQoZm9ybUlucHV0KSB7XHJcbiAgICBpZiAoZm9ybUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1JbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihmb3JtSW5wdXQsIGZvcm1JbnB1dC52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoZm9ybUlucHV0LCBlcnJvck1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Zm9ybUlucHV0LmlkfS1lcnJvcmApO1xyXG4gICAgZm9ybUlucHV0LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yLnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihmb3JtSW5wdXQpIHtcclxuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Zm9ybUlucHV0LmlkfS1lcnJvcmApO1xyXG4gICAgZm9ybUlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuZXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgdGhpcy5kaXNhY3RpdmF0ZUJ1dHRvblN0YXRlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVCdXR0b25TdGF0ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgdGhpcy5fZm9ybUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fZm9ybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZGlzYWN0aXZhdGVCdXR0b25TdGF0ZSgpIHtcclxuICAgIHRoaXMuX2Zvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIHRoaXMuX2Zvcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRFcnJvcnMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoZm9ybUlucHV0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1JbnB1dCk7XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX3BvcHVwU2VsZWN0b3IucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZScpO1xyXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3B1cFNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX29wZW5lZCcpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UoKSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZSk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3RvcihjYWxsYmFja0Z1bmN0aW9uLCBwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2NhbGxiYWNrRnVuY3Rpb24gPSBjYWxsYmFja0Z1bmN0aW9uO1xyXG4gICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLl9wb3B1cFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5faW5wdXRzVmFsdWVzID0ge307XHJcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgdGhpcy5faW5wdXRzVmFsdWVzW2VsLmlkXSA9IGVsLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzVmFsdWVzXHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB0aGlzLl9jYWxsYmFja0Z1bmN0aW9uKHRoaXMuX2dldElucHV0VmFsdWVzKCksIGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9wb3B1cFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5yZXNldCgpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBwb3B1cFZpZXdJbWFnZSwgcG9wdXBWaWV3VGl0bGUgfSBmcm9tICcuLi91dGlscy9jb25zdHMuanMnO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0ICBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKXtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpXHJcbiAgfVxyXG4gIG9wZW4obGluaywgbmFtZSkge1xyXG4gICAgcG9wdXBWaWV3SW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgIHBvcHVwVmlld0ltYWdlLnNyYyA9IGxpbms7XHJcbiAgICBwb3B1cFZpZXdUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtcygpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtuYW1lIGFzIG5hbWVTZWxlY3RvciwgaW5mbyBhcyBpbmZvcm1hdGlvblNlbGVjdG9yfSBmcm9tICcuLi91dGlscy9jb25zdHMuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IocHJvZmlsZUhlYWRlciwgcHJvZmlsZUluZm8pIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVIZWFkZXIpO1xyXG4gICAgdGhpcy5fcHJvZmlsZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVJbmZvKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgbmFtZVNlbGVjdG9yLnZhbHVlID0gdGhpcy5fcHJvZmlsZUhlYWRlci50ZXh0Q29udGVudDtcclxuICAgIGluZm9ybWF0aW9uU2VsZWN0b3IudmFsdWUgPSB0aGlzLl9wcm9maWxlSW5mby50ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKGlucHV0c0RhdGEpIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVIZWFkZXIudGV4dENvbnRlbnQgPSBpbnB1dHNEYXRhWyduYW1lLWlucHV0J107XHJcbiAgICB0aGlzLl9wcm9maWxlSW5mby50ZXh0Q29udGVudCA9IGlucHV0c0RhdGFbJ2Rlc2NyaXB0aW9uLWlucHV0J107XHJcbiAgfVxyXG5cclxufSIsImV4cG9ydCBjb25zdCBvcGVuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0Jyk7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xyXG5leHBvcnQgY29uc3QgZWRpdEZvcm0gPSBwb3B1cEVkaXQucXVlcnlTZWxlY3RvcignLmVkaXRGb3JtJyk7XHJcbmV4cG9ydCBjb25zdCBuYW1lID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKTtcclxuZXhwb3J0IGNvbnN0IGluZm8gPSBlZGl0Rm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZCcpO1xyXG5leHBvcnQgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRGb3JtJyk7XHJcbmV4cG9ydCBjb25zdCBvcGVuQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2FkZCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVwVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3Jyk7XHJcbmV4cG9ydCBjb25zdCBwb3B1cFZpZXdJbWFnZSA9IHBvcHVwVmlldy5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Bob3RvJyk7XHJcbmV4cG9ydCBjb25zdCBwb3B1cFZpZXdUaXRsZSA9IHBvcHVwVmlldy5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2luZm8nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ9CQ0YDRhdGL0LcnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9hcmtoeXouanBnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ9Cn0LXQu9GP0LHQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9jaGVseWFiaW5zay1vYmxhc3QuanBnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ9CY0LLQsNC90L7QstC+JyxcclxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvaXZhbm92by5qcGcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn0JrQsNC80YfQsNGC0LrQsCcsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2thbWNoYXRrYS5qcGcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAn0KXQvtC70LzQvtCz0L7RgNGB0LrQuNC5INGA0LDQudC+0L0nLFxyXG4gICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9raG9sbW9nb3Jza3ktcmF5b24uanBnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ9CR0LDQudC60LDQuycsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2JhaWthbC5qcGcnXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXHJcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19idXR0b24nLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fYnV0dG9uX2Rpc2FibGVkJyxcclxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfZXJyb3InLFxyXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXQtZXJyb3JfYWN0aXZlJ1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5cclxuaW1wb3J0IHsgb3BlbkVkaXQsIG9wZW5BZGQsIGluaXRpYWxDYXJkcywgc2V0dGluZ3MsIGVkaXRGb3JtLCBhZGRGb3JtIH0gZnJvbSAnLi4vc2NyaXB0cy91dGlscy9jb25zdHMuanMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC5qcyc7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uL3NjcmlwdHMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJ1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9zY3JpcHRzL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tICcuLi9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9zY3JpcHRzL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9zY3JpcHRzL2NvbXBvbmVudHMvVXNlckluZm8uanMnXHJcblxyXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5ncywgZWRpdEZvcm0pO1xyXG5lZGl0Rm9ybVZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuY29uc3QgYWRkRm9ybVZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5ncywgYWRkRm9ybSk7XHJcbmFkZEZvcm1WYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvcm1hdGlvbiA9IG5ldyBVc2VySW5mbygnLnByb2ZpbGVfX2hlYWRlcicsICcucHJvZmlsZV9fZGVzY3JpcHRpb24nKTtcclxuXHJcbmNvbnN0IGJpZ1Bob3RvID0gbmV3IFBvcHVwV2l0aEltYWdlKCcudmlldycpO1xyXG4gIGJpZ1Bob3RvLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBhZGRGb3JtQ2xhc3MgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICBmdW5jdGlvbiAoaW5wdXRzRGF0YSwgZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlucHV0c0RhdGEgPSB7IG5hbWU6IGlucHV0c0RhdGFbJ3BsYWNlLWlucHV0J10sIGxpbms6IGlucHV0c0RhdGFbJ2xpbmstaW5wdXQnXSB9O1xyXG4gICAgY29uc3QgcGhvdG9DYXJkID0gY3JlYXRlQ2FyZChpbnB1dHNEYXRhKTtcclxuICAgIHNlY3Rpb24uYWRkSXRlbShwaG90b0NhcmQpO1xyXG4gICAgYWRkRm9ybUNsYXNzLmNsb3NlKCk7XHJcbiAgICBhZGRGb3JtVmFsaWRhdGlvbi5kaXNhY3RpdmF0ZUJ1dHRvblN0YXRlKCk7XHJcbiAgfSwgJy5hZGQnXHJcbik7XHJcblxyXG5hZGRGb3JtQ2xhc3Muc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHByb2ZpbGVGb3JtQ2xhc3MgPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICBmdW5jdGlvbiAoaW5wdXRzRGF0YSwgZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyhpbnB1dHNEYXRhKTtcclxuICAgIHByb2ZpbGVGb3JtQ2xhc3MuY2xvc2UoKTtcclxuICAgIGVkaXRGb3JtVmFsaWRhdGlvbi5kaXNhY3RpdmF0ZUJ1dHRvblN0YXRlKCk7XHJcbiAgfSwgJy5lZGl0J1xyXG4pO1xyXG5cclxucHJvZmlsZUZvcm1DbGFzcy5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3Qgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgICByZW5kZXJlcjogKGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgcGhvdG9DYXJkID0gY3JlYXRlQ2FyZChlbGVtZW50KTtcclxuICAgICAgc2VjdGlvbi5hZGRJdGVtKHBob3RvQ2FyZCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICAnLmVsZW1lbnRzX19nYWxsZXJ5JylcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUhlYWRlcigpIHtcclxuICBlZGl0Rm9ybVZhbGlkYXRpb24ucmVzZXRFcnJvcnMoKTtcclxuICBwcm9maWxlRm9ybUNsYXNzLm9wZW4oKTtcclxuICB1c2VySW5mb3JtYXRpb24uZ2V0VXNlckluZm8oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2FyZENsaWNrKCkge1xyXG4gIGJpZ1Bob3RvLm9wZW4odGhpcy5fbGluaywgdGhpcy5fbmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoZGF0YSkge1xyXG4gIGNvbnN0IHBob3RvQ2FyZCA9IG5ldyBDYXJkKHsgZGF0YSB9LCBoYW5kbGVDYXJkQ2xpY2spO1xyXG4gIHJldHVybiBwaG90b0NhcmQuZ2V0Q2FyZCgpXHJcbn1cclxuXHJcbm9wZW5BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgYWRkRm9ybUNsYXNzLm9wZW4oKTtcclxufSlcclxuXHJcbm9wZW5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlSGVhZGVyKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gIHNlY3Rpb24ucmVuZGVySXRlbXMoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJjYXJkVGVtcGxhdGUiLCJDYXJkIiwiaGFuZGxlQ2FyZENsaWNrIiwiZGF0YSIsIl9saW5rIiwibGluayIsIl9uYW1lIiwibmFtZSIsIl9oYW5kbGVDYXJkQ2xpY2siLCJjYXJkIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZU5vZGUiLCJfY2FyZCIsIl9nZW5lcmF0ZVRlbXBsYXRlIiwiZWxlbWVudFBob3RvIiwiX2VsZW1lbnRMaWtlIiwiZWxlbWVudFJlbW92ZSIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9saWtlQ2FyZCIsIl9yZW1vdmVDYXJkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiX2VsZW1lbnQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRTZWxlY3RvciIsIl9mb3JtQnV0dG9uIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfc2V0dGluZ3MiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiZm9ybUlucHV0IiwiX2lzVmFsaWQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsImRvY3VtZW50IiwiaWQiLCJhZGQiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwic29tZSIsImlucHV0RWxlbWVudCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJkaXNhY3RpdmF0ZUJ1dHRvblN0YXRlIiwiYWN0aXZhdGVCdXR0b25TdGF0ZSIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJkaXNhYmxlZCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cFNlbGVjdG9yIiwiX2Nsb3NlQnV0dG9uIiwiY2xvc2UiLCJiaW5kIiwiX2hhbmRsZUVzY0Nsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsIlBvcHVwV2l0aEZvcm0iLCJjYWxsYmFja0Z1bmN0aW9uIiwiX2NhbGxiYWNrRnVuY3Rpb24iLCJfaW5wdXRzIiwiX2lucHV0c1ZhbHVlcyIsImVsIiwidmFsdWUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsInBvcHVwVmlld0ltYWdlIiwicG9wdXBWaWV3VGl0bGUiLCJQb3B1cFdpdGhJbWFnZSIsImFsdCIsInNyYyIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJuYW1lU2VsZWN0b3IiLCJpbmZvIiwiaW5mb3JtYXRpb25TZWxlY3RvciIsIlVzZXJJbmZvIiwicHJvZmlsZUhlYWRlciIsInByb2ZpbGVJbmZvIiwiX3Byb2ZpbGVIZWFkZXIiLCJfcHJvZmlsZUluZm8iLCJpbnB1dHNEYXRhIiwib3BlbkVkaXQiLCJwb3B1cEVkaXQiLCJlZGl0Rm9ybSIsImFkZEZvcm0iLCJvcGVuQWRkIiwicG9wdXBWaWV3IiwiaW5pdGlhbENhcmRzIiwiZm9ybVNlbGVjdG9yIiwiZWRpdEZvcm1WYWxpZGF0aW9uIiwiZW5hYmxlVmFsaWRhdGlvbiIsImFkZEZvcm1WYWxpZGF0aW9uIiwidXNlckluZm9ybWF0aW9uIiwiYmlnUGhvdG8iLCJzZXRFdmVudExpc3RlbmVycyIsImFkZEZvcm1DbGFzcyIsImV2dCIsInByZXZlbnREZWZhdWx0IiwicGhvdG9DYXJkIiwiY3JlYXRlQ2FyZCIsInNlY3Rpb24iLCJhZGRJdGVtIiwicHJvZmlsZUZvcm1DbGFzcyIsInNldFVzZXJJbmZvIiwiY2hhbmdlSGVhZGVyIiwicmVzZXRFcnJvcnMiLCJvcGVuIiwiZ2V0VXNlckluZm8iLCJnZXRDYXJkIiwid2luZG93IiwicmVuZGVySXRlbXMiXSwic291cmNlUm9vdCI6IiJ9