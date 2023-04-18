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

export const setInformationAboutUser = (updatedName, updatedAbout) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: updatedName,
      about: updatedAbout
    }),
    headers: config.headers
  })
    .then(getResolve);
}

export const setInitialCards = (cardTitle, cardLink) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    body: JSON.stringify({
      name: cardTitle,
      link: cardLink
    }),
    headers: config.headers
  })
  .then(getResolve);
}

export const setLikes = (card) => {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: card.likes.map((item) => item._id).includes(myIdUser) ? 'DELETE' : 'PUT',
    body: JSON.stringify({
      _id: myIdUser,
    }),
    headers: config.headers,
  })
  .then(getResolve);
}

export const deleteCard = (card) => {
  return fetch(`${config.baseUrl}/cards/${card._id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      _id: card._id,
    }),
    headers: config.headers
  })
  .then(getResolve);
}


export const setNewAvatar = (updatedLink) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    body: JSON.stringify({
      avatar: updatedLink,
    }),
    headers: config.headers
  })
  .then(getResolve);
}
