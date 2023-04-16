import {myIdUser} from './index.js';

const config = {
  baseUrl: ' https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '0e908f15-de63-432f-9e81-6b943fef01bb',
    'Content-Type': 'application/json'
  }
}

function getResolve(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getInformationAboutUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(getResolve);
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(getResolve);
}

export const setInformationAboutUser = (updatedInfo) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: updatedInfo.name,
      about: updatedInfo.about
    }),
    headers: config.headers
  })
  .then((res) => { return res.json();})
  .catch((err) => {
    console.log(err);
  });
}

export const setInitialCards = (newCard) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    body: JSON.stringify({
      name: newCard.name,
      link: newCard.link
    }),
    headers: config.headers
  })
  .then((res) => { return res.json();})
  .catch((err) => {
    console.log(err);
  });
}

export const setLikes = (card) => {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: card.likes.map((item) => item._id).includes(myIdUser) ? 'DELETE' : 'PUT',
    body: JSON.stringify({
      _id: myIdUser,
    }),
    headers: config.headers,
  })
  .then((res) => { return res.json();})
  .catch((err) => {
    console.log(err);
  });
}

export const deleteCard = (card) => {
  return fetch(`${config.baseUrl}/cards/${card._id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      _id: card._id,
    }),
    headers: config.headers
  })
  .then((res) => { return res.json();})
  .catch((err) => {
    console.log(err);
  });
}


export const setNewAvatar = (updatedAvatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    body: JSON.stringify({
      avatar: updatedAvatar.link,
    }),
    headers: config.headers
  })
  .then((res) => { return res.json();})
  .catch((err) => {
    console.log(err);
  });
}
