function openModalBox(popup) {
  popup.classList.add('popup_opened');
}

function closeModalBox(popup) {
  popup.classList.remove('popup_opened');
}

function copyEditProfileData(username, profession) {
  nameInput.value = username.textContent;
  jobInput.value = profession.textContent;
}

function handleEditFormSubmit(evt, username, profession) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closeModalBox(popupEditProfile);
}

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

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  createCard(titleInput.value, linkInput.value);
  addCard(titleInput.value, linkInput.value);
  closeModalBox(popupAddPlace);
  formAddPlaceElement.reset();
}

const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close-button');

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupContainer =popupEditProfile.querySelector('.popup__container')
const formEditElement = popupContainer.querySelector('.popup__admin');

const nameInput = document.querySelector('.popup__item_el_name-user');
const jobInput = document.querySelector('.popup__item_el_profession');

const userNameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

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
const addButton = document.querySelector('.profile__add-button');

const popupAddPlaceContainer =popupAddPlace.querySelector('.popup__container')
const formAddPlaceElement = popupAddPlaceContainer.querySelector('.popup__admin');

const titleInput = document.querySelector('.popup__item_el_title');
const linkInput = document.querySelector('.popup__item_el_link');



formEditElement.addEventListener('submit',(evt) => handleEditFormSubmit(evt, userNameProfile, jobProfile));
formAddPlaceElement.addEventListener('submit',(evt) => handleNewPlaceFormSubmit(evt));

editButton.addEventListener('click', () => (openModalBox(popupEditProfile), copyEditProfileData(userNameProfile, jobProfile)));
addButton.addEventListener('click', () => openModalBox(popupAddPlace));

for(let i=0; i < closeButton.length; i++){
  const popupItem = closeButton[i].closest('.popup');
  closeButton[i].addEventListener('click', ()=> closeModalBox(popupItem));
}

fillCards();
