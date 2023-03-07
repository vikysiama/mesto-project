const EditButton = document.querySelector('.profile__edit-button');
const CloseButton = document.querySelectorAll('.popup__close-button');

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupContainer =popupEditProfile.querySelector('.popup__container')
const formElement = popupContainer.querySelector('.popup__admin');

const nameInput = document.querySelector('.popup__item_el_name-user');
const jobInput = document.querySelector('.popup__item_el_profession');

const userNameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

function OpenModalBox(popup) {
  popup.classList.toggle('popup_opened');
}

function CloseModalBox(popup) {
  popup.classList.toggle('popup_opened');
}

function copyEditProfileData(username, profession) {
  nameInput.value = username.textContent;
  jobInput.value = profession.textContent;
}

function handleFormSubmit(evt, username, profession) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  CloseModalBox(popupEditProfile);
}
formElement.addEventListener('submit',(evt) => handleFormSubmit(evt, userNameProfile, jobProfile));

EditButton.addEventListener('click', () => (OpenModalBox(popupEditProfile), copyEditProfileData(userNameProfile, jobProfile)));
// CloseButton[0].addEventListener('click', ()=> CloseModalBox(popupEditProfile));

// const initialCards = [
//   {
//     name: 'Карачаево-Черкессия',
//     link: 'images/photo_card_Karachaivo-cherkessia.jpg'
//   },
//   {
//     name: 'Домбай',
//     link: 'images/photo_card_Dombay.jpg'
//   },
//   {
//     name: 'Гора Эльбрус',
//     link: 'images/photo_card_mountain_Elbrus.jpg'
//   },
//   {
//     name: 'Домбай',
//     link: 'images/photo_card_Dombay.jpg'
//   },
//   {
//     name: 'Гора Эльбрус',
//     link: 'images/photo_card_mountain_Elbrus.jpg'
//   },
//   {
//     name: 'Карачаевск',
//     link: 'images/photo_card_Karachaivo-cherkessia.jpg'
//   }
// ];

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

function createCard( title, link){
  const cardItem = photoCardTemplate.querySelector('.photo-cards__item').cloneNode(true);
  const photoCardsImage = cardItem.querySelector('.photo-cards__image');
  const photoCardsName =cardItem.querySelector('.photo-cards__title');
  photoCardsImage.src = link;
  photoCardsImage.alt = title;
  photoCardsName.textContent = title;

  return cardItem;
}

const photoCardsItems = document.querySelector('.photo-cards');

function addCard(title, link) {
  photoCardsItems.prepend(createCard(title, link));
}

function fillCards() {
  initialCards.forEach( function (item){
    addCard(item.name, item.link)
  })
}

fillCards();

const popupAddPlace = document.querySelector('.popup_new-place');
const addButton = document.querySelector('.profile__add-button');

addButton.addEventListener('click', () => OpenModalBox(popupAddPlace));
// CloseButton.addEventListener('click', ()=> CloseModalBox(popupAddPlace));

for(let i=0; i < CloseButton.length; i++){
  const popup = CloseButton[i].closest('.popup');
  CloseButton[i].addEventListener('click', ()=> CloseModalBox(popup));
}
