export default class Api {
  constructor(config) {
    this._url = config.url;
    this._authorization = config.authorization;
  }

  get() {
    return fetch(this._url, {
      headers: {
        authorization: this._authorization
      }
    })
  }

  patchUserInfo(data) {
    fetch(this._url, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
  }

  postNewCard(data) {
    return fetch(this._url, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }



}