export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  get() {
    return fetch(this._url, {
      headers: this._headers
    })
  }
}
