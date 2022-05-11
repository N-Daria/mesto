import {profileHeader, profileInfo} from './consts.js'

export default class UserInfo {
  constructor(nameSelector, informationSelector) {
    this._nameSelector = nameSelector;
    this._informationSelector = informationSelector;
  }

  getUserInfo() {
    this._nameSelector.value = profileHeader.textContent;
    this._informationSelector.value = profileInfo.textContent;
  }

  setUserInfo() {
    profileHeader.textContent = this._nameSelector.value;
    profileInfo.textContent = this._informationSelector.value;
  }

}