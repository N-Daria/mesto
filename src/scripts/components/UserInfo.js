import { name as nameSelector, info as informationSelector} from '../utils/consts.js'

export default class UserInfo {
  constructor(profileHeader, profileInfo, profileAvatar) {
    this._profileHeader = document.querySelector(profileHeader);
    this._profileInfo = document.querySelector(profileInfo);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    nameSelector.value = this._profileHeader.textContent;
    informationSelector.value = this._profileInfo.textContent;
  }

  setUserInfo(data) {
    this._profileHeader.textContent = data.name;
    this._profileInfo.textContent = data.about;
  }

  setUserPhoto(data) {
    this._profileAvatar.setAttribute('src', data.avatar);
  }

}