import {openModalBox} from './modal.js';

function addInfoPopupImage(link, title) {
  imagePopupImage.src = link;
  imagePopupImage.alt = title;
  titlePopupImage.textContent = title;
}

function createCard( title, link){
  const cardItem = photoCardTemplate.querySelector('.photo-cards__item').cloneNode(true);
  const photoCardsImage = cardItem.querySelector('.photo-cards__image');
  const photoCardsName =cardItem.querySelector('.photo-cards__title');
  const photoLikeButton = cardItem.querySelector('.photo-cards__like-button');
  const photoDeleteButton = cardItem.querySelector('.photo-cards__trash-button');

  photoCardsImage.src = link;
  photoCardsImage.alt = title;
  photoCardsName.textContent = title;

  photoLikeButton.addEventListener("click", function(evt) {evt.target.classList.toggle('photo-cards__like-button_active')});
  photoDeleteButton.addEventListener("click",() => cardItem.remove());
  photoCardsImage.addEventListener("click",() =>(addInfoPopupImage(link, title), openModalBox(popupImage)));

  return cardItem;
}

function addCard(title, link) {
  photoCardsItems.prepend(createCard(title, link));
}

function fillCards() {
  initialCards.forEach( function (item){
    addCard(item.name, item.link)
  })
}

const photoCardsItems = document.querySelector('.photo-cards');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const photoCardTemplate = document.querySelector('#photo-card').content;

const popupImage = document.querySelector('.popup_image');
const imagePopupImage = popupImage.querySelector('.view-window__image');
const titlePopupImage = popupImage.querySelector('.view-window__title');

const popupAddPlace = document.querySelector('.popup_new-place');
const popupAddPlaceContainer =popupAddPlace.querySelector('.popup__container')
const formAddPlaceElement = popupAddPlaceContainer.querySelector('.popup__admin');

export {fillCards, createCard, addCard, popupAddPlace, formAddPlaceElement};
