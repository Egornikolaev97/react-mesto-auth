class Api {
    constructor({
        url,
        headers
    }) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers,
        })
        .then(this._checkResponse);
    }

    editUserInfo(data) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            }),
        })
        .then(this._checkResponse);
    }

    getInitialCards() {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: this._headers,
        })
        .then(this._checkResponse);
    }

    addCard(data) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
        .then(this._checkResponse);
    }

    deleteCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResponse);
    }

    toggleLikeStatus(id, isLiked) {
        if(isLiked) {
            return fetch(`${this._url}cards/${id}/likes`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(this._checkResponse);
        } else {
            return fetch(`${this._url}cards/${id}/likes`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._checkResponse);
        }
    }

    editAvatar(data) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar})
        })
        .then(this._checkResponse);
    }
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-42/',
    headers: {
      authorization: '821199ee-869b-4d13-a4fe-684f34f13dac',
      'Content-Type': 'application/json',
    },
  });

export default api;