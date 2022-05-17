import {name as nameSelector, info as informationSelector} from '../utils/consts.js'

export default class UserInfo {
  constructor(profileHeader, profileInfo) {
    this._profileHeader = profileHeader;
    this._profileInfo = profileInfo;
  }

  getUserInfo() {
    nameSelector.value = this._profileHeader.textContent;
    informationSelector.value = this._profileInfo.textContent;
  }

  setUserInfo(inputsData) {
    this._profileHeader.textContent = inputsData['name-input'];
    this._profileInfo.textContent = inputsData['description-input'];
  }

}