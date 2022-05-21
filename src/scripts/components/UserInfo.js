import {name as nameSelector, info as informationSelector} from '../utils/consts.js'

export default class UserInfo {
  constructor(profileHeader, profileInfo) {
    this._profileHeader = document.querySelector(profileHeader);
    this._profileInfo = document.querySelector(profileInfo);
  }

  getUserInfo() {
    nameSelector.value = this._profileHeader.textContent;
    informationSelector.value = this._profileInfo.textContent;
  }

  setUserInfo(name, description) {
    this._profileHeader.textContent = name;
    this._profileInfo.textContent = description;
  }

}