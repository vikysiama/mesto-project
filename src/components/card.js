import {openModalBox} from './modal.js';
import {deleteCards, addLike} from './index.js';

function createCard(dataCard, myIdUser){
  const cardItem = photoCardTemplate.querySelector('.photo-cards__item').cloneNode(true);
  const photoCardsImage = cardItem.querySelector('.photo-cards__image');
  const photoCardsName =cardItem.querySelector('.photo-cards__title');
  const photoLikeButton = cardItem.querySelector('.photo-cards__like-button');
  const photoDeleteButton = cardItem.querySelector('.photo-cards__trash-button');
  const likesCount = cardItem.querySelector('.photo-cards__count-like');

  cardItem.likes = dataCard.likes.map((item) => item._id);
  cardItem.ownerid = dataCard.owner._id;
  likesCount.textContent = dataCard.likes.length;

  photoCardsImage.src =  dataCard.link;
  photoCardsImage.alt = dataCard.name;
  photoCardsName.textContent =dataCard.name;

  function addInfoPopupImage() {
    imagePopupImage.src = dataCard.link;
    imagePopupImage.alt = dataCard.name;
    titlePopupImage.textContent = dataCard.name;
  }

  function displayLike(card){
    likesCount.textContent = card.likes.length;
    if (card.likes.map((item) => item._id).includes(myIdUser)) {
        photoLikeButton.classList.add('photo-cards__like-button_active');
    } else {
      photoLikeButton.classList.remove('photo-cards__like-button_active');
    }
  }
  displayLike(dataCard);

  function putLikes(card) {
    cardItem.likes = card.likes.map((item) => item._id);
    displayLike(card);
    dataCard=card;
  }

  function handleLikeClick() {
    addLike(dataCard, putLikes);
  }


  if(cardItem.ownerid === myIdUser) {
    photoDeleteButton.addEventListener("click",() => (cardItem.remove(), deleteCards(dataCard)));
  } else {
    photoDeleteButton.remove();
  }

  photoLikeButton.addEventListener("click", () => (handleLikeClick()));
  photoCardsImage.addEventListener("click",() =>(addInfoPopupImage(), openModalBox(popupImage)));

  return cardItem;
}


function addCard(dataCard, myIdUser) {
  photoCardsItems.prepend(createCard(dataCard, myIdUser));
}

const photoCardsItems = document.querySelector('.photo-cards');

const photoCardTemplate = document.querySelector('#photo-card').content;

const popupImage = document.querySelector('.popup_image');
const imagePopupImage = popupImage.querySelector('.view-window__image');
const titlePopupImage = popupImage.querySelector('.view-window__title');


const popupAddPlace = document.querySelector('.popup_new-place');
const popupAddPlaceContainer =popupAddPlace.querySelector('.popup__container')
const formAddPlaceElement = popupAddPlaceContainer.querySelector('.popup__admin');

export {createCard, addCard, popupAddPlace, formAddPlaceElement, photoCardsItems};
